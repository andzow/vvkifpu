<template>
  <section class="sert">
    <div class="sert__item" v-for="item in arrSert" :key="item">
      <a :href="item.imageOpen" target="_blank"
        ><NuxtImg :src="item.imageSrc" height="375" width="270" :quality="90"
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
