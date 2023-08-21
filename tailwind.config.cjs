/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1d2025",
        secondary: "#00040f",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        makerGold: "#d8c690",
        dimGold: "rgba(216, 198, 144, 0.1)",
        bitcoinOrange: "#f2a900",
        facebookBlue: "#4267B2",
        instagramBlue: "#405DE6",
        twitterBlue: "#1DA1F2",
        linkedinBlue: "#0072b1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeUp: "fadeUp 1s ease-in-out",
        fadeLeft: "fadeLeft 1s ease-in-out",
        fadeRight: "fadeRight 1s ease-in-out",
        endFadeIn: "fadeIn 2s ease-in-out",
        endFadeUp: "fadeUp 2s ease-in-out",
        endFadeLeft: "fadeLeft 2s ease-in-out",
        endFadeRight: "fadeRight 2s ease-in-out",
        fadeOut: "fadeOut 1s forwards",
        // Add more custom animations as needed
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(1rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-1rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        transitionDelay: {
          2000: "2000ms",
          75: "75ms",
        },
      },
    },
    screens: {
      xxs: "280px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "910px",
      md: "1090px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
