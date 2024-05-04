<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Вакансии для преподавателей</UIViTitle
      >
      <div class="main__menu" v-for="item in arrCopies" :key="item">
        <h2 class="main__title font_special" data-font-actual="34">
          {{ item.name }}
        </h2>
        <div class="main__content">
          <div
            clas="main__href"
            :href="list.href"
            target="_blank"
            v-for="list in item.arrDocs"
            :key="list"
          >
            <div class="main__item">
              <div class="main__link font" data-font-actual="17">
                {{ list.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="main__des">{{ item.des }}</div>
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
          name: "Вакансии для преподавателей",
          path: "/information/job",
        },
      ],
      arrCopies: [
        {
          name: "Общих дисциплин",
          arrDocs: [
            {
              name: "Русского языка",
            },
            {
              name: "Литературы",
            },
            {
              name: "Родной литературы",
            },
            {
              name: "Математики",
            },
            {
              name: "Высшей математики",
            },
          ],
        },
        {
          name: "Спец дисциплин специальности `Информационные системы`",
          arrDocs: [
            {
              name: "Информационная безопасность",
            },
            {
              name: "Компьютерные сети",
            },
            {
              name: "Информационные технологии",
            },
            {
              name: "Компьютерная графика",
            },
          ],
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
.main__menu {
  margin-bottom: 80px;
}
.main__title {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  margin-bottom: 30px;
  max-width: 900px;
  color: black;
}
.main__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.main__link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: black;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 20px 30px;
  transition: all 0.3s ease;
}
.main__des {
  margin-top: 40px;
  font-family: "Inter", sans-serif;
  max-width: 700px;
  line-height: 14 0%;
  font-weight: 500;
  font-size: 16px;
  color: black;
}
@media screen and (max-width: 990px) {
  .main {
    padding-top: 150px;
  }
  .main__header {
    margin-bottom: 30px;
  }
  .main__content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 550px) {
  .main__content {
    grid-template-columns: repeat(1, 1fr);
  }
  .main__title {
    font-size: 28px !important;
  }
}
</style>
