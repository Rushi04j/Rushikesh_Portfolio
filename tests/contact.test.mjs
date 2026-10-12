import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  TARGET_RECIPIENT_EMAIL,
  isValidEmail,
  sanitizeHeader,
  sanitizeForHtml,
  validateContactInput,
  buildMailtoFallbackUrl,
} from "../lib/contact.ts";

describe("Contact Form & Email Delivery Validation", () => {
  test("TARGET_RECIPIENT_EMAIL is strictly rj751054@gmail.com", () => {
    assert.strictEqual(TARGET_RECIPIENT_EMAIL, "rj751054@gmail.com");
    assert.notStrictEqual(TARGET_RECIPIENT_EMAIL, "rushi04j@gmail.com");
  });

  describe("isValidEmail()", () => {
    test("accepts valid email addresses", () => {
      assert.strictEqual(isValidEmail("visitor@example.com"), true);
      assert.strictEqual(isValidEmail("sarah.connor@cyberdyne.org"), true);
      assert.strictEqual(isValidEmail("test+tag@sub.domain.co.uk"), true);
    });

    test("rejects malformed email addresses", () => {
      assert.strictEqual(isValidEmail(""), false);
      assert.strictEqual(isValidEmail("invalid"), false);
      assert.strictEqual(isValidEmail("no-at-sign.com"), false);
      assert.strictEqual(isValidEmail("@no-user.com"), false);
      assert.strictEqual(isValidEmail("spaces in@email.com"), false);
      assert.strictEqual(isValidEmail("user@.com"), false);
    });
  });

  describe("sanitizeHeader() anti-header injection", () => {
    test("strips newlines, carriage returns, and tabs", () => {
      const malicious = "Normal Subject\r\nBcc: victim@example.com\n\tSubject: Injected";
      const sanitized = sanitizeHeader(malicious);
      assert.strictEqual(sanitized.includes("\r"), false);
      assert.strictEqual(sanitized.includes("\n"), false);
      assert.strictEqual(sanitized.includes("\t"), false);
    });
  });

  describe("sanitizeForHtml()", () => {
    test("escapes dangerous HTML characters to prevent XSS in email client", () => {
      const input = '<script>alert("hack")</script>&foo=\'bar\'';
      const output = sanitizeForHtml(input);
      assert.strictEqual(output.includes("<script>"), false);
      assert.strictEqual(output.includes("&lt;script&gt;"), true);
      assert.strictEqual(output.includes("&quot;hack&quot;"), true);
      assert.strictEqual(output.includes("&#039;bar&#039;"), true);
      assert.strictEqual(output.includes("&amp;foo="), true);
    });
  });

  describe("validateContactInput()", () => {
    test("rejects empty required fields", () => {
      const result = validateContactInput({});
      assert.strictEqual(result.isValid, false);
      assert.ok(result.error);
    });

    test("rejects short name (< 2 characters)", () => {
      const result = validateContactInput({
        name: "A",
        email: "test@example.com",
        message: "This is a valid long message.",
      });
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || "", /name/i);
    });

    test("rejects invalid email format", () => {
      const result = validateContactInput({
        name: "Alex Morgan",
        email: "not-an-email",
        message: "This is a valid long message.",
      });
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || "", /email/i);
    });

    test("rejects short message (< 10 characters)", () => {
      const result = validateContactInput({
        name: "Alex Morgan",
        email: "alex@example.com",
        message: "Too short",
      });
      assert.strictEqual(result.isValid, false);
      assert.match(result.error || "", /message/i);
    });

    test("flags honeypot submission as spam without errors", () => {
      const result = validateContactInput({
        name: "Spam Bot",
        email: "bot@spammer.com",
        message: "Buy cheap crypto right now at our website",
        honeypot: "https://spamsite.com",
      });
      assert.strictEqual(result.isValid, false);
      assert.strictEqual(result.isSpam, true);
    });

    test("accepts valid contact submission and sanitizes header fields", () => {
      const result = validateContactInput({
        name: "Sarah Connor\r\n",
        email: "sarah@resistance.org",
        category: "Career Opportunity",
        subject: "Pre-Sales Role Discussion\n",
        message: "We are expanding our solution engineering team and would love to speak.",
      });

      assert.strictEqual(result.isValid, true);
      assert.ok(result.data);
      assert.strictEqual(result.data.name, "Sarah Connor");
      assert.strictEqual(result.data.email, "sarah@resistance.org");
      assert.strictEqual(result.data.category, "Career Opportunity");
      assert.strictEqual(result.data.subject, "Pre-Sales Role Discussion");
      assert.strictEqual(result.data.message.includes("solution engineering"), true);
    });
  });

  describe("buildMailtoFallbackUrl()", () => {
    test("targets rj751054@gmail.com exclusively and encodes parameters safely", () => {
      const url = buildMailtoFallbackUrl({
        name: "Alex Chen",
        email: "alex.chen@enterprise.com",
        category: "Technology Discussion",
        subject: "Playwright Comparison",
        message: "I saw your article on Playwright trade-offs and wanted to discuss.",
      });

      assert.strictEqual(url.startsWith("mailto:rj751054@gmail.com?"), true);
      assert.strictEqual(url.includes("rushi04j@gmail.com"), false);
      assert.strictEqual(url.includes("Automation%20discussion"), false);

      // Verify URL decoding matches input
      const urlObj = new URL(url);
      assert.strictEqual(urlObj.pathname, "rj751054@gmail.com");

      const searchParams = new URLSearchParams(urlObj.search);
      const subject = searchParams.get("subject") || "";
      const body = searchParams.get("body") || "";

      assert.strictEqual(subject, "[Technology Discussion] Playwright Comparison");
      assert.ok(body.includes("Alex Chen"));
      assert.ok(body.includes("alex.chen@enterprise.com"));
      assert.ok(body.includes("I saw your article on Playwright trade-offs and wanted to discuss."));
    });

    test("handles empty or partial form fields gracefully without hardcoded sample data", () => {
      const url = buildMailtoFallbackUrl({});
      assert.strictEqual(url.startsWith("mailto:rj751054@gmail.com?"), true);
      assert.strictEqual(url.includes("rushi04j@gmail.com"), false);
      assert.strictEqual(url.includes("Sarah"), false);
      assert.strictEqual(url.includes("Connor"), false);
      assert.strictEqual(url.includes("Playwright"), false);
    });
  });
});
