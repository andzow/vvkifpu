<template>
  <section class="features border" id="specialityFeatures">
    <div class="features__container" v-for="item in arrFeatures" :key="item">
      <h3 class="features__title font_special" data-font-actual="28">
        {{ item.name }}
      </h3>
      <p class="features__des font" data-font-actual="17" v-html="item.des"></p>
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
  margin-bottom: 30px;
}
.features__container:last-child {
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
@media screen and (max-width: 1320px) {
  .features__title {
    font-size: 24px !important;
  }
  .features__des {
    font-size: 16px !important;
  }
  .features__span {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 670px) {
  .features {
    padding: 40px 40px;
  }
}
@media screen and (max-width: 550px) {
  .features {
    padding: 30px 30px;
  }
  .features__title {
    font-size: 24px !important;
  }
  .features__des {
    font-size: 15px !important;
  }
  .features__span {
    font-size: 15px !important;
  }
}
</style>
