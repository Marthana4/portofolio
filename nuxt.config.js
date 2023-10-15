export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myportofolio',
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
    ],
    script: [
      {src: 'assets/vendor/purecounter/purecounter_vanilla.js'},
      {src: 'assets/vendor/aos/aos.js'},
      {src: 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js'},
      {src: 'assets/vendor/glightbox/js/glightbox.min.js'},
      {src: 'assets/vendor/isotope-layout/isotope.pkgd.min.js'},
      {src: 'assets/vendor/swiper/swiper-bundle.min.js'},
      {src: 'assets/vendor/typed.js/typed.umd.js'},
      {src: 'assets/vendor/waypoints/noframework.waypoints.js'},
      {src: 'assets/vendor/php-email-form/validate.js'},
      {src: 'assets/js/main.js'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/assets/vendor/aos/aos.css',
    '@/static/assets/vendor/bootstrap/css/bootstrap.min.css',
    '@/static/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '@/static/assets/vendor/boxicons/css/boxicons.min.css',
    '@/static/assets/vendor/glightbox/css/glightbox.min.css',
    '@/static/assets/vendor/swiper/swiper-bundle.min.css',
    '@/static/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
