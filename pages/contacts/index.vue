<template>
  <div>
    <ContactsViContacts />
    <ContactsViMode />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: `Контакты ВВКИФПУ - Волго-Вятский колледж информатики, финансов, права, управления`,
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
          content: `Волго-Вятский колледж информатики, финансов, права, управления в Кирове Колледж «ВВКИФПУ»: Адрес: 610002, г.Киров, ул.Герцена 41 Мы на карте Режим работы ВВКИФПУ: Пн — с 8:00 до 19:00 Вт — с 8:00 до 19:00 Ср — с 8:00 до 19:00 Чт — с 8:00 до 19:00 Пт — с 8:00 до 19:00 Сб — с 8:00`,
        },
        {
          name: "keywords",
          content: "Колледж киров, Контакты ВВКИФПУ",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content: `Контакты ВВКИФПУ - Волго-Вятский колледж информатики, финансов, права, управления`,
        },
        {
          property: "og:description",
          content: `Волго-Вятский колледж информатики, финансов, права, управления в Кирове Колледж «ВВКИФПУ»: Адрес: 610002, г.Киров, ул.Герцена 41 Мы на карте Режим работы ВВКИФПУ: Пн — с 8:00 до 19:00 Вт — с 8:00 до 19:00 Ср — с 8:00 до 19:00 Чт — с 8:00 до 19:00 Пт — с 8:00 до 19:00 Сб — с 8:00`,
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
