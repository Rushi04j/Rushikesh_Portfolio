"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  Tv,
  Forward,
  Building2,
  MapPin,
  FileText,
} from "lucide-react";

const workflowNodes = [
  {
    step: "01",
    label: "Customer Problem",
    icon: Search,
    tooltip: "Listening to the customer's real day-to-day pain point and testing bottlenecks",
  },
  {
    step: "02",
    label: "Discovery",
    icon: Layers,
    tooltip: "Uncovering existing tools, team constraints, and what success looks like",
  },
  {
    step: "03",
    label: "Solution Fit",
    icon: CheckCircle2,
    tooltip: "Evaluating whether and how specific platform capabilities address the core need",
  },
  {
    step: "04",
    label: "Demonstration",
    icon: Tv,
    tooltip: "Conducting targeted walkthroughs focused on their specific workflows",
  },
  {
    step: "05",
    label: "Next Steps",
    icon: Forward,
    tooltip: "Honest evaluation of trade-offs, proof-of-concept scope, and pragmatic follow-up",
  },
];

export function HeroSection() {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(1);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-accent/10 dark:bg-brand-accent/10 bg-light-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border/80 dark:border-brand-border/80 border-light-border bg-brand-surface/60 dark:bg-brand-surface/60 bg-white/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
                TECHNOLOGY · SOLUTION CONSULTING · BUSINESS THINKING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-5xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary leading-[1.15]">
              I enjoy understanding problems and finding ways to solve them.
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-3 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
              <p>
                I&apos;m <strong className="text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary font-semibold">Rushikesh Joshi</strong>, an Associate Solution Consultant at{" "}
                <span className="text-brand-accent font-medium">FireFlink</span>. I work with SaaS product demonstrations and customer conversations around software testing and automation.
              </p>
              <p>
                I&apos;m interested in understanding how people work, where they face challenges, and how technology can help solve the right problems.
              </p>
              <p className="text-sm sm:text-base text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
                Beyond my current role, I&apos;m exploring technical pre-sales, solution engineering, business, and the ideas that turn technology into something useful.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-[#10131A] font-semibold text-sm transition-all shadow-md hover:shadow-lg transform active:scale-95"
              >
                <span>Let&apos;s Talk About an Idea</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/70 dark:bg-brand-surface/70 bg-white/80 hover:bg-brand-surfaceElevated dark:hover:bg-brand-surfaceElevated hover:bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary text-sm font-medium transition-all"
              >
                Explore My Journey
              </a>

              {/* Tertiary CTA: View Resume - only rendered if configured */}
              {siteConfig.resumeUrl && siteConfig.resumeUrl.trim() !== "" && (
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-accent transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              )}
            </div>

            {/* Quick Micro Credentials */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted border-t border-brand-border/40 dark:border-brand-border/40 border-light-border/60">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-brand-accent" />
                <span>FireFlink (US-facing team)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                <span>Bengaluru · From Nagpur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                <span>Pre-Sales &amp; Solution Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Diagram of Approach & Thoughtful Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Workflow Card */}
            <div className="rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white shadow-xl dark:shadow-card-dark p-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 dark:border-brand-border/60 border-light-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
                    My Consultative Approach
                  </span>
                </div>
                <span className="text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted font-mono">
                  Interactive Flow
                </span>
              </div>

              {/* Connected Visual Workflow Nodes */}
              <div className="py-5 space-y-3">
                {workflowNodes.map((node, index) => {
                  const Icon = node.icon;
                  const isActive = activeWorkflowIndex === index;
                  return (
                    <div
                      key={node.step}
                      onClick={() => setActiveWorkflowIndex(index)}
                      className={`cursor-pointer rounded-xl p-3 border transition-all flex items-start gap-3.5 ${
                        isActive
                          ? "border-brand-accent/70 bg-brand-accent/5 dark:bg-brand-accent/10 border-l-4 border-l-brand-accent shadow-sm"
                          : "border-brand-border/40 dark:border-brand-border/40 border-light-border/60 hover:border-brand-border hover:bg-brand-surfaceElevated/40"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono transition-colors ${
                          isActive
                            ? "bg-brand-accent text-[#10131A]"
                            : "bg-brand-surface dark:bg-brand-surface bg-light-surfaceElevated text-brand-textMuted border border-brand-border/60"
                        }`}
                      >
                        {node.step}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-semibold transition-colors ${
                              isActive
                                ? "text-brand-accent dark:text-brand-accent text-light-accent"
                                : "text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary"
                            }`}
                          >
                            {node.label}
                          </span>
                          <Icon
                            className={`w-4 h-4 ${
                              isActive ? "text-brand-accent" : "text-brand-textMuted"
                            }`}
                          />
                        </div>
                        <p className="text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mt-1 leading-relaxed">
                          {node.tooltip}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Handwritten annotation note */}
              <div className="pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border flex items-center gap-3">
                <span className="text-brand-accent text-lg select-none">✏️</span>
                <p className="text-sm italic font-medium text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  &ldquo;Good conversations often lead to interesting opportunities.&rdquo;
                </p>
              </div>
            </div>

            {/* Central Identity Pill */}
            <div className="p-4 rounded-xl border border-brand-border/60 dark:border-brand-border/60 border-light-border bg-brand-surface/40 dark:bg-brand-surface/40 bg-light-surfaceElevated/60 flex items-center justify-between text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
              <span className="font-medium text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                Central Philosophy
              </span>
              <span className="font-mono text-brand-accent font-semibold">
                Understand → Connect → Deliver
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
