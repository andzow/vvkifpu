// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.css"],
  modules: ["@nuxt/image"],
  image: {
    format: ["webp", "svg"],
  },
  ssr: true,
});
