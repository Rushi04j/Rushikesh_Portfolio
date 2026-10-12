"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, MessageSquareCode, Linkedin } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = siteConfig.navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#10131A]/90 dark:bg-[#10131A]/90 bg-white/90 backdrop-blur-md border-b border-brand-border/60 dark:border-brand-border/60 border-light-border/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center font-semibold text-brand-accent group-hover:border-brand-accent transition-colors shadow-sm">
            <span className="text-sm font-bold tracking-wider">RJ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary group-hover:text-brand-accent transition-colors">
              Rushikesh Joshi
            </span>
            <span className="text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted hidden sm:inline">
              Solution Consulting & Tech
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {siteConfig.navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? "text-brand-accent dark:text-brand-accent text-light-accent bg-brand-surface/70 dark:bg-brand-surface/70 bg-light-surfaceElevated"
                    : "text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-textPrimary dark:hover:text-brand-textPrimary hover:text-light-textPrimary hover:bg-brand-surface/40 dark:hover:bg-brand-surface/40 hover:bg-light-surfaceElevated/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Items */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {/* LinkedIn quick link */}
          {siteConfig.linkedinUrl && siteConfig.linkedinUrl.trim() !== "" && (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white flex items-center justify-center text-brand-textSecondary hover:text-brand-accent hover:border-brand-accent transition-colors shadow-sm"
              aria-label="Rushikesh Joshi on LinkedIn"
              title="Rushikesh Joshi on LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2] dark:text-[#70B5F9]" />
            </a>
          )}

          {/* Resume link: strictly only shown if configured with a valid non-empty URL */}
          {siteConfig.resumeUrl && siteConfig.resumeUrl.trim() !== "" && (
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-brand-border dark:border-brand-border border-light-border text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-accent hover:border-brand-accent transition-colors"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {/* Quick Talk Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-brand-accent hover:bg-brand-accentHover text-[#10131A] font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <MessageSquareCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Let&apos;s Talk</span>
            <span className="xs:hidden">Chat</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg border border-brand-border dark:border-brand-border border-light-border text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-textPrimary dark:hover:text-brand-textPrimary hover:text-light-textPrimary focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-brand-border/80 dark:border-brand-border/80 border-light-border bg-[#10131A]/95 dark:bg-[#10131A]/95 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-accent dark:hover:text-brand-accent hover:text-light-accent hover:bg-brand-surface dark:hover:bg-brand-surface hover:bg-light-surfaceElevated transition-colors"
            >
              {item.label}
            </a>
          ))}
          {siteConfig.linkedinUrl && siteConfig.linkedinUrl.trim() !== "" && (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-accent text-[#0A66C2] dark:text-[#70B5F9]"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {siteConfig.resumeUrl && siteConfig.resumeUrl.trim() !== "" && (
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-accent"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </header>
  );
}
