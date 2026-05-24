import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.94 0.02 145)",
        ink: {
          DEFAULT: "oklch(0.28 0.02 145)",
          muted: "oklch(0.45 0.02 145)",
        },
        sage: {
          light: "oklch(0.88 0.04 145)",
          DEFAULT: "oklch(0.62 0.07 145)",
          dark: "oklch(0.42 0.07 145)",
        },
        card: "oklch(0.94 0.02 145)",
        border: "oklch(0.84 0.03 145)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        hand: ["var(--font-hand)"],
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
