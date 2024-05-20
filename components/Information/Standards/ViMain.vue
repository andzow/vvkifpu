<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Федеральные государственные образовательные стандарты
      </UIViTitle>
      <div class="main__content">
        <div
          class="main__link"
          v-for="item in arrStudents"
          :key="item"
          @click="setPage(item)"
        >
          <p class="main__link_text">
            {{ item.name }}
          </p>
        </div>
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
          name: "Федеральные государственные образовательные стандарты",
          path: "/information/federal-standards",
        },
      ],
      arrStudents: [
        {
          name: "40.02.02 «Правоохранительная деятельность»",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "09.02.04 «Информационные системы» ( по отраслям)",
          href: "/information/canteen",
        },
        {
          name: "09.02.03 «Программирование в компьютерных системах»",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "38.02.04 «Коммерция» ( по отраслям)",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "38.02.01 «Экономика и бухгалтерский учет» ( по отраслям)",
          href: "/information/canteen",
        },
        {
          name: "38.02.06 «Финансы»",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "43.02.10 «Туризм»",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "43.02.11 «Гостиничный сервис»",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "43.02.03 «Стилистика и искусство визажа»",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "43.02.02 «Парикмахерское искусство»",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
      ],
    };
  },
  methods: {
    setPage(item) {
      window.open(item.href, "_blank");
    },
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  padding-top: 230px;
}
.main__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__breadcrumbs {
  margin-bottom: 30px;
}
.main__header {
  margin-bottom: 50px;
}

.main__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 80px;
}
.main__link {
  border: 1px solid var(--violo);
  border-radius: 70px;
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.main__link:hover {
  background: var(--violo);
}
.main__link_text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: black;
  transition: all 0.3s ease;
}
.main__link:hover .main__link_text {
  color: white;
}
</style>
