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
    '~/plugins/firebase.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules,

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || '',
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || '',
    GFB_API_KEY: process.env.GFB_API_KEY,
    GFB_AUTH_DOMAIN: process.env.GFB_AUTH_DOMAIN,
    GFB_DATABASE_URL: process.env.GFB_DATABASE_URL,
    GFB_PROJECT_ID: process.env.GFB_PROJECT_ID,
    GFB_STORAGE_BUCKET: process.env.GFB_STORAGE_BUCKET,
    GFB_MESSAGING_SENDER_ID: process.env.GFB_MESSAGING_SENDER_ID,
    GFB_APP_ID: process.env.GFB_APP_ID
  },

  /*
  ** Build configuration
  */
  build: {

  }
}
