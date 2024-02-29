<template>
  <section class="relief">
    <div class="relief__container">
        <UIViTitle :settings="true">Виды материальной поддержки</UIViTitle>
        <p class="relief__description">Льготы по оплате за обучение (в размере 3%) предоставляются следующим категориям граждан.</p>
        <p class="relief__description">Многодетные семьи;</p>
        <p class="relief__description">Малоимущие;</p>
        <p class="relief__description">По потере кормильца;</p>
        <p class="relief__description">Инвалиды.</p>
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
}
.relief__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>