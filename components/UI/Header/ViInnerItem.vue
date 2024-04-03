<template>
  <ul
    class="header__slide"
    :style="calcLeftDistance"
    @mouseleave="$emit('closeSlide', $event)"
  >
    <li
      class="header__slide_text"
      :style="summFontSizeStyle"
      v-for="item in arrChildren"
      :key="item"
      @click="redirectPage(item)"
      :class="{
        activeTextChildren: bodyClassName,
        hoverText: !bodyClassName,
      }"
    >
      <NuxtLink class="header__slide_link" :to="item.path">{{
        item.name
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    arrChildren: {
      type: Array,
    },
    idx: {
      type: Number,
    },
    bodyClassName: {
      type: Boolean,
    },
    distancePx: { type: Object },
  },
  data() {
    return {
      fontSize: useFontSize(),
    };
  },
  computed: {
    calcLeftDistance() {
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const backgroundColor = computedStyle.backgroundColor;

      if (this.arrChildren && !document.body.className) {
        return {
          top: `${!this.idx ? "140%" : "160%"}`,
          left: `${
            !this.idx ? this.distancePx.left - 400 : this.distancePx.left - 345
          }px`,
        };
      }
      return {
        top: `${!this.idx ? "140%" : "160%"}`,
        left: `${
          !this.idx ? this.distancePx.left - 400 : this.distancePx.left - 345
        }px`,
        background: backgroundColor,
      };
    },
    summFontSizeStyle() {
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const color = computedStyle.color;
      if (!document.body.className) return;
      return {
        fontSize: `${this.fontSize}px`,
        color: color,
        background: computedStyle.backgroundColor,
      };
    },
  },
  methods: {
    redirectPage(item) {
      this.$router.push(item.path);
      this.$emit("close");
    },
  },
  mounted() {
    const elements = document.querySelectorAll(".header__slide_link");

    elements.forEach((el) => {
      el.style.fontSize = this.fontSize + "px";
    });
  },
};
</script>

<style scoped>
.header__slide {
  position: absolute;
  padding: 15px 0;
  max-width: 400px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 0;
}
.header__slide_text {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 20px;
  color: #333;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease;
}
.header__slide_link {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  width: 100%;
}
.activeTextChildren:hover {
  text-decoration: underline;
}

.hoverText:hover {
  color: white;
  background: #542fe6;
}
</style>
