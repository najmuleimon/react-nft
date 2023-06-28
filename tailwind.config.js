/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      integral: ["integral", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1232px",
      }
    },
    extend: {
      colors: {
        'primary': '#3D00B7',
        'purple': '#2639ED',
        'green': '#00AC4F',
        'gray': '#EFEFEF',
      },
    },
  },
  plugins: [],
}