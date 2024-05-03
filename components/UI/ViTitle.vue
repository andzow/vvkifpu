<template>
  <h1
    class="title font_special"
    data-font-actual="60"
    v-if="settings"
    :style="setColor"
  >
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
  min-width: 310px;
  word-break: break-all;
}
@media screen and (max-width: 1230px) {
  .title {
    font-size: 52px !important;
  }
}
@media screen and (max-width: 990px) {
  .title {
    font-size: 48px !important;
  }
}

@media screen and (max-width: 330px) {
  .title {
    font-size: 44px !important;
  }
}
@media screen and (max-width: 300px) {
  .title {
    font-size: 40px !important;
  }
}
@media (max-width: 960px) {
  .title {
    font-size: 50px !important;
  }
}
@media (max-width: 520px) {
  .title {
    font-size: 36px !important;
  }
}
</style>
