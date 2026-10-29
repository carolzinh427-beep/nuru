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
        'dark-card': '#161412',
        'gold-main': '#C9A24B',
        'gold-light': '#E8C878',
        'cream-text': '#F2EDE4',
        'gray-warm': '#9A9287',
        'border-subtle': '#2B2722',
        brand: {
          bg: '#0A0A0A',
          card: '#161412',
          gold: '#C9A24B',
          goldLight: '#E8C878',
          text: '#F2EDE4',
          gray: '#9A9287',
          border: '#2B2722',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      }
    },
  },
  plugins: [],
}
