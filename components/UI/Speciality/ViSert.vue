<template>
  <section class="sert border">
    <div class="sert__item" v-for="item in arrSert" :key="item">
      <a :href="item.imageOpen" target="_blank"
        ><img class="image_opacity" :src="item.imageOpen"
      /></a>
    </div>
  </section>
</template>

<script>
export default {
  props: { arrSert: { type: Array } },
};
</script>

<style scoped>
.sert {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  background: white;
  padding: 30px 30px 30px 60px;
  /* margin-bottom: 60px; */
}
.sert__item {
  margin-right: 20px;
}
@media screen and (max-width: 1320px) {
  .sert__item {
    max-width: 200px;
  }
}
@media screen and (max-width: 670px) {
  .sert {
    padding: 40px 40px;
    justify-content: center;
  }
}
@media screen and (max-width: 550px) {
  .sert {
    padding: 30px 30px;
  }
}
</style>
