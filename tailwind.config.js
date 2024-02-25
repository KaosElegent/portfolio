/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/**/*.html`], // all .html files
  theme: {
    extend: {
      colors: {
        'mc-1': '#393646',
        'mc-2': '#4F4557',
        'mc-3': '#6D5D6E',
        'mc-4': '#F4EEE0',
        'mc-1-d' : '#282535',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

