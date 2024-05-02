/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    container: {
      padding: "2rem",
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
