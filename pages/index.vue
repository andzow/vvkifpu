<template>
  <div class="app">
    <MainVimain />
    <MainViTraning />
    <MainViApplication />
    <MainViNews />
    <MainViAbout />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // const newArr = [];
    // const findArr = [];
    // const pages = this.arrPages;
    // pages.forEach((el) => {
    //   const splitElName = el.name.replace(/[-]/gi, "");
    //   const splitElPath = el.path.replace(/[-/]/gi, "");
    //   if (splitElName !== splitElPath && el.name !== "index") {
    //     newArr.push(el);
    //   }
    // });
    // newArr.forEach((el) => {
    //   const splitElPath = el.path.replace(/[-/]/gi, "");
    //   const findIndex = pages.findIndex(
    //     (elD) => elD.name.replace(/[-]/gi, "") === splitElPath
    //   );
    //   if (findIndex !== -1) {
    //     findArr.push(findIndex);
    //   }
    // });
    // findArr.forEach((idx) => pages.splice(idx, 1));
  },
};
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
