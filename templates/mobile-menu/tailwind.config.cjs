/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    // desktop first
    screens: {
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' },
    },

    extend: {},
  },
  plugins: [],
}

