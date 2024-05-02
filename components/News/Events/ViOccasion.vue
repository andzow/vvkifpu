<template>
  <section class="occasion">
    <div class="occasion__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="occasion__title" :settings="true"
        >Мероприятия</UIViTitle
      >
      <div class="occasion__grid" v-if="ArrayOccasion">
        <div
          class="occasion__item"
          v-for="(item, idx) in ArrayOccasion"
          @click="$router.push(`/news/${item.name}`)"
          :key="idx"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div class="occasion__image">
            <img class="occasion__img image_opacity" :src="item.image" alt="" />
            <div class="occasion__back border">
              <p class="occasion__help font" data-font-actual="28">
                Фотография
              </p>
            </div>
          </div>
          <p class="occasion__info font" data-font-actual="16">
            {{ item.date }} |
            <span class="occasion__type font" data-font-actual="16">{{
              item.type
            }}</span>
          </p>
          <h3 class="occasion__name font" data-font-actual="24">
            {{ item.name }}
          </h3>
        </div>
      </div>
      <div
        class="occasion__empty"
        v-if="!ArrayOccasion || ArrayOccasion?.length <= 0"
      >
        Пусто
      </div>
      <div class="occasion__position">
        <button
          class="occasion__btn font border"
          data-font-actual="18"
          @click="addNumber"
          v-if="!isActiveButton"
        >
          Загрузить ещё
        </button>
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
      arrCrumbs: [
        {
          name: "Мероприятия",
          path: "/news/events",
        },
      ],
      ArrayOccasion: null,
      numberCounter: null,
      isActiveButton: true,
    };
  },
  methods: {
    async addNumber() {
      try {
        const { number } = { ...this.$route.query };
        this.$router.replace({
          path: "/news/events",
          query: {
            ...this.$route.query,
            type: "Мероприятия",
            number: !number ? 6 : parseInt(number) + 6,
          },
        });
        const router = { ...this.$route.query };
        router.number = parseInt(number) + 6;
        const post = await PostController.getPostNews(router);
        this.isActiveButton = post.log;
        if (post) {
          this.changeArray(post);
        }
      } catch {}
    },
    async changeArray(post) {
      this.ArrayOccasion = post.posts.map((el) => {
        const obj = { ...el };
        obj.image = USE_SERVER + obj.image;
        obj.date = new Date(el.createdAt)
          .toLocaleString("ru-RU", {
            month: "long",
            year: "numeric",
            day: "2-digit",
          })
          .replace(".", "");
        obj.date = obj.date.substring(0, obj.date.length - 1);
        return obj;
      });
    },
    async initApp() {
      try {
        const { number } = { ...this.$route.query };
        await this.$router.push({
          path: "/news/events",
          query: {
            ...this.$route.query,
            type: "Мероприятия",
            number: !number ? 6 : number,
          },
        });
        const post = await PostController.getPostNews(this.$route.query);
        this.isActiveButton = post.log;
        this.changeArray(post);
      } catch {}
    },
  },
  async mounted() {
    this.initApp();
  },
};
</script>

<style scoped>
.occasion {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.occasion__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.occasion__title {
  margin-top: 30px;
}
.occasion__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 60px;
  gap: 50px;
}
.occasion__image {
  position: relative;
  min-height: 250px;
  max-height: 250px;
  max-width: 100%;
  cursor: pointer;
}
.occasion__image:hover .occasion__img {
  transform: translate(-10px, -10px);
}
.occasion__img {
  position: relative;
  object-fit: cover;
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
.occasion__back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #8101bd;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.occasion__info {
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
  transition: all 0.3s ease;
}
.occasion__type {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #8101bd;
  transition: all 0.3s ease;
}
.occasion__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  margin-top: 10px;
  transition: all 0.3s ease;
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
  font-size: 18px;
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
.occasion__help {
  font-size: 28px;
  color: #fff;
}
.occasion__empty {
  font-family: "Inter", sans-serif;
  font-size: 76px;
  font-weight: 600;
  color: #6b7280;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}
@media (max-width: 1320px) {
  .occasion__empty {
    height: 200px;
  }
}
@media (max-width: 1220px) {
  .occasion__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
@media (max-width: 1061px) {
  .occasion__grid {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
    gap: 30px;
  }
}
@media (max-width: 990px) {
  .occasion {
    padding-top: 150px;
  }
  .occasion__empty {
    font-size: 55px;
  }
}
@media (max-width: 708px) {
  .occasion__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    max-width: 600px;
  }
}
@media (max-width: 500px) {
  .occasion__btn {
    margin-top: 40px;
    padding: 20px 30px;
  }
  .occasion {
    margin-bottom: 40px;
  }
  .occasion__empty {
    font-size: 38px;
  }
}
@media (max-width: 440px) {
  .occasion__info {
    margin-top: 20px;
  }
  .occasion__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
}
</style>
