<template>
  <section class="students">
    <div class="students__container">
      <h2 class="students_title font_special" data-font-actual="34">
        НАШИ СТУДЕНТЫ ПОЛУЧАЮТ:
      </h2>
      <div class="students_container">
        <p
          class="students_name font"
          data-font-actual="18"
          v-for="item in arrStudents"
          :key="item"
        >
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
      arrStudents: [
        "Качественное образование",
        "Диплом государственного образца",
        "Юношам отсрочка от армии",
      ],
    };
  },
};
</script>

<style scoped>
.students {
  width: 100vw;
}
.students__container {
  max-width: 1400px;
  padding: 0 20px 80px 20px;
  margin: 0 auto;
}
.students_title {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: black;
}
.students_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.students_name {
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
@media screen and (max-width: 990px) {
  .students_container {
    grid-template-columns: repeat(2, 1fr);
  }
  .students__container {
    padding: 0 20px 40px 20px;
  }
}
@media screen and (max-width: 760px) {
  .students_name {
    border-radius: 50px;
    font-size: 17px !important;
  }
  .students_title {
    font-size: 28px !important;
  }
}
@media screen and (max-width: 620px) {
  .students_container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
