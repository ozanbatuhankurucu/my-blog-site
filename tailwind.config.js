/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        25: 'repeat(24, minmax(0, 1fr))'
      }
    },
    colors: {
      white: '#FFFFFE',
      'light-grey-1': '#EFF0F3',
      'light-grey-2': '#E4E5E9',
      grey: '#C0C0C0',
      'dark-grey': '#9A9494',
      black: '#2B2C34',
      blue: '#6246EA'
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
