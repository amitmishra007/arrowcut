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
      lred: "#F9242480",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        // "hero-bg": "url('../assets/arrowcut_banner.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        featprodtitle: "30px",
      },
    },
  },
  plugins: [],
};
