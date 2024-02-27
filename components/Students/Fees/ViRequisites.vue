<template>
  <section class="requisites">
    <div class="requisites__container">
        <UIViTitle :settings="true">наши реквизиты</UIViTitle>
        <div class="requisites__info">
            <div class="requisites__box">
                <p class="requisites__description font" data-font-actual="20">Профессиональное Образовательное Учреждение «Волго-Вятский колледж информатики, финансов, права, управления»</p>
                <p class="requisites__description font" data-font-actual="20">Назначение платежа: Оплата за обучение по договору № _____ от Ф.И.О.</p>
                <p class="requisites__description font" data-font-actual="20">ОРГН: 1024301327709</p>
                <p class="requisites__description font" data-font-actual="20">ИНН-4345010977</p>
                <p class="requisites__description font" data-font-actual="20">КПП-434501001</p>
                <p class="requisites__description font" data-font-actual="20">610017 г.Киров Карла Маркса 75</p>
                <p class="requisites__description font" data-font-actual="20">Банк-АО КБ «Хлынов» г.Киров</p>
                <p class="requisites__description font" data-font-actual="20">БИК-043304711</p>
                <p class="requisites__description font" data-font-actual="20">Кор/счет-30101810100000000711</p>
                <p class="requisites__description font" data-font-actual="20">Расч/счет-40703810300430000015</p>
                <div class="requisites__line"></div>
                <p class="requisites__description font" data-font-actual="20">Банк-ПАО «Норвик Банк» г.Киров</p>
                <p class="requisites__description font" data-font-actual="20">БИК-043304728</p>
                <p class="requisites__description font" data-font-actual="20">Кор/счет-30101810300000000728</p>
                <p class="requisites__description font" data-font-actual="20">Расч/счет-40703810400000128982</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.requisites {
    margin-top: 80px;
    margin-bottom: 65px;
}
.requisites__container {
    max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.requisites__info {
    padding: 30px;
    border: 1px solid var(--violo);
    border-radius: 40px;
    margin-top: 30px;
    width: 1100px;
}
.requisites__box {
    max-width: 870px;
}
.requisites__description {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 20px;
}
.requisites__description:not(:last-child) {
    margin-bottom: 10px;
}
.requisites__line {
    width: 400px;
    height: 4px;
    border-radius: 4px;
    overflow: hidden;
    background: var(--violo);
    margin: 10px 0;
}
</style>