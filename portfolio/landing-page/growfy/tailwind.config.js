/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    // desktop first
    screens: {
      'bgg': {'max': '1190px'},
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '525px' },
    },
    fontFamily: {
      poppins: ['Poppins']
    },

    extend: {},
  },
  plugins: [],
}

