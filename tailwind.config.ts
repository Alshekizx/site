import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#102911", // Dark Green
        secondary: "#853100", // Rich Brown
        tertiary: "#E08B00", //  Golden Orange
        tertiary2: "#F7C574", // Warm Beige
        lite: "#F6F8FA", // Light Background Color
       
        accentGreen: "#28a745", // Accent Green
        accentRed: "#FF7800", //  Vibrant Orange
        background: {
          light: "#F6F8FA", // Background light
          DEFAULT: "#ffffff", // Default background
          dark: "#343a40", // Background dark
        },
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"], // Body text font
        heading: ["Playfair Display", "serif"], // Headings font
      },
      fontSize: {
        xs: "0.75rem", // Extra small (12px)
        sm: "0.875rem", // Small (14px)
        base: "1rem", // Base (16px)
        lg: "1.125rem", // Large (18px)
        xl: "1.25rem", // Extra large (20px)
        "2xl": "1.5rem", // Double extra large (24px)
        "3xl": "1.875rem", // Triple extra large (30px)
        "4xl": "2.25rem", // Quadruple extra large (36px)
        "5xl": "3rem", // Quintuple extra large (48px)
        "6xl": "4rem",
      },

      fontWeight: {
        light: "300", // Light weight
        regular: "400", // Regular weight
        bold: "700", // Bold weight
      },
    },
  },
  plugins: [forms, typography, scrollbarHide],
} satisfies Config;