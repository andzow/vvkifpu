<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Численность обучающихся</UIViTitle
      >
      <div class="main__content">
        <div class="main__link" v-for="item in arrStudents" :key="item">
          <p class="main__link_text">
            {{ item.name }}
          </p>
          <p class="main__link_text">{{ item.count }}</p>
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
          name: "Численность обучающихся на 1 сентября 2020 г",
          count: "700 человек",
        },
        {
          name: "За счет фед. бюджета",
          count: "0",
        },
        {
          name: "За счет бюджета субъекта",
          count: "0",
        },
        {
          name: "За счет местного бюджета",
          count: "0",
        },
        {
          name: "По договорам об оказании платных обр. услуг",
          count: "700",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  padding-top: 230px;
}
.main__container {
  max-width: 1440px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--violo);
  border-radius: 70px;
  width: 100%;
  padding: 20px 30px;
}
.main__link_text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: black;
}
</style>
