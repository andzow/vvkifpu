<template>
  <section class="occasion">
    <div class="occasion__container">
        <UIViTitle :settings="true">Мероприятия</UIViTitle>
        <div class="occasion__grid">
            <div class="occasion__item" v-for="(item, idx) in ArrayOccasion" :key="idx">
                <div class="occasion__image">
                    <img class="occasion__img" :src="item.image" alt="">
                    <div class="occasion__back"></div>
                </div>
                <p class="occasion__info">
                    {{ item.date }} |
                    <span class="occasion__type">{{ item.type }}</span>
                </p>
                <h3 class="occasion__name">{{ item.name }}</h3>
            </div>
        </div>
        <div class="occasion__position">
            <button class="occasion__btn">Загрузить ещё</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            ArrayOccasion: [
                {
                    image: "../assets/images/News/occasion.webp",
                    date: "15 сентября, 2020",
                    type: "Мероприятия",
                    name: "Чаепитие в библиотеке"
                },
                {
                    image: "../assets/images/News/occasion.webp",
                    date: "15 сентября, 2020",
                    type: "Мероприятия",
                    name: "Чаепитие в библиотеке"
                },
                {
                    image: "../assets/images/News/occasion.webp",
                    date: "15 сентября, 2020",
                    type: "Мероприятия",
                    name: "Чаепитие в библиотеке"
                },
                {
                    image: "../assets/images/News/occasion.webp",
                    date: "15 сентября, 2020",
                    type: "Мероприятия",
                    name: "Чаепитие в библиотеке"
                },
                {
                    image: "../assets/images/News/occasion.webp",
                    date: "15 сентября, 2020",
                    type: "Мероприятия",
                    name: "Чаепитие в библиотеке"
                },
            ]
        }
    }
}
</script>

<style scoped>
.occasion {
  margin-top: 80px;
  margin-bottom: 80px;
}
.occasion__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.occasion__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 60px;
    gap: 50px;
}
.occasion__image {
    position: relative;
    cursor: pointer;
}
.occasion__image:hover .occasion__img {
    transform: translate(-10px, -10px);
}
.occasion__img {
    position: relative;
    z-index: 3;
    transition: all 0.3s ease-in-out;
}
.occasion__back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #8101bd;
    z-index: 2;
}
.occasion__info {
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
  transition: all .3s ease;
}
.occasion__type {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #8101bd;
  transition: all .3s ease;
}
.occasion__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 28px;
  margin-top: 10px;
  transition: all .3s ease;
  cursor: pointer;
}
.occasion__position {
    display: flex;
    align-items: center;
    justify-content: center;
}
.occasion__btn {
    margin-top: 60px;
    padding: 20px 40px;
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 500;
    background: #8101bd;
    border-radius: 50px;
    overflow: hidden;
    color: #fff;
    transition: all 0.3s ease-in-out;
}
.occasion__btn:hover {
    transform: scale(1.05);
}
</style>