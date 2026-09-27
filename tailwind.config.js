/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ccff00",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        fitlog: {
          primary: "#ccff00",
          secondary: "#1f2937",
          accent: "#ccff00",
          neutral: "#111827",
          "base-100": "#0a0a0a",
          "base-200": "#131313",
          "base-300": "#1c1c1c",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
