<template>
  <div class="basics__item" ref="basicsMenu" :style="settingsStyle">
    <div class="basics__item_header">
      <h2 class="basics__item_title">Основные спец. дисциплины</h2>
      <div class="basics__item_arrow">
        <svg
          class="news__svg"
          width="55"
          height="19"
          viewBox="0 0 66 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="path arrow"
            d="M66 9.5L51 0.839743L51 18.1603L66 9.5ZM52.5 8L-6.55671e-08 8L6.55671e-08 11L52.5 11L52.5 8Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <p class="basics__item_name" v-for="item in arrNames" :key="item">
      {{ item }}
    </p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  scrollToTop: true,
  props: {
    settingsObject: {
      type: Object,
    },
  },
  data() {
    return {
      arrNames: [
        "Чему научат?",
        "Область проф. деятельности",
        "Немного о нас",
        "Документы",
        "Лицензия и аккредитация",
      ],
      distanceOnContainer: null,
      distanceBottomOnContainer: null,
      distanceHeaderUnderActive: true,
      constScrollTrigger: null,
      scrollTriggerVeriable: null,
      settingSt: null,
      endMarkers: "60%",
    };
  },
  methods: {
    setPosition() {
      if (!this.distanceHeaderUnderActive) {
        return;
      }
      this.distanceOnContainer = document
        .querySelector(".basics__container")
        .getBoundingClientRect().top;
      this.distanceHeaderUnderActive = false;
    },
    setSettings() {
      this.scrollTriggerVeriable = {
        trigger: ".basics__container",
        markers: false,
        start: `top ${240}px`,
        end: "bottom 60%",
        onEnter: () => {
          this.setPosition();
          this.settingSt = {
            position: "fixed",
            top: `${this.distanceOnContainer}px`,
            alignSelf: "auto",
          };
          setTimeout(() => {
            this.constScrollTrigger.scrollTrigger.vars.end = `bottom ${
              this.$refs.basicsMenu.getBoundingClientRect().bottom
            }px`;
            ScrollTrigger.refresh();
          }, 0);
        },
        onLeaveBack: () => {
          this.settingSt = {
            position: "relative",
            alignSelf: "auto",
            top: `0px`,
          };
        },
        onLeave: () => {
          this.settingSt = {
            position: "relative",
            alignSelf: "end",
            top: `0px`,
          };
        },
        onEnterBack: () => {
          this.settingSt = {
            position: "fixed",
            alignSelf: "auto",
            top: `${this.distanceOnContainer}px`,
          };
        },
      };
    },
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    gsap.registerPlugin(ScrollTrigger);

    this.setSettings();

    setTimeout(() => {
      this.constScrollTrigger = gsap.to(".basics__container", {
        scrollTrigger: this.scrollTriggerVeriable,
      });
    }, 100);
  },
  computed: {
    settingsStyle(obj) {
      return this.settingSt;
    },
  },
};
</script>

<style scoped>
.basics__item {
  position: relative;
  z-index: 0;
}
.basics__item_header {
  position: relative;
  margin-bottom: 35px;
  top: 0;
  width: 450px;
  z-index: 1000;
}
.basics__item_arrow {
  position: absolute;
  top: 70%;
  left: 72%;
}
.basics__item_title {
  position: relative;
  font-size: 48px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  color: white;
}
.basics__item_name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 20px;
  color: white;
}
</style>
