<template>
  <section class="learn">
    <div class="learn__item" v-for="(item, idx) in arrLearn" :key="item">
      <h3 class="learn__number">
        {{ idx + 1 < 10 ? "0" + (idx + 1) : idx + 1 }}
      </h3>
      <h4 class="learn__text">{{ item }}</h4>
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
</style>
