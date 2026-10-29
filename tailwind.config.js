/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#102A43',
        'slate-blue': '#486581',
        'warm-beige': '#C7B79A',
        'off-white': '#F7F5F0',
        'text-dark': '#243B53',
        'line-soft': '#D8D1C5',
        brand: {
          deep: '#102A43',
          slate: '#486581',
          beige: '#C7B79A',
          offwhite: '#F7F5F0',
          dark: '#243B53',
          line: '#D8D1C5',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      }
    },
  },
  plugins: [],
}

