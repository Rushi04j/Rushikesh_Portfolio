"use client";

import React, { useState } from "react";
import { thinkingQuestions, ThinkingQuestion } from "@/content/questions";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Scale,
  RefreshCw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function QuestionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>("when-to-adopt-new-tool");

  const toggleQuestion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleQuestion(id);
    }
  };

  return (
    <section id="questions" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Intellectual Curiosity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
            Questions I Like Thinking About
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            These are open explorations around software testing, SaaS evaluation, and practical AI utility. Click or press any card to see how I would systematically investigate it.
          </p>
          <p className="mt-2 text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
            *Explorations and thought frameworks, not dogmatic claims of universal expertise.
          </p>
        </div>

        {/* 4 Interactive Question Cards */}
        <div className="space-y-4">
          {thinkingQuestions.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-brand-accent/80 bg-brand-surface dark:bg-brand-surface bg-white shadow-lg ring-1 ring-brand-accent/20"
                    : "border-brand-border/60 dark:border-brand-border/60 border-light-border bg-brand-surface/70 dark:bg-brand-surface/70 bg-white/80 hover:border-brand-border hover:bg-brand-surface"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleQuestion(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`panel-${item.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="w-7 h-7 rounded-lg bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated border border-brand-border/60 flex items-center justify-center font-mono text-xs font-bold text-brand-accent shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <div>
                      <span className="text-xs font-mono font-medium uppercase tracking-wider text-brand-accent block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div className="shrink-0 p-1.5 rounded-lg border border-brand-border text-brand-textSecondary hover:text-brand-accent transition-colors">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-brand-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-textMuted" />
                    )}
                  </div>
                </button>

                {/* Expanded Investigation Panel */}
                {isExpanded && (
                  <div
                    id={`panel-${item.id}`}
                    className="p-5 sm:p-8 pt-0 border-t border-brand-border/50 dark:border-brand-border/50 border-light-border/60 space-y-6 text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed animate-fadeIn"
                  >
                    {/* Context */}
                    <div className="pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5 flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-brand-accent" />
                        <span>The Investigation Context</span>
                      </h4>
                      <p className="text-xs sm:text-sm">{item.context}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Questions to Ask */}
                      <div className="p-4 rounded-xl border border-brand-border bg-brand-surfaceElevated/50 dark:bg-brand-surfaceElevated/50 bg-light-surfaceElevated/60">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                          Key Questions I Would Ask:
                        </h4>
                        <ul className="space-y-1.5 text-xs">
                          {item.questionsToAsk.map((q, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-brand-accent font-bold">▸</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Evidence to Gather */}
                      <div className="p-4 rounded-xl border border-brand-border bg-brand-surfaceElevated/50 dark:bg-brand-surfaceElevated/50 bg-light-surfaceElevated/60">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                          Objective Evidence to Gather:
                        </h4>
                        <ul className="space-y-1.5 text-xs">
                          {item.evidenceToGather.map((ev, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ev}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Trade-Offs & Nuance */}
                    <div className="p-4 rounded-xl border border-brand-border/60 bg-brand-surface dark:bg-brand-surface bg-white">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-2 flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 text-brand-accent" />
                        <span>Trade-Offs &amp; Operational Reality:</span>
                      </h4>
                      <ul className="space-y-1 text-xs">
                        {item.potentialTradeOffs.map((to, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-400">⚖</span>
                            <span>{to}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What would change the recommendation */}
                    <div className="p-4 rounded-xl bg-brand-accent/5 dark:bg-brand-accent/10 border border-brand-accent/30 text-xs sm:text-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1 flex items-center gap-1.5">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>What Would Flip My Recommendation?</span>
                      </span>
                      <p className="italic text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                        {item.whatWouldChangeRecommendation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
