<template>
  <div class="app">
    <UISpecialityViMain
      :specialityTitle="specialityTitle"
      :arrDes="arrDes"
      :codeSpec="codeSpec"
      :arrProffesions="arrProffesions"
      :imageSrc="imageSrc"
      :backImage="backImage"
      :arrCrumbs="arrCrumbs"
      breadcrumbs="43.02.17 Технологии индустрии красоты"
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

export default {
  data() {
    return {
      checkVer: useChangeSpeciality(),
      codeSpec: null,
      specialityTitle: null,
      arrCrumbs: null,
      arrDes: null,
      backImage: "../assets/images/Speciality/makeup-back.webp",
      arrProffesions: null,
      imageSrc: `<svg class="image_opacity" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="path" d="M57 14L64.0224 32.9776L83 40L64.0224 47.0224L57 66L49.9776 47.0224L31 40L49.9776 32.9776L57 14Z" fill="white"/>
<path class="path" d="M31 59L34.7813 69.2187L45 73L34.7813 76.7813L31 87L27.2187 76.7813L17 73L27.2187 69.2187L31 59Z" fill="white"/>
</svg>
`,
      arrAbout: null,
      arrLearn: null,
      arrFeatures: null,
      arrFiles: null,
      arrSert: null,
    };
  },
  methods: {
    async initApp() {
      try {
        const { data } = await axios.get(
          "http://localhost:1337/api/specialties/6/?populate=docFiles&populate=sertImage"
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
            path: "/speciality/beauty-industry",
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
