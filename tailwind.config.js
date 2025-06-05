/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/bg.svg')"
      },
      backgroundSize: {
        "home-xl": "50%"
      },
      backgroundColor:{
        "dark": "#1a1818",
        "green": "#60e995",
        "green-light": "#8bf5b4"
      },
      textColor: {
        "dark": "#1a1818",
        "green": "#60e995",
        "green-light": "#8bf5b4"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

