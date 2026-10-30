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
        'gold-main': '#D4AF37',
        'gold-light': '#F5E2A8',
        'gold-muted': '#9E8238',
        'cream-text': '#F5EFE6',
        'gray-warm': '#A39A8E',
        'border-subtle': '#28231C',
        brand: {
          bg: '#0A0A0A',
          card: '#141210',
          gold: '#D4AF37',
          goldLight: '#F5E2A8',
          goldMuted: '#9E8238',
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
