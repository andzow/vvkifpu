<template>
  <div>
    <CommissionsFuCommissions />
    <CommissionsFuAct />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: `Куда поступить после 9 класса в Кирове - Приемная комиссия колледжа Киров`,
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
          content: `Куда поступить после 9 класса в Кирове - это вопрос который задают себе тысячи студентов ежегодно. Думайте о том, куда поступить после 9 класса в Кирове!`,
        },
        {
          name: "keywords",
          content: "Колледж киров, Приемная комиссия колледжа Киров",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content: `Куда поступить после 9 класса в Кирове - Приемная комиссия колледжа Киров`,
        },
        {
          property: "og:description",
          content: `Куда поступить после 9 класса в Кирове - это вопрос который задают себе тысячи студентов ежегодно. Думайте о том, куда поступить после 9 класса в Кирове!`,
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        {
          property: "og:site_name",
          content: `Волго-Вятский колледж информатики, финансов, права, управления`,
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
};
</script>

<style></style>
