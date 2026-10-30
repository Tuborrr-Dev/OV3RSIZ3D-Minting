import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        surface: "#080808",
        "surface-dark": "#000000",
        "surface-purple": "#0c0c0c",
        "surface-elevated": "#141414",
        "surface-high": "#1a1a1a",
        electricYellow: "#FCEE54",
        "electricYellow-dim": "#D7CA31",
        signalRed: "#E8384F",
        signalGreen: "#00E599",
        glitchCyan: "#00F0FF",
        glitchRed: "#FF0055",
        mutedSteel: "#8D889E",
        outlineVariant: "#1a1a1a",
      },
      fontFamily: {
        display: ["Space Grotesk", "Anton", "system-ui", "sans-serif"],
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Roboto Flex", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(252, 238, 84, 0.35)",
        "neon-sm": "0 0 10px rgba(252, 238, 84, 0.25)",
        "neon-lg": "0 0 35px rgba(252, 238, 84, 0.5)",
        cyber: "0 0 30px rgba(40, 25, 68, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
