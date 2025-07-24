/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#4f46e5', // indigo-600
          700: '#4338ca', // indigo-700
        }
      }
    },
  },
  plugins: [],
}