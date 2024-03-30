<template>
  <section class="administration">
    <div class="administration__container">
      <UIViBreadcrumbs />
      <UIViTitle class="administration__title" :settings="true">Структура и органы управления ПОУ «ВВКИФПУ»</UIViTitle>
      <p class="administration__name font" data-font-actual="18">Администрация ВВКИФПУ</p>
      <table class="administration__table border" cellpadding="0" cellspacing="0" border="0">
        <thead class="administration__thead">
          <tr>
            <th class="administration__pos font" data-font-actual="17">Ф. И. О.</th>
            <th class="administration__pos font" data-font-actual="17">Должность</th>
            <th class="administration__pos font" data-font-actual="17">Общий стаж работы</th>
            <th class="administration__pos font" data-font-actual="17">Уровень образования</th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(administration, index) in ArrayAdministration" :key="index">
            <td class="administration__element font" data-font-actual="17">{{ administration.name }}</td>
            <td class="administration__element font" data-font-actual="17">{{ administration.post }}</td>
            <td class="administration__element font" data-font-actual="17">{{ administration.time }}</td>
            <td class="administration__element font" data-font-actual="17">
              {{ administration.education }}
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
      ArrayAdministration: [
        {
          name: "Синенок В.Н.",
          post: "Директор",
          time: "15 лет",
          education: "Высшее",
        },
        {
          name: "Семакова Н.В.",
          post: "Фин. директор",
          time: "40 лет",
          education: "Высшее",
        },
        {
          name: "Быстроновская М.А.",
          post: "Зам. директора по УР",
          time: "40 лет",
          education: "Высшее",
        },
        {
          name: "Макарова М.А.",
          post: "Методист. Заведующий практическим обучением",
          time: "35 лет",
          education: "Высшее",
        },
        {
          name: "Борзова Э.В.",
          post: "Методист. Зам директора по УВР",
          time: "35 лет",
          education: "Высшее",
        },
        {
          name: "Бельтюкова Н.А.",
          post: "Методист. Социальный педагог",
          time: "35 лет",
          education: "Высшее",
        },
        {
          name: "Никулин Р.В.",
          post: "Заведующий комплексной безопасностью",
          time: "15 лет",
          education: "Высшее",
        },
        {
          name: "Домрачева Н.И",
          post: "Библиотекарь, кассир",
          time: "40 лет",
          education: "Высшее",
        },
      ],
    };
  },
};
</script>

<style scoped>
.administration {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.administration__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.administration__title {
  margin-top: 30px;
  max-width: 1400px;
}
.administration__name {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.administration__pos {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #fff;
  padding: 20px 40px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.administration__element {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 17px;
  padding: 15px 20px;
  color: #000;
  text-align: center;
  border: solid 1px #000;
}
.administration__table {
  border-collapse: collapse;
  max-width: 1600px;
}
.administration__thead {
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
</style>
