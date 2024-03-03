<template>
  <section class="guide">
    <div class="guide__container">
        <UIViBreadcrumbs />
        <UIViTitle class="guide__title" :settings="true">Руководство и педагогический состав</UIViTitle>

        <p class="guide__name">Администрация ВВКИФПУ</p>
        <table class="guide__table" cellpadding="0" cellspacing="0" border="0">
        <thead class="guide__thead">
          <tr>
            <th class="guide__pos">Ф. И. О.</th>
            <th class="guide__pos">Должность</th>
            <th class="guide__pos">Общий стаж работы</th>
            <th class="guide__pos">Уровень образования</th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(administration, index) in ArrayAdministration" :key="index">
            <td class="guide__element">{{ administration.name }}</td>
            <td class="guide__element">{{ administration.post }}</td>
            <td class="guide__element">{{ administration.time }}</td>
            <td class="guide__element">{{ administration.education }}</td>
          </tr>
        </tbody>
      </table>

      <p class="guide__name">Сведения о педагогическом составе ВВКИФПУ</p>
        <table class="guide__table" cellpadding="0" cellspacing="0" border="0">
        <thead class="guide__thead">
          <tr>
            <th class="guide__pos">Ф. И. О.</th>
            <th class="guide__pos">Преподаватель дисциплин</th>
            <th class="guide__pos">Уровень образования</th>
            <th class="guide__pos">Общий стаж на должности</th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(item, index) in ArrayTeacher" :key="index">
            <td class="guide__element">{{ item.name }}</td>
            <td class="guide__element">{{ item.post }}</td>
            <td class="guide__element">{{ item.level }}</td>
            <td class="guide__element">{{ item.time }}</td>
          </tr>
        </tbody>
      </table>

      <p class="guide__name">Список преподавателей дисциплин по специальностям</p>
        <table class="guide__table" cellpadding="0" cellspacing="0" border="0">
        <thead class="guide__thead">
          <tr>
            <th class="guide__pos">Ф. И. О. преподавателя</th>
            <th class="guide__pos">Контакты</th>
            <th class="guide__pos">Виды дисциплин</th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(item, index) in ArraySpecialization" :key="index">
            <td class="guide__element">
                <p class="guide__text" v-for="(name, idx) in item.names" :key="idx">{{ name }}</p>
            </td>
            <td class="guide__element">
                <p class="guide__text" v-for="(contact, i) in item.contacts" :key="i">{{ contact }}</p>
            </td>
            <td class="guide__element guide__element_specialization">{{ item.specialization }}</td>
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
                    education: "Высшее"
                },
                {
                    name: "Семакова Н.В.",
                    post: "Фин. директор",
                    time: "40 лет",
                    education: "Высшее"
                },
                {
                    name: "Быстроновская М.А.",
                    post: "Зам. директора по УР",
                    time: "40 лет",
                    education: "Высшее"
                },
                {
                    name: "Макарова М.А.",
                    post: "Методист. Заведующий практическим обучением",
                    time: "35 лет",
                    education: "Высшее"
                },
                {
                    name: "Борзова Э.В.",
                    post: "Методист. Зам директора по УВР",
                    time: "35 лет",
                    education: "Высшее"
                },
                {
                    name: "Бельтюкова Н.А.",
                    post: "Методист. Социальный педагог",
                    time: "35 лет",
                    education: "Высшее"
                },
                {
                    name: "Никулин Р.В.",
                    post: "Заведующий комплексной безопасностью",
                    time: "15 лет",
                    education: "Высшее"
                },
                {
                    name: "Домрачева Н.И",
                    post: "Библиотекарь, кассир",
                    time: "40 лет",
                    education: "Высшее"
                },
            ],
            ArrayTeacher: [
                {
                    name: "Воробьев Владимир Александрович",
                    post: "Экономические",
                    level: "Преподаватель высшей категории",
                    time: "40 лет"
                },
                {
                    name: "Кулькова Людмила Григорьевна",
                    post: "Математика, информатика",
                    level: "Преподаватель высшей категории",
                    time: "30 лет"
                },
                {
                    name: "Емшанов Александр Леонид",
                    post: "Философские",
                    level: "Кандидат наук",
                    time: "25 лет"
                },
                {
                    name: "Бельтюкова Наталья Андреевна",
                    post: "Гуманитарные",
                    level: "Высшее",
                    time: "25 лет"
                },
                {
                    name: "Синенок Владимир Николаевич",
                    post: "Информатика",
                    level: "Высшее",
                    time: "10 лет"
                },
                {
                    name: "Быстроновская Маргарита Александровна",
                    post: "Юридические",
                    level: "Высшее, Юрист I категории",
                    time: "30 лет"
                },
                {
                    name: "Садакова Ольга Александровна",
                    post: "Юридические дисциплины",
                    level: "Высшее",
                    time: "10 лет"
                },
                {
                    name: "Блинова Светлана Дмитриевна",
                    post: "Информационные системы и КТ",
                    level: "Высшее",
                    time: "30 лет"
                },
                {
                    name: "Шуклина Галина Васильевн",
                    post: "Филологические",
                    level: "Высшее",
                    time: "40 лет"
                },
                {
                    name: "Борзова Элла Валентиновна",
                    post: "Гуманитарные",
                    level: "Высшее",
                    time: "40 лет"
                },
                {
                    name: "Макарова Марина Валентиновна",
                    post: "Гуманитарные",
                    level: "Высшее",
                    time: "40 лет"
                },
                {
                    name: "Шатрова Галина Петровна",
                    post: "Математические",
                    level: "Высшее",
                    time: "40 лет"
                },
                {
                    name: "Лесных Надежда Юрьевн",
                    post: "Туризм",
                    level: "Высшее,магистратура",
                    time: "10 лет"
                },
                {
                    name: "Ахмеров Артур Саитович",
                    post: "Физическая культура",
                    level: "Высшее",
                    time: "25 лет"
                },
                {
                    name: "Халтурин Игорь Леонидович",
                    post: "Юридические дисциплины",
                    level: "Высшее",
                    time: "15 лет"
                },
                {
                    name: "Халтурин Леонид Васильевич",
                    post: "Обществознание",
                    level: "Высшее",
                    time: "20 лет"
                },
                {
                    name: "Байдина Татьяна Николаевна",
                    post: "Математические",
                    level: "Высшее",
                    time: "30 лет"
                },
            ],
            ArraySpecialization: [
                {
                    names: [
                        "Быстроновская М.А.",
                        "Халтурин И.Л.",
                        "Дорофеева И.В."
                    ],
                    contacts: [
                        "64-18-98, ma270458@mail.ru",
                        "64-18-98, natalya.xalturina@mail.ru",
                        "64-18-98, kirovinna@rambler.ru",
                    ],
                    specialization : "Преподаватели специальности «Правоохранительная деятельность»"
                },
                {
                    names: [
                        "Воробьев В.А.",
                        "Скрябина Е.А.",
                    ],
                    contacts: [
                        "64-18-98, https://vk.com/id236968241",
                        "64-18-98, skryabinan@yandex.ru",
                    ],
                    specialization : "Преподаватели специальности «Коммерция»"
                },
                {
                    names: [
                        "Синенок В.Н.",
                        "Блинова С.Д.",
                        "Репкина Н.Г.",
                        "Репкин Д.А."
                    ],
                    contacts: [
                        "64-18-98,mnem_@mail.ru",
                        "64-18-98, svblin@mail.ru",
                        "64-18-98, repka@mail.ru",
                        "64-18-98, repka@mail.ru"
                    ],
                    specialization : "Преподаватели специальности «Информационные системы»"
                },
                {
                    names: [
                        "Ушакова Л.И.",
                        "Маркова А.И.",
                    ],
                    contacts: [
                        "64-18-98, www.markovaa@mail.ru",
                        "64-18-98, www.markovaa@mail.ru",
                    ],
                    specialization : "Преподаватели специальности «Парикмахерское искусство», «Стилистика и искусство визажа»"
                },
                {
                    names: [
                        "Лесных Н.Ю.",
                    ],
                    contacts: [
                        "64-18-98, nadia.lesnykh05@yandex.ru",
                    ],
                    specialization : "Преподаватели специальности «Туризм»,"
                },
            ]
        }
    }
}
</script>

<style scoped>
.guide {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.guide__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.guide__title {
  margin-top: 30px;
}
.guide__name {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
}
.guide__pos {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    padding: 20px 40px;
    border-bottom: solid 1px rgba(255,255,255,0.1);
}
.guide__element {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding: 15px 20px;
    color: #000;
    text-align: center;
    border: solid 1px #000;
}
.guide__text {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #000;
    text-align: left;
}
.guide__text:not(:last-child) {
    margin-bottom: 10px;
}
.guide__table {
    border-collapse: collapse;
    max-width: 1600px;
}
.guide__thead {
    background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
.guide__element_specialization {
    max-width: 400px;
}
</style>