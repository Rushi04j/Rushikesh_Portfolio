"use client";

import React, { useState, useId } from "react";
import { siteConfig } from "@/config/site";
import {
  TARGET_RECIPIENT_EMAIL,
  ALLOWED_CATEGORIES,
  buildMailtoFallbackUrl,
  isValidEmail,
} from "@/lib/contact";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  ExternalLink,
  Loader2,
  RotateCcw,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "Technology Discussion",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const categoryId = useId();
  const subjectId = useId();
  const messageId = useId();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_RECIPIENT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Dynamically compute the mailto link from current form values
  const currentMailtoUrl = buildMailtoFallbackUrl(formData);

  const validateClient = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateClient()) {
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields before submitting.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");
    setClientErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Thank you! Your message has been sent successfully.");
        // Clear form only on confirmed server success
        setFormData({
          name: "",
          email: "",
          subject: "",
          category: "Technology Discussion",
          message: "",
          honeypot: "",
        });
      } else if (data.unconfigured) {
        setStatus("unconfigured");
        setStatusMessage(
          data.error ||
            `The email delivery service is awaiting server configuration. Please use the button below to send your message directly via your email client to ${TARGET_RECIPIENT_EMAIL}.`
        );
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again or use the email client fallback.");
        if (data.fieldErrors) {
          setClientErrors(data.fieldErrors);
        }
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network connection error occurred. Your entered details have been preserved. You can retry or open your email app directly below."
      );
    }
  };

  const handleResetForm = () => {
    setStatus("idle");
    setStatusMessage("");
    setClientErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Conversation Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start A Conversation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary leading-tight">
              Have a problem to solve or an idea to discuss?
            </h2>

            <p className="text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
              I&apos;m always interested in meaningful conversations about technology, business, products, and problem-solving. If you&apos;d like to discuss an opportunity, share an idea, or simply connect, feel free to reach out.
            </p>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-brand-textMuted dark:text-brand-textMuted text-light-textMuted uppercase">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-accent hover:underline font-medium"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href={`mailto:${TARGET_RECIPIENT_EMAIL}`}
                  className="text-base sm:text-lg font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary hover:text-brand-accent transition-colors break-all"
                >
                  {TARGET_RECIPIENT_EMAIL}
                </a>
              </div>
            </div>

            {/* Social / External Links */}
            <div className="pt-2 flex flex-wrap gap-3">
              {siteConfig.linkedinUrl && siteConfig.linkedinUrl.trim() !== "" && (
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary hover:text-brand-accent hover:border-brand-accent transition-colors shadow-sm"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {siteConfig.githubUrl && siteConfig.githubUrl.trim() !== "" && (
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary hover:text-brand-accent hover:border-brand-accent transition-colors shadow-sm"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <p className="text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted italic pt-2">
              &ldquo;I prefer understanding a problem before suggesting a solution.&rdquo;
            </p>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/90 dark:bg-brand-surface/90 bg-white shadow-xl dark:shadow-card-dark">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  Send Me a Message
                </h3>
                {status !== "idle" && (
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1 text-xs text-brand-textMuted hover:text-brand-accent transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mb-6">
                Fill in the details below. I review every note personally and reply promptly.
              </p>

              {/* Success Notification View */}
              {status === "success" ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 space-y-4 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-emerald-400" />
                    <div className="space-y-1">
                      <p className="text-base font-bold text-emerald-400">Message Delivered Successfully</p>
                      <p className="text-xs sm:text-sm text-emerald-300/90 leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#10131A] font-bold text-xs transition-colors"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Anti-spam honeypot field (hidden from assistive tech and visual users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-hp">Do not fill this field</label>
                    <input
                      id="contact-hp"
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={nameId}
                        className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                      >
                        Your Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id={nameId}
                        type="text"
                        required
                        disabled={status === "loading"}
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (clientErrors.name) setClientErrors({ ...clientErrors, name: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none transition-colors ${
                          clientErrors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-brand-border dark:border-brand-border border-light-border focus:border-brand-accent"
                        }`}
                        aria-invalid={Boolean(clientErrors.name)}
                        aria-describedby={clientErrors.name ? `${nameId}-error` : undefined}
                      />
                      {clientErrors.name && (
                        <p id={`${nameId}-error`} className="text-[11px] text-red-400 mt-1">
                          {clientErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor={emailId}
                        className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                      >
                        Your Email <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        required
                        disabled={status === "loading"}
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (clientErrors.email) setClientErrors({ ...clientErrors, email: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none transition-colors ${
                          clientErrors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-brand-border dark:border-brand-border border-light-border focus:border-brand-accent"
                        }`}
                        aria-invalid={Boolean(clientErrors.email)}
                        aria-describedby={clientErrors.email ? `${emailId}-error` : undefined}
                      />
                      {clientErrors.email && (
                        <p id={`${emailId}-error`} className="text-[11px] text-red-400 mt-1">
                          {clientErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Category & Subject Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor={categoryId}
                        className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                      >
                        Conversation Category
                      </label>
                      <select
                        id={categoryId}
                        disabled={status === "loading"}
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      >
                        {ALLOWED_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={subjectId}
                        className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                      >
                        Subject (Optional)
                      </label>
                      <input
                        id={subjectId}
                        type="text"
                        disabled={status === "loading"}
                        placeholder="Brief summary of your topic"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor={messageId}
                      className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                    >
                      Message <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      id={messageId}
                      required
                      rows={4}
                      disabled={status === "loading"}
                      placeholder="Share what you are working on, an idea to discuss, or how we might connect..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (clientErrors.message) setClientErrors({ ...clientErrors, message: "" });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none transition-colors resize-y ${
                        clientErrors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-brand-border dark:border-brand-border border-light-border focus:border-brand-accent"
                      }`}
                      aria-invalid={Boolean(clientErrors.message)}
                      aria-describedby={clientErrors.message ? `${messageId}-error` : undefined}
                    />
                    {clientErrors.message && (
                      <p id={`${messageId}-error`} className="text-[11px] text-red-400 mt-1">
                        {clientErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Status Banner: Unconfigured State */}
                  {status === "unconfigured" && (
                    <div
                      className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-300 text-xs sm:text-sm space-y-3 animate-fadeIn"
                      role="alert"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">Email Service Setup Notice</p>
                          <p className="text-xs mt-1 leading-relaxed text-amber-500/90 dark:text-amber-300/90">
                            {statusMessage}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-black/20 border border-amber-500/20 text-xs space-y-1">
                        <p className="font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                          Your message draft has been formatted with your entered details:
                        </p>
                        <p className="text-[11px] text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
                          Click below to launch your email client directly. All your typed details (name, email, subject, message) will be pre-filled:
                        </p>
                      </div>

                      <div>
                        <a
                          href={currentMailtoUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#10131A] font-bold text-xs transition-colors shadow-sm"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open Email App (to: {TARGET_RECIPIENT_EMAIL})</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Status Banner: Error State */}
                  {status === "error" && (
                    <div
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm space-y-3 animate-fadeIn"
                      role="alert"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                        <div>
                          <p className="font-bold text-red-400">Submission Notice</p>
                          <p className="text-xs mt-1 leading-relaxed text-red-300/90">{statusMessage}</p>
                        </div>
                      </div>

                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        <a
                          href={currentMailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-semibold transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App Instead</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border text-xs text-brand-textSecondary hover:text-brand-textPrimary transition-colors"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Dismiss</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Submission Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-[#10131A] font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-95"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#10131A]" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={currentMailtoUrl}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-brand-border/60 hover:border-brand-border text-xs text-brand-textMuted hover:text-brand-accent transition-colors"
                      title="Prefills your default mail client with current form values"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Prefer sending via your mail client?</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
