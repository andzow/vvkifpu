<template>
  <div class="app">
    <UISpecialityViMainInformation
      :specialityTitle="specialityTitle"
      :arrDes="arrDes"
      :arrProffesions="arrProffesions"
      :imageSrc="imageSrc"
      :backImage="backImage"
      :arrCrumbs="arrCrumbs"
      :codeSpec="codeSpec"
      breadcrumbs="09.02.04 Информационные системы"
    />
    <UISpecialityViBasics
      v-if="arrFeatures && arrFiles && arrAbout && arrLearn && arrSert"
      :arrAbout="arrAbout"
      :arrLearn="arrLearn"
      :arrFeatures="arrFeatures"
      :arrFiles="arrFiles"
      :arrSert="arrSert"
    />
    <MainViApplication />
  </div>
</template>

<script>
import axios from "axios";
import { USE_STRAPI } from "~/url";

export default {
  setup() {
    useHead({
      title:
        "Поступить на программиста после 9 класса в Кирове - Стать программистом C++ PHP C# Delphi 1C в Кирове",
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
          content: `Специальность 04.02.07 «Информационные системы и программирование» Стань перспективным разработчиком в сфере IT. Изучаем самые актуальные технологии Java, C#, HTML, CSS, JavaScript, и прочее… Создаем проекты для портфолио (по каждой изучаемой технологии) Высокие требования к выполняемым проектам Дебагинг, рефакторинг, тестирование Диплом… Read More`,
        },
        {
          name: "keywords",
          content: "Колледж киров, Информационные системы",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Поступить на программиста после 9 класса в Кирове - Стать программистом C++ PHP C# Delphi 1C в Кирове",
        },
        {
          property: "og:description",
          content: `Специальность 04.02.07 «Информационные системы и программирование» Стань перспективным разработчиком в сфере IT. Изучаем самые актуальные технологии Java, C#, HTML, CSS, JavaScript, и прочее… Создаем проекты для портфолио (по каждой изучаемой технологии) Высокие требования к выполняемым проектам Дебагинг, рефакторинг, тестирование Диплом… Read More`,
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        {
          property: "og:site_name",
          content: "Стать программистом C++ PHP C# Delphi 1C в Кирове",
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
      arrCrumbs: null,
      codeSpec: null,
      specialityTitle: null,
      arrDes: null,
      backImage: "../assets/images/Speciality/information.webp",
      arrProffesions: null,
      imageSrc: `<svg class="image_opacity" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="path" d="M66 21L26 44.094L66 67.1881L66 21ZM44.5359 50.177L29.5359 76.1577L36.4641 80.1577L51.4641 54.177L44.5359 50.177Z" fill="white"/>
</svg>`,
      arrAbout: null,
      arrLearn: null,
      arrFeatures: null,
      arrFiles: null,
      arrSert: null,
      checkVer: useChangeSpeciality(),
    };
  },
  methods: {
    async initInformation() {
      try {
        const { data } = await axios.get(
          `${USE_STRAPI}specialties/4/?populate=docFiles&populate=sertImage`
        );
        this.arrFeatures = await data.data.attributes.Data.arrFeatures;
        this.specialityTitle = await data.data.attributes.Data.specialityTitle;
        this.arrDes = await data.data.attributes.Data.arrDes;
        this.arrProffesions = await data.data.attributes.Data.arrProffesions;
        this.arrAbout = await data.data.attributes.Data.arrAbout;
        this.arrLearn = await data.data.attributes.Data.arrLearn;
        this.codeSpec = await data.data.attributes.Data.codeSpec;
        this.arrFiles = data.data.attributes.docFiles.data;
        this.arrSert = data.data.attributes.sertImage.data;
        this.arrCrumbs = [
          {
            name: `${this.codeSpec} ${this.specialityTitle}`,
            path: "/speciality/information-systems",
          },
        ];
      } catch {}
    },
  },
  mounted() {
    this.initInformation();
  },
  watch: {
    arrSert(val) {
      if (val !== null) {
        this.checkVer = true;
      }
    },
  },
};
</script>

<style scoped>
.app {
  overflow-x: hidden;
}
</style>
