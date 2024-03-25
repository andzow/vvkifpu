<template>
  <NuxtLink
    :to="card.path"
    class="traningCard border"
    data-aos="zoom-in-up"
    data-aos-offset="200"
    data-aos-duration="1000"
  >
    <div
      class="traningCard__element traningCard__animation background border"
      :style="squareStyle"
    >
      <p class="traningCard__code font" data-font-actual="22">
        {{ card.code }}
      </p>
      <h2
        class="traningCard__name font"
        data-font-actual="28"
        v-html="card.name"
      ></h2>
      <div class="traningCard__icon" v-html="card.icon"></div>
    </div>
    <div class="traningCard__background"></div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  computed: {
    squareStyle() {
      return {
        background: `url(${this.card.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    },
  },
};
</script>

<style scoped>
.traningCard__animation:hover {
  transform: translate(-10px, -10px);
}
.traningCard {
  position: relative;
  z-index: 2;
}
.traningCard__element {
  position: relative;
  width: 100%;
  height: 320px;
  cursor: pointer;
  padding: 30px;
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
.traningCard__element::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
}
.traningCard__code {
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 22px;
  color: #fff;
  transition: all 0.3s ease;
}
.traningCard__name {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: calc(var(--assistant) * 2.8);
  color: #fff;
  margin-top: 5px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: flex-start;
}
.traningCard__icon {
  position: absolute;
  bottom: 30px;
  right: 40px;
}
.traningCard__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--violo);
  z-index: 1;
}
</style>
