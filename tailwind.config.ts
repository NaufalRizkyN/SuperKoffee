import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Super Koffee brand palette — deep blue + white + red accent (from logo)
        primary: "#08068D",      // Deep vibrant blue from logo
        accent: "#E11D48",       // Bold red accent (coffee bean)
        cream: "#F8FAFC",        // Clean soft white
        charcoal: "#1E293B",     // Dark slate for body text
        soft: "#E0E7FF",         // Soft blue-tinted borders & alt backgrounds
        sage: "#059669",         // Fresh green for success / open badge
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
