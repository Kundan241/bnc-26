/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAFAFA',
        onyx: '#1A1A1D',
        indigo: { DEFAULT:'#1E3A8A', 700:'#1e3380', 800:'#172d6e' },
        saffron: { DEFAULT:'#D97706', 400:'#FBBF24', 500:'#F59E0B' },
      },
      fontFamily: {
        playfair: ['"Playfair Display"','Georgia','serif'],
        inter: ['Inter','system-ui','sans-serif'],
      },
    },
  },
  plugins: [],
}
