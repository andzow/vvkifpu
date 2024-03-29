<template>
  <section class="additionally">
    <div class="additionally__container">
      <UIViBreadcrumbs />
      <UIViTitle class="additionally__title" :settings="true">Дополнительная информация</UIViTitle>
      <p class="additionally__text additionally__text_first font" data-font-actual="17">
        Все учебные материалы ПОУ «ВВКИФПУ» для более комфортного обучения
        студентов находятся в электронном виде.
      </p>
      <p class="additionally__text additionally__text_second font" data-font-actual="17">
        Получить доступ к учебным материалам можно с любого компьютера в
        кабинете 31.
      </p>
      <p class="additionally__text additionally__text_third font" data-font-actual="17">
        Порядок пользования учебными материалами ПОУ «Волго-Вятский колледж
        информатики, финансов, права, управления»:
      </p>
      <div class="additionally__position additionally__position_special">
        <div class="additionally__circle back"></div>
        <p class="additionally__description font" data-font-actual="17">
          в кабинете 31 включаем компьютер;
        </p>
      </div>
      <div class="additionally__position">
        <div class="additionally__circle back"></div>
        <p class="additionally__description font" data-font-actual="17">открываем «диск Q»;</p>
      </div>
      <div class="additionally__position">
        <div class="additionally__circle back"></div>
        <p class="additionally__description font" data-font-actual="17">
          открываем папку с наименованием вашей специальности (например
          «Правоохранительная деятельность»);
        </p>
      </div>
      <div class="additionally__position">
        <div class="additionally__circle back"></div>
        <p class="additionally__description font" data-font-actual="17">
          открываем папку с нужной дисциплиной (например «Семейное право»);
        </p>
      </div>
      <div class="additionally__position">
        <div class="additionally__circle back"></div>
        <p class="additionally__description font" data-font-actual="17">
          открываем один из необходимых учебников доступных для пользования.
        </p>
      </div>
      <p class="additionally__text additionally__text_third font" data-font-actual="17">
        <span class="additionally__text__special">С 17 октября 2017 года</span>
        у студентов нашего колледжа есть возможность бесплатного доступа к
        библиотечному фонду КОГБУК «Кировской ордена почета государственной
        универсальной областной научной библиотеки имени А.И. Герцена»
      </p>
      <div class="additionally__image">
        <img src="~/assets/images/UI/dogovor.webp" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.additionally {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.additionally__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.additionally__title {
  margin-top: 30px;
}
.additionally__text {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  max-width: 1200px;
}
.additionally__text_first {
  margin-top: 20px;
}
.additionally__text_second {
  margin-top: 20px;
}
.additionally__text_third {
  margin-top: 20px;
}
.additionally__position {
  display: flex;
  align-items: center;
}
.additionally__position:not(:last-child) {
  margin-bottom: 7px;
}
.additionally__circle {
  width: 7px;
  height: 7px;
  background: var(--violo);
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
}
.additionally__description {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.additionally__position_special {
  margin-top: 15px;
}
.additionally__text__special {
  color: var(--violo);
  font-family: "Inter", sans-serif;
}
.additionally__image {
  margin-top: 20px;
  width: 400px;
}
</style>
