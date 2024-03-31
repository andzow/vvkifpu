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
</style>
