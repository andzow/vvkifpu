<template>
  <div class="header__item"></div>
</template>

<script>
export default {
  props: {
    idx: { type: Number },
  },
};
</script>

<style scoped>
.header__item {
  position: relative;
  width: 100px;
  height: 100px;
  background: red;
  z-index: 10;
}
</style>
