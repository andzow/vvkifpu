<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs />
      </div>
      <UIViTitle :settings="true" class="main__header">Столовая</UIViTitle>
      <p class="main__des">
        На первом этаже нашего колледжа находится столовая.
      </p>
      <div class="main__image">
        <img :src="'../assets/images/Information/stolovaya.jpg'" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 80px;
}
.main__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__breadcrumbs {
  margin-bottom: 30px;
}
.main__header {
  margin-bottom: 50px;
}

.main__des {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
  color: black;
}
.main__image {
  max-width: 800px;
}
</style>
