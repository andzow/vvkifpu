<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Материально-техническое обеспечение и оснащенность образовательного
        процесса</UIViTitle
      >
      <div class="main__content">
        <div
          class="main__link"
          v-for="item in arrStudents"
          :key="item"
          @click="setPage(item)"
        >
          <p class="main__link_text font" data-font-actual="17">
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
      arrStudents: [
        {
          name: "Материально-техническое обеспечение образовательного процесса",
          set: "href",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "Условия питания",
          set: "link",
          href: "/information/canteen",
        },
        {
          name: "Электронная библиотека",
          set: "href",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
        {
          name: "Договор об информационном и консультационно-справочном обслуживании",
          set: "href",
          href: "http://vvkifpu.ru/wp-content/uploads/2019/10/MatTechObesp.pdf",
        },
      ],
    };
  },
  methods: {
    setPage(item) {
      const { set } = item;
      if (set === "link") {
        this.$router.push(item.href);
        return;
      }
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__link:hover {
  background: var(--violo);
}
.main__link_text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: black;
  transition: all 0.3s ease;
  text-align: center;
}
.main__link:hover .main__link_text {
  color: white;
}
</style>
