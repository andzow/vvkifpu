<template>
  <NuxtLink :to="card.path" class="traningCard border">
    <p class="traningCard__code font" data-font-actual="22">
      {{ card.code }}
    </p>
    <h2
      class="traningCard__name font"
      data-font-actual="28"
      v-html="card.name"
    ></h2>
    <div class="traningCard__icon" v-html="card.icon"></div>
    <img class="traningCard__image image" :src="card.image" alt="" />
    <div class="traningCard__background"></div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.traningCard:hover .traningCard__image,
.traningCard:hover .traningCard__code,
.traningCard:hover .traningCard__name,
.traningCard:hover .traningCard__icon {
  transform: translate(-10px, -10px);
}
.traningCard {
  position: relative;
  padding: 30px;
  height: 350px;
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
.traningCard__code {
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 22px;
  color: #fff;
  transition: all 0.3s ease;
  z-index: 3;
}
.traningCard__name {
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #fff;
  margin-top: 5px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: flex-start;
  z-index: 3;
}
.traningCard__icon {
  position: absolute;
  bottom: 30px;
  right: 40px;
  z-index: 3;
  transition: all 0.3s ease;
}
.traningCard__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  transition: all 0.3s ease;
}
.traningCard__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--violo);
  z-index: 1;
}
</style>
