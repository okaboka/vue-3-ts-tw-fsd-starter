/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme');
const {
  iconsPlugin,
  getIconCollections,
} = require('@egoist/tailwindcss-icons');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // here's how to extend fonts if needed
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi']),
    }),
  ],
};
