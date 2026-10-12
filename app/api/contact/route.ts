import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

// Simple in-memory rate limiting map for basic spam protection
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 4;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

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

function sanitizeText(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a moment before trying again or send an email directly.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message, category, honeypot } = body;

    // Honeypot check for automated bots
    if (honeypot && honeypot.length > 0) {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a meaningful message (at least 10 characters)." },
        { status: 400 }
      );
    }

    const safeName = sanitizeText(name.trim());
    const safeEmail = sanitizeText(email.trim());
    const safeSubject = subject ? sanitizeText(subject.trim()) : "New Portfolio Contact";
    const safeCategory = category ? sanitizeText(category.trim()) : "General Inquiry";
    const safeMessage = sanitizeText(message.trim()).replace(/\n/g, "<br/>");

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Rushikesh Portfolio <onboarding@resend.dev>";

    // If Resend API key is not configured, inform the user honestly and provide mailto fallback
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          unconfigured: true,
          error:
            "The email delivery service is currently not configured with an API key. Please click below to send your message directly via email client to " +
            toEmail,
          mailtoUrl: `mailto:${toEmail}?subject=${encodeURIComponent(
            `[${safeCategory}] ${safeSubject}`
          )}&body=${encodeURIComponent(`Hi Rushikesh,\n\n${message.trim()}\n\nFrom: ${name.trim()} (${email.trim()})`)}`,
        },
        { status: 503 }
      );
    }

    // Call Resend transactional service
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: safeEmail,
      subject: `[Portfolio Inquiry - ${safeCategory}] ${safeSubject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #55D6BE; padding-bottom: 8px;">New Message from Portfolio Website</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 120px;">Sender Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Sender Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${safeEmail}" style="color: #0d9488;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Category:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeCategory}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeSubject}</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; border-left: 4px solid #55D6BE; padding: 16px; border-radius: 4px; margin-top: 16px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #334155;">${safeMessage}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; text-align: center;">
            Sent securely via Rushikesh Joshi's Portfolio Contact Form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        {
          success: false,
          error:
            "Could not deliver email through the email provider. Please contact directly at " +
            toEmail,
          mailtoUrl: `mailto:${toEmail}?subject=${encodeURIComponent(
            `[${safeCategory}] ${safeSubject}`
          )}&body=${encodeURIComponent(`Hi Rushikesh,\n\n${message.trim()}\n\nFrom: ${name.trim()} (${email.trim()})`)}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Your message has been sent successfully. Thank you for reaching out!",
    });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please reach out directly to " + siteConfig.email,
      },
      { status: 500 }
    );
  }
}
