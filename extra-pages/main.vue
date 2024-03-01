<template>
  <div class="app">
    <MainVimain />
    <MainViTraning />
    <MainViApplication />
    <MainViNews />
    <MainViAbout />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: [
    function (from, to) {
      //   console.log("привет");
      console.log(from, to);
    },
  ],
});
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
