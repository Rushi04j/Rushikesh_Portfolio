"use client";

import React from "react";
import {
  HeartHandshake,
  BookOpen,
  Compass,
  Briefcase,
  HelpCircle,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const aboutHighlights = [
  {
    icon: HeartHandshake,
    title: "Empathetic Listening First",
    description: "I genuinely enjoy listening to people and understanding their actual perspectives before speaking.",
  },
  {
    icon: BookOpen,
    title: "Learning Through Curiosity",
    description: "I like learning through reading, online videos, and exploring how tools operate under the hood.",
  },
  {
    icon: Compass,
    title: "SaaS & Product Exploration",
    description: "I actively explore new technology products, testing platforms, and developer tooling.",
  },
  {
    icon: Briefcase,
    title: "Business & Entrepreneurship",
    description: "I am interested in how technology creates practical value, business models, and economic outcomes.",
  },
  {
    icon: HelpCircle,
    title: "Diagnose Before Prescribing",
    description: "I always prefer understanding the underlying problem thoroughly before suggesting any solution.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80 bg-brand-surface/30 dark:bg-brand-surface/30 bg-light-surfaceElevated/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Real Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
            How listening to people led me to solution consulting.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            The bridge between wanting to understand what people are dealing with and finding where technology actually fits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white shadow-md dark:shadow-card-dark space-y-5">
              <p className="text-xl font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                Hi, I&apos;m Rushikesh.
              </p>

              <p>
                I&apos;ve always enjoyed talking to people, listening to what they have to say, and trying to understand what is actually going on in their lives.
              </p>

              <div className="border-l-2 border-brand-accent pl-4 py-1 italic text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary bg-brand-surfaceElevated/50 dark:bg-brand-surfaceElevated/50 bg-light-surfaceElevated/60 rounded-r-lg">
                &ldquo;Sometimes, when my friends had problems, they would come to me to talk things through. I would usually listen first, try to understand their side of the situation, and then share what I thought might help. Some of them even started calling me their friendship advisor or relationship advisor.&rdquo;
              </div>

              <p>
                I never really thought of that as a professional skill at the time. I just enjoyed listening to people and understanding how they think.
              </p>

              <p>
                During my computer science degree at Nagpur Institute of Technology, I explored software development and learned the basics of programming, web technologies, and databases. I also completed a short remote web development internship and later attended Java full-stack training through QSpiders after being selected through campus placement.
              </p>

              <p>
                Over time, I realized that while I was interested in technology, I was especially drawn to the <strong className="text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary font-semibold">conversations around it</strong>: understanding a problem, discussing possible solutions, explaining how something works, and figuring out whether it would actually help someone.
              </p>

              <p>
                That interest eventually led me to <strong className="text-brand-accent">FireFlink</strong>, where I started as a Solution Consultant Intern and later transitioned into a full-time Associate Solution Consultant role on August 17, 2026.
              </p>

              <p>
                Today, I work with SaaS product demonstrations and conversations with prospective customers, including teams in the US. My work involves understanding their existing testing setup, asking questions about the challenges they face, explaining relevant product capabilities, and following up to explore whether there is a fit.
              </p>

              <p>
                I&apos;m still building my technical knowledge, and I want to become much stronger in areas such as software testing, API concepts, automation, integrations, and solution design. My goal is to grow toward <strong className="text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary font-semibold">technical pre-sales and solution engineering</strong>, where I can combine communication, technical understanding, and business problem-solving.
              </p>

              <p className="text-sm text-brand-textMuted dark:text-brand-textMuted text-light-textMuted pt-2 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border">
                Outside work, I enjoy reading occasionally, watching YouTube videos, learning new things, and exploring business ideas. I&apos;m curious about how technology products work, why businesses choose certain solutions, and how good ideas become useful products.
              </p>
            </div>
          </div>

          {/* Right Column: "A Little About Me" & Quick Badges */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tasteful Abstract Initials Graphic */}
            <div className="rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-gradient-to-br from-brand-surface to-brand-surfaceElevated dark:from-brand-surface dark:to-brand-surfaceElevated from-white to-light-surfaceElevated p-6 text-center relative overflow-hidden shadow-md">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-brand-surface dark:bg-brand-surface bg-light-surfaceElevated border-2 border-brand-accent/40 flex items-center justify-center text-2xl font-black text-brand-accent mb-4 shadow-inner">
                RJ
              </div>
              <h3 className="text-lg font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                Rushikesh Joshi
              </h3>
              <p className="text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mt-0.5">
                Associate Solution Consultant · FireFlink
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Active US Market Engagements</span>
              </div>
            </div>

            {/* "A Little About Me" Card List */}
            <div className="rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white p-6 shadow-md dark:shadow-card-dark space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 dark:border-brand-border/60 border-light-border">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  A Little About Me
                </h4>
                <span className="text-xs font-mono text-brand-accent font-semibold">
                  Personal Principles
                </span>
              </div>

              <div className="space-y-4">
                {aboutHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3.5 group">
                      <div className="w-8 h-8 rounded-lg bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated border border-brand-border/60 dark:border-brand-border/60 border-light-border flex items-center justify-center shrink-0 text-brand-accent group-hover:border-brand-accent transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                          {item.title}
                        </p>
                        <p className="text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border text-center">
                <p className="text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted italic">
                  &ldquo;This website is a place to share what I&apos;ve done, what I&apos;m learning, and the way I think about technology and business.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
