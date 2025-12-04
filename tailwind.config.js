/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: [
          "Figtree",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],

        // NEW groups
        title: ["Caveat", "cursive"],
        paragraph: ["Nunito", "Figtree", "Arial", "sans-serif"],

        nunito: ["Nunito", "Figtree", "Arial", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },

      colors: {
        primary: { DEFAULT: "#FF671F", hover: "#e55c1c" },
        secondary: { DEFAULT: "#046A38", hover: "#03572f" },
      },

      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
      },

      /* -------------------------
         ⭐ RIPPLE ANIMATION ADDED
      -------------------------- */
      keyframes: {
        ripple: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0.9)",
            opacity: "0.6",
          },
          "70%": {
            transform: "translate(-50%, -50%) scale(1.6)",
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        ripple: "ripple 2.2s infinite",
      },

      /* -------------------------
         ⭐ MASK UTILITIES ADDED
      -------------------------- */
      maskImage: {
        custom: "url('/images/video-mask.png')",
      },
      maskSize: {
        cover: "cover",
      },
      maskPosition: {
        center: "center",
      },
    },
  },
  plugins: [],
};
