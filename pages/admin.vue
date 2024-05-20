<template>
  <AdminViPanel />
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Админ панель",
      meta: [
        {
          name: "viewport",
          content: `width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes`,
        },
        {
          property: "og:image",
          content: "https://phantomboost.site/Meta/Index/logo.webp",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "../favicon.svg",
        },
      ],
      htmlAttrs: { lang: "ru-RU" },
    });
    definePageMeta({
      middleware: ["role"],
    });
  },
};
</script>

<style></style>
