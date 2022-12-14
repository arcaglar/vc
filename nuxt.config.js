export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pishop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/stylesheet/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  env: {
  },

  generate: {
    dir: 'public'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true,
    headers: {
      SHOP_SK: '6mcMzol0XEyQlIjUFnLyxtrLoIdiqjiS',
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    }
  },

  proxy: {
    "/api/": {
      target: "https://ookprgdhd9.execute-api.us-west-2.amazonaws.com/ahmetridvancaglar3g6ae3",
      pathRewrite: { "^/api/": "" }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
