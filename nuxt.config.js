export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.css"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  modules: ["@nuxt/image", "nuxt-particles"],
  image: {
    format: ["webp", "svg"],
  },
  ssr: true,
});
