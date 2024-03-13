/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "100px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      kufam: ["Kufam", "sans-serif"],
    },
    colors: {
      orange: "#FFC265",
      darkGreen: "#1DA599",
      lightGreen: "#C1FFFA",
      textHeading: "#4A4A4A",
      textPara: "#454545",
    },
    extend: {},
  },
  plugins: [],
};
