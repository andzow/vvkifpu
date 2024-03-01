<template>
  <section class="administration">
    <div class="administration__container">
        <UIViBreadcrumbs />
        <UIViTitle class="additionally__title" :settings="true">Дополнительная информация</UIViTitle>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.administration {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.administration__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.administration__title {
  margin-top: 30px;
}
</style>