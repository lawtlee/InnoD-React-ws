/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        RED: '#DB4848', // Add your preferred beige color code
        BLUE: '#2E49A9',
        BEIGE: '#FAFBED',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'blue' : '0px 0px 28px 16px rgba(46, 73, 169, 1)'
      }
    },
  },
  plugins: [],
}

