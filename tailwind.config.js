/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    container: {
      padding: "2rem",
    },
    fontFamily: {
      headFont: ['"Bebas Neue", sans'],
      bodyFont: ["Manrope, sans"],
    },
    extend: {
      colors: {
        customYellow: "#d3e97a",
        customGray: "#181818",
      },
    },
  },
  plugins: [],
};
