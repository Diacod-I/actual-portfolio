const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}', // Ensure all Astro files are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};