<template>
  <div class="app">
    <UISpecialityViMain
      :specialityTitle="specialityTitle"
      :codeSpec="codeSpec"
      :arrDes="arrDes"
      :arrProffesions="arrProffesions"
      :imageSrc="imageSrc"
      :backImage="backImage"
      :arrCrumbs="arrCrumbs"
      breadcrumbs="40.02.02 Правоохранительная деятельность"
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
        "Правоохранительная деятельность - Поступить учиться на юриста после 9 класса в Кирове",
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
          content: `Решил поступить выучиться на юриста в Кирове? Тогда поступай в Волго-Вятский колледж информатики, финансов, права, управления.`,
        },
        {
          name: "keywords",
          content: "Колледж киров, Правоохранительная деятельность",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "Правоохранительная деятельность - Поступить учиться на юриста после 9 класса в Кирове",
        },
        {
          property: "og:description",
          content: `Решил поступить выучиться на юриста в Кирове? Тогда поступай в Волго-Вятский колледж информатики, финансов, права, управления.`,
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        {
          property: "og:site_name",
          content: "Поступить на юриста после 9 класса Киров",
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
      codeSpec: null,
      specialityTitle: null,
      arrCrumbs: null,
      arrDes: null,
      backImage: "../assets/images/Speciality/pravoved.webp",
      arrProffesions: null,
      imageSrc: `<svg class="image_opacity" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_53_2699)">
<path class="path" d="M80.8423 46.4728L72.9088 24.9407C71.8161 21.9673 68.6877 20.3398 65.6135 21.1561L52.5857 24.6307V21.5333C52.5702 18.1543 47.4346 18.1569 47.4191 21.5333V26.0076L33.8462 29.6269C30.6042 30.4923 27.9743 32.8896 26.8118 36.0387L19.1626 56.8061C19.0567 57.0929 19.0024 58.4775 19.0024 58.4775C18.8009 68.6145 31.2707 74.6673 38.6306 67.421C40.9323 65.2355 42.2524 62.1614 42.2524 58.989C42.2524 58.989 42.1982 57.098 42.0974 56.8139L34.1666 35.0079C34.4869 34.8452 34.8253 34.7134 35.1792 34.6204L47.4191 31.3551V75.7833H31.9191C28.5401 75.7988 28.5427 80.9344 31.9191 80.9499H68.0858C71.4648 80.9344 71.4622 75.7988 68.0858 75.7833H52.5857V29.9756L65.2337 26.6018L57.9126 46.4702C57.8067 46.7569 57.7524 48.1416 57.7524 48.1416C57.7524 54.6154 62.5858 59.9397 68.7574 60.2626C71.984 60.4331 75.0452 59.3042 77.3806 57.0877C79.6823 54.9022 81.0024 51.828 81.0024 48.6557C81.0024 48.6557 80.9482 46.7569 80.8423 46.4702V46.4728ZM35.9801 55.1166H25.2902L30.6713 40.513L35.9801 55.1166ZM69.3774 30.2985L74.7146 44.7833H64.0402L69.3774 30.2985Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_53_2699">
<rect width="62" height="62" fill="white" transform="translate(19 19)"/>
</clipPath>
</defs>
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
    async initApp() {
      try {
        const { data } = await axios.get(
          `${USE_STRAPI}specialties/8/?populate=docFiles&populate=sertImage`
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
            path: "/speciality/pravoved",
          },
        ];
      } catch {}
    },
  },
  mounted() {
    this.initApp();
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
