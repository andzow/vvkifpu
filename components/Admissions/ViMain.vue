<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Правила приема</UIViTitle
      >
      <div class="main__back">
        <p class="main__des font" data-font-actual="22">
          Поступить в колледж можно после 9 или после 11 класса.
        </p>
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
  margin-bottom: 0px;
}
.main__back {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
}
.main__des {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 22px;
  margin-top: 30px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
</style>
