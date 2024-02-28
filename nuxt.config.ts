// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.css"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  modules: ["@nuxt/image"],
  image: {
    format: ["webp", "svg"],
  },
  ssr: true,
});
