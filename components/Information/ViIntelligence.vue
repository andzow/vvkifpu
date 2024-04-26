<template>
  <section class="intelligence">
    <div class="intelligence__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="intelligence__title" :settings="true"
        >Основные сведения ПОУ Волго-Вятский колледж</UIViTitle
      >
      <table
        class="intelligence__table"
        cellpadding="0"
        cellspacing="0"
        border="0"
      >
        <tbody class="intelligence__tbody">
          <tr v-for="(item, index) in ArrayIntelligence" :key="index">
            <td class="intelligence__element font" data-font-actual="17">
              {{ item.first }}
            </td>
            <td class="intelligence__element font" data-font-actual="17">
              {{ item.second }}
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
      arrCrumbs: [
        {
          name: "Основные сведения ПОУ Волго-Вятский колледж",
          path: "/information/intelligence",
        },
      ],
      ArrayIntelligence: [
        {
          first:
            "Полное наименование образовательного учреждения СПО в соответствии с Уставом и лицензией",
          second:
            "Профессиональное образовательное учреждение «Волго-вятский колледж информатики, финансов, права, управления»",
        },
        {
          first:
            "Сокращенное наименование образовательного учреждения СПО в соответствии с Уставом и лицензией",
          second: "ПОУ «ВВКИФПУ»",
        },
        {
          first:
            "Свидетельство о государственной регистрации некоммерческой организации",
          second:
            "Запись внесена в Единый государственный реестр юридических лиц 30.10.2002 года, регистрационный номер 1024301327709",
        },
        {
          first:
            "Учредитель ПОУ «Волго-Вятский колледж информатики, финансов, права, управления»",
          second: "Синенок Владимир Николаевич",
        },
        {
          first: "Действующий аккредитационный статус",
          second: "Профессиональное образовательное учреждение",
        },
        {
          first: "Тип образовательного учреждения",
          second: "Профессиональное образовательное учреждение",
        },
        {
          first: "Вид образовательного учреждения",
          second: "Колледж",
        },
        {
          first: "Язык образования",
          second: "Русский",
        },
        {
          first: "Юридический адрес",
          second: "610000, г.Киров Герцена 25",
        },
        {
          first: "Фактический адрес",
          second: "610017, г.Киров Карла Маркса 75 (Герцена 41)",
        },
        {
          first: "Телефоны Директор и учебная часть",
          second: "64-18-98 8 (8332) 64-18-98",
        },
        {
          first: "Бухгалтерия",
          second: "70-82-40",
        },
        {
          first: "Факс",
          second: "64-18-98",
        },
        {
          first: "Е-mail",
          second: "vvkifpu@mail.ru",
        },
        {
          first: "Директор",
          second: "Синенок Владимир Николаевич",
        },
        {
          first: "Режим работы",
          second: "Пн-Сб — с 08:00 до 18:30 Вс. — выходной",
        },
      ],
    };
  },
};
</script>

<style scoped>
.intelligence {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.intelligence__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.intelligence__title {
  margin-top: 30px;
  max-width: 1400px;
}
.intelligence__table {
  border-collapse: collapse;
  max-width: 1400px;
  margin-top: 40px;
}
.intelligence__element {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 17px;
  padding: 15px 20px;
  color: #000;
  border: 2px solid var(--violo);
}
.intelligence__element:first-child {
  background-color: var(--violo);
  color: #fff;
  font-weight: 500;
}
@media (max-width: 990px) {
  .intelligence {
    padding-top: 150px;
  }
}
@media (max-width: 450px) {
  .intelligence__element {
    padding: 10px 15px;
  }
}
@media (max-width: 420px) {
  .intelligence__element {
    word-break: break-all;
  }
}
</style>
