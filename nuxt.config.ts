import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,

  app: {
    head: {
      title: 'Pierre Mura, sculptor ',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Pierre Mura is a sculptor working around vegetation and ornementation.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#333b37' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#333b37' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '57x57', type: 'image/x-icon', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', type: 'image/x-icon', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', type: 'image/x-icon', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', type: 'image/x-icon', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', type: 'image/x-icon', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', type: 'image/x-icon', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', type: 'image/x-icon', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', type: 'image/x-icon', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-icon-180x180.png' },
        { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/android-icon-192x192.png' },
        { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/android-icon-32x32.png' },
        { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/android-icon-96x96.png' },
        { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/android-icon-16x16.png' }
      ],
    }
  },
  css: [
    '@/assets/css/font.css',
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/prismic'],

  prismic: {
    endpoint: 'pierre-mura',
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },
})