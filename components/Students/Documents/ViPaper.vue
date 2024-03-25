<template>
  <section class="paper">
    <div class="paper__container">
      <UIViBreadcrumbs />
      <UIViTitle class="paper__title" :settings="true"
        >Документы на практику</UIViTitle
      >
      <div class="paper__table">
        <div
          class="paper__item"
          v-for="(item, idx) in ArrayDocument"
          :key="idx"
        >
          <div class="paper__circle"></div>
          <h3 class="paper__name">{{ item.name }} -</h3>
          <a :href="item.path" class="paper__btn" :download="item.pathName"
            >Скачать</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ArrayDocument: [
        {
          name: "Аттестационный лист «Информационные системы»",
          path: "../assets/downloads/AtList.docx",
          pathName: "AtList.docx",
        },
        {
          name: "Аттестационный лист «Коммерция»",
          path: "../assets/downloads/AtListKom.docx",
          pathName: "AtListKom.docx",
        },
        {
          name: "Аттестационный лист «Правоохранительная деятельность»",
          path: "../assets/downloads/AtListP.docx",
          pathName: "AtListP.docx",
        },
        {
          name: "Аттестационный лист «Стилистика» и «Парикмахерское искусство»",
          path: "../assets/downloads/AtListPi.docx",
          pathName: "AtListPi.docx",
        },
        {
          name: "Договор на практику «Информационные системы»",
          path: "../assets/downloads/Dogovor_IS_09_02_04.docx",
          pathName: "Dogovor_IS_09_02_04.docx",
        },
        {
          name: "Договор на практику «Коммерция»",
          path: "../assets/downloads/Dogovor_Commerce.docx",
          pathName: "Dogovor_Commerce.docx",
        },
        {
          name: "Дневник",
          path: "../assets/downloads/Dnevnik.docx",
          pathName: "Dnevnik.docx",
        },
        {
          name: "Рецензия + характеристика",
          path: "../assets/downloads/Recenz.docx",
          pathName: "Recenz.docx",
        },
        {
          name: "Памятка",
          path: "../assets/downloads/Pamyatka.docx",
          pathName: "Pamyatka.docx",
        },
      ],
    };
  },
};
</script>

<style scoped>
.paper {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.paper__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.paper__title {
  margin-top: 30px;
}
.paper__item {
  display: flex;
  align-items: center;
}
.paper__item:not(:last-child) {
  margin-bottom: 20px;
}
.paper__table {
  margin-top: 40px;
}
.paper__name {
  font-family: "Inter", sans-serif;
  font-size: 17px;
}
.paper__btn {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 700;
  border-radius: 50px;
  overflow: hidden;
  color: var(--violo);
  transition: all 0.3s ease-in-out;
  margin-left: 10px;
}
.paper__btn:hover {
  transform: scale(1.05);
}
</style>
