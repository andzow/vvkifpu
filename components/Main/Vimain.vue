<template>
  <main
    class="main"
    @mousemove="handleMouseMove"
    ref="main"
    id="sandbox-container"
    
  >
    <div class="main__background" :style="backgroundTransform"></div>
    <div class="main__component">
      <p class="main__text font" ref="el" data-font-actual="68"></p>
    </div>
    <div class="main__options" :style="isColor">
      <p class="main__option main__option_left font border" data-font-actual="30">набор 2024</p>
      <p class="main__option font border" data-font-actual="30">день открытых дверей</p>
      <p class="main__option main__option_right font border" data-font-actual="30">документы</p>
    </div>
  </main>
</template>

<script>
import Typed from "typed.js";
export default {
  data() {
    return {
      backgroundTransform: "transform: translateX(-50%)",
      isColor: "color: #6110E9",
    };
  },
  mounted() {
    const typed = new Typed(this.$refs.el, {
      strings: [
        "Открытия через обучение, уверенность через практику, профессионализм через опыт",
        "Изучай, применяй, достигай: формула успеха в профессиональном мире",
        "Фундаментальное образование, максимум практики и погружение в профессию",
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      showCursor: false,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 700,
    });
  },
  methods: {
    handleMouseMove(event) {
      const mainWidth = this.$refs.main.offsetWidth;
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  z-index: 3;
  display: flex;
  align-items: flex-end;
}
.main__text {
  text-align: center;
  color: #fff;
  font-size: 68px;
  width: 1150px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.main__options {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}
.main__option {
  position: relative;
  z-index: 2;
  font-size: 30px;
  padding: 20px 70px;
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
