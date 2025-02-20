/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        bgSecondary: {
          50: "#01c0c81a",
        },
        bgPrimary: {
          bg: "#01c0c8",
          dark: "#111c2d",
          darkText: "#7c8fac",
        },
      },
    },
  },

  darkMode: "class",
  plugins: [],
}

