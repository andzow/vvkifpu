<template>
  <section class="novelty">
    <div class="novelty__container">
      <UIViBreadcrumbs />
      <UIViTitle class="novelty__title" :settings="true">Новости колледжа</UIViTitle>
      <div class="novelty__grid">
        <div
          class="novelty__item"
          v-for="(item, idx) in ArrayOccasion"
          :key="idx"
        >
          <div class="novelty__image">
            <img class="novelty__img" :src="item.image" alt="" />
            <div class="novelty__back"></div>
          </div>
          <p class="novelty__info">
            {{ item.date }} |
            <span class="novelty__type">{{ item.type }}</span>
          </p>
          <h3 class="novelty__name">{{ item.name }}</h3>
        </div>
      </div>
      <div class="novelty__position">
        <button class="novelty__btn">Загрузить ещё</button>
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
          image: "../assets/images/News/college.webp",
          date: "15 сентября, 2020",
          type: "Новости колледжа",
          name: "Чаепитие в библиотеке",
        },
        {
          image: "../assets/images/News/college.webp",
          date: "15 сентября, 2020",
          type: "Новости колледжа",
          name: "Чаепитие в библиотеке",
        },
        {
          image: "../assets/images/News/college.webp",
          date: "15 сентября, 2020",
          type: "Новости колледжа",
          name: "Чаепитие в библиотеке",
        },
        {
          image: "../assets/images/News/college.webp",
          date: "15 сентября, 2020",
          type: "Новости колледжа",
          name: "Чаепитие в библиотеке",
        },
        {
          image: "../assets/images/News/college.webp",
          date: "15 сентября, 2020",
          type: "Новости колледжа",
          name: "Чаепитие в библиотеке",
        },
      ],
    };
  },
};
</script>

<style scoped>
.novelty {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.novelty__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.novelty__title {
  margin-top: 30px;
}
.novelty__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 60px;
  gap: 50px;
}
.novelty__image {
  position: relative;
  cursor: pointer;
}
.novelty__image:hover .novelty__img {
  transform: translate(-10px, -10px);
}
.novelty__img {
  position: relative;
  z-index: 3;
  transition: all 0.3s ease-in-out;
}
.novelty__back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--violo);
  z-index: 2;
}
.novelty__info {
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
  transition: all 0.3s ease;
}
.novelty__type {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: var(--violo);
  transition: all 0.3s ease;
}
.novelty__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 28px;
  margin-top: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.novelty__position {
  display: flex;
  align-items: center;
  justify-content: center;
}
.novelty__btn {
  margin-top: 60px;
  padding: 20px 40px;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 500;
  background: var(--violo);
  border-radius: 50px;
  overflow: hidden;
  color: #fff;
  transition: all 0.3s ease-in-out;
}
.novelty__btn:hover {
  transform: scale(1.05);
}
</style>
