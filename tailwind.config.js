const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.slate,
      red: colors.rose,
      blue: colors.sky,
      green: colors.teal,
    },
    extend: {
      strokeWidth: {
        '1-5': '1.5'
      },
    },
  },
  plugins: [],
}
