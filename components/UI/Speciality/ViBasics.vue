<template>
  <section class="basics">
    <div class="basics__container">
      <div class="basics__menu">
        <UISpecialityViBasicsItem />
      </div>
      <div class="basics__content">
        <UISpecialityViAbout :arrAbout="arrAbout" />
        <UISpecialityViLearn :arrLearn="arrLearn" />
        <UISpecialityVIFeatures :arrFeatures="arrFeatures" />
        <UISpecialityViFiles :arrFiles="arrFiles" />
        <UISpecialityViSert :arrSert="arrSert" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    arrAbout: { type: Array },
    arrLearn: { type: Array },
    arrFeatures: { type: Array },
    arrFiles: { type: Array },
    arrSert: { type: Array },
  },
};
</script>

<style scoped>
.basics {
  width: 100vw;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
  padding: 60px 0 30px 0;
}
.basics__container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-left: 180px;
}
.basics__content {
  position: relative;
  margin-left: 40px;
  width: 100%;
}
.basics__menu {
  position: relative;
  display: grid;
  width: 450px;
}
</style>
