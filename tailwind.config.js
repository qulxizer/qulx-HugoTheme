/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  darkMode: 'media',
  plugins: [
    require('flowbite/plugin')
  ],
}

