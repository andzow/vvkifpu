<template>
  <main>
    <NewsBlogViMain />
    <MainViApplication />
  </main>
</template>

<script>
import PostController from "@/http/controllers/PostController";
export default {
  async mounted() {
    const route = await useRoute();
    const post = await PostController.fetchPostOne(route.params.name)
  }
};
</script>

<style scoped></style>
