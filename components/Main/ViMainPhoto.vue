<template>
  <section class="main" @mousemove="handleMouseMove" ref="main">
    <div class="main__background" :style="backgroundTransform"></div>
    <MainViMainItem :isColor="isColor" />
    <MainViParticles />
    <!-- <MainViMainSlider :isColor="isColor" /> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      backgroundTransform: "transform: translateX(-50%)",
      isColor: "color: #6110E9",
    };
  },
  methods: {
    handleMouseMove(event) {
      const mainWidth = this.$refs?.main?.offsetWidth;
      const mouseX = event.clientX;
      const percent = (mouseX / mainWidth) * 100;
      if (percent > 50) {
        this.isColor = "color: #1460d3";
      } else {
        this.isColor = "color: #6110E9";
      }
      const adjustedPercent = percent * 0.3 + 35;
      this.backgroundTransform = `transform: translateX(${-adjustedPercent}%)`;
    },
    initTypedJs() {
      new Typed(this.$refs.el[0], {
        strings: [
          `Студенты углубятся в изучение языков программирования таких
          как, C#, JavaScript, HTML, CSS, SQL, а также изучат
          современные подходы к разработке! Это идеальное решение для
          тех, кто стремится усовершенствовать свои навыки в создании
          современных приложений.`,
        ],
        typeSpeed: 20,
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  background: black;
}
.main__background {
  position: absolute;
  top: 0;
  left: 50%;
  width: 400%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
  /* background-image: linear-gradient(
    to right,
    #df3575 0%,
    #fb5b55 30%,
    #ff9152 100%
  ); */
  overflow: hidden;
  z-index: 1;
}
</style>
