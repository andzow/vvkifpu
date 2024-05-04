<template>
  <div class="app">
    <MainViMainPhoto />
    <MainViTraning />
    <MainViApplication />
    <MainViNews />
    <MainViAbout />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkVer: useChangeSpeciality(),
    };
  },
  mounted() {
    setTimeout(() => {
      this.checkVer = true;
    }, 0);
  },
};
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
