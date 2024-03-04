<template>
  <section class="standards">
    <div class="standards__container">
        <UIViBreadcrumbs />
        <UIViTitle class="standards__title" :settings="true">Основные профессиональные образовательные стандарты</UIViTitle>

        <table class="standards__table" cellpadding="0" cellspacing="0" border="0">
        <thead class="standards__thead">
          <tr>
            <th class="standards__pos">Наименование специальности</th>
            <th class="standards__pos">Квалификация</th>
            <th class="standards__pos">Уровень образования</th>
            <th class="standards__pos">На базе какого образования обучаются</th>
            <th class="standards__pos">Срок обучения</th>
            <th class="standards__pos">Форма обучения</th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(item, index) in ArrayStandards" :key="index">
            <td class="standards__element">{{ item.name }}</td>
            <td class="standards__element">{{ item.qualification }}</td>
            <td class="standards__element">{{ item.level }}</td>
            <td class="standards__element">{{ item.education }}</td>
            <td class="standards__element">{{ item.term }}</td>
            <td class="standards__element">{{ item.form }}</td>
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
            ArrayStandards: [
                {
                    name: "09.02.04 Информационные системы (по отраслям)",
                    qualification: "Техник по информационным системам",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "3г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "09.02.03 Программирование в компьютерных системах",
                    qualification: "Техник программист",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "3г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "38.02.04 Коммерция(по отраслям)",
                    qualification: "Менеджер по продажам",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "2г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "38.02.04 Экономика и бухгалтерский учет (по отраслям)",
                    qualification: "Бухгалтер",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "2г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "38.02.06 Финансы",
                    qualification: "Финансист",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "2г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "40.02.02 Правоохранительная деятельность",
                    qualification: "Юрист",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "3 г. 6 мес.",
                    form: "очная"
                },
                {
                    name: "43.02.02 Парикмахерское искусство",
                    qualification: "Технолог",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "2г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "43.02.03 Стилистика и искусство визажа",
                    qualification: "Визажист-стилист",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "2г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "43.02.10 Туризм",
                    qualification: "Специалист по туризму",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "2г. 10 мес.",
                    form: "очная"
                },
                {
                    name: "43.02.11 Гостиничный сервис",
                    qualification: "Менеджер",
                    level: "Базовый уровень",
                    education: "(9 кл.)",
                    term: "2г. 10 мес.",
                    form: "очная"
                },
            ]
        }
    }
}
</script>

<style scoped>
.standards {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.standards__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.standards__title {
  margin-top: 30px;
}
.standards__pos {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    padding: 20px 40px;
    border-bottom: solid 1px rgba(255,255,255,0.1);
}
.standards__element {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
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
</style>