/* eslint-disable prettier/prettier */
module.exports = {
  darkMode: 'class',
  fontFamily: {
    sans: ['Roboto', 'sans-serif']
  },
  theme: {
    extend: {
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
