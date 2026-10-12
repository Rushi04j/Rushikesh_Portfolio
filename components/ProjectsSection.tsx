"use client";

import React, { useState } from "react";
import { projects, ProjectItem, ProjectStatus } from "@/content/projects";
import {
  FolderCode,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Compass,
  X,
  Wrench,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"All" | ProjectStatus>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border/80 bg-brand-surface/20 dark:bg-brand-surface/20 bg-light-surfaceElevated/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border dark:border-brand-border border-light-border bg-brand-surface dark:bg-brand-surface bg-white text-xs font-semibold uppercase tracking-wider text-brand-accent dark:text-brand-accent text-light-accent mb-4">
              <FolderCode className="w-3.5 h-3.5" />
              <span>Projects &amp; Structured Practice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">
              Learning Initiatives &amp; Technical Explorations
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary">
              Authentic projects, active practice in API testing, and conceptual frameworks. No fabricated metrics or exaggerated repositories.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start">
            {(["All", "In Progress", "Completed", "Planned"] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === status
                    ? "bg-brand-accent text-[#10131A] shadow-sm"
                    : "bg-brand-surface dark:bg-brand-surface bg-white text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary border border-brand-border/60 dark:border-brand-border/60 border-light-border hover:border-brand-accent"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((proj) => {
            const statusConfig = {
              "In Progress": {
                color: "bg-teal-500/10 text-teal-400 border-teal-500/30",
                icon: Clock,
              },
              Completed: {
                color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                icon: CheckCircle2,
              },
              Planned: {
                color: "bg-amber-500/10 text-amber-400 border-amber-500/30",
                icon: Compass,
              },
            }[proj.status];

            const StatusIcon = statusConfig.icon;

            return (
              <div
                key={proj.id}
                className="rounded-2xl border border-brand-border dark:border-brand-border border-light-border bg-brand-surface/80 dark:bg-brand-surface/80 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl dark:hover:shadow-card-dark-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                      {proj.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full border font-medium ${statusConfig.color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      <span>{proj.statusLabel || proj.status}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary group-hover:text-brand-accent transition-colors">
                    {proj.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Problem & Learnings summary snippet */}
                  <div className="mt-4 p-3 rounded-xl bg-brand-surfaceElevated/60 dark:bg-brand-surfaceElevated/60 bg-light-surfaceElevated/80 border border-brand-border/60 text-xs text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary space-y-1">
                    <p>
                      <strong className="text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary">Focus:</strong>{" "}
                      {proj.problemAddressed}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 dark:border-brand-border/60 border-light-border space-y-3">
                  {/* Tools actually used */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2 py-0.5 rounded font-mono bg-brand-surface dark:bg-brand-surface bg-light-surfaceElevated text-brand-textMuted dark:text-brand-textMuted text-light-textMuted border border-brand-border/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Actions: View Details + External links strictly hidden if empty */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-semibold text-brand-accent hover:underline flex items-center gap-1"
                    >
                      <span>Explore Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {/* Only render external links if real valid URLs are provided */}
                    <div className="flex items-center gap-2">
                      {proj.repoUrl && proj.repoUrl.trim() !== "" && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-brand-textMuted hover:text-brand-accent"
                          title="View Repository"
                        >
                          Code
                        </a>
                      )}
                      {proj.demoUrl && proj.demoUrl.trim() !== "" && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-brand-textMuted hover:text-brand-accent"
                          title="View Demo"
                        >
                          Demo
                        </a>
                      )}
                      {(!proj.repoUrl || proj.repoUrl.trim() === "") &&
                        (!proj.demoUrl || proj.demoUrl.trim() === "") && (
                          <span className="text-[10px] text-brand-textMuted/70 font-mono italic">
                            Internal Learning
                          </span>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Project Overview */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface dark:bg-brand-surface bg-white text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary p-6 sm:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg border border-brand-border text-brand-textSecondary hover:text-brand-accent hover:border-brand-accent transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                  {selectedProject.category} · {selectedProject.statusLabel || selectedProject.status}
                </span>
                <h3 className="text-2xl font-extrabold text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="mt-6 space-y-5 text-sm text-brand-textSecondary dark:text-brand-textSecondary text-light-textSecondary leading-relaxed">
                <p className="text-base">{selectedProject.description}</p>

                <div className="p-4 rounded-xl bg-brand-surfaceElevated dark:bg-brand-surfaceElevated bg-light-surfaceElevated border border-brand-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-1.5 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>The Problem Addressed</span>
                  </h4>
                  <p>{selectedProject.problemAddressed}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Work Performed</span>
                  </h4>
                  <p>{selectedProject.workPerformed}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Learning Outcomes &amp; Takeaway</span>
                  </h4>
                  <p>{selectedProject.learningOutcomes}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary mb-2">
                    Tools &amp; Methodologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-brand-surface dark:bg-brand-surface bg-light-surfaceElevated text-brand-textPrimary dark:text-brand-textPrimary text-light-textPrimary border border-brand-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs text-brand-textMuted">
                  Editable in <code className="font-mono text-brand-accent">content/projects.ts</code>
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-brand-surfaceElevated hover:bg-brand-border text-brand-textPrimary text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
