/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/bg-2.svg')"
      },
      backgroundSize: {
        "home-xl": "85%"
      },
      backgroundColor:{
        "dark": "#1a1818",
        "green": "#60e995",
        "green-light": "#8bf5b4",
        "orange": "#E8B45F"
      },
      textColor: {
        "dark": "#1a1818",
        "green": "#60e995",
        "green-light": "#8bf5b4",
        "orange": "#e9ae50"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

