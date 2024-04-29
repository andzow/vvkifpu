<template>
  <section class="novelty">
    <div class="novelty__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="novelty__title" :settings="true"
        >Новости колледжа</UIViTitle
      >
      <div class="novelty__grid" v-if="ArrayOccasion">
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
      <div
        class="novelty__empty"
        v-if="!ArrayOccasion || ArrayOccasion?.length <= 0"
      >
        Пусто
      </div>
      <div class="novelty__position">
        <button
          class="novelty__btn font border"
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
          name: "Новости колледжа",
          path: "/news/college",
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
          path: "/news/college",
          query: {
            ...this.$route.query,
            type: "Новости колледжа",
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
          path: "/news/college",
          query: {
            ...this.$route.query,
            type: "Новости колледжа",
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
  min-height: 250px;
  max-height: 250px;
  max-width: 100%;
  cursor: pointer;
}
.novelty__image:hover .novelty__img {
  transform: translate(-10px, -10px);
}
.novelty__img {
  position: relative;
  object-fit: cover;
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  transition: all 0.3s ease-in-out;
  z-index: 3;
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
.novelty__empty {
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
  .novelty__empty {
    height: 200px;
  }
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
  .novelty__empty {
    font-size: 55px;
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
  .novelty__empty {
    font-size: 38px;
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
