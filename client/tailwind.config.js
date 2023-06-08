/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xl': '1230px',
        '2xl': '2000px'
      }
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
}

