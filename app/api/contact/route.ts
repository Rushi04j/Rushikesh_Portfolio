import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  TARGET_RECIPIENT_EMAIL,
  validateContactInput,
  buildMailtoFallbackUrl,
  buildEmailHtml,
} from "@/lib/contact";

// In-memory rate limiting map (IP -> { count, firstSeen })
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((value, key) => {
      if (now - value.firstSeen > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    });
  }

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return false;
  }

  if (now - record.firstSeen > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // 1. Rate Limiting Check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a moment before trying again or send an email directly.",
        },
        { status: 429 }
      );
    }

    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    // 2. Validate and Sanitize Input
    const validation = validateContactInput(body);

    // Honeypot spam trap: return benign success without executing email delivery
    if (validation.isSpam) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    if (!validation.isValid || !validation.data) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error || "Please check the form fields.",
          fieldErrors: validation.fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, category, message } = validation.data;

    // 3. Email Provider Credentials & Configuration
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || TARGET_RECIPIENT_EMAIL;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      process.env.CONTACT_FROM_EMAIL ||
      "Rushikesh Portfolio <onboarding@resend.dev>";

    // Generate dynamic mailto fallback based strictly on the user's real input
    const dynamicMailtoUrl = buildMailtoFallbackUrl({
      name,
      email,
      category,
      subject,
      message,
    });

    // 4. Safe Configuration Check
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          unconfigured: true,
          error: `The email delivery service is currently not configured with an API key. Please click below to send your message directly via email client to ${toEmail}.`,
          mailtoUrl: dynamicMailtoUrl,
        },
        { status: 503 }
      );
    }

    // 5. Send via Resend
    const resend = new Resend(apiKey);
    const timestamp = new Date().toISOString();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry - ${category}] ${subject}`,
      html: buildEmailHtml(validation.data, {
        ip,
        userAgent,
        timestamp,
      }),
    });

    if (error) {
      console.error("Resend API delivery error:", error);
      return NextResponse.json(
        {
          success: false,
          error: error.message || `Could not deliver email through the provider. Please send directly to ${toEmail}.`,
          mailtoUrl: dynamicMailtoUrl,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Your message has been sent successfully. Thank you for reaching out!",
    });
  } catch (err: any) {
    console.error("Contact API unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please reach out directly via email to " + TARGET_RECIPIENT_EMAIL,
        mailtoUrl: buildMailtoFallbackUrl({}),
      },
      { status: 500 }
    );
  }
}
