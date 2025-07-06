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
      keyframes: {
        blink: {
          '0%, 100%': { 
            opacity: '1',
            backgroundColor: '#ef4444' // red-500
          },
          '50%': { 
            opacity: '1',
            backgroundColor: '#ffffff' // white
          },
        },
      },
      animation: {
        'blink': 'blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};