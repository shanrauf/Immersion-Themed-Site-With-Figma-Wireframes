const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mass Immersion Approach',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The Mass Immersion Approach is a comprehensive approach to acquiring foreign languages.'
      },
      { hid: 'og:title', name: 'og:title', content: 'Mass Immersion Approach' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'The Mass Immersion Approach is a comprehensive approach to acquiring foreign languages.'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://massimmersionapproach.com'
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://massimmersionapproach.com/mia.png'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@MassImmersion' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The Mass Immersion Approach is a comprehensive approach to acquiring foreign languages.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://massimmersionapproach.com/mia.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'MIA Logo'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', to: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/transitions.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  // /* Layout Transitions */
  // layoutTransition: {
  //   name: 'layout',
  //   mode: ''
  // },
  // /* Page Transitions */
  // pageTransition: {
  //   name: 'default',
  //   mode: ''
  // },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  /**
   * Vue Analytics options
   */
  googleAnalytics: {
    id: 'UA-125257798-1'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
