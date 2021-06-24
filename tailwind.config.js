const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    // './src/**/*.vue',
    // './src/**/*.js',
    // './src/**/*.jsx',
    // './src/**/*.html',
    // './src/**/*.pug',
    // './src/**/*.md',
  ],
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      red: colors.rose,
      blue: colors.lightBlue,
      green: colors.teal,
    },
    fontFamily: {
      'sans': ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'mono': ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    extend: {
      strokeWidth: {
        '1-5': '1.5'
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }) {
      const links = {
        '.link': {
          color: '#0369A1',
          textDecoration: 'underline',
          textDecorationThickness: '2px',
          textUnderlineOffset: '3px',
          transitionProperty: 'color background-color',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: '#1E293B',
            backgroundColor: '#2DD4BF'
          },
        },
      }

      addComponents(links)
    })
  ],
}
