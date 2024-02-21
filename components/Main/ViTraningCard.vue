<template>
  <div class="traningCard" :style="squareStyle">
    <p class="traningCard__code">{{ card.code }}</p>
    <h2 class="traningCard__name" :class="{traningCard__name_special: card.name === 'Коммерция (По отраслям)'}">{{ card.name }}</h2>
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
                backgroundSize: 'cover',
                backgroundPosition: "center",
            }
        }
    }
}
</script>

<style>
.traningCard:hover {
    transform: scale(1.05);
}
.traningCard {
    position: relative;
    width: 100%;
    height: 320px;
    cursor: pointer;
    padding: 30px;
    transition: all .3s ease;
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
    fill: var(--violo)
}
</style>