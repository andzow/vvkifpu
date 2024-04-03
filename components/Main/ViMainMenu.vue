<template>
  <div class="main__menu">
    <MainViMainAbout />
    <div class="main__slider">
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
          <div class="main__slider_item">
            <div class="main__slider_header">
              <div class="main__slider_image">
                <img class="main__slider_img" :src="item.imageSrcFirst" />
              </div>
              <p class="main__slider_inf">{{ item.inf }}</p>
            </div>
            <div class="main__slider_block">
              <p class="main__slider_code">{{ item.code }}</p>
            </div>
            <h4 class="main__slider_title">{{ item.title }}</h4>
            <p class="main__slider_des" ref="el">{{ item.des }}</p>
          </div>
        </swiper-slide>
        <div class="main__control">
          <div class="main__control_pagination">
            <div class="main__control_item"></div>
          </div>
        </div>
      </swiper>
      <div class="main__nav">
        <button class="main__nav_prev" @click="swiper.slidePrev()">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#5D1DE2" />
            <path
              d="M15 24H33M15 24L22.5 17M15 24L22.5 31"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="main__nav_next" @click="swiper.slideNext()">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="24"
              transform="matrix(-1 0 0 1 48 0)"
              fill="#5D1DE2"
            />
            <path
              d="M33 24H15M33 24L25.5 17M33 24L25.5 31"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Pagination } from "swiper/modules";

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
          title: "Информационные системы",
          des: `Студенты углубятся в изучение языков программирования таких
                как, C#, JavaScript, HTML, CSS, SQL, а также изучат
                современные подходы к разработке!`,
          inf: "Разработка сайтов и ПО",
          imageSrcFirst: "../informationSystem2.png",
          imageSrcSec:
            "../assets/images/SpecialitySlider/informationSystem2.webp",
        },
        {
          code: "40.02.02",
          title: "Правоохранительная деятельность",
          des: `Студенты углубятся в изучение современных аспектов 
              правоохранительной деятельности, включая юридические аспекты использования технологий,
              кибербезопасность, анализ данных и др.`,
          inf: "Юридические аспекты использования",
          imageSrcFirst: "../enform1.png",
          imageSrcSec: "../assets/images/SpecialitySlider/enform2.webp",
        },
        {
          code: "43.02.10",
          title: "Туризм",
          des: `Студенты погрузятся в мир современного туризма, изучая технологии бронирования, анализа рынка, управления гостиничными ресурсами и другие 
              актуальные аспекты.`,
          inf: "Технологии бронирования",
          imageSrcFirst: "../tourism2.png",
          imageSrcSec: "../assets/images/SpecialitySlider/tourism2.webp",
        },
        {
          code: "43.02.17",
          title: "Технологии индустрии красоты",
          des: `Студенты погрузятся в мир современного туризма, изучая технологии бронирования, анализа рынка, управления гостиничными ресурсами и другие 
              актуальные аспекты.`,
          inf: "Внешний вид — лучшая реклама",
          imageSrcFirst: "../beauty1.png",
          imageSrcSec: "../assets/images/SpecialitySlider/beauty2.webp",
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
        el: ".main__control_item",
      },
      modules: [EffectFade, Pagination],
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
.main__menu {
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.main__slider {
  position: relative;
  min-width: 674px;
  max-width: 674px;
  min-height: 578px;
  background: white;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 50px 50px 30px 50px;
}
.main__swiper {
  max-width: 624px;
}
.main__slider_header {
  position: relative;
  min-width: 100%;
  min-height: 270px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
}
.main__slider_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main__slider_inf {
  position: relative;
  padding: 13px 40px 13px 20px;
  background: #5d1de2;
  color: white;
  font-size: 15px;
  font-weight: 500;
  font-family: "inter", sans-serif;
  border-top-right-radius: 40px;
  z-index: 5;
}
.main__slider_block {
  display: flex;
  align-items: flex-start;
}
.main__slider_code {
  font-size: 18px;
  font-family: "inter", sans-serif;
  font-weight: 800;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 110%
  );
  margin-bottom: 15px;
}
.main__slider_title {
  font-size: 22px;
  font-family: "inter", sans-serif;
  font-weight: 700;
  color: black;
  margin-bottom: 8px;
}
.main__slider_des {
  font-size: 16px;
  font-family: "inter", sans-serif;
  font-weight: 400;
  line-height: 140%;
  color: #858585;
  min-height: 70px;
}
.main__nav_prev {
  position: absolute;
  top: 30%;
  left: 4%;
  z-index: 3;
}
.main__nav_next {
  position: absolute;
  top: 30%;
  right: 4%;
  z-index: 3;
}
.main__control {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
</style>
