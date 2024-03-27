<template>
  <div class="main__container">
    <div class="main__menu">
      <div class="main__content">
        <swiper
          class="main__swiper"
          :slidesPerView="1"
          :slidesPerGroup="1"
          :effect="'fade'"
          :loop="false"
          :rewind="true"
          :modules="modules"
          :navigation="false"
          :pagination="pagination"
          @swiper="onSwiperInit"
        >
          <swiper-slide v-for="item in arrSlider" :key="item">
            <div class="main__slide">
              <div class="main__about">
                <p class="main__code">{{ item.code }}</p>
                <h1 class="main__title">{{ item.title }}</h1>
                <p class="main__des" ref="el"></p>
              </div>
              <!-- <div class="main__image">
                  <img :src="'../slider.png'" />
                </div> -->
            </div>
          </swiper-slide>

          <div class="main__pagination">
            <div class="main__pagination_item"></div>
          </div>
          <div class="main__navigate">
            <div class="main__navigate_menu">
              <div
                onmousedown="return false"
                onselectstart="return false"
                class="slider__navigation next"
                @click="swiper.slideNext()"
              >
                <button class="main__navigate_btn">
                  <img src="@/assets/images/UI/prev.svg" />
                </button>
              </div>
              <div
                onmousedown="return false"
                onselectstart="return false"
                class="slider__navigation prev"
                @click="swiper.slidePrev()"
              >
                <button class="main__navigate_btn">
                  <img src="@/assets/images/UI/next.svg" />
                </button>
              </div>
            </div>
          </div>
        </swiper>
        <MainViParticles />
      </div>
    </div>
    <div class="main__buttons">
      <div class="main__card">
        <button class="main__btn" :style="isColor">набор 2024</button>
        <button class="main__btn" :style="isColor">день отквытых дверей</button>
        <button class="main__btn" :style="isColor">документы</button>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  props: {
    isColor: { type: String },
  },
  data() {
    return {
      swiper: null,
      typedInstances: [],
      arrSlider: [
        {
          code: "09.02.04",
          title: "Разрабатывай современные приложения: c#, js, HTML5, CSS",
          des: `Студенты углубятся в изучение языков программирования таких
              как, C#, JavaScript, HTML, CSS, SQL, а также изучат
              современные подходы к разработке! Это идеальное решение для
              тех, кто стремится усовершенствовать свои навыки в создании
              современных приложений.`,
          path: "../back.png",
        },
        {
          code: "40.02.02",
          title: "Освой правоохранительную деятельность и ее аспекты",
          des: `Студенты углубятся в изучение современных аспектов 
            правоохранительной деятельности, включая юридические аспекты использованиятехнологий,
            кибербезопасность, анализ данных и др. 
            Это идеальное решение для тех, кто стремится развить свои навыки в области права с учетом цифровизации современного мира.`,
          path: "../back.png",
        },
        {
          code: "43.02.10",
          title: "Изучения мира туризма и исследований",
          des: `Студенты погрузятся в мир современного туризма, изучая технологии бронирования, анализа рынка, управления гостиничными ресурсами и другие 
            актуальные аспекты. Это идеальное решение для тех, кто 
            стремится развить свои навыки в индустрии туризма с использованием современных подходов и инструментов.`,
          path: "https://swiperjs.com/demos/images/nature-2.jpg",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiperInit(instance) {
      this.swiper = instance;
    },
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
    handleSlideChange() {
      const activeIndex = this.swiper.activeIndex;
      const previousIndex = this.swiper.previousIndex;

      if (this.typedInstances[previousIndex]) {
        this.typedInstances[previousIndex].destroy();
        this.typedInstances[previousIndex] = null;
      }

      const currentDes = this.$refs.el[activeIndex];
      const typed = new Typed(currentDes, {
        strings: [this.arrSlider[activeIndex].des],
        typeSpeed: 15,
        cursorChar: "",
      });
      this.typedInstances[activeIndex] = typed;
    },
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        el: ".main__pagination_item",
      },
      modules: [EffectFade, Pagination, Navigation],
    };
  },
  mounted() {
    this.swiperInit = true;
    this.swiper.on("slideChange", this.handleSlideChange);
    this.handleSlideChange();
  },
};
</script>

<style scoped>
.main__container {
  width: 100vw;
  height: 100vh;
}
.main__menu {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
.main__swiper {
  position: relative;
  margin-top: 50px;
  z-index: 10;
}
.main__about {
  max-width: 1000px;
  min-height: 300px;
  /* margin-left: 50px; */
}
.main__code {
  font-family: "inter";
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #bababa;
  margin-bottom: 10px;
}
.main__title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 68px;
  color: white;
  /* max-width: 920px; */
  text-align: center;
  line-height: 90%;
  margin-bottom: 25px;
}
.main__des {
  font-family: "inter";
  font-size: 16px;
  font-weight: 400;

  text-align: center;
  color: #d9d8d8;
  min-height: 90px;
}
.main__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main__image {
  /* border: 1px solid white;
    padding: 15px 15px 30px 30px; */
  /* max-width: 600px;
    min-width: 600px; */
  /* margin-left: 50px; */
}
.main__pagination {
  position: absolute;
  bottom: 45%;
  z-index: 15;
}
.main__pagination_item {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}
.main__buttons {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  bottom: 0;
  z-index: 10;
}
.main__card {
  padding-bottom: 40px;
}
.main__btn {
  position: relative;
  font-size: 21px;
  padding: 18px 45px;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.main__btn:nth-child(1) {
  transform: translateX(10px);
}
.main__btn:last-child {
  transform: translateX(-10px);
}
.main__navigate {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__navigate_menu {
  display: flex;
  align-items: center;
}
.main__navigate_btn {
  margin: 0 20px;
}
</style>
