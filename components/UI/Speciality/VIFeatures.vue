<template>
  <section class="features">
    <div class="features__container" v-for="item in arrFeatures" :key="item">
      <h3 class="features__title">{{ item.name }}</h3>
      <p class="features__des" v-html="item.des"></p>
    </div>
    <span class="features__span"
      >100% выпускников по специальности трудоустраиваются.</span
    >
  </section>
</template>

<script>
export default {
  props: {
    arrFeatures: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.features {
  background: white;
  padding: 30px 30px 30px 60px;
  margin-bottom: 30px;
}
.features__container {
  margin-bottom: 50px;
}
.features__container:nth-child(2) {
  margin-bottom: 0px;
}
.features__title {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 20px;
  color: black;
}
.features__des {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
  max-width: 1100px;
  color: black;
}
.features__span {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 10px;
  max-width: 1100px;
  color: black;
}
</style>
