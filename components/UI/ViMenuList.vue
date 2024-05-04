<template>
  <ul class="menu__inner">
    <li
      class="menu__inner_li"
      :style="setActiveFontSize"
      v-for="list in pages"
      :key="list"
      @click="$emit('close')"
    >
      <NuxtLink
        v-if="list.path !== '../dostup-sreda.pdf'"
        class="menu__inner_link"
        :style="setActiveColorVisual"
        :to="list.path"
        >{{ list.name }}</NuxtLink
      >
      <p class="menu__inner_link" v-else @click="redirect(list)">
        {{ list.name }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
    },
    bodyClassName: {
      type: Boolean,
    },
  },
  data() {
    return {
      fontSize: useFontSize(),
    };
  },
  methods: {
    redirect(list) {
      window.open("http://localhost:3000/dostup-sreda.pdf", "_blank");
    },
  },
  computed: {
    setActiveColorVisual() {
      if (!document.body.className)
        return {
          fontSize: `${!this.fontSize ? "15" : this.fontSize}px`,
          color: "",
        };
      const bodyElement = document?.body;
      const computedStyle = window?.getComputedStyle(bodyElement);
      const color = computedStyle.borderColor;
      return {
        fontSize: `${!this.fontSize ? "15" : this.fontSize}px`,
        color: color,
      };
    },
    setActiveFontSize() {
      if (!document.body.className) return;
      return {
        fontSize: `${!this.fontSize ? "15" : this.fontSize}px`,
      };
    },
  },
  watch: {
    bodyClassName(val) {
      if (!val) {
        const element = document.querySelectorAll(".menu__inner_link");
        element.forEach((el) => (el.style.color = ""));
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.menu__inner_li {
  list-style-type: circle;
  margin-left: 20px;
  padding: 10px 0;
}
.menu__inner_link {
  font-family: "inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #1c1c1c;
}
</style>
