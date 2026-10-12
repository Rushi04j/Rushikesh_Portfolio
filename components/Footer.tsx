"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { ArrowUp, Heart, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80 bg-brand-surface/40 dark:bg-brand-surface/40 bg-white/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-brand-border/40 dark:border-brand-border/40 border-light-border/60">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center font-bold text-sm text-brand-accent">
              RJ
            </div>
            <div>
              <p className="text-sm font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                Rushikesh Joshi
              </p>
              <p className="text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
                Understand the problem. Connect the dots. Deliver value.
              </p>
            </div>
          </div>

          {/* Quick nav links */}
          <nav className="flex flex-wrap justify-center gap-4 text-xs font-medium text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
            {siteConfig.navItems.slice(0, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-brand-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="hover:text-brand-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border dark:border-brand-border border-light-border text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-accent hover:border-brand-accent transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
          <p>
            © {new Date().getFullYear()} Rushikesh Joshi. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-accent transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span>{siteConfig.email}</span>
            </a>
            <span>·</span>
            <span>Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
