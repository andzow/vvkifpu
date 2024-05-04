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

export default {
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
          "http://localhost:1337/api/specialties/4/?populate=docFiles&populate=sertImage"
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
