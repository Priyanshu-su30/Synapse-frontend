/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "rgba(255, 255, 255, 0.5)",
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c"
        },
        purple: {
          200: "#d9ddee",
          500: "#9492db",
          600: "#7164c0",
        },
        black: {
          200:'#333137',
          500:'#262727',
          700:'#16101e',
        },
        blue: {
          300:'#D0ECE8',
          500:'#5ccebf',
        }
      }
    },
  },
  plugins: [],
}

