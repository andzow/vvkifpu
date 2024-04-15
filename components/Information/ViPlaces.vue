<template>
  <section class="places">
    <div class="places__container">
      <UIViBreadcrumbs />
      <UIViTitle class="places__title" :settings="true">Вакантные места для приема (перевода)</UIViTitle>
      <p class="places__text font" data-font-actual="18">
        Актуальную информацию по количеству свободных мест на 2024 год можно
        увидеть по этой ссылке
      </p>

      <table class="places__table" cellpadding="0" cellspacing="0" border="0">
        <thead class="places__thead border">
          <tr>
            <th class="places__pos font" data-font-actual="17">
              Наименование специальности
            </th>
            <th class="places__pos font" data-font-actual="17">
              Вакантные места для приема/перевода
            </th>
          </tr>
        </thead>
        <tbody class="places__tbody">
          <tr v-for="(item, index) in ArrayPlaces" :key="index">
            <td class="places__element font" data-font-actual="17">
              {{ item.name }}
            </td>
            <td class="places__element font" data-font-actual="17">
              {{ item.answer }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ArrayPlaces: [
        {
          name: "09.02.04 Информационные системы (по отраслям)",
          answer: "Нет",
        },
        {
          name: "09.02.03 Программирование в компьютерных системах",
          answer: "Нет",
        },
        {
          name: "38.02.04 Экономика и бухгалтерский учет (по отраслям)",
          answer: "Нет",
        },
        {
          name: "38.02.06 Финансы",
          answer: "Нет",
        },
        {
          name: "40.02.02 Правоохранительная деятельность",
          answer: "Нет",
        },
        {
          name: "43.02.02 Парикмахерское искусство",
          answer: "Нет",
        },
        {
          name: "43.02.03 Стилистика и искусство визажа",
          answer: "Нет",
        },
        {
          name: "43.02.10 Туризм",
          answer: "Нет",
        },
        {
          name: "43.02.11 Гостиничный сервис",
          answer: "Нет",
        },
      ],
    };
  },
};
</script>

<style scoped>
.places {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.places__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.places__title {
  margin-top: 30px;
}
.places__text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-top: 40px;
}
.places__name {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.places__pos {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #fff;
  padding: 20px 40px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.places__element {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 17px;
  padding: 15px 20px;
  color: #000;
  text-align: center;
  border: solid 1px #000;
}
.places__table {
  border-collapse: collapse;
  max-width: 1600px;
  margin-top: 20px;
}
.places__thead {
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
@media(max-width: 990px) {
  .places {
  padding-top: 150px;
}
}
@media(max-width: 600px) {
  .places__thead {
  background: var(--violo)
}
}
@media(max-width: 430px) {
  .places__element  {
  padding: 10px 15px;
}
.places__pos  {
  padding: 10px 20px;
}
}
</style>
