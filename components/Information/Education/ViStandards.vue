<template>
  <section class="standards">
    <div class="standards__container">
        <UIViBreadcrumbs />
        <UIViTitle class="standards__title" :settings="true">Основные профессиональные образовательные стандарты</UIViTitle>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.standards {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.standards__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.standards__title {
  margin-top: 30px;
}
</style>