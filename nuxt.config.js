const pkg = require('./package')
const {join} = require('path')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    {src: join(__dirname, 'assets/sass/common-style.scss'), lang: 'scss'},
    {src: join(__dirname, 'assets/sass/icons.scss'), lang: 'scss'},
    {src: join(__dirname, 'assets/sass/reset.scss'), lang: 'scss'},
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugings/jquery-3.3.1.min.js",
    "~plugings/delighters.min.js",
    "~plugings/slick.min.js",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', [
      '@/assets/sass/_variable.scss',
      '@/assets/sass/_animation.scss',
      '@/assets/sass/_icons.scss',
    ]],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  /*
  ** router
  */
  // router: {
  //   base: '/test/'
  // }
}