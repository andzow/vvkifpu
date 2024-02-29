<template>
  <section class="relief">
    <div class="relief__container">
        <UIViTitle :settings="true">Виды материальной поддержки</UIViTitle>
        <p class="relief__description relief__description_special">Льготы по оплате за обучение (в размере 3%) предоставляются следующим категориям граждан.</p>
        <div class="relief__position relief__position_special">
          <div class="relief__circle"></div>
          <p class="relief__text">Многодетные семьи</p>
        </div>
        <div class="relief__position">
          <div class="relief__circle"></div>
          <p class="relief__text">Малоимущие</p>
        </div>
        <div class="relief__position">
          <div class="relief__circle"></div>
          <p class="relief__text">По потере кормильца</p>
        </div>
        <div class="relief__position">
          <div class="relief__circle"></div>
          <p class="relief__text">Инвалиды</p>
        </div>
        <p class="relief__description">Размер скидки рассматривается в каждом отдельном случае индивидуально, и может периодически меняться.</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.relief {
  margin-top: 80px;
  margin-bottom: 65px;
}
.relief__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.relief__description {
  font-family: "Inter", sans-serif;
  font-size: 22px;
  margin-top: 30px;
}
.relief__description_special {
  margin-top: 40px;
}
.relief__text {
  font-family: "Inter", sans-serif;
  font-size: 20px;
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