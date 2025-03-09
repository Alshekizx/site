import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d1d5db", // lightest gray
          200: "#9ca3af", // light gray
          300: "#6b7280", // medium gray
          400: "#4b5563", // slightly dark gray
          500: "#374151", // darker gray
          600: "#1f2937", // dark gray
          700: "#111827", // your original primary color (darkest gray)
          800: "#0a1117", // very dark gray
          900: "#050a0d", // darkest gray
        },
        secondary: {
          100: "#fef3c7", // very light yellow
          200: "#fef09f", // light yellow
          300: "#fde047", // pale yellow
          400: "#facc15", // yellow-500
          500: "#eab308", // your original secondary color (yellow-600)
          600: "#ca8a04", // deeper yellow
          700: "#a16207", // darker yellow
          800: "#854d0e", // dark yellow
          900: "#713b07", // darkest yellow
        },
        accent: {
          100: "#93c5fd", // light blue
          200: "#60a5fa", // lighter blue
          300: "#3b82f6", // blue-400
          400: "#2563eb", // your original accent color (blue-600)
          500: "#1d4ed8", // blue-700
          600: "#1e40af", // darker blue
          700: "#1e3a8a", // deep blue
          800: "#1e2a6a", // very deep blue
          900: "#0f172a", // darkest blue
        },
        background: {
          100: "#f9fafb", // lightest black
          200: "#f3f4f6", // very dark gray
          300: "#e5e7eb", // light gray
          400: "#d1d5db", // darker gray
          500: "#9ca3af", // dark gray
          600: "#6b7280", // medium gray
          700: "#4b5563", // darker gray
          800: "#1f2937", // very dark gray
          900: "#0a0a0a", // your original background color (black)
        },
        text: {
          100: "#ffffff", // pure white
          200: "#e5e7eb", // light text
          300: "#d1d5db", // light gray text
          400: "#9ca3af", // medium gray text
          500: "#6b7280", // dark gray text
          600: "#4b5563", // darker gray text
          700: "#374151", // very dark gray text
          800: "#1f2937", // almost black text
          900: "#111827", // darkest gray text
        },
        success: {
          100: "#d1fadf", // lightest green
          200: "#a7f3d0", // pale green
          300: "#6ee7b7", // light green
          400: "#34d399", // green-400
          500: "#16a34a", // your original success color (green-600)
          600: "#15803d", // green-700
          700: "#166534", // dark green
          800: "#14532d", // very dark green
          900: "#064e1b", // darkest green
        },
        warning: {
          100: "#fef2f2", // lightest red
          200: "#fecaca", // pale red
          300: "#fca5a5", // light red
          400: "#f87171", // red-400
          500: "#dc2626", // your original warning color (red-600)
          600: "#b91c1c", // red-700
          700: "#991b1b", // dark red
          800: "#7f1d1d", // very dark red
          900: "#601010", // darkest red
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      fontSize: {
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
      },
      zIndex: {
        100: "100",
        500: "500",
        1000: "1000",
      },
    },
  },
  plugins: [],
} satisfies Config;