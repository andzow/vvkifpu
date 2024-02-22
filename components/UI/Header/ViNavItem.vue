<template>
  <div class="nav__item">
    <p v-for="item in ularr" :key="item">{{ item }}</p>
  </div>
</template>

<script>
export default {
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
    };
  },
};
</script>

<style scoped>
.nav__item {
}
</style>
