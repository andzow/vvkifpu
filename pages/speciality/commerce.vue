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
      breadcrumbs="38.02.04 Коммерция (по отраслям)"
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
      codeSpec: null,
      specialityTitle: null,
      arrCrumbs: null,
      backImage: "../assets/images/Speciality/commerce-back.webp",
      arrProffesions: null,
      arrDes: null,
      imageSrc: `<svg class="image_opacity" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_54_3697)">
<path class="path" d="M42.25 29.3333C42.25 23.6267 50.9248 19 61.625 19C72.3252 19 81 23.6267 81 29.3333C81 35.0399 72.3252 39.6667 61.625 39.6667C50.9248 39.6667 42.25 35.0399 42.25 29.3333ZM61.625 44.8333C58.9719 44.8333 56.4557 44.5363 54.1566 44.0196C50.6458 41.3872 44.8927 39.6667 38.375 39.6667C27.6748 39.6667 19 44.2934 19 50C19 55.7066 27.6748 60.3333 38.375 60.3333C49.0752 60.3333 57.75 55.7066 57.75 50C57.75 49.9251 57.7319 49.8527 57.7293 49.7778H57.75V55.1667C57.75 60.8732 49.0752 65.5 38.375 65.5C27.6748 65.5 19 60.8732 19 55.1667V60.3333C19 66.0399 27.6748 70.6667 38.375 70.6667C49.0752 70.6667 57.75 66.0399 57.75 60.3333V65.5C57.75 71.2066 49.0752 75.8333 38.375 75.8333C27.6748 75.8333 19 71.2066 19 65.5V70.6667C19 76.3732 27.6748 81 38.375 81C49.0752 81 57.75 76.3732 57.75 70.6667V70.46C59.0029 70.5943 60.2972 70.6667 61.625 70.6667C72.3252 70.6667 81 66.0399 81 60.3333V55.1667C81 60.6407 73.0123 65.1099 62.9167 65.4664V60.2998C73.0123 59.9432 81 55.4767 81 50V44.8333C81 50.3074 73.0123 54.7766 62.9167 55.1331V49.9664C73.0123 49.6099 81 45.1433 81 39.6667V34.5C81 40.2066 72.3252 44.8333 61.625 44.8333Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_54_3697">
<rect width="62" height="62" fill="white" transform="translate(19 19)"/>
</clipPath>
</defs>
</svg>
`,
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
          "http://localhost:1337/api/specialties/7/?populate=docFiles&populate=sertImage"
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
            path: "/speciality/commerce",
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
