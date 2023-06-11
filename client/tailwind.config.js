/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '440px',
        'xl': '1230px',
        'xl1500': '1500px',
        '2xl': '2000px'
      },
      colors: {
        'titles-grey': '#5F5F5F',
        'light-pink': '#FFEAEA'
      }
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
}

