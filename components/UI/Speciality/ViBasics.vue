<template>
  <section class="basics">
    <div class="basics__container" ref="basics__container">
      <div class="basics__block">
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
  methods: {
    resizeBlock() {
      const elMainContent = document.getElementById("main__content");
      if (this.$refs.basics__container) {
        this.$refs.basics__container.style.marginLeft =
          elMainContent.getBoundingClientRect().left + 20 + "px";
      }
    },
  },
  mounted() {
    this.resizeBlock();
    window.addEventListener("resize", () => {
      this.resizeBlock();
    });
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

.basics__block {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.basics__content {
  position: relative;
  /* margin-left: 40px; */
  width: 100%;
}
.basics__menu {
  position: relative;
  display: grid;
  width: 450px;
}
@media screen and (max-width: 1130px) {
  .basics__menu {
    width: 390px;
  }
}
@media screen and (max-width: 960px) {
  .basics__menu {
    display: none;
  }
  .basics__block {
    display: block;
    padding-right: 20px;
  }
}
</style>
