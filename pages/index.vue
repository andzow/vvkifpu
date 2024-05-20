<template>
  <div class="app">
    <MainViMainPhoto />
    <MainViTraning />
    <MainViApplication />
    <MainViNews />
    <MainViAbout />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title:
        "Колледж Кирова - Волго-Вятский колледж информатики, финансов, права, управления",
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
          content: `Колледж кирова после 9 класса - Волго-Вятский колледж информатики, финансов, права, управления ВВКИФПУ или куда поступить после 9 класса`,
        },
        {
          name: "keywords",
          content:
            "Колледж киров, Информационные системы,Разработка ПО, Программирование, Кибербезопасность, Туризм, Организация туристической деятельности, Правоохранительная деятельность, Закон и технологии, Технологии красоты, Индустрия красоты",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Колледж Кирова - Волго-Вятский колледж информатики, финансов, права, управления",
        },
        {
          property: "og:description",
          content: `Колледж кирова после 9 класса - Волго-Вятский колледж информатики, финансов, права, управления ВВКИФПУ или куда поступить после 9 класса`,
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
    return {
      checkVer: useChangeSpeciality(),
    };
  },
  mounted() {
    setTimeout(() => {
      this.checkVer = true;
    }, 0);
  },
};
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
