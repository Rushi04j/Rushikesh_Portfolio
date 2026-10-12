"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
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
  const [mailtoUrl, setMailtoUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

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
        setStatusMessage(data.error);
        if (data.mailtoUrl) setMailtoUrl(data.mailtoUrl);
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please reach out via email.");
        if (data.mailtoUrl) setMailtoUrl(data.mailtoUrl);
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error occurred. Please click below to email directly.");
      const fallbackUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `[${formData.category}] ${formData.subject || "Portfolio Contact"}`
      )}&body=${encodeURIComponent(
        `Hi Rushikesh,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      setMailtoUrl(fallbackUrl);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Conversation First Invitation & Details */}
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
                  href={`mailto:${siteConfig.email}`}
                  className="text-base sm:text-lg font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary hover:text-brand-accent transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Social / External Links (Strictly configured only) */}
            <div className="pt-2 flex flex-wrap gap-3">
              {siteConfig.linkedinUrl && siteConfig.linkedinUrl.trim() !== "" && (
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary hover:text-brand-accent hover:border-brand-accent transition-colors"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary hover:text-brand-accent hover:border-brand-accent transition-colors"
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
              <h3 className="text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1">
                Send Me a Message
              </h3>
              <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mb-6">
                Fill in the details below. I review every note personally and reply promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from real users, lures spam bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                    >
                      Your Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                    >
                      Your Email <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                    >
                      Conversation Category
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    >
                      <option value="Technology Discussion">Technology Discussion</option>
                      <option value="Career Opportunity">Career Opportunity / Pre-Sales Role</option>
                      <option value="Collaboration">Collaboration / Project Idea</option>
                      <option value="Other">Other / General Hello</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Discussing Test Automation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5"
                  >
                    Message <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about what you're working on, an idea you want to explore, or what brought you here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary placeholder-brand-textMuted text-sm focus:outline-none focus:border-brand-accent transition-colors resize-y"
                  />
                </div>

                {/* Status Banners */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Message Delivered!</p>
                      <p className="text-xs mt-0.5">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {(status === "error" || status === "unconfigured") && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-300 text-xs sm:text-sm space-y-2 animate-fadeIn">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">
                          {status === "unconfigured" ? "Email Service Notice" : "Submission Notice"}
                        </p>
                        <p className="text-xs mt-0.5">{statusMessage}</p>
                      </div>
                    </div>
                    {mailtoUrl && (
                      <div className="pt-2">
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-[#10131A] font-bold text-xs hover:bg-amber-400 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Click to Send via Mail App</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-[#10131A] font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#10131A] border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
