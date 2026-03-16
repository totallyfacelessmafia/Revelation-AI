/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0C10",
        gold: "#C5A059",
        champagne: "#E1C38F",
        ivory: "#F2F2F2",
      },
      letterSpacing: {
        cinematic: "0.2em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(197, 160, 89, 0.25), 0 16px 40px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        foilSweep: {
          "0%, 84%": { transform: "translateX(-140%) skewX(-18deg)", opacity: "0" },
          "88%": { opacity: "0.85" },
          "100%": { transform: "translateX(240%) skewX(-18deg)", opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 900ms cubic-bezier(0.2, 0.85, 0.2, 1) both",
        foilSweep: "foilSweep 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
