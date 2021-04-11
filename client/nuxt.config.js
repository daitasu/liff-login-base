export default {
  ssr: false,
  target: 'static',
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
    script: [
      { src: 'https://static.line-scdn.net/liff/edge/versions/2.8.1/sdk.js' },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  build: {},
};
