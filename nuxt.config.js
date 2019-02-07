const pkg = require('./package')

module.exports = {
  mode: 'universal',
  // router: {
  //   base: '/seguridad/'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Toyota - Seguridad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/vendor/modernizr.min.js', body: true },
      { src: '/js/vendor/jquery.min.js', body: true },
      { src: '/js/anime.min.js', body: true },
      { src: '/js/tilt.js', body: true },
      { src: '/js/vendor/jquery.easing.js', body: true },
      //{ src: 'js/vendor/midnight.jquery.js', body: true },
      //{ src: 'js/skrollr.min.js', body: true },
      //{ src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js', body: true },
      //{ src: 'https://cdn.jsdelivr.net/npm/skrollr-menu@1.0.3/dist/skrollr.menu.min.js', body: true },
      { src: '/js/jquery.scrollTo.min.js', body: true },
      { src: '/js/classie.js', body: true },
      { src: '/js/modalEffects.js', body: true },
      { src: '/js/cssParser.js', body: true },
      { src: '/js/css-filters-polyfill.js', body: true },
      { src: '/js/main.js', body: true },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/static/css/normalize.css' },
    { src: '~/static/css/main.css' },
    { src: '~/static/css/component.css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: 'plugins/owl.js', ssr: false },
    { src: 'plugins/waypoints.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-52CLVD' }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    //See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://68.183.138.119/'
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
  }
}