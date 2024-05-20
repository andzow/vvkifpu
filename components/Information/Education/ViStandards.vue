<template>
  <section class="standards">
    <div class="standards__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="standards__title" :settings="true"
        >Основные профессиональные образовательные стандарты
      </UIViTitle>

      <table
        class="standards__table"
        cellpadding="0"
        cellspacing="0"
        border="0"
      >
        <thead class="standards__thead border">
          <tr>
            <th class="standards__pos font_special" data-font-actual="17">
              Наименование специальности
            </th>
            <th class="standards__pos font_special" data-font-actual="17">
              Квалификация
            </th>
            <th class="standards__pos font_special" data-font-actual="17">
              Уровень образования
            </th>
            <th class="standards__pos font_special" data-font-actual="17">
              На базе какого образования обучаются
            </th>
            <th class="standards__pos font_special" data-font-actual="17">
              Срок обучения
            </th>
            <th class="standards__pos font_special" data-font-actual="17">
              Форма обучения
            </th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(item, index) in ArrayStandards" :key="index">
            <td class="standards__element font_special" data-font-actual="17">
              {{ item.name }}
            </td>
            <td class="standards__element font_special" data-font-actual="17">
              {{ item.qualification }}
            </td>
            <td class="standards__element font_special" data-font-actual="17">
              {{ item.level }}
            </td>
            <td
              class="standards__element font_special"
              data-font-actual="17"
              v-html="item.education"
            ></td>
            <td
              class="standards__element font_special"
              data-font-actual="17"
              v-html="item.term"
            ></td>
            <td class="standards__element font_special" data-font-actual="17">
              {{ item.form }}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="standards__block"
        v-for="(item, i) in ArrayStandards"
        :key="i"
      >
        <p class="standards__info">{{ item.name }}</p>
        <p class="standards__info">{{ item.qualification }}</p>
        <p class="standards__info">{{ item.education }}</p>
        <p class="standards__info">{{ item.term }}</p>
        <p class="standards__info">{{ item.form }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrCrumbs: [
        {
          name: "Основные профессиональные образовательные стандарты",
          path: "/information/education/standards",
        },
      ],
      ArrayStandards: [
        {
          name: "09.02.07 Информационные системы и программирование",
          qualification: "Техник",
          level: "Базовый уровень",
          education: "(11 кл.)<br>(9 кл.)",
          term: "2 г. 10 мес.<br> 3г. 10 мес.",
          form: "очная",
        },
        {
          name: "38.02.04 Коммерция(по отраслям)",
          qualification: "Менеджер",
          level: "Базовый уровень",
          education: "(11 кл.)<br>(9 кл.)",
          term: "1 г. 10 мес.<br>2г. 10 мес.",
          form: "очная",
        },
        {
          name: "40.02.02 Правоохранительная деятельность",
          qualification: "Юрист",
          level: "Базовый уровень",
          education: "(11 кл.)<br>(9 кл.)",
          term: "2 г. 6 мес.<br>3 г. 6 мес.",
          form: "очная",
        },
        {
          name: "43.02.17 Технологии индустрии красоты",
          qualification: "Технолог",
          level: "Базовый уровень",
          education: "(11 кл.)<br>(9 кл.)",
          term: "2 г. 10 мес.<br>3г. 10 мес.",
          form: "очная",
        },
        {
          name: "43.02.16 Туризм",
          qualification: "Специалист по туризму",
          level: "Базовый уровень",
          education: "(11 кл.)<br>(9 кл.)",
          term: "1 г. 10 мес.<br>2г. 10 мес.",
          form: "очная",
        },
      ],
    };
  },
};
</script>

<style scoped>
.standards {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.standards__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.standards__title {
  margin-top: 30px;
  max-width: 1400px;
}
.standards__pos {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #fff;
  padding: 20px 40px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.standards__element {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  padding: 15px 20px;
  color: #000;
  text-align: center;
  border: solid 1px #000;
}

.standards__table {
  border-collapse: collapse;
  max-width: 1600px;
  margin-top: 40px;
}
.standards__thead {
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
.standards__info {
  font-size: 18px;
  font-family: "Inter", sans-serif;
}
.standards__block {
  border-bottom: 1px solid var(--violo);
  padding: 10px 0;
  display: none;
}
@media (max-width: 990px) {
  .standards {
    padding-top: 150px;
  }
}
@media (max-width: 1150px) {
  .standards__block {
    display: block;
  }
  .standards__table {
    display: none;
  }
  .standards__title {
    margin-bottom: 20px;
  }
}
</style>
