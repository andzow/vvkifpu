<template>
  <!-- v-if="idx === activeIdxLi && item.allPages !== undefined" -->
  <Transition name="slide-right">
    <div
      class="header__inner"
      id="header__inner"
      ref="inner"
      v-if="idx === activeIdxLi && item.allPages !== undefined"
    >
      <UIHeaderViNavItem
        :item="item"
        :distancePx="distancePx"
        :activeIdxLi="activeIdxLi"
        :idx="idx"
        :bodyClassName="bodyClassName"
        @iItem="setItemTop"
        @slideChildren="setArrChildren"
        @close="$emit('close')"
      />
    </div>
  </Transition>
  <Transition name="slide-right">
    <UIHeaderViInnerItem
      v-if="arrChildren"
      :arrChildren="arrChildren"
      :bodyClassName="bodyClassName"
      @closeSlide="closeSlide"
      @close="closeSlideInner"
      :idx="idx"
      :distancePx="distancePx"
    />
  </Transition>
</template>

<script>
export default {
  emits: ["slideChildren", "animateCloseLi", "close"],
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
    bodyClassName: {
      type: Boolean,
    },
    distancePx: { type: Object },
  },
  data() {
    return {
      arrChildren: null,
      closeMainLi: false,
      topItem: null,
      fontSize: useFontSize(),
    };
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
    closeSlideInner() {
      this.arrChildren = null;
      this.$emit("close");
    },
    setItemTop(topY) {
      this.topItem = topY;
    },
  },
  watch: {
    activeIdxLi(val) {
      // const innerBl = document.getElementById("header__inner");
      // if (innerBl) {
      //   innerBl.classList.add("path");
      // }
    },
    arrChildren(val) {
      setTimeout(() => {
        if (this.bodyClassName) {
          const textEl = document.querySelectorAll(".header__slide_text");
          for (let i = 0; i < textEl.length; i++) {
            textEl[i].classList.add(document.body.className);
          }
        }
      }, 1);
    },
  },
  mounted() {
    document.addEventListener("visibilitychange", () => {
      this.arrChildren = null;
    });
    if (this.activeIdxLi !== this.idx) return;
  },
  watch: {
    fontSize(val) {},
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
