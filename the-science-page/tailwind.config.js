module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: '#DD4F05',
      white: '#FFFFFF',
      darkgrey: '#414B56',
      mediumgrey: '#CDCDCD'
    },
    flex: {
      '25%': '1 1 25%',
      '50%': '1 1 50%',
      '25%': '1 1 25%',
      '60%': '1 1 60%'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
