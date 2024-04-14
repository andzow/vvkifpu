<template>
  <section class="visit">
    <div class="visit__container">
      <UIViTitle class="visit__title" :settings="true"
        >Не получилось посетить?</UIViTitle
      >
      <p class="visit__text font" data-font-actual="18">
        Если по какой-то причине у Вас не получилось посетить наш колледж в этот
        день — не расстраивайтесь. В нашем учебном заведении каждый день для Вас
        — это «День открытых дверей».
      </p>
      <p class="visit__text font visit__text_special" data-font-actual="18">
        Наши специалисты проконсультируют Вас по любым вопросам и в любое
        удобное для Вас время. Достаточно позвонить по телефону
        <a class="visit__span" href="tel:+78332641898">8 (8332) 64-18-98</a>, либо посетить наш
        колледж по адресу
        <span class="visit__span"
          >г.Киров, ул. Герцена 43. (Карла Маркса 75)</span
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.visit {
  width: 100vw;
  margin-bottom: 65px;
}
.visit__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.visit__text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-top: 40px;
  max-width: 1270px;
}
.visit__text_special {
  margin-top: 20px;
}
.visit__span {
  color: var(--violo);
  font-family: "Inter", sans-serif;
}
</style>
