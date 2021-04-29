export default {
  ssr: false,
  target: 'static',
  env: {
    LIFF_ID: process.env.LIFF_ID,
  },
  head: {
    title: 'nuxt-liff-test',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  router: {
    middleware: ['authorize'],
  },
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api/module'],
};
