/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode using a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specifies the paths to all of your template files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}
