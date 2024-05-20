<template>
  <section class="sert border" id="specialitySert">
    <div class="sert__item" v-for="item in arrSert" :key="item">
      <a :href="urlServer + item.attributes.url" target="_blank"
        ><img
          class="sert__image image_opacity"
          :src="urlServer + item.attributes.url"
      /></a>
    </div>
  </section>
</template>

<script>
import { USE_STRAPI_UPLOADS } from "~/url";

export default {
  props: { arrSert: { type: Array } },
  data() {
    return {
      urlServer: null,
    };
  },
  mounted() {
    this.urlServer = USE_STRAPI_UPLOADS;
  },
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

.sert__image {
  height: 394px;
  width: 300px;
  object-fit: cover;
}
.sert__item {
  margin-right: 20px;
}
@media screen and (max-width: 1320px) {
  .sert__item {
    max-width: 200px;
  }
  .sert__image {
    height: 290px;
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
