<template>
  <section class="relief">
    <div class="relief__container">
      <UIViBreadcrumbs />
      <UIViTitle class="relief__title" :settings="true">Виды материальной поддержки</UIViTitle>
      <p class="relief__description relief__description_special font" data-font-actual="17">
        Льготы по оплате за обучение (в размере 3%) предоставляются следующим
        категориям граждан.
      </p>
      <div class="relief__position relief__position_special">
        <div class="relief__circle"></div>
        <p class="relief__text font" data-font-actual="17">Многодетные семьи</p>
      </div>
      <div class="relief__position">
        <div class="relief__circle"></div>
        <p class="relief__text font" data-font-actual="17">Малоимущие</p>
      </div>
      <div class="relief__position">
        <div class="relief__circle"></div>
        <p class="relief__text font" data-font-actual="17">По потере кормильца</p>
      </div>
      <div class="relief__position">
        <div class="relief__circle"></div>
        <p class="relief__text font" data-font-actual="17">Инвалиды</p>
      </div>
      <p class="relief__description font" data-font-actual="17">
        Размер скидки рассматривается в каждом отдельном случае индивидуально, и
        может периодически меняться.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.relief {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.relief__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.relief__title {
  margin-top: 30px;
}
.relief__description {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  margin-top: 30px;
}
.relief__description_special {
  margin-top: 40px;
}
.relief__text {
  font-family: "Inter", sans-serif;
  font-size: 17px;
}
.relief__position {
  display: flex;
  align-items: center;
}
.relief__position:not(:last-child) {
  margin-bottom: 7px;
}
.relief__position_special {
  margin-top: 15px;
}
.relief__circle {
  width: 7px;
  height: 7px;
  background: var(--violo);
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
