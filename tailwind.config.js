/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        airbRed1: 'hsl(358, 75%, 53%)',
        airbRed2: 'hsl(333, 94%, 44%)',
        airbRed3: 'hsl(343, 79%, 51%)',
        airbRed4: 'hsl(349, 100%, 61%)',
        airbBlanco: 'hsl(180, 100%, 100%)',
        airbVerde: 'hsl(121, 100%, 32%)',
      }
    },
  },
  plugins: [],
}

