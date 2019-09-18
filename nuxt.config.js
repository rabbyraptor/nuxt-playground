const APP_ENV = process.env.APP_ENV || 'local';

let modules = [
  '@nuxtjs/dotenv',
  'nuxt-imagemin'
];

if(APP_ENV !== 'production') {
  modules.push(['nuxt-robots-module', {
    /* module options */
    UserAgent: '*',
    Disallow: '/',
  }])
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Edentic Nuxt Boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Edentic Nuxt Boilerplate'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2073a5' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/output/frontend.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/directives.js',
    {src: '@/plugins/draggable.js', mode: 'client'},
  ],

  /*
  ** Nuxt.js modules
  */
  modules,

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || '',
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || ''
  },

  /*
  ** Build configuration
  */
  build: {

  }
}
