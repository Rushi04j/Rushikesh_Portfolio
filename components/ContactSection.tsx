"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  MapPin,
  Building2,
  Github,
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary leading-tight">
            Let&apos;s Connect
          </h2>

          <p className="text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            I&apos;m always open to discussing solution engineering, SaaS test automation, customer challenges, or exchanging ideas. The simplest way to reach me is directly via email or LinkedIn.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Direct Email */}
          <div className="p-7 sm:p-8 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/90 dark:bg-brand-surface/90 bg-white shadow-xl dark:shadow-card-dark flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded-full bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textMuted dark:text-brand-textMuted text-light-textMuted border border-brand-border/60">
                  Direct Inbox
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  Email
                </h3>
                <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mt-1">
                  Drop me a note directly. I read every email and reply promptly.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-brand-border/80 dark:border-brand-border/80 border-light-border bg-brand-surfaceElevated/60 dark:bg-brand-surfaceElevated/60 bg-light-surfaceElevated/60">
                <p className="text-sm sm:text-base font-mono font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary break-all select-all">
                  {siteConfig.email}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-[#10131A] font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#10131A]" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-brand-border hover:border-brand-accent text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary hover:text-brand-accent text-xs sm:text-sm font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail App</span>
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn Profile */}
          <div className="p-7 sm:p-8 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/90 dark:bg-brand-surface/90 bg-white shadow-xl dark:shadow-card-dark flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded-full bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textMuted dark:text-brand-textMuted text-light-textMuted border border-brand-border/60">
                  Professional Network
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  LinkedIn
                </h3>
                <p className="text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mt-1">
                  Connect with me, view my background, or send a direct message.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-brand-border/80 dark:border-brand-border/80 border-light-border bg-brand-surfaceElevated/60 dark:bg-brand-surfaceElevated/60 bg-light-surfaceElevated/60">
                <p className="text-sm sm:text-base font-mono font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary break-all">
                  linkedin.com/in/rushikesh-joshi2004
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Details & Philosophy Footer */}
        <div className="mt-10 p-6 rounded-2xl border border-brand-border/60 dark:border-brand-border/60 border-light-border/80 bg-brand-surface/40 dark:bg-brand-surface/40 bg-white/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-brand-accent" />
              <span>Associate Solution Consultant at FireFlink</span>
            </div>
            <span className="hidden sm:inline text-brand-border">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>Bengaluru, India (From Nagpur)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {siteConfig.githubUrl && (
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-textMuted hover:text-brand-accent transition-colors font-medium"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            <span className="text-brand-border">•</span>
            <span className="italic text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
              &ldquo;Understand → Connect → Deliver&rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
