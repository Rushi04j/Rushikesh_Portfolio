"use client";

import React from "react";
import { skillCategories } from "@/content/skills";
import {
  Sparkles,
  Layers,
  Code2,
  TrendingUp,
  CheckCircle,
  Clock,
  Compass,
} from "lucide-react";

export function SkillsSection() {
  const stageBadges = {
    "Core Strength": {
      style: "bg-emerald-500/10 text-emerald-400 dark:text-emerald-300 border-emerald-500/30",
      icon: CheckCircle,
    },
    "Foundational Understanding": {
      style: "bg-teal-500/10 text-teal-400 dark:text-teal-300 border-teal-500/30",
      icon: Layers,
    },
    Practicing: {
      style: "bg-cyan-500/10 text-cyan-400 dark:text-cyan-300 border-cyan-500/30",
      icon: Clock,
    },
    "Building Hands-On Experience": {
      style: "bg-amber-500/10 text-amber-400 dark:text-amber-300 border-amber-500/30",
      icon: Compass,
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skills &amp; Learning Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
            Accurate Skills &amp; Intentional Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            I believe in honest self-assessment over vanity percentages. Here is a clear breakdown of where I create immediate value today, my technical foundations, and what I am actively practicing.
          </p>
        </div>

        {/* 3 Main Skill Category Cards */}
        <div className="space-y-8">
          {skillCategories.map((cat, catIdx) => {
            const CategoryIcon = [Sparkles, Code2, TrendingUp][catIdx] || Layers;

            return (
              <div
                key={cat.id}
                className="rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-brand-border/60 dark:border-brand-border/60 border-light-border gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                        {cat.categoryTitle}
                      </h3>
                      <p className="text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-brand-textMuted dark:text-brand-textMuted text-light-textMuted self-start sm:self-auto">
                    {cat.skills.length} Capabilities
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {cat.skills.map((skill) => {
                    const badgeInfo = stageBadges[skill.stage] || stageBadges["Practicing"];
                    const BadgeIcon = badgeInfo.icon;

                    return (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl border border-brand-border/50 dark:border-brand-border/50 border-light-border bg-brand-surfaceElevated/50 dark:bg-brand-surfaceElevated/50 bg-light-surfaceElevated/60 flex flex-col justify-between space-y-2 hover:border-brand-accent/40 transition-colors"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-1 mb-2">
                            <span
                              className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border font-medium ${badgeInfo.style}`}
                            >
                              <BadgeIcon className="w-3 h-3" />
                              <span>{skill.stage}</span>
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                            {skill.name}
                          </h4>
                        </div>

                        {skill.context && (
                          <p className="text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed pt-1 border-t border-brand-border/40 dark:border-brand-border/40 border-light-border/60">
                            {skill.context}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
