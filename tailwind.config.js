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
      blue: colors.sky,
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
          color: '#BE123C',
          background: 'linear-gradient(to top, #E11D48, #E11D48 50%, transparent 50%)',
          backgroundSize: '100% 200%',
          textDecoration: 'underline',
          textDecorationThickness: '2px',
          textUnderlineOffset: '3px',
          transitionProperty: 'color background-position',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: '#E5E7EB',
            backgroundPosition: '0 bottom',
            textDecorationColor: '#E11D48'
          },
        },
      }

      addComponents(links)
    })
  ],
}
