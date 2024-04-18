<template>
  <section class="cooperation">
    <div class="cooperation__container">
      <UIViBreadcrumbs />
      <UIViTitle class="cooperation__title" :settings="true"
        >Международное сотрудничество</UIViTitle
      >
      <p class="cooperation__text font" data-font-actual="18">
        Договоры с иностранными организациями по вопросам образования —
        отсутствуют.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cooperation {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.cooperation__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.cooperation__title {
  margin-top: 30px;
}
.cooperation__text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-top: 40px;
}
@media(max-width: 990px) {
  .cooperation {
  padding-top: 150px;
}
}
</style>
