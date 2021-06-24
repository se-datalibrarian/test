// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const tailwind = require('tailwindcss')
// const purgecss = require('@fullhuman/postcss-purgecss')

// const postcssPlugins = [
//   tailwind(),
// ]

// if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  siteName: 'Southeast Data Librarian Symposium 2021',
  siteDescription: `Website for the 2021 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.`,
  author: `@SEDataLibrarian`,
  siteUrl: 'https://se-datalibrarian.github.io',
  pathPrefix: '/2021',
  plugins: [
    {
      // This plugin sets up gtag to track analytics with Google Analytics
      use: 'gridsome-plugin-gtag',
      options: {
          config: {
            // Use GTAG_ID in .env file (GTAG_ID=G-XXXXXXXXXX) or set blank if not present
              id: process.env.GTAG_ID || '',
          },
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
  ],
  // css: {
  //     loaderOptions: {
  //         postcss: {
  //             plugins: [tailwind],
  //         },
  //     },
  // },
}
