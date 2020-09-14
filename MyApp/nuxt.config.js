module.exports = {
  ssr: false,
  srcDir: 'src',
  generate: {
    dir: 'wwwroot',    
    routes: [
      // Generate static pages for static file servers handling dynamic routes
    ]
  },
  plugins: [{ src: '~/plugins/nuxt-client-init.js', ssr: false }, { src: '~/plugins/servicestack-vue.js', ssr: false }],
  modules: ['@nuxtjs/proxy'],
  proxy: {
    '/json': {
      target: 'https://localhost:5001/',
      secure: false
    },
    '/auth': {
      target: 'https://localhost:5001/',
      secure: false
    },
    '/metadata': {
      target: 'https://localhost:5001/',
      secure: false
    },
    '/css': {
      target: 'https://localhost:5001/',
      secure: false
    },
  },
  css: ['bootstrap/dist/css/bootstrap.css', '~/assets/css/default.css'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'MyApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
