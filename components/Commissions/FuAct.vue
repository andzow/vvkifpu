<template>
  <section class="act">
    <div class="act__container">
      <UIViTitle class="act__title" :settings="true"
        >Куда поступить после 9 класса в Кирове?</UIViTitle
      >
      <p class="act__text">
        Современный рынок труда весьма быстро меняет свою структуру. И поэтому
        важно быть проницательным во время выбора будущей профессии.
      </p>
      <p class="act__text act__text_special">
        Думайте о том, куда поступить после 9 класса в Кирове и какую профессию
        выбрать, заранее, на шаг вперёд, как в шахматах. Важно не ошибиться,
        чтобы дальнейшая жизнь складывалась удачно. Именно поэтому следует
        выбрать наш колледж!
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.act {
  width: 100vw;
  margin-bottom: 65px;
}
.act__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.act__title {
  margin-top: 65px;
}
.act__text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-top: 40px;
  max-width: 1270px;
}
.act__text_special {
  margin-top: 20px;
}
</style>
