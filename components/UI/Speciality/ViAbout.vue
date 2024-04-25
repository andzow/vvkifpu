<template>
  <section class="about border">
    <ul class="about__ul">
      <li
        class="about__li font"
        data-font-actual="17"
        v-for="item in arrAbout"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    arrAbout: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.about {
  background: white;
  padding: 30px 30px 30px 60px;
  margin-bottom: 30px;
}
.about__li {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 500;
  list-style-type: circle;
  color: black;
  margin-bottom: 10px;
}
.about__li:last-child {
  margin-bottom: 0px;
}
@media screen and (max-width: 1320px) {
  .about__li {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 670px) {
  .about {
    padding: 40px 40px;
  }
}
@media screen and (max-width: 550px) {
  .about {
    padding: 30px 40px;
  }
}
</style>
