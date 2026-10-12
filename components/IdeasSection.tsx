"use client";

import React, { useState } from "react";
import { ideaNotes, IdeaNote } from "@/content/ideas";
import {
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  X,
  Share2,
  Calendar,
} from "lucide-react";

export function IdeasSection() {
  const [readingNote, setReadingNote] = useState<IdeaNote | null>(null);

  return (
    <section id="ideas" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80 bg-brand-surface/20 dark:bg-brand-surface/20 bg-light-surfaceElevated/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Ideas, Notes &amp; Observations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
            Reflections on Technology, SaaS &amp; Problem Solving
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
            Personal notes and working drafts about pre-sales demonstrations, testing tooling, and what makes software genuinely useful.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Working drafts and conceptual notes · Ideas in active evolution</span>
          </div>
        </div>

        {/* 4 Draft Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ideaNotes.map((note) => (
            <div
              key={note.id}
              className="rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl dark:hover:shadow-card-dark-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                    {note.topic}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-medium">
                    {note.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary group-hover:text-brand-accent transition-colors">
                  {note.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                  {note.summary}
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated border border-brand-border/60 text-xs italic text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  &ldquo;{note.keyTakeaway}&rdquo;
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-brand-textMuted dark:text-brand-textMuted text-light-textMuted font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {note.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {note.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setReadingNote(note)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-white transition-colors group-hover:underline"
                >
                  <span>Read Draft</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Reader for Full Note */}
        {readingNote && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setReadingNote(null)}
          >
            <div
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface dark:bg-brand-surface bg-white text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary p-6 sm:p-10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setReadingNote(null)}
                className="absolute top-6 right-6 p-2 rounded-lg border border-brand-border text-brand-textSecondary hover:text-brand-accent hover:border-brand-accent transition-colors"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                    {readingNote.topic}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-medium">
                    {readingNote.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  {readingNote.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-brand-textMuted font-mono">
                  <span>{readingNote.date}</span>
                  <span>·</span>
                  <span>{readingNote.readTime}</span>
                </div>
              </div>

              {/* Note Content Paragraphs */}
              <div className="mt-8 space-y-4 text-sm sm:text-base text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                {readingNote.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                <div className="mt-6 p-4 rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
                  <strong className="text-xs uppercase tracking-wider font-bold text-brand-accent block mb-1">
                    Key Takeaway
                  </strong>
                  <p className="text-sm italic">&ldquo;{readingNote.keyTakeaway}&rdquo;</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs text-brand-textMuted">
                  Editable in <code className="font-mono text-brand-accent">content/ideas.ts</code>
                </span>
                <button
                  type="button"
                  onClick={() => setReadingNote(null)}
                  className="px-4 py-2 rounded-xl bg-brand-surfaceElevated hover:bg-brand-border text-brand-textPrimary text-xs font-semibold transition-colors"
                >
                  Close Note
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
