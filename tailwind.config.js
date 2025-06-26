/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004EA5',
        secondary: '#01319E',
        accent: '#5598B5',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
