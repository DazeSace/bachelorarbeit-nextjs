module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'midnight': '#073B4C',
        'ncs': '#118AB2',
        'carib': '#06D6A0',
        'fogra': '#020E13',
        'process': '#32BDEC'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
