<template>
  <section class="news">
    <div class="news__container">
      <div class="news__roof">
        <UIViTitle>Новости</UIViTitle>
        <button class="news__btn">
          Все новости
          <svg
            class="news__svg"
            width="55"
            height="19"
            viewBox="0 0 66 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66 9.5L51 0.839743L51 18.1603L66 9.5ZM52.5 8L-6.55671e-08 8L6.55671e-08 11L52.5 11L52.5 8Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="news__content">
        <div
          class="news__main"
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="800"
        >
          <div class="news__main_image">
            <img class="news__img" :src="ArrayNews[0].image" alt="" />
            <div class="news__background"></div>
          </div>
          <p class="news__info">
            {{ ArrayNews[0].data }} |
            <span class="news__type">{{ ArrayNews[0].type }}</span>
          </p>
          <h3 class="news__name">{{ ArrayNews[0].name }}</h3>
        </div>
        <div
          class="news__additionally"
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-duration="800"
        >
          <div class="news__additionally_add">
            <div class="news__additionally_image">
              <img
                class="news__additionally_img"
                :src="ArrayNews[1].image"
                alt=""
              />
              <div class="news__background"></div>
            </div>
            <div>
              <p class="news__info news__info_add">
                {{ ArrayNews[1].data }} |
                <span class="news__type">{{ ArrayNews[1].type }}</span>
              </p>
              <h3 class="news__name">{{ ArrayNews[1].name }}</h3>
            </div>
          </div>
          <div class="news__additionally_add">
            <div class="news__additionally_image">
              <img
                class="news__additionally_img"
                :src="ArrayNews[2].image"
                alt=""
              />
              <div class="news__background"></div>
            </div>
            <div>
              <p class="news__info news__info_add">
                {{ ArrayNews[2].data }} |
                <span class="news__type">{{ ArrayNews[2].type }}</span>
              </p>
              <h3 class="news__name">{{ ArrayNews[2].name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ArrayNews: [
        {
          image: "../assets/images/Main/new.webp",
          data: "15 сентября, 2023",
          type: "Мероприятия",
          name: "Путешествие в Советский район",
        },
        {
          image: "../assets/images/Main/new.webp",
          data: "10 августа, 2023",
          type: "Новости колледжа",
          name: "Посвящение в студенты",
        },
        {
          image: "../assets/images/Main/new.webp",
          data: "21 мая, 2022",
          type: "Новости колледжа",
          name: "Дополнительные предметы",
        },
      ],
    };
  },
};
</script>

<style scoped>
.news {
  width: 100vw;
  padding-top: 60px;
  padding-bottom: 60px;
}
.news__container {
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
}
.news__roof {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.news__btn {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 22px;
  padding: 20px 40px;
  background: var(--violo);
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.news__btn:hover {
  transform: translateX(15px);
}
.news__svg {
  margin-left: 20px;
}
.news__content {
  margin-top: 50px;
  display: flex;
}
.news__main {
  margin-right: 40px;
  min-width: 680px;
}
.news__main_image {
  position: relative;
  max-width: 680px;
  height: 450px;
  z-index: 2;
  cursor: pointer;
}
.news__info {
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
}
.news__type {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #8101bd;
}
.news__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #8101bd;
  z-index: 1;
}
.news__img {
  position: relative;
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
.news__img:hover {
  transform: translate(-10px, -10px);
}
.news__name {
  font-family: "Inter", sans-serif;
  font-size: 28px;
  margin-top: 10px;
}
.news__additionally_add {
  display: flex;
  padding: 30px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  cursor: pointer;
}
.news__additionally_add:nth-child(1) {
  margin-bottom: 30px;
}
.news__additionally_image {
  position: relative;
  width: 260px;
  min-width: 260px;
  height: 240px;
  margin-right: 40px;
}
.news__additionally_img {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
.news__additionally_add:hover .news__additionally_img {
  transform: translate(-10px, -10px);
}
.news__info_add {
  margin-top: 0;
}
</style>
