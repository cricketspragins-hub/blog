import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5F0",
        ink: "#2C2C2C",
        sage: {
          light: "#B2C9B4",
          DEFAULT: "#7C9A7E",
          dark: "#4A6741",
        },
        card: "#FFFFFF",
        border: "#E0E8E0",
      },
      fontFamily: {
        headline: ["var(--font-headline)"],
        subhead: ["var(--font-subhead)"],
        body: ["var(--font-body)"],
      },
    },
  },
};

export default config;
