<template>
  <div>
    <AdmissionsViMain />
    <AdmissionsViAbout />
    <AdmissionsViDocuments />
    <AdmissionsViStudents />
    <!-- <AdmissionsViDoor /> -->
    <AdmissionsViImages />
    <MainViApplication />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "Правила приема | ВВКИФПУ",
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
          content: `Колледж кирова после 9 класса | Правила приема`,
        },
        {
          name: "keywords",
          content:
            "Колледж киров, Колледж кирова после 9 класса | Правила приема",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Колледж Кирова - Волго-Вятский колледж информатики, финансов, права, управления",
        },
        {
          property: "og:description",
          content: `Колледж кирова после 9 класса | Правила приема`,
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        {
          property: "og:site_name",
          content:
            "Волго-Вятский колледж информатики, финансов, права, управления | Правила приема",
        },
        {
          property: "og:image",
          content: "https://vvkifpu.ru/Meta/Index/logo.webp",
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
  data() {
    return {};
  },
};
</script>

<style scoped></style>
