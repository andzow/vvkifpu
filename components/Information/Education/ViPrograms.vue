<template>
  <section class="programs">
    <div class="programs__container">
      <UIViBreadcrumbs />
      <UIViTitle class="programs__title" :settings="true"
        >Образовательные программы</UIViTitle
      >

      <table class="programs__table" cellpadding="0" cellspacing="0" border="0">
        <thead class="programs__thead">
          <tr>
            <th class="programs__pos">Наименование специальности</th>
            <th class="programs__pos">Срок обучения</th>
            <th class="programs__pos">Форма обучения</th>
            <th class="programs__pos">Язык обучения</th>
          </tr>
        </thead>
        <tbody class="programs__tbody">
          <tr v-for="(item, index) in ArrayPrograms" :key="index">
            <td class="programs__element">{{ item.name }}</td>
            <td class="programs__element">{{ item.time }}</td>
            <td class="programs__element">{{ item.form }}</td>
            <td class="programs__element">{{ item.language }}</td>
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
      ArrayPrograms: [
        {
          name: "40.02.02 «Правоохранительная деятельность»",
          time: "3 года 6 месяцев",
          form: "очная",
          language: "Русский",
        },
        {
          name: "38.02.04 «Коммерция» ( по отраслям)",
          time: "2 года 10 месяцев",
          form: "очная",
          language: "Русский",
        },
        {
          name: "43.02.03 «Стилистика и искусство визажа»",
          time: "3 года 10 месяцев",
          form: "очная",
          language: "Русский",
        },
        {
          name: "43.02.02 «Парикмахерское искусство»",
          time: "2 года 10 месяцев",
          form: "очная",
          language: "Русский",
        },
        {
          name: "09.02.04 «Информационные системы» ( по отраслям)",
          time: "3 года 10 месяцев",
          form: "очная",
          language: "Русский",
        },
        {
          name: "43.02.10 «Туризм»",
          time: "2 года 10 месяцев",
          form: "очная",
          language: "Русский",
        },
      ],
    };
  },
};
</script>

<style scoped>
.programs {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.programs__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.programs__title {
  margin-top: 30px;
}
.programs__pos {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  padding: 20px 40px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.programs__element {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  padding: 15px 20px;
  color: #000;
  text-align: center;
  border: solid 1px #000;
}
.programs__table {
  border-collapse: collapse;
  max-width: 1600px;
  margin-top: 40px;
}
.programs__thead {
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
</style>
