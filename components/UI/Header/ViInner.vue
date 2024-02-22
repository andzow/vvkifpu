<template>
  <Transition name="slide-block">
    <div
      class="header__inner"
      v-if="idx === activeIdxLi && item.allPages !== undefined"
      ref="inner"
    >
      <UIHeaderViNavItem
        :item="item"
        :distancePx="distancePx"
        :activeIdxLi="activeIdxLi"
      />
    </div>
  </Transition>
</template>

<script>
export default {
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
    distancePx: { type: Number },
  },
  data() {
    return {};
  },

  mounted() {
    if (this.activeIdxLi !== this.idx) return;
  },
};
</script>

<style scoped>
.header__inner {
  position: absolute;
  top: 100%;
  background: white;
  overflow-y: hidden;
  overflow-x: hidden;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-end-end-radius: 30px;
  border-end-start-radius: 30px;
  transition: all 0.3s ease;
  z-index: 0;
}

.slide-block-enter-from {
  transform: translateX(10px);
  opacity: 0;
}
.slide-block-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
.slide-block-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
.slide-block-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
