<template>
  <button class="files__btn border" :style="styleForBtn">
    <a :href="'http://localhost:1337' + srcFile">скачать</a>
  </button>
</template>

<script>
export default {
  props: {
    srcFile: {},
  },
  data() {
    return {
      fontSize: useFontSize(),
    };
  },
  computed: {
    styleForBtn() {
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const color = computedStyle.color;
      if (!document.body.className) return;
      return {
        fontSize: `${!this.fontSize ? "16" : this.fontSize}px`,
        color: computedStyle.backgroundColor,
        background: color,
      };
    },
  },
};
</script>

<style scoped>
.files__btn {
  font-size: 16px;
  color: white;
  background: #542fe6;
  border-radius: 50px;
  padding: 13px 40px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.files__btn:hover {
  transform: scale(1.02);
}
</style>
