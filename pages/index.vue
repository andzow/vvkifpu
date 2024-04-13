<template>
  <div class="app">
    <!-- <MainViMainPhoto /> -->
    <!-- <MainVimain /> -->
    <MainViTraning />
    <!-- <MainViApplication />
    <MainViNews />
    <MainViAbout /> -->
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      middleware: "role",
    });
  },
};
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
