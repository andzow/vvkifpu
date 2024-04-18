<template>
  <section class="guide">
    <div class="guide__container">
      <UIViBreadcrumbs />
      <UIViTitle class="guide__title" :settings="true">Руководство и педагогический состав</UIViTitle>

      <p class="guide__name font" data-font-actual="20">
        Администрация ВВКИФПУ
      </p>
      <table class="guide__table guide__table_administration" cellpadding="0" cellspacing="0" border="0">
        <thead class="guide__thead border">
          <tr>
            <th class="guide__pos font" data-font-actual="17">Ф. И. О.</th>
            <th class="guide__pos font" data-font-actual="17">Должность</th>
            <th class="guide__pos font" data-font-actual="17">
              Общий стаж работы
            </th>
            <th class="guide__pos font" data-font-actual="17">
              Уровень образования
            </th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(administration, index) in ArrayAdministration" :key="index">
            <td class="guide__element font" data-font-actual="17">
              {{ administration.name }}
            </td>
            <td class="guide__element font" data-font-actual="17">
              {{ administration.post }}
            </td>
            <td class="guide__element font" data-font-actual="17">
              {{ administration.time }}
            </td>
            <td class="guide__element font" data-font-actual="17">
              {{ administration.education }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="standards__block_administration" v-for="(item, i) in ArrayAdministration" :key="i">
        <p class="standards__info_administration">{{ item.name }}</p>
        <p class="standards__info_administration">{{ item.post }}</p>
        <p class="standards__info_administration">{{ item.education }}</p>
        <p class="standards__info_administration">{{ item.time }}</p>
      </div>

      <p class="guide__name font" data-font-actual="20">
        Сведения о педагогическом составе ВВКИФПУ
      </p>
      <table class="guide__table guide__table_teacher" cellpadding="0" cellspacing="0" border="0">
        <thead class="guide__thead border">
          <tr>
            <th class="guide__pos font" data-font-actual="17">Ф. И. О.</th>
            <th class="guide__pos font" data-font-actual="17">
              Преподаватель дисциплин
            </th>
            <th class="guide__pos font" data-font-actual="17">
              Уровень образования
            </th>
            <th class="guide__pos font" data-font-actual="17">
              Общий стаж на должности
            </th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(item, index) in ArrayTeacher" :key="index">
            <td class="guide__element font" data-font-actual="17">
              {{ item.name }}
            </td>
            <td class="guide__element font" data-font-actual="17">
              {{ item.post }}
            </td>
            <td class="guide__element font" data-font-actual="17">
              {{ item.level }}
            </td>
            <td class="guide__element font" data-font-actual="17">
              {{ item.time }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="standards__block_teacher" v-for="(item, i) in ArrayAdministration" :key="i">
        <p class="standards__info_teacher">{{ item.name }}</p>
        <p class="standards__info_teacher">{{ item.post }}</p>
        <p class="standards__info_teacher">{{ item.level }}</p>
        <p class="standards__info_teacher">{{ item.time }}</p>
      </div>

      <p class="guide__name font" data-font-actual="20">
        Список преподавателей дисциплин по специальностям
      </p>
      <table class="guide__table guide__table_special" cellpadding="0" cellspacing="0" border="0">
        <thead class="guide__thead border">
          <tr>
            <th class="guide__pos font" data-font-actual="17">
              Ф. И. О. преподавателя
            </th>
            <th class="guide__pos font" data-font-actual="17">Контакты</th>
            <th class="guide__pos font" data-font-actual="17">
              Виды дисциплин
            </th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(item, index) in ArraySpecialization" :key="index">
            <td class="guide__element">
              <p class="guide__text font" data-font-actual="17" v-for="(name, idx) in item.names" :key="idx">
                {{ name }}
              </p>
            </td>
            <td class="guide__element">
              <p class="guide__text font" data-font-actual="17" v-for="(contact, i) in item.contacts" :key="i">
                {{ contact }}
              </p>
            </td>
            <td class="guide__element guide__element_specialization font" data-font-actual="17">
              {{ item.specialization }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="standards__block_special" v-for="(item, i) in ArraySpecialization" :key="i">
        <p class="standards__info_special" >{{ item.specialization }}</p>
        <p class="standards__info_special" v-for="(people, idx) in item.names" :key="idx">{{ people }}</p>
        <p class="standards__info_special" v-for="(info, idx) in item.contacts" :key="idx">{{ info }}</p>
      </div>

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
      ArrayTeacher: [
        {
          name: "Воробьев Владимир Александрович",
          post: "Экономические",
          level: "Преподаватель высшей категории",
          time: "40 лет",
        },
        {
          name: "Кулькова Людмила Григорьевна",
          post: "Математика, информатика",
          level: "Преподаватель высшей категории",
          time: "30 лет",
        },
        {
          name: "Емшанов Александр Леонид",
          post: "Философские",
          level: "Кандидат наук",
          time: "25 лет",
        },
        {
          name: "Бельтюкова Наталья Андреевна",
          post: "Гуманитарные",
          level: "Высшее",
          time: "25 лет",
        },
        {
          name: "Синенок Владимир Николаевич",
          post: "Информатика",
          level: "Высшее",
          time: "10 лет",
        },
        {
          name: "Быстроновская Маргарита Александровна",
          post: "Юридические",
          level: "Высшее, Юрист I категории",
          time: "30 лет",
        },
        {
          name: "Садакова Ольга Александровна",
          post: "Юридические дисциплины",
          level: "Высшее",
          time: "10 лет",
        },
        {
          name: "Блинова Светлана Дмитриевна",
          post: "Информационные системы и КТ",
          level: "Высшее",
          time: "30 лет",
        },
        {
          name: "Шуклина Галина Васильевн",
          post: "Филологические",
          level: "Высшее",
          time: "40 лет",
        },
        {
          name: "Борзова Элла Валентиновна",
          post: "Гуманитарные",
          level: "Высшее",
          time: "40 лет",
        },
        {
          name: "Макарова Марина Валентиновна",
          post: "Гуманитарные",
          level: "Высшее",
          time: "40 лет",
        },
        {
          name: "Шатрова Галина Петровна",
          post: "Математические",
          level: "Высшее",
          time: "40 лет",
        },
        {
          name: "Лесных Надежда Юрьевн",
          post: "Туризм",
          level: "Высшее,магистратура",
          time: "10 лет",
        },
        {
          name: "Ахмеров Артур Саитович",
          post: "Физическая культура",
          level: "Высшее",
          time: "25 лет",
        },
        {
          name: "Халтурин Игорь Леонидович",
          post: "Юридические дисциплины",
          level: "Высшее",
          time: "15 лет",
        },
        {
          name: "Халтурин Леонид Васильевич",
          post: "Обществознание",
          level: "Высшее",
          time: "20 лет",
        },
        {
          name: "Байдина Татьяна Николаевна",
          post: "Математические",
          level: "Высшее",
          time: "30 лет",
        },
      ],
      ArraySpecialization: [
        {
          names: ["Быстроновская М.А.", "Халтурин И.Л.", "Дорофеева И.В."],
          contacts: [
            "64-18-98, ma270458@mail.ru",
            "64-18-98, natalya.xalturina@mail.ru",
            "64-18-98, kirovinna@rambler.ru",
          ],
          specialization:
            "Преподаватели специальности «Правоохранительная деятельность»",
        },
        {
          names: ["Воробьев В.А.", "Скрябина Е.А."],
          contacts: [
            "64-18-98, https://vk.com/id236968241",
            "64-18-98, skryabinan@yandex.ru",
          ],
          specialization: "Преподаватели специальности «Коммерция»",
        },
        {
          names: [
            "Синенок В.Н.",
            "Блинова С.Д.",
            "Репкина Н.Г.",
            "Репкин Д.А.",
          ],
          contacts: [
            "64-18-98,mnem_@mail.ru",
            "64-18-98, svblin@mail.ru",
            "64-18-98, repka@mail.ru",
            "64-18-98, repka@mail.ru",
          ],
          specialization:
            "Преподаватели специальности «Информационные системы»",
        },
        {
          names: ["Ушакова Л.И.", "Маркова А.И."],
          contacts: [
            "64-18-98, www.markovaa@mail.ru",
            "64-18-98, www.markovaa@mail.ru",
          ],
          specialization:
            "Преподаватели специальности «Парикмахерское искусство», «Стилистика и искусство визажа»",
        },
        {
          names: ["Лесных Н.Ю."],
          contacts: ["64-18-98, nadia.lesnykh05@yandex.ru"],
          specialization: "Преподаватели специальности «Туризм»,",
        },
      ],
    };
  },
};
</script>

<style scoped>
.guide {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.guide__container {
  max-width: 1400px;
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
  margin-bottom: 15px;
}
.guide__pos {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #fff;
  padding: 20px 40px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.guide__element {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 17px;
  padding: 15px 20px;
  color: #000;
  text-align: center;
  border: solid 1px #000;
}
.guide__text {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 17px;
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
.standards__info_administration {
  font-size: 18px;
  font-family: "Inter", sans-serif;
}
.standards__block_administration {
  border-bottom: 1px solid var(--violo);
  padding: 10px 0;
  display: none
}
.standards__info_teacher {
  font-size: 18px;
  font-family: "Inter", sans-serif;
}
.standards__block_teacher {
  border-bottom: 1px solid var(--violo);
  padding: 10px 0;
  display: none
}
.standards__info_special {
  font-size: 18px;
  font-family: "Inter", sans-serif;
}
.standards__info_special:nth-child(1) {
  margin-bottom: 10px;
}
.standards__block_special {
  border-bottom: 1px solid var(--violo);
  padding: 10px 0;
  display: none
}
@media(max-width: 990px) {
  .guide {
  padding-top: 150px;
}
}
@media(max-width: 820px) {
  .standards__block_teacher {
    display: block;
  }
  .guide__name {
    color:var(--violo);
  }
  .guide__table_teacher {
    display: none;
  }
}
@media(max-width:740px) {
  .standards__block_special {
    display: block;
  }
  .guide__table_special {
    display: none;
  }
}
@media(max-width: 720px) {
  .standards__block_administration {
    display: block;
  }
  .guide__table_administration {
    display: none;
  }
}
</style>
