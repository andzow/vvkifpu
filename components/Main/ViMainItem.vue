<template>
  <div class="main__container">
    <div class="main__menu">
      <MainViMainAbout />
      <div class="main__slider border">
        <swiper
          class="main__swiper"
          :slidesPerView="1"
          :slidesPerGroup="1"
          :effect="'fade'"
          :loop="false"
          :rewind="false"
          :modules="modules"
          :navigation="false"
          :pagination="pagination"
          @swiper="onSwiperInit"
        >
          <swiper-slide v-for="item in arrSlider" :key="item">
            <div class="main__slider_item">
              <div class="main__slider_header">
                <div class="main__slider_main">
                  <img
                    class="image_opacity"
                    :src="item.imageSrcFirst"
                    alt="Слайдер"
                  />
                </div>
                <div class="main__slider_sec">
                  <img
                    class="image_opacity"
                    :src="item.imageSrcSec"
                    alt="Слайдер"
                  />
                </div>
                <h4
                  class="main__slider_name font"
                  data-font-actual="18"
                  ref="main__slider_name"
                >
                  {{ item.codeText }}
                </h4>
              </div>
              <div class="main__slider_content">
                <div class="main__slider_block">
                  <p
                    class="main__slider_code font"
                    ref="main__slider_code"
                    data-font-actual="18"
                  >
                    {{ item.code }}
                  </p>
                </div>
                <h3
                  class="main__slider_title font"
                  ref="main__slider_title"
                  data-font-actual="22"
                >
                  {{ item.title }}
                </h3>
                <p
                  class="main__slider_des font"
                  ref="el"
                  data-font-actual="16"
                ></p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <MainViMainControl
          @prev="swiper.slidePrev()"
          @next="swiper.slideNext()"
        />
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
          code: "09.02.07",
          title: "Информационные системы",
          des: `Студенты углубятся в изучение языков программирования таких
                как, C#, JavaScript, HTML, CSS, SQL, а также изучат
                современные подходы к разработке!`,
          codeText: "Разработка сайтов и ПО ",
          imageSrcFirst:
            "../assets/images/SpecialitySlider/informationSystem1.webp",
          imageSrcSec:
            "../assets/images/SpecialitySlider/informationSystem2.webp",
        },
        {
          code: "40.02.02",
          title: "Правоохранительная деятельность",
          des: `Студенты углубятся в изучение современных аспектов 
              правоохранительной деятельности, включая юридические аспекты использованиятехнологий,
              кибербезопасность, анализ данных и др.`,
          imageSrcFirst: "../assets/images/SpecialitySlider/enform1.webp",
          imageSrcSec: "../assets/images/SpecialitySlider/enform2.webp",
          codeText: "Закон и технологии",
        },
        {
          code: "43.02.10",
          title: "Туризм",
          des: `Студенты погрузятся в мир современного туризма, изучая технологии бронирования, анализа рынка, управления гостиничными ресурсами и другие 
              актуальные аспекты.`,
          codeText: "Туристическая деятельность",
          imageSrcFirst: "../assets/images/SpecialitySlider/tourism1.webp",
          imageSrcSec: "../assets/images/SpecialitySlider/tourism2.webp",
        },
        {
          code: "43.02.17",
          title: "Технологии индустрии красоты",
          codeText: "Красота и инновации",
          des: `Студенты будут погружаться в мир индустрии красоты, изучая современные технологии, тренды в области косметики и ухода за кожей, основы макияжа, методики 
          ухода за волосами и ногтями, а также основы управления салоном красоты.`,
          imageSrcFirst: "../assets/images/SpecialitySlider/beauty1.webp",
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
    resizeStyle() {
      if (window.innerWidth <= 1400) {
        this.$refs.main__slider_title.forEach((el) => {
          el.setAttribute("data-font-actual", "18");
        });
        this.$refs.main__slider_name.forEach((el) => {
          el.setAttribute("data-font-actual", "16");
        });
        this.$refs.main__slider_code.forEach((el) => {
          el.setAttribute("data-font-actual", "16");
        });
        this.$refs.el.forEach((el) => {
          el.setAttribute("data-font-actual", "16");
        });
      }
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
    this.resizeStyle();
  },
};
</script>

<style scoped>
.main__container {
  position: relative;
  width: 100vw;
  height: 100%;
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  z-index: 5;
}
.main__menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 170px 0 0 0;
  width: 100%;
}

.main__slider {
  min-width: 624px;
  min-height: 578px;
  background: white;
  padding: 30px;
}
.main__swiper {
  max-width: 624px;
}
.main__slider_header {
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  min-height: 273px;
}

.main__slider_main {
  position: absolute;
  bottom: 0%;
  z-index: 2;
}
.main__slider_sec {
  position: absolute;
  top: 0%;
  right: 25%;
  z-index: 1;
}

.main__slider_main img {
  width: 209px;
  height: 191px;
  object-fit: cover;
}
.main__slider_sec img {
  width: 341px;
  height: 187px;
  object-fit: cover;
}
.main__slider_name {
  position: absolute;
  top: 0%;
  right: 0%;
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
  font-size: 18px;
  font-family: "inter", sans-serif;
  font-weight: 600;
  color: black;
}
.main__slider_block {
  display: flex;
  align-items: center;
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

@media screen and (max-width: 1670px) {
  .main__slider {
    min-width: auto;
    min-height: auto;
    width: auto;
    height: auto;
    max-width: 650px;
    background: white;
    padding: 30px;
  }
  .main__menu {
    margin: 190px 0 0 0;
  }
  .main__slider_main img {
    width: 180px;
    height: 161px;
  }
  .main__slider_sec img {
    width: 351px;
    height: 177px;
  }
  .main__slider_main {
    bottom: 2%;
  }
  .main__slider_header {
    width: 100%;
    margin-bottom: 20px;
    min-height: 233px;
  }
}
@media screen and (max-width: 1600px) {
  .main__menu {
    margin: 180px 0 0 0;
  }
  .main__slider {
    max-width: 550px;
  }
  .main__slider_main {
    bottom: 5%;
    display: none;
  }
  .main__slider_main img {
    width: 150px;
    height: 131px;
  }
  .main__slider_sec {
    left: 0;
  }
  .main__slider_sec img {
    width: 100%;
    height: 170px;
  }
  .main__slider_header {
    margin-bottom: 5px;
    min-height: 190px;
  }
  .main__slider_name {
    font-size: 16px !important;
  }
  .main__slider_title {
    font-size: 20px !important;
  }
  .main__slider_des {
    font-size: 15px !important;
  }
  .main__slider_code {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 1100px) {
  .main__container {
    display: block;
    align-items: auto;
  }
  .main__slider {
    max-width: 500px;
  }
  .main__menu {
    margin: 190px 0 0 0;
  }
  .main__slider_name {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .main__slider {
    display: none;
  }
}
@media screen and (max-width: 990px) {
  .main__menu {
    margin: 120px 0 0 0;
    padding-bottom: 40px;
  }
}
</style>
