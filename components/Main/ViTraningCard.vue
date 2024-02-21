<template>
  <div class="traningCard" :style="squareStyle">
    <p class="traningCard__code">{{ card.code }}</p>
    <p class="traningCard__name">{{ card.name }}</p>
    <div class="traningCard__icon" v-html="card.icon"></div>
  </div>
</template>

<script>
export default {
    props: {
        card: Object
    },
    computed: {
        squareStyle() {
            return {
                background: `url(${this.card.image})`,
            }
        }
    }
}
</script>

<style scoped>
.traningCard {
    position: relative;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 320px;
    cursor: pointer;
    padding: 30px;
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
    font-size: 28px;
    color: #fff;
    max-width: 350px;
    line-height: 30px;
    margin-top: 5px;
}
.traningCard__icon {
    position: absolute;
    bottom: 30px;
    right: 30px;
}
</style>