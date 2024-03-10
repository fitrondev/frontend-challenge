/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#4960D4",
        titleColor: "#0c1645",
        textColor: "#606785",
        borderColor: "#d9ddf2",
        bodyColor: "#EBEEFF",
        containerColor: "	#F0F2FF",
        bgSearch: "#f4f4f6",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      boxShadow: {
        shadow1: "0 -8px 32px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montaguSlab: ["Montagu Slab", "serif"],
      },
    },
  },
  plugins: [],
};
