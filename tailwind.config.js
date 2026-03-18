/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A1128",
        gold: "#D4AF37",
        champagne: "#E8D48B",
        ivory: "#F2F2F2",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212, 175, 55, 0.15), 0 16px 40px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        foilSweep: {
          "0%, 84%": {
            transform: "translateX(-140%) skewX(-18deg)",
            opacity: "0",
          },
          "88%": { opacity: "0.85" },
          "100%": {
            transform: "translateX(240%) skewX(-18deg)",
            opacity: "0",
          },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
        "spin-very-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        foilSweep: "foilSweep 6s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "float-slower": "float-slower 16s ease-in-out infinite",
        "spin-very-slow": "spin-very-slow 45s linear infinite",
        "spin-reverse": "spin-reverse 35s linear infinite",
      },
    },
  },
  plugins: [],
};
