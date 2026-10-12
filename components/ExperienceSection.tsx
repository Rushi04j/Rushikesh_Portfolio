"use client";

import React, { useState } from "react";
import { experiences, educationList } from "@/content/experience";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Building2,
  Sparkles,
} from "lucide-react";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
              Professional Experience &amp; Education
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
              A transparent timeline of full-time consulting, internship training, technical studies, and academic foundations.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1 rounded-xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white shadow-sm self-start">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-brand-accent text-[#10131A] shadow-sm"
                  : "text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-textPrimary dark:hover:text-brand-textPrimary hover:text-light-textPrimary"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work &amp; Training</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-brand-accent text-[#10131A] shadow-sm"
                  : "text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary hover:text-brand-textPrimary dark:hover:text-brand-textPrimary hover:text-light-textPrimary"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Experience & Training */}
        {activeTab === "experience" && (
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-brand-border/60 dark:before:bg-brand-border/60 before:bg-light-border/80">
            {experiences.map((item) => {
              const typeBadgeColors = {
                "full-time": "bg-emerald-500/10 text-emerald-400 dark:text-emerald-300 border-emerald-500/30",
                internship: "bg-teal-500/10 text-teal-400 dark:text-teal-300 border-teal-500/30",
                training: "bg-amber-500/10 text-amber-500 dark:text-amber-300 border-amber-500/30",
                education: "bg-blue-500/10 text-blue-400 dark:text-blue-300 border-blue-500/30",
              }[item.type];

              const typeBadgeLabel = {
                "full-time": "Full-Time Role",
                internship: "Internship",
                training: "Vocational Training",
                education: "Academic",
              }[item.type];

              return (
                <div
                  key={item.id}
                  className="relative pl-10 sm:pl-16 group"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-2.5 sm:left-4.5 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-brand-surface dark:bg-brand-surface bg-white border-2 border-brand-accent group-hover:scale-125 transition-transform" />

                  {/* Experience Card */}
                  <div className="p-6 sm:p-8 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-border/60 dark:border-brand-border/60 border-light-border">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                            {item.role}
                          </h3>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${typeBadgeColors}`}
                          >
                            {typeBadgeLabel}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-brand-accent">
                          <Building2 className="w-4 h-4" />
                          <span>{item.organization}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted space-y-1">
                        <div className="flex items-center gap-1.5 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                      {item.description}
                    </p>

                    {item.note && (
                      <div className="mt-3 flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-600 dark:text-amber-300">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{item.note}</span>
                      </div>
                    )}

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                          Key Responsibilities &amp; Focus:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary border border-brand-border/60 dark:border-brand-border/60 border-light-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-brand-accent mt-1">
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <p className="text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </p>
                  )}
                  {edu.details && (
                    <p className="mt-4 text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border flex items-center justify-between text-xs">
                  <span className="text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">Score:</span>
                  <span className="font-mono font-bold text-brand-accent text-sm">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
