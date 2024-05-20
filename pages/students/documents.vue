<template>
  <div>
    <StudentsDocumentsViPaper />
    <MainViApplication />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title:
        "Виды материальной поддержки - Волго-Вятский колледж информатики, финансов, права, управления",
      meta: [
        {
          name: "viewport",
          content: `width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes`,
        },
        // {
        //   name: "google-site-verification",
        //   content: "_14UGNz5nfZyg1n0hSBDp1RSWAPFktd6bvetIIbJu1E",
        // },
        {
          name: "description",
          content: `Виды материальной поддержки`,
        },
        {
          name: "keywords",
          content: "Колледж киров, Виды материальной поддержки",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Виды материальной поддержки - Волго-Вятский колледж информатики, финансов, права, управления",
        },
        {
          property: "og:description",
          content: `Виды материальной поддержки`,
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        {
          property: "og:site_name",
          content:
            "Волго-Вятский колледж информатики, финансов, права, управления",
        },
        {
          property: "og:image",
          content: "../Meta/Index/logo.webp",
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
  },
};
</script>

<style></style>
