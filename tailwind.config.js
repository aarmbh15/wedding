/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['Playfair Display', 'serif'],
          sans: ['Montserrat', 'sans-serif'],
        },
        colors: {
          gold: '#D4AF37',
          green: '#556B2F',
        },
      },
    },
    plugins: [],
  }