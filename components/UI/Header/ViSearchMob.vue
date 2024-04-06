<template>
  <form class="header__search" @submit.prevent>
    <input
      class="header__search_input"
      type="text"
      placeholder="Поиск..."
      :style="borderInput"
    />
  </form>
</template>

<script>
export default {
  props: {
    bodyClassName: { type: Boolean },
  },
  data() {
    return {};
  },
  computed: {
    borderInput() {
      if (!this.bodyClassName) {
        return;
      }
      const bodyElement = document?.body;
      const computedStyle = window?.getComputedStyle(bodyElement);
      const borderColor = computedStyle.borderColor;
      const color = computedStyle.color;
      return {
        border: `1px solid ${borderColor}`,
        color: color,
      };
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.header__search {
  display: flex;
  align-items: center;
}

.header__search_input {
  color: white;
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  background: none;
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 10px 15px;
  color: black;
  width: 100%;
  border-radius: 40px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 960px) {
  .header__search_block {
    min-width: 250px;
  }
}
</style>
