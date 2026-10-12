export const TARGET_RECIPIENT_EMAIL = "rj751054@gmail.com";

export const ALLOWED_CATEGORIES = [
  "Technology Discussion",
  "Career Opportunity",
  "Collaboration",
  "Other",
] as const;

export type ConversationCategory = (typeof ALLOWED_CATEGORIES)[number];

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  category?: string;
  message: string;
  honeypot?: string;
}

export interface ValidatedContactData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  isSpam?: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
  data?: ValidatedContactData;
}

/**
 * Strips carriage returns and newlines to prevent email header injection
 */
export function sanitizeHeader(input: string): string {
  return input.replace(/[\r\n\t]/g, " ").trim();
}

/**
 * Escapes HTML entities to prevent XSS / HTML injection in rendered emails
 */
export function sanitizeForHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strictly validates an email address against standard RFC patterns
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  // RFC 5322 standard email pattern without newlines
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates and sanitizes contact form input fields on the server.
 */
export function validateContactInput(input: Partial<ContactFormData>): ValidationResult {
  if (!input || typeof input !== "object") {
    return { isValid: false, error: "Invalid form payload." };
  }

  // 1. Honeypot check: If the hidden honeypot is populated, silently flag as spam
  if (input.honeypot && typeof input.honeypot === "string" && input.honeypot.trim().length > 0) {
    return { isValid: false, isSpam: true, error: "Spam detected." };
  }

  const fieldErrors: Record<string, string> = {};

  // 2. Validate Name
  const rawName = typeof input.name === "string" ? input.name.trim() : "";
  if (!rawName) {
    fieldErrors.name = "Please enter your name.";
  } else if (rawName.length < 2) {
    fieldErrors.name = "Name must be at least 2 characters long.";
  } else if (rawName.length > 100) {
    fieldErrors.name = "Name must not exceed 100 characters.";
  }

  // 3. Validate Email
  const rawEmail = typeof input.email === "string" ? input.email.trim() : "";
  if (!rawEmail) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!isValidEmail(rawEmail)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  // 4. Validate Message
  const rawMessage = typeof input.message === "string" ? input.message.trim() : "";
  if (!rawMessage) {
    fieldErrors.message = "Please enter a message.";
  } else if (rawMessage.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters long.";
  } else if (rawMessage.length > 5000) {
    fieldErrors.message = "Message must not exceed 5000 characters.";
  }

  // 5. Category (default fallback if invalid or omitted)
  let rawCategory = typeof input.category === "string" ? input.category.trim() : "";
  if (!ALLOWED_CATEGORIES.includes(rawCategory as ConversationCategory)) {
    rawCategory = "Technology Discussion";
  }

  // 6. Subject (optional, defaults cleanly without dummy content)
  let rawSubject = typeof input.subject === "string" ? input.subject.trim() : "";
  if (rawSubject.length > 200) {
    rawSubject = rawSubject.slice(0, 200);
  }
  if (!rawSubject) {
    rawSubject = "Portfolio Contact";
  }

  if (Object.keys(fieldErrors).length > 0) {
    const firstErrorMessage = Object.values(fieldErrors)[0];
    return {
      isValid: false,
      error: firstErrorMessage,
      fieldErrors,
    };
  }

  // Sanitize headers to guarantee no CRLF injection
  const sanitizedName = sanitizeHeader(rawName);
  const sanitizedEmail = sanitizeHeader(rawEmail);
  const sanitizedSubject = sanitizeHeader(rawSubject);
  const sanitizedCategory = sanitizeHeader(rawCategory);

  return {
    isValid: true,
    data: {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      category: sanitizedCategory,
      message: rawMessage,
    },
  };
}

/**
 * Builds a dynamic, safely encoded mailto: URL using the visitor's ACTUAL inputs.
 * Strictly sends to rj751054@gmail.com without any sample or hardcoded test content.
 */
export function buildMailtoFallbackUrl(data: {
  name?: string;
  email?: string;
  category?: string;
  subject?: string;
  message?: string;
}): string {
  const recipient = TARGET_RECIPIENT_EMAIL;

  const category = (data.category?.trim() || "Technology Discussion");
  const userSubject = data.subject?.trim();
  const userName = data.name?.trim();
  const userEmail = data.email?.trim();
  const userMessage = data.message?.trim();

  // Subject line: uses actual user subject or descriptive title
  const finalSubject = userSubject
    ? `[${category}] ${userSubject}`
    : `[${category}] Portfolio Inquiry from ${userName || "Website Visitor"}`;

  // Body content: strictly dynamically constructed from visitor's real input
  const bodySections: string[] = [];

  bodySections.push(`Hi Rushikesh,\n`);

  if (userMessage) {
    bodySections.push(`${userMessage}\n`);
  } else {
    bodySections.push(`[Please write your message here]\n`);
  }

  bodySections.push(`---\nSender Details:`);
  bodySections.push(`Name: ${userName || "Not provided"}`);
  bodySections.push(`Email: ${userEmail || "Not provided"}`);
  bodySections.push(`Category: ${category}`);

  const finalBody = bodySections.join("\n");

  const encodedSubject = encodeURIComponent(finalSubject);
  const encodedBody = encodeURIComponent(finalBody);

  return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
}

/**
 * Builds the clean, styled HTML email template delivered to Rushikesh's inbox.
 */
export function buildEmailHtml(
  data: ValidatedContactData,
  metadata: { ip: string; userAgent: string; timestamp: string }
): string {
  const safeName = sanitizeForHtml(data.name);
  const safeEmail = sanitizeForHtml(data.email);
  const safeSubject = sanitizeForHtml(data.subject);
  const safeCategory = sanitizeForHtml(data.category);
  const safeMessage = sanitizeForHtml(data.message).replace(/\n/g, "<br/>");
  const safeIp = sanitizeForHtml(metadata.ip);
  const safeUserAgent = sanitizeForHtml(metadata.userAgent);
  const safeTimestamp = sanitizeForHtml(metadata.timestamp);

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
      <div style="border-bottom: 2px solid #55D6BE; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="color: #0f172a; margin: 0 0 4px 0; font-size: 20px; font-weight: 700;">New Portfolio Contact Message</h2>
        <p style="color: #64748b; margin: 0; font-size: 13px;">Received via <a href="https://rushikesh-portfolio-two-ebon.vercel.app" style="color: #0d9488; text-decoration: none;">rushikesh-portfolio</a></p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 130px;">From:</td>
          <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${safeName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
          <td style="padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${safeEmail}</a> (Click reply to respond)</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Category:</td>
          <td style="padding: 10px 0; color: #0f172a;">
            <span style="display: inline-block; padding: 3px 8px; font-size: 12px; font-weight: 600; background-color: #f0fdfa; color: #0f766e; border: 1px solid #ccfbf1; border-radius: 6px;">
              ${safeCategory}
            </span>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Subject:</td>
          <td style="padding: 10px 0; color: #0f172a;">${safeSubject}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Submitted At:</td>
          <td style="padding: 10px 0; color: #475569; font-size: 13px;">${safeTimestamp}</td>
        </tr>
      </table>

      <div style="margin-top: 16px;">
        <h3 style="color: #334155; font-size: 14px; font-weight: 600; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h3>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #55D6BE; padding: 18px; border-radius: 6px; line-height: 1.6; color: #1e293b; font-size: 15px; white-space: pre-wrap;">
${safeMessage}
        </div>
      </div>

      <div style="margin-top: 28px; padding-top: 14px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
        <span>IP: ${safeIp}</span>
        <span>Recipient: ${TARGET_RECIPIENT_EMAIL}</span>
      </div>
    </div>
  `;
}
