import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#10131A",
          surface: "#1A202B",
          surfaceElevated: "#222B3B",
          border: "#2A3446",
          borderSubtle: "#1F2836",
          textPrimary: "#F3F5F7",
          textSecondary: "#9AA5B5",
          textMuted: "#6B7A90",
          accent: "#55D6BE",
          accentHover: "#43C2AA",
          accentGlow: "rgba(85, 214, 190, 0.15)",
        },
        light: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          surfaceElevated: "#F1F5F9",
          border: "#E2E8F0",
          borderSubtle: "#EDF2F7",
          textPrimary: "#0F172A",
          textSecondary: "#475569",
          textMuted: "#64748B",
          accent: "#0D9488",
          accentHover: "#0F766E",
          accentGlow: "rgba(13, 148, 136, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        handwriting: ["Caveat", "cursive", "sans-serif"],
      },
      boxShadow: {
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-dark-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(85, 214, 190, 0.25)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        'card-light-hover': '0 12px 30px -4px rgba(13, 148, 136, 0.12), 0 0 0 1px rgba(13, 148, 136, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        pulseGlow: 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
