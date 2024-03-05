/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8A00",
        secodary: "#2F327D",
        gray: "#696984",
        grayLight: "#CECECE",
      },
    },
  },
  plugins: [],
};
