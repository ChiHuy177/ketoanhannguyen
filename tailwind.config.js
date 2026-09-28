/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#224DA7',
          dark: '#1A2B55',
        },
        gold: {
          light: '#E8C766',
          DEFAULT: '#C9A227',
          dark: '#B8860B',
          bar: '#A67C1A',
        },
        cream: {
          DEFAULT: '#FAF6EC',
          warm: '#FDF1DF',
          peach: '#F4E2C7',
        },
        seal: '#B23A2E',
        panel: '#363B45',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
