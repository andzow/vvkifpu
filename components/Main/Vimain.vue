<template>
  <section
    class="main"
    @mousemove="handleMouseMove"
    ref="main"
    id="sandbox-container"
  >
    <div class="main__background" :style="backgroundTransform"></div>
    <div class="main__component">
      <p class="main__des" data-font-actual="68">Развивая таланты</p>
      <p class="main__text font" ref="el" data-font-actual="68"></p>
    </div>
    <div class="main__options" :style="isColor">
      <p
        class="main__option main__option_left font border"
        data-font-actual="30"
      >
        набор 2024
      </p>
      <p class="main__option font border" data-font-actual="30">
        день открытых дверей
      </p>
      <p
        class="main__option main__option_right font border"
        data-font-actual="30"
      >
        документы
      </p>
    </div>
    <!-- <MainViMainBackground /> -->
    <MainViParticles v-if="!$route.query.index" />
    <MainViBackground v-else-if="$route.query.index === '0'" />
    <MainViParticlesSnow v-else />
  </section>
</template>

<script>
import Typed from "typed.js";
export default {
  data() {
    return {
      backgroundTransform: "transform: translateX(-50%)",
      isColor: "color: #6110E9",
      isHome: true,
    };
  },
  mounted() {
    new Typed(this.$refs.el, {
      strings: [
        "Фундаментальное образование",
        "Открытия через обучение",
        "Изучай, применяй, достигай",
        "Покоряй вершины знаний с нами",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 3000,
      showCursor: false,
      fadeOut: false,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 700,
      loop: true,
    });
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
      // const adjustedPercent = Math.max(Math.min(percent, 65), 35);
      const adjustedPercent = percent * 0.3 + 35;
      this.backgroundTransform = `transform: translateX(${-adjustedPercent}%)`;
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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
  z-index: 1;
}
.main__component {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main__des {
  position: relative;
  text-align: center;
  color: white;
  font-size: 88px;
  border-radius: 20px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
}
.main__text {
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 52px;
  border-radius: 20px;
  padding: 0 10px;
  height: 70px;
  color: var(--violo);
  background: white;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
}
.main__options {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  z-index: 10;
}
.main__option {
  position: relative;
  z-index: 2;
  font-size: 28px;
  padding: 20px 60px;
  background: #fff;
  border-radius: 50px;
  transition: all 0.3s ease;
}
.main__option_left {
  transform: translateX(10px);
}
.main__option_right {
  transform: translateX(-10px);
}
</style>
