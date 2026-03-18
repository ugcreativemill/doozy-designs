/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f5f1ea",
        sand: "#d6c2a5",
        gold: "#57d2cd",
        charcoal: "#111111",
        stone: "#6f675d",
        cream: "#ebe3d7",
        deepteal: "#0b6f70",
        pine: "#074b4b",
        mist: "#d8f2ee"
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['"Manrope"', "sans-serif"]
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(17, 17, 17, 0.16)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(198, 167, 106, 0.14) 1px, transparent 0)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
        pulseSoft: "pulseSoft 3.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
