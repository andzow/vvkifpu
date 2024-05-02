<template>
  <section class="search">
    <div class="search__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="search__title" :settings="true"
        >По запросу: {{ $route.query.name }}</UIViTitle
      >
      <div class="search__grid" v-if="ArrayOccasion">
        <div
          class="search__item"
          v-for="(item, idx) in ArrayOccasion"
          @click="$router.push(`/news/${item.name}`)"
          :key="idx"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div class="search__menu" v-if="item.image">
            <div class="search__image">
              <img class="search__img image_opacity" :src="item.image" alt="" />
              <div class="search__back border">
                <p class="search__help font" data-font-actual="28">
                  Фотография
                </p>
              </div>
            </div>
            <p class="search__info font" data-font-actual="16">
              {{ item.date }} |
              <span class="search__type font" data-font-actual="16">{{
                item.type
              }}</span>
            </p>
            <h3 class="search__name font" data-font-actual="24">
              {{ item.name }}
            </h3>
          </div>
        </div>
      </div>
      <div
        class="search__empty"
        v-if="!ArrayOccasion || ArrayOccasion?.length <= 0"
      >
        Пусто
      </div>
      <div class="search__position">
        <button
          class="search__btn font border"
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
          name: "Поиск",
          path: "/news/all-news",
        },
      ],
      ArrayOccasion: useNewsAll(),
      numberCounter: null,
      isActiveButton: true,
    };
  },
  methods: {
    async changeArray(post) {
      if (post === 404) return;

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
        await this.$router.replace({
          path: "/news/all-news",
          query: {
            name: !this.$route.query.name ? "" : this.$route.query.name,
          },
        });
        const post = await PostController.getPostCommunity(
          this.$route.query.name
        );
        this.isActiveButton = post.log;
        this.changeArray(post);
      } catch (e) {}
    },
  },
  async mounted() {
    this.initApp();
  },
  watch: {
    $route(from, to) {
      if (from.path !== "/") this.initApp();
    },
  },
};
</script>

<style scoped>
.search {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.search__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  min-height: 600px;
}
.search__title {
  margin-top: 30px;
}
.search__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 60px;
  gap: 50px;
}
.search__image {
  position: relative;
  min-height: 250px;
  max-height: 250px;
  max-width: 100%;
  cursor: pointer;
}
.search__image:hover .search__img {
  transform: translate(-10px, -10px);
}
.search__img {
  position: relative;
  object-fit: cover;
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
.search__back {
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
.search__info {
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
  transition: all 0.3s ease;
}
.search__type {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: var(--violo);
  transition: all 0.3s ease;
}
.search__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  margin-top: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.search__position {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search__btn {
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
.search__btn:hover {
  transform: scale(1.05);
}
.search__help {
  font-size: 28px;
  color: #fff;
}
.search__empty {
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
  .search__empty {
    height: 200px;
  }
}
@media (max-width: 1220px) {
  .search__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
@media (max-width: 1061px) {
  .search__grid {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
    gap: 30px;
  }
}
@media (max-width: 990px) {
  .search {
    padding-top: 150px;
  }
  .search__empty {
    font-size: 55px;
  }
}
@media (max-width: 708px) {
  .search__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    max-width: 600px;
  }
}
@media (max-width: 500px) {
  .search__btn {
    margin-top: 40px;
    padding: 20px 30px;
  }
  .search {
    margin-bottom: 40px;
  }
  .search__empty {
    font-size: 38px;
  }
}
@media (max-width: 440px) {
  .search__info {
    margin-top: 20px;
  }
  .search__grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
}
</style>
