<template>
  <div
    class="traningCard"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="800"
  >
    <div class="traningCard__element" :style="squareStyle">
      <p class="traningCard__code">{{ card.code }}</p>
      <h2
        class="traningCard__name font"
        :class="{
          traningCard__name_special: card.name === 'Коммерция (По отраслям)',
        }"
      >
        {{ card.name }}
      </h2>
      <div class="traningCard__icon" v-html="card.icon"></div>
    </div>
    <div class="traningCard__background"></div>
  </div>
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

<style>
.traningCard__element:hover {
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
.traningCard__code {
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 22px;
  color: #fff;
}
.traningCard__name {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: calc(var(--assistant) * 2.8);
  color: #fff;
  max-width: 300px;
  line-height: 30px;
  margin-top: 5px;
}
.traningCard__name_special {
  max-width: 220px;
}
.traningCard__icon {
  position: absolute;
  bottom: 30px;
  right: 40px;
}
.traningCard:hover .traningCard__icon svg path {
  fill: var(--violo);
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
