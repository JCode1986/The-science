module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: '#DD4F05',
      white: '#FFFFFF',
      darkgreay: '#414B56'
    },
    flex: {
      '1/4': '1 1 25%',
      '1/2': '1 1 50%',
      '1/3': '1 1 25%'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
