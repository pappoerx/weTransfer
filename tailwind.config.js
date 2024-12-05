/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'Playfair' :'Playfair',
        'Oswald': 'Oswald',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

