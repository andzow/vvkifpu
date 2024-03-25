<template>
  <Transition name="slide-right">
    <div
      class="header__inner"
      v-if="idx === activeIdxLi && item.allPages !== undefined"
      ref="inner"
    >
      <UIHeaderViNavItem
        :item="item"
        :distancePx="distancePx"
        :activeIdxLi="activeIdxLi"
        :idx="idx"
        @iItem="setItemTop"
        @slideChildren="setArrChildren"
      />
    </div>
  </Transition>
  <Transition name="slide-right">
    <div
      class="header__slide"
      v-if="arrChildren"
      :style="calcLeftDistance"
      @mouseleave="closeSlide"
    >
      <p
        class="header__slide_text"
        v-for="item in arrChildren"
        :key="item"
        @click="routerPush(item)"
      >
        {{ item.name }}
      </p>
    </div>
  </Transition>
</template>

<script>
export default {
  emits: ["slideChildren", "animateCloseLi"],
  props: {
    activeIdxLi: {
      type: Number,
    },
    item: {
      type: Object,
    },
    idx: {
      type: Number,
    },
    distancePx: { type: Object },
  },
  data() {
    return {
      arrChildren: null,
      closeMainLi: false,
      topItem: null,
    };
  },
  computed: {
    calcLeftDistance() {
      return {
        top: `${!this.idx ? "140%" : "160%"}`,
        left: `${
          !this.idx ? this.distancePx.left - 400 : this.distancePx.left - 345
        }px`,
      };
    },
  },
  methods: {
    routerPush(item) {
      this.$router.push(item.path);
      this.$emit("animateCloseLi");
      this.arrChildren = null;
    },
    setArrChildren(el) {
      this.arrChildren = el;
    },
    closeSlide(e) {
      const nameItem = "header__item";
      if (!e?.relatedTarget?.className.includes(nameItem)) {
        this.arrChildren = null;
      }
    },
    setItemTop(topY) {
      this.topItem = topY;
    },
  },

  mounted() {
    document.addEventListener("visibilitychange", () => {
      this.arrChildren = null;
    });
    if (this.activeIdxLi !== this.idx) return;
  },
};
</script>

<style scoped>
.header__inner {
  position: absolute;
  top: 100%;
  background: white;
  overflow: hidden;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  /* border-left: 2px solid #542fe6;
  border-right: 2px solid #542fe6;
  border-bottom: 2px solid #542fe6; */
  border-end-end-radius: 30px;
  border-end-start-radius: 30px;
  transition: all 0.3s ease;
  z-index: 0;
}
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
