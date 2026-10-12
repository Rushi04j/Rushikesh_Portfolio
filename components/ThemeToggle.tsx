"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`w-9 h-9 rounded-lg border border-slate-700/60 bg-brand-surface flex items-center justify-center text-slate-400 ${className}`}
        aria-label="Toggle theme"
      >
        <Moon className="w-4 h-4 text-brand-accent" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`w-9 h-9 rounded-lg border transition-all duration-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
        theme === "dark"
          ? "border-brand-border bg-brand-surface hover:bg-brand-surfaceElevated text-brand-accent hover:text-white"
          : "border-light-border bg-white hover:bg-light-surfaceElevated text-light-accent hover:text-light-textPrimary shadow-sm"
      } ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
