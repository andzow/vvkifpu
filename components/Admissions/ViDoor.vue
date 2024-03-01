<template>
  <section class="door">
    <div class="door__container">
      <h2 class="door_title">ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ</h2>
      <div class="door_container">
        <p class="door_name" v-for="item in arrStudents" :key="item">
          {{ item }}
        </p>
      </div>
      <p class="door_des">
        Если Вы решили получать среднее профессиональное образование, предлагаем
        ознакомиться со специальностями среднего профессионального образования.
        Этот раздел поможет вам узнать из действующих стандартов СПО о
        требованиях к выпускникам по выбранной специальности, о совокупности
        приобретённых в процессе обучения знаний, умений и навыков.
      </p>
      <div class="door_learn">
        <p class="door_name">Обучение платное</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrStudents: ["В 2024 году — 30 марта"],
    };
  },
};
</script>

<style scoped>
.door {
  width: 100vw;
}
.door__container {
  max-width: 1800px;
  padding: 0 20px 80px 20px;
  margin: 0 auto;
}
.door_title {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: black;
}
.door_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}
.door_name {
  text-align: center;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 30px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-right: 10px;

  cursor: pointer;
  transition: all 0.3s ease;
}
.door_name:hover {
  background: var(--violo);
  color: white;
}
.door_des {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: black;
  line-height: 140%;
  max-width: 800px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.door_learn {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}
</style>
