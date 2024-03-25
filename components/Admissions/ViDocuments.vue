<template>
  <section class="documents">
    <div class="documents__container">
      <h2 class="documents_title">СПИСОК ДОКУМЕНТОВ ДЛЯ ПОСТУПЛЕНИЯ:</h2>
      <div class="documents_container">
        <p class="documents_name" v-for="item in arrDocuments" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrDocuments: [
        "Паспорт",
        "Государственный документ об образовании (аттестат)",
        "6 фотографий размером 3х4",
        "Медицинская справка У-086",
        "Характеристика",
        "Приписное свидетельство или военный билет",
        "Копия свидетельства о рождении",
        "СНИЛС",
        "ИНН",
      ],
    };
  },
};
</script>

<style scoped>
.documents {
  width: 100vw;
}
.documents__container {
  max-width: 1600px;
  padding: 0 20px 80px 20px;
  margin: 0 auto;
}
.documents_title {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: black;
}
.documents_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.documents_name {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 20px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-right: 10px;
}
</style>
