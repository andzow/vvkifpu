<template>
  <section class="requisites">
    <div class="requisites__container">
      <UIViTitle :settings="true">Наши реквизиты</UIViTitle>
      <div class="requisites__info">
        <div class="requisites__box">
          <p class="requisites__description font" data-font-actual="18">
            Профессиональное Образовательное Учреждение «Волго-Вятский колледж
            информатики, финансов, права, управления»
          </p>
          <p class="requisites__description font" data-font-actual="18">
            Назначение платежа: Оплата за обучение по договору № _____ от Ф.И.О.
          </p>
          <p class="requisites__description font" data-font-actual="18">
            ОРГН: 1024301327709
          </p>
          <p class="requisites__description font" data-font-actual="18">
            ИНН-4345010977
          </p>
          <p class="requisites__description font" data-font-actual="18">
            КПП-434501001
          </p>
          <p class="requisites__description font" data-font-actual="18">
            610017 г.Киров Карла Маркса 75
          </p>
          <p class="requisites__description font" data-font-actual="18">
            Банк-АО КБ «Хлынов» г.Киров
          </p>
          <p class="requisites__description font" data-font-actual="18">
            БИК-043304711
          </p>
          <p class="requisites__description font" data-font-actual="18">
            Кор/счет-30101810100000000711
          </p>
          <p class="requisites__description font" data-font-actual="18">
            Расч/счет-40703810300430000015
          </p>
          <div class="requisites__line"></div>
          <p class="requisites__description font" data-font-actual="18">
            Банк-ПАО «Норвик Банк» г.Киров
          </p>
          <p class="requisites__description font" data-font-actual="18">
            БИК-043304728
          </p>
          <p class="requisites__description font" data-font-actual="18">
            Кор/счет-30101810300000000728
          </p>
          <p class="requisites__description font" data-font-actual="18">
            Расч/счет-40703810400000128982
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.requisites {
  width: 100vw;
  margin-top: 80px;
  margin-bottom: 65px;
}
.requisites__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.requisites__info {
  padding: 30px;
  border: 1px solid var(--violo);
  border-radius: 40px;
  margin-top: 30px;
  width: 900px;
}
.requisites__box {
  max-width: 670px;
}
.requisites__description {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
}
.requisites__description:not(:last-child) {
  margin-bottom: 10px;
}
.requisites__line {
  width: 400px;
  height: 2px;
  border-radius: 4px;
  overflow: hidden;
  background: var(--violo);
  margin: 10px 0;
}
@media (max-width: 950px) {
  .requisites__info {
    width: auto;
    max-width: 800px;
  }
}
@media (max-width: 520px) {
  .requisites__line {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .requisites {
    margin-top: 40px;
  }
}
</style>
