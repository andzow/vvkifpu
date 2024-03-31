<template>
  <div class="header__slide" :style="calcLeftDistance" @mouseleave="closeSlide">
    <p
      class="header__slide_text"
      v-for="item in arrChildren"
      :key="item"
      @click="routerPush(item)"
    >
      {{ item.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    arrChildren: {
      type: Array,
    },
  },
  computed: {
    calcLeftDistance() {
      if (this.arrChildren) {
        return {
          top: `${!this.idx ? "140%" : "160%"}`,
          left: `${
            !this.idx ? this.distancePx.left - 400 : this.distancePx.left - 345
          }px`,
        };
      }
    },
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

.header__slide_text:hover {
  color: white;
  background: #542fe6;
}

.slide-right-enter-from {
  transform: translateX(30px);
  transition: all 0.3s ease;
  opacity: 0;
}
.slide-right-enter-to {
  transform: translateX(0px);
  transition: all 0.3s ease;
  opacity: 1;
}
.slide-right-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
