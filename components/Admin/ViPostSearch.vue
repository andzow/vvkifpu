<template>
  <div class="filter">
    <div class="filter__item" v-for="(item, idx) in data" :key="idx" data-aos="zoom-in-up"
      data-aos-duration="1000">
      <div class="filter__image" @click="updatePost(item)">
        <img class="filter__img" :src="imgSrc + item.image" alt="" />
        <div class="filter__back">
        </div>
      </div>
      <p class="filter__info">
        {{ new Date(item.createdAt).toLocaleString('ru-RU', { month: 'long', year: 'numeric', day: '2-digit' }).replace('.', '') }} |
        <span class="filter__type">{{ item.type }}</span>
      </p>
      <h3 class="filter__name">{{ item.name }}</h3>
    </div>
  </div>
</template>

<script>
import PostController from '@/http/controllers/PostController'
import { USE_SERVER } from "~/url";

export default {
  data() {
    return {
      data: usePostAll(),
      usePostData: usePostData(),
      imgSrc: '',
      useNews: useNews(),
      usePage: usePage(),
      usePageActive: usePageActive()
    }
  },
  async mounted() {
    const useData = await PostController.getPostAll(this.$route.query)
    this.data = useData.posts
    this.imgSrc = USE_SERVER
    this.usePage = useData.totalPages
    this.usePageActive = 1
  },
  methods: {
    async updatePost(item) {
      const data = {
        id: item.id,
        name: item.name,
        imgSrc: this.imgSrc,
        image: item.image,
        type: item.type,
        text: item.text
      }
      this.usePostData = data
      await this.$router.push({ path: "/admin", query: { ...this.$route.query, news: "create" } })
      this.useNews = "Редактировать новость"
    }
  }
}
</script>

<style scoped>
.filter {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.filter__image {
  position: relative;
  cursor: pointer;
  height: 300px;
}
.filter__image:hover .filter__img {
  transform: translate(-10px, -10px);
}
.filter__img {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: all 0.3s ease-in-out;
}
.filter__back {
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
.filter__info {
  margin-top: 10px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
  transition: all 0.3s ease;
}
.filter__type {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: var(--violo);
  transition: all 0.3s ease;
}
.filter__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  margin-top: 10px;
  transition: all 0.3s ease;
}
</style>