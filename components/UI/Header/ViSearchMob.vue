<template>
  <form class="header__search" @submit.prevent>
    <input
      :class="{ activeMobInput: activeBurger || isHover || isScrollDown }"
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
    activeBurger: { type: Boolean },
    isHover: { type: Boolean },
    isScrollDown: { type: Boolean },
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
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  background: none;
  border: 1px solid white;
  padding: 10px 15px;
  color: white;
  width: 100%;
  border-radius: 40px;
  transition: all 0.3s ease;
}
.header__search_input::placeholder {
  color: white;
}
.activeMobInput {
  color: black;
  border: 1px solid black;
}

.activeMobInput::placeholder {
  color: black;
}

@media screen and (max-width: 960px) {
  .header__search_block {
    min-width: 250px;
  }
}
</style>
