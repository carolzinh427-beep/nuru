/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-deep': '#0A0A0A',
        'dark-card': '#141210',
        'gold-main': '#C28E42',
        'gold-light': '#D9A75E',
        'gold-muted': '#825C22',
        'gold-dark': '#5E4014',
        'cream-text': '#F5EFE6',
        'gray-warm': '#A39A8E',
        'border-subtle': '#28231C',
        brand: {
          bg: '#0A0A0A',
          card: '#141210',
          gold: '#C28E42',
          goldLight: '#D9A75E',
          goldMuted: '#825C22',
          goldDark: '#5E4014',
          text: '#F5EFE6',
          gray: '#A39A8E',
          border: '#28231C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.28em',
      }
    },
  },
  plugins: [],
}
