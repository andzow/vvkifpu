<template>
  <h1 class="title font_special" data-font-actual="60" v-if="settings" :style="setColor">
    <slot />
  </h1>
  <h2 class="title font" v-else :style="setColor">
    <slot />
  </h2>
</template>

<script>
export default {
  props: {
    settings: {
      type: Boolean,
    },
    color: {
      type: String,
    },
  },
  computed: {
    setColor() {
      return {
        color: !this.color ? "black" : this.color,
      };
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 60px;
}
</style>
