<template>
  <section class="about">
    <div class="about__container">
      <p class="about_text font" data-font-actual="17">
        Сроки подачи документов
      </p>
      <p class="about_text font" data-font-actual="17">
        Основные даты поступления:
      </p>
      <ul class="about_ul">
        <li class="about_li font" data-font-actual="17">
          Прием документов с 1 июня;
        </li>
        <li class="about_li font" data-font-actual="17">
          Прием документов останавливается при отсутствии свободных мест в
          группах.
        </li>
      </ul>
      <p class="about_text font" data-font-actual="17">
        Начало занятий с 1 сентября.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  width: 100vw;
}
.about__container {
  max-width: 1400px;
  padding: 0 20px 80px 20px;
  margin: 0 auto;
}
.about_text {
  font-size: 17px;
  font-weight: 500;
  color: black;
  font-family: "Inter", sans-serif;
  margin-bottom: 10px;
}
.about_ul {
  margin: 20px 0;
}
.about_li {
  list-style-type: circle;
  font-size: 17px;
  font-weight: 500;
  color: black;
  font-family: "Inter", sans-serif;
  margin-left: 20px;
  margin-bottom: 10px;
}
.about_text:last-child {
  margin-bottom: 0px;
}
@media screen and (max-width: 990px) {
  .about__container {
    padding: 0 20px 40px 20px;
  }
}
@media screen and (max-width: 760px) {
  .about_text {
    font-size: 16px !important;
  }
  .about_li {
    font-size: 16px !important;
  }
}
</style>
