/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Figtree", "sans-serif"],
        heading: ["Nunito", "sans-serif"],
        title: ["Nunito", "sans-serif"],
        paragraph: ["Nunito", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        figtree: ["Figtree", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },

      colors: {
        base: "#FA4B1C",

        // 🔸 Main + hover colors used in your buttons
        primary: "#FF671F",
        "primary-hover": "#e55c1c",

        secondary: "#046A38",
        "secondary-hover": "#03572f",

        black: "#0E2C27",
        gray: "#667471",
        extra: "#F1F9FB",
      },

      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
      },

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

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         serif: ["Figtree", "sans-serif"],
//         sans: [
//           "Figtree",
//           "ui-sans-serif",
//           "system-ui",
//           "Segoe UI",
//           "Roboto",
//           "Helvetica",
//           "Arial",
//           "sans-serif",
//         ],

//         // NEW groups
//         title: ["Figtree", "sans-serif"],
//         paragraph: ["Nunito", "Figtree", "Arial", "sans-serif"],

//         nunito: ["Nunito", "Figtree", "Arial", "sans-serif"],
//         caveat: ["Caveat", "cursive"],
//       },

//       colors: {
//         primary: { DEFAULT: "#FF671F", hover: "#e55c1c" },
//         secondary: { DEFAULT: "#046A38", hover: "#03572f" },
//       },

//       boxShadow: {
//         soft: "0 10px 25px rgba(0,0,0,0.08)",
//       },

//       /* -------------------------
//          ⭐ RIPPLE ANIMATION ADDED
//       -------------------------- */
//       keyframes: {
//         ripple: {
//           "0%": {
//             transform: "translate(-50%, -50%) scale(0.9)",
//             opacity: "0.6",
//           },
//           "70%": {
//             transform: "translate(-50%, -50%) scale(1.6)",
//             opacity: "0",
//           },
//           "100%": {
//             opacity: "0",
//           },
//         },
//       },
//       animation: {
//         ripple: "ripple 2.2s infinite",
//       },

//       /* -------------------------
//          ⭐ MASK UTILITIES ADDED
//       -------------------------- */
//       maskImage: {
//         custom: "url('/images/video-mask.png')",
//       },
//       maskSize: {
//         cover: "cover",
//       },
//       maskPosition: {
//         center: "center",
//       },
//     },
//   },
//   plugins: [],
// };
