/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        "2xl": "100px",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      kufam: ["Kufam", "sans-serif"],
    },
    extend: {
      colors: {
        darkOrange: "#FFC265",
        darkGreen: "#1DA599",
        lightGreen: "#C1FFFA",
        textHeading: "#4A4A4A",
        textPara: "#454545",
      },
    },
  },
  plugins: [],
};
