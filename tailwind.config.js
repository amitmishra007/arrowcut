/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      red: "#F92424",
      white: "#FFFFFF",
      black: "#000000",
      lwhite: "#FFFFFF0",
      lblack: "#00000090",
    },
    extend: {
      backgroundImage: {
        // "hero-bg": "url('../assets/arrowcut_banner.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
