<template>
  <section class="about">
    <div class="about__container">
      <h2 class="about__title font" data-font-actual="34">Малый и большой спортивный зал.</h2>
      <div class="about__content">
        <div class="about__images image" v-for="imageSrc in arrImages" :key="imageSrc">
          <img :src="imageSrc" />
        </div>
      </div>
      <p class="about__des font" data-font-actual="16">
        Среди учащихся колледжа лица, имеющие инвалидность — отсутствуют.<br />
        При входе в колледж установлена кнопка вызова социального педагога, для
        обращений лиц-инвалидов.
      </p>
      <img class="about__image image" :src="'../assets/images/Information/3.png'" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrImages: [
        "../assets/images/Information/1.jpg",
        "../assets/images/Information/2.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.about {
  width: 100vw;
}
.about__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.about__title {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  margin-bottom: 30px;
  max-width: 900px;
  color: black;
}
.about__images {
  margin-bottom: 20px;
}
.about__des {
  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 900px;
  color: black;
}
.about__image {
  margin-bottom: 80px;
}
</style>
