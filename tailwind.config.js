/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: { red: "#F92424", white: "#FFFFFF" },
    extend: {
      backgroundImage: {
        "hero-bg": "url('../assets/arrowcut_banner.jpg')",
      },
    },
  },
  plugins: [],
};
