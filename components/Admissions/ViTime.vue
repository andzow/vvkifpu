<template>
  <section class="time">
    <div class="time__container">
      <UIViTitle class="time__title" :settings="true">Когда начало?</UIViTitle>
      <p class="time__text font" data-font-actual="18">
        Для Вашего удобства мы организуем 3 группы посетителей:
      </p>
      <div class="time__position time__position_special">
        <div class="time__circle back"></div>
        <p class="time__info font" data-font-actual="18">1гр. — начало в 10:00</p>
      </div>
      <div class="time__position">
        <div class="time__circle back"></div>
        <p class="time__info font" data-font-actual="18">2гр. — начало в 11:30</p>
      </div>
      <div class="time__position">
        <div class="time__circle back"></div>
        <p class="time__info font" data-font-actual="18">3гр. — начало в 13:00</p>
      </div>
      <p class="time__text time__text_special font" data-font-actual="18">
        <span class="time__span">Записываться не нужно.</span> Мы ждем всех
        желающих!
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.time {
  width: 100vw;
  margin-bottom: 65px;
}
.time__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.time__text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-top: 40px;
}
.time__position {
  display: flex;
  align-items: center;
}
.time__position_special {
  margin-top: 20px;
}
.time__position:not(:last-child) {
  margin-bottom: 7px;
}
.time__circle {
  width: 7px;
  height: 7px;
  background: var(--violo);
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
}
.time__info {
  font-family: "Inter", sans-serif;
  font-size: 18px;
}
.time__text_special {
  margin-top: 20px;
}
.time__span {
  color: var(--violo);
}
</style>
