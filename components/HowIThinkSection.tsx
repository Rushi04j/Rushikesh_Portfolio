"use client";

import React, { useState } from "react";
import { howIThinkStages, howIThinkPrinciples } from "@/content/how-i-think";
import {
  Ear,
  HelpCircle,
  Network,
  Scale,
  ArrowRight,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

const stageIcons = [Ear, HelpCircle, Network, Scale];

export function HowIThinkSection() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStage = howIThinkStages.find((s) => s.step === activeStep) || howIThinkStages[0];
  const CurrentIcon = stageIcons[currentStage.step - 1];

  return (
    <section
      id="how-i-think"
      className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80 bg-brand-surface/20 dark:bg-brand-surface/20 bg-light-surfaceElevated/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Problem-Solving Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
            Before suggesting a solution, I want to understand the problem.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            &ldquo;I don&apos;t believe a solution is useful simply because it has more features. It has to address a problem that matters to the person or business using it.&rdquo;
          </p>
          <p className="mt-2 text-xs sm:text-sm text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
            *This is a description of my natural mindset and consultative approach, not a claim of a rigid proprietary dogma.
          </p>
        </div>

        {/* 4-Stage Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {howIThinkStages.map((stage, idx) => {
            const Icon = stageIcons[idx];
            const isSelected = stage.step === activeStep;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "border-brand-accent bg-brand-surface dark:bg-brand-surface bg-white shadow-lg ring-1 ring-brand-accent"
                    : "border-brand-border/60 dark:border-brand-border/60 border-light-border bg-brand-surface/60 dark:bg-brand-surface/60 bg-white/70 hover:border-brand-border hover:bg-brand-surfaceElevated"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? "text-brand-accent" : "text-brand-textMuted"
                    }`}
                  >
                    0{stage.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? "text-brand-accent" : "text-brand-textMuted"
                    }`}
                  />
                </div>
                <h3
                  className={`text-base sm:text-lg font-bold ${
                    isSelected
                      ? "text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary"
                      : "text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary"
                  }`}
                >
                  {stage.title}
                </h3>
                <p className="text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted mt-1 line-clamp-1">
                  {stage.eyebrow.split("·")[1]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="p-6 sm:p-10 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/90 dark:bg-brand-surface/90 bg-white shadow-xl dark:shadow-card-dark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stage Summary & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                  {currentStage.eyebrow}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                    {currentStage.title}
                  </h3>
                </div>
                <p className="mt-3 text-base text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                  {currentStage.summary}
                </p>
              </div>

              {/* What I Do in this stage */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  What I Focus On In This Stage:
                </h4>
                <div className="space-y-2">
                  {currentStage.keyActions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Takeaway */}
              <div className="p-4 rounded-xl bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated border border-brand-border/60 dark:border-brand-border/60 border-light-border">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Core Insight
                </span>
                <p className="text-sm font-medium italic text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  &ldquo;{currentStage.takeaway}&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Sample Questions I Ask */}
            <div className="lg:col-span-5 p-6 rounded-xl border border-brand-border/70 dark:border-brand-border/70 border-light-border bg-brand-surface/40 dark:bg-brand-surface/40 bg-white/70 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-accent" />
                <span>Diagnostic Questions I Ask:</span>
              </h4>

              <div className="space-y-3">
                {currentStage.sampleQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-brand-border/50 dark:border-brand-border/50 border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs sm:text-sm text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary leading-relaxed font-mono"
                  >
                    <span className="text-brand-accent font-bold block mb-1">Q{idx + 1}:</span>
                    &ldquo;{q}&rdquo;
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                {activeStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:underline"
                  >
                    <span>Next: {howIThinkStages[activeStep].title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:underline"
                  >
                    <span>Restart Framework Cycle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Guiding Principles Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {howIThinkPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="p-5 rounded-xl border border-brand-border/60 dark:border-brand-border/60 border-light-border bg-brand-surface/60 dark:bg-brand-surface/60 bg-white shadow-sm space-y-2"
            >
              <h4 className="text-sm font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                {principle.title}
              </h4>
              <p className="text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
