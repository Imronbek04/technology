/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'max': '1345px',
        '1920': '1920px'
      },
      lineHeight: {
        '60': '60px'
      },
      gap: {
        '74': '74'
      },
      backgroundColor:{
        'lightgrey' : '#F0F0F0'
      }
    },
  },
  plugins: [],
}

