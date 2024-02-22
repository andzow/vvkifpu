<template>
  <div class="header__inner" :class="{ activeInner: isHoverNavItem }">
    <div class="header__block" ref="item">
      <p v-for="item in ularr" :key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { isHoverNavItem: { type: Boolean } },
  data() {
    return {
      ularr: [
        "afasdfas",
        "afasdfas",
        "afasdfas",
        "afasdfas",
        "afasdfas",
        "afasdfas",
        "afasdfas",
        "afasdfas",
        "afasdfas",
      ],
      heighBlock: 0,
    };
  },
  mounted() {
    const el = this.$refs.item.getBoundingClientRect();
    this.heighBlock = el.height;
    this.$refs.item.style.height = "0px";
  },
  watch: {
    isHoverNavItem(val) {
      if (val) {
        this.$refs.item.style.height = this.heighBlock + "px";
        this.$refs.item.style.overflow = "visible";
      } else {
        this.$refs.item.style.height = "0px";
        this.$refs.item.style.overflow = "hidden";
      }
    },
  },
};
</script>

<style scoped>
.header__inner {
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
}

.header__block {
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid red;
}
</style>
