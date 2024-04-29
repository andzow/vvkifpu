<template>
  <section class="news">
    <div class="news__container">
      <div class="news__roof">
        <h2 class="news__title font" data-font-actual="60">Новости</h2>
        <button class="news__btn font border" data-font-actual="22">
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
              class="path arrow"
              d="M66 9.5L51 0.839743L51 18.1603L66 9.5ZM52.5 8L-6.55671e-08 8L6.55671e-08 11L52.5 11L52.5 8Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="news__content" v-if="ArrayNews">
        <div
          class="news__main"
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="1000"
        >
          <div class="news__main_image">
            <img
              class="news__img image_opacity"
              :src="ArrayNews[0].image"
              alt=""
            />
            <div class="news__background border"></div>
          </div>
          <p class="news__info font" data-font-actual="16">
            {{ ArrayNews[0].data }} |
            <span class="news__type font" data-font-actual="20">{{
              ArrayNews[0].type
            }}</span>
          </p>
          <h3 class="news__name font" data-font-actual="28">
            {{ ArrayNews[0].name }}
          </h3>
          <button
            class="news__btn news__btn_mobile font border"
            data-font-actual="22"
          >
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
                class="path arrow"
                d="M66 9.5L51 0.839743L51 18.1603L66 9.5ZM52.5 8L-6.55671e-08 8L6.55671e-08 11L52.5 11L52.5 8Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div
          class="news__additionally"
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-duration="1000"
        >
          <div class="news__additionally_add">
            <div class="news__additionally_image">
              <img
                class="news__additionally_img image"
                :src="ArrayNews[1].image"
                alt=""
              />
              <div class="news__background border"></div>
            </div>
            <div>
              <p class="news__info news__info_add font" data-font-actual="16">
                {{ ArrayNews[1].data }} |
                <span class="news__type font" data-font-actual="20">{{
                  ArrayNews[1].type
                }}</span>
              </p>
              <h3 class="news__name font" data-font-actual="28">
                {{ ArrayNews[1].name }}
              </h3>
            </div>
          </div>
          <div class="news__additionally_add">
            <div class="news__additionally_image">
              <img
                class="news__additionally_img image"
                :src="ArrayNews[2].image"
                alt=""
              />
              <div class="news__background border"></div>
            </div>
            <div>
              <p class="news__info news__info_add font" data-font-actual="16">
                {{ ArrayNews[2].data }} |
                <span class="news__type font" data-font-actual="20">{{
                  ArrayNews[2].type
                }}</span>
              </p>
              <h3 class="news__name font" data-font-actual="28">
                {{ ArrayNews[2].name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostController from "@/http/controllers/PostController";
import { USE_SERVER } from "~/url";

export default {
  data() {
    return {
      ArrayNews: null,
    };
  },
  methods: {
    async initApp() {
      try {
        const posts = await PostController.getPostThree();
        this.ArrayNews = posts.map((el) => {
          const obj = { ...el };
          obj.image = USE_SERVER + obj.image;
          obj.data = new Date(el.createdAt)
            .toLocaleString("ru-RU", {
              month: "long",
              year: "numeric",
              day: "2-digit",
            })
            .replace(".", "");
          obj.data = obj.data.substring(0, obj.data.length - 1);
          return obj;
        });
      } catch {}
    },
  },
  async mounted() {
    this.initApp();
  },
};
</script>

<style scoped>
.news {
  width: 100vw;
  padding-top: 60px;
}
.news__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.news__roof {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.news__title {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 60px;
  transition: all 0.3s ease;
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
.news__btn_mobile {
  display: none;
}
.news__btn:hover {
  transform: translateX(15px);
}
.news__svg {
  margin-left: 20px;
}
.news__content {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.news__main {
  margin-right: 40px;
}
.news__main_image {
  position: relative;
  max-height: 400px;
  max-width: 100%;
  z-index: 2;
  cursor: pointer;
}
.news__main_image img {
  width: 100%;
  height: 100%;
  min-height: 400px;
  max-height: 400px;
}
.news__info {
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
  transition: all 0.3s ease;
}
.news__type {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #8101bd;
  transition: all 0.3s ease;
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
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
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
  transition: all 0.3s ease;
}
.news__additionally_add {
  display: flex;
  padding: 30px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
.news__additionally_add:nth-child(1) {
  margin-bottom: 30px;
}
.news__additionally_image {
  position: relative;
  width: 230px;
  min-width: 230px;
  height: 230px;
  margin-right: 40px;
  cursor: pointer;
}
.news__additionally_img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 3;
  transition: all 0.3s ease-in-out;
}
.news__additionally_img:hover {
  transform: translate(-10px, -10px);
}
.news__info_add {
  margin-top: 0;
}
@media (max-width: 960px) {
  .news__content {
    grid-template-columns: repeat(1, 1fr);
  }
  .news__main {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .news__additionally {
    display: none;
  }
  .news__main_image {
    max-width: 600px;
  }
}
@media (max-width: 620px) {
  .news__title {
    font-size: 40px !important;
  }
  .news__btn {
    font-size: 20px !important;
    padding: 15px 30px;
  }
  .news__main_image {
    max-height: 250px;
  }
  .news__main_image img {
    min-height: 250px;
    max-height: 250px;
  }
}
@media (max-width: 520px) {
  .news__btn {
    display: none;
  }
  .news__content {
    margin-top: 30px;
  }
  .news__name {
    text-align: center;
    font-size: 26px !important;
  }
  .news__btn_mobile {
    display: block;
    margin-top: 20px;
  }
  .news__svg {
    transform: translateY(5px);
  }
}
</style>
