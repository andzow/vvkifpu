<template>
  <section class="novelty">
    <div class="novelty__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="novelty__title" :settings="true"
        >Новости колледжа</UIViTitle
      >
      <div class="novelty__grid">
        <div
          class="novelty__item"
          v-for="(item, idx) in ArrayOccasion"
          :key="idx"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div class="novelty__image">
            <img class="novelty__img image_opacity" :src="item.image" alt="" />
            <div class="novelty__back border">
              <p class="novelty__help font" data-font-actual="28">Фотография</p>
            </div>
          </div>
          <p class="novelty__info font" data-font-actual="16">
            {{ item.date }} |
            <span class="novelty__type font" data-font-actual="16">{{
              item.type
            }}</span>
          </p>
          <h3 class="novelty__name font" data-font-actual="24">
            {{ item.name }}
          </h3>
        </div>
      </div>
      <div class="novelty__position">
        <button class="novelty__btn font border" data-font-actual="18">
          Загрузить ещё
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrCrumbs: [
        {
          name: "Новости колледжа",
          path: "/news/college",
        },
      ],
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
  max-width: 1400px;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 17px;
  color: var(--violo);
  transition: all 0.3s ease;
}
.novelty__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
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
  font-size: 18px;
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
.novelty__help {
  font-size: 28px;
  color: #fff;
}
@media (max-width: 1220px) {
  .novelty__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
@media (max-width: 1061px) {
  .novelty__grid {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
    gap: 30px;
  }
}
@media (max-width: 990px) {
  .novelty {
    padding-top: 150px;
  }
}
@media (max-width: 708px) {
  .novelty__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    max-width: 600px;
  }
}
@media (max-width: 500px) {
  .novelty__btn {
    margin-top: 40px;
    padding: 20px 30px;
  }
  .novelty {
    margin-bottom: 40px;
  }
}
@media (max-width: 440px) {
  .novelty__info {
    margin-top: 20px;
  }
  .novelty__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
}
</style>
