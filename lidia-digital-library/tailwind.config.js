/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "120px",
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        primary: "#4475F2",
        heading: "#181E4B",
        desc: "#5E6282",
        placeholder: "#9C9C9C",
        border: "#DEDEDE",
      },
      fontFamily: {
        jktSans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
