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
          'wedding-dark': '#0f172a',
          'wedding-gold': '#d4af37',
          'wedding-blush': '#fdf4f0',
          'wedding-cream': '#fffaf0',
        },
      },
    },
    plugins: [],
  }