<template>
  <div class="images">
    <div class="images_container">
      <div class="images_image" v-for="item in arrImages" :key="item">
        <a :href="item" target="_blank"> <img :src="item" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrImages: [
        "../assets/images/Speciality/1.png",
        "../assets/images/Speciality/2.png",
        "../assets/images/Speciality/3.png",
        "../assets/images/Speciality/4.png",
        "../assets/images/Speciality/5.png",
        "../assets/images/Speciality/6.png",
        "../assets/images/Speciality/7.png",
      ],
    };
  },
};
</script>

<style scoped>
.images {
  width: 100vw;
}
.images_container {
  max-width: 1800px;
  padding: 0 20px 80px 20px;
  margin: 0 auto;
}
</style>
