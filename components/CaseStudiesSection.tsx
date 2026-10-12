"use client";

import React, { useState } from "react";
import { caseStudies, CaseStudyItem } from "@/content/case-studies";
import {
  FolderGit2,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X,
  Compass,
  Lightbulb,
  Search,
} from "lucide-react";

export function CaseStudiesSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);

  return (
    <section id="case-studies" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Consultative Problem Solving</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
            Real Customer Scenarios &amp; Balanced Technical Reasoning
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            Three anonymized professional experiences reflecting how I approach customer questions, respect existing developer frameworks, and prioritize long-term relationships over transactional claims.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            <span>Anonymized professional experiences · No proprietary details disclosed</span>
          </div>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl dark:hover:shadow-card-dark-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                  {study.category}
                </span>

                <h3 className="text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mt-2 group-hover:text-brand-accent transition-colors">
                  {study.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm font-medium text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                  {study.tagline}
                </p>

                <div className="mt-5 space-y-3 pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
                  <div>
                    <strong className="text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary font-semibold block mb-1">
                      Customer Question:
                    </strong>
                    <p className="line-clamp-3 text-xs italic">&ldquo;{study.context}&rdquo;</p>
                  </div>

                  <div>
                    <strong className="text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary font-semibold block mb-1">
                      Outcome:
                    </strong>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{study.reportedOutcome}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {study.demonstratedSkills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textMuted border border-brand-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-white transition-colors group-hover:underline"
                >
                  <span>Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Modal */}
        {selectedCaseStudy && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <div
              className="max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface dark:bg-brand-surface bg-white text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary p-6 sm:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-lg border border-brand-border text-brand-textSecondary hover:text-brand-accent hover:border-brand-accent transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                  {selectedCaseStudy.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mt-1">
                  {selectedCaseStudy.title}
                </h3>
                <p className="mt-2 text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary italic">
                  {selectedCaseStudy.tagline}
                </p>
              </div>

              <div className="mt-8 space-y-6 text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                {/* Context */}
                <div className="p-4 rounded-xl bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated border border-brand-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2 flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" />
                    <span>Real Scenario Context</span>
                  </h4>
                  <p>{selectedCaseStudy.context}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
                    <span>The Underlying Challenge</span>
                  </h4>
                  <p>{selectedCaseStudy.customerChallenge}</p>
                </div>

                {/* My Approach */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-brand-accent" />
                    <span>My Approach</span>
                  </h4>
                  <p>{selectedCaseStudy.myApproach}</p>
                </div>

                {/* Discovery Questions if available */}
                {selectedCaseStudy.discoveryQuestions && (
                  <div className="p-4 rounded-xl border border-brand-border bg-brand-surface/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                      Key Discovery Questions Explored:
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedCaseStudy.discoveryQuestions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-mono">
                          <span className="text-brand-accent">▸</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Reasoning */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Reasoning &amp; Philosophy</span>
                  </h4>
                  <p>{selectedCaseStudy.reasoning}</p>
                </div>

                {/* Reported Outcome */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Actual Reported Outcome</span>
                  </h4>
                  <p className="text-sm font-semibold">{selectedCaseStudy.reportedOutcome}</p>
                </div>

                {/* What I Learned */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-brand-border bg-brand-surfaceElevated/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-1.5">
                      What I Learned
                    </h4>
                    <p className="text-xs leading-relaxed">{selectedCaseStudy.whatILearned}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-brand-border bg-brand-surfaceElevated/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-1.5">
                      What I Would Investigate Next
                    </h4>
                    <p className="text-xs leading-relaxed">{selectedCaseStudy.whatIWouldInvestigateNext}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 rounded-xl bg-brand-surfaceElevated hover:bg-brand-border text-brand-textPrimary text-xs font-semibold transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
