/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.js",
    "./pages/index.js",
    "./componentes/ModalWebs.js",
    "./componentes/ModalIndustrial.js"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#201E2A',
      'secundary': '#B8C674',
      'black': '#1D1D1D',
      'white': '#ffff',
      'red': '#9b111e',
      'gray': '#eeeeee',
      'gray2': '#23212D',

    },
    extend: {},
  },
  plugins: [],
}
