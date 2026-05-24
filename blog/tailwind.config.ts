import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#E8EDE4",
        ink: "#2C3A2C",
        sage: {
          light: "#B2C9B4",
          DEFAULT: "#7C9A7E",
          dark: "#4A6741",
        },
        card: "transparent",
        border: "#B2C9B4",
      },
      fontFamily: {
        headline: ["var(--font-headline)"],
        subhead: ["var(--font-subhead)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
};

export default config;
