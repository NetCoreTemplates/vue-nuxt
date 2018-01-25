module.exports = {
  mode: 'spa',
  srcDir: 'src',
  generate: {
    dir: 'wwwroot',
    /*
    ** Generate dynamic routes for static file servers that 
    *  don't provide a way to fallback to a default index.html page
    */
    routes: [
      '/posts/1',
      '/posts/2'
    ]
  },
  plugins: [{ src: '~/plugins/nuxt-client-init.js', ssr: false }],
  modules: ['@nuxtjs/proxy','@nuxtjs/font-awesome'],
  proxy: {
    '/json': 'http://localhost:5000/',
  },
  css: ['bootstrap/dist/css/bootstrap.css', '~/assets/css/app.css'],
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
