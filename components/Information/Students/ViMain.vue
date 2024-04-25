<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Численность обучающихся</UIViTitle
      >
      <div class="main__content">
        <div class="main__link" v-for="item in arrStudents" :key="item">
          <p class="main__link_text font" data-font-actual="16">
            {{ item.name }}
          </p>
          <p class="main__link_text font" data-font-actual="16">
            {{ item.count }}
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
          name: "Численность обучающихся",
          path: "/information/number-students",
        },
      ],
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
  margin-bottom: 80px;
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
  white-space: nowrap;
}
.main__link_text:nth-child(1) {
  margin-right: 20px;
}
@media screen and (max-width: 1100px) {
  .main__content {
    grid-template-columns: repeat(1, 1fr);
  }
  .main__link {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 990px) {
  .main {
    padding-top: 150px;
    margin-bottom: 40px;
  }
  .main__header {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 550px) {
  .main__link_text {
    white-space: pre-wrap;
  }
  .main__link {
    flex-wrap: nowrap;
    border: none;
    border-bottom: 1px solid var(--violo);
    border-radius: 0px;
    padding: 20px 0;
  }
}
</style>
