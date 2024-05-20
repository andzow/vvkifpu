<template>
  <section class="learn border" id="specialityLearn">
    <div class="learn__item" v-for="(item, idx) in arrLearn" :key="item">
      <h3 class="learn__number font_special" data-font-actual="40">
        {{ idx + 1 < 10 ? "0" + (idx + 1) : idx + 1 }}
      </h3>
      <h4 class="learn__text font" data-font-actual="17">{{ item }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    arrLearn: { type: Array },
  },
};
</script>

<style scoped>
.learn {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: white;
  padding: 30px 30px 30px 60px;
  margin-bottom: 30px;
}
.learn__item {
  max-width: 350px;
}
.learn__number {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 88%;
  margin-bottom: 10px;
  color: black;
}
.learn__text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
  color: black;
}
@media screen and (max-width: 1320px) {
  .learn__number {
    font-size: 34px !important;
  }
  .learn__text {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 1185px) {
  .learn {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 960px) {
  .learn {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 860px) {
  .learn {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 670px) {
  .learn {
    padding: 40px 40px;
  }
}
@media screen and (max-width: 550px) {
  .learn {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 550px) {
  .learn {
    padding: 30px 30px;
  }
}
</style>
