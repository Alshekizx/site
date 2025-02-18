import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#333333", // Dark Gray
        secondary: "#F8F8F8", // Off White
        accent: "#FF0000", // Red
      },
      fontSize: {
        h1: "32px",
        h2: "28px",
        h3: "24px",
        h4: "20px",
        h5: "18px",
        h6: "16px",
        body: "14px",
        small: "12px",
      },
    },
  },
  plugins: [],
} satisfies Config;