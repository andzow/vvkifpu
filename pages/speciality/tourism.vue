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
      breadcrumbs="43.02.10 Туризм"
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
      arrDes: null,
      backImage: "../assets/images/Speciality/tourism-back.webp",
      arrProffesions: null,
      imageSrc: `<svg class="image_opacity" width="45" height="52" viewBox="0 0 45 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="path" fill-rule="evenodd" clip-rule="evenodd" d="M43.9238 16.7917C38.8605 -5.57999 5.71629 -5.60583 0.627119 16.7658C-2.34371 29.8892 5.81962 41.0233 12.9496 47.895C18.168 52.9067 26.383 52.9067 31.5755 47.895C38.7313 41.0233 46.8946 29.915 43.9238 16.7917ZM30.3358 21.4675C30.3358 25.9189 26.7272 29.5275 22.2758 29.5275C17.8244 29.5275 14.2158 25.9189 14.2158 21.4675C14.2158 17.0161 17.8244 13.4075 22.2758 13.4075C26.7272 13.4075 30.3358 17.0161 30.3358 21.4675Z" fill="white"/>
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
          "http://localhost:1337/api/specialties/9/?populate=docFiles&populate=sertImage"
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
            path: "/speciality/tourism",
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
