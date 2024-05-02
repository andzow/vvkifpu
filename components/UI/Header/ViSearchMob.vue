<template>
  <form class="header__search" @submit.prevent="searchNews">
    <input
      :class="{ activeMobInput: activeBurger || isHover || isScrollDown }"
      class="header__search_input"
      type="text"
      placeholder="Поиск..."
      :style="borderInput"
      v-model="valSearch"
    />
  </form>
</template>

<script>
export default {
  props: {
    bodyClassName: { type: Boolean },
    activeBurger: { type: Boolean },
    isHover: { type: Boolean },
    isScrollDown: { type: Boolean },
  },
  data() {
    return {
      valSearch: "",
      arrNews: useNewsAll(),
    };
  },
  computed: {
    borderInput() {
      if (!this.bodyClassName) {
        return;
      }
      const bodyElement = document?.body;
      const computedStyle = window?.getComputedStyle(bodyElement);
      const borderColor = computedStyle.borderColor;
      const color = computedStyle.color;
      return {
        border: `1px solid ${borderColor}`,
        color: color,
      };
    },
  },
  methods: {
    async searchNews() {
      try {
        this.$emit("close");
        const post = await PostController.getPostCommunity(
          this.$route.query.name
        );
        this.arrNews = post;
        this.$router.replace({
          path: "/news/all-news",
          query: {
            name: this.valSearch,
          },
        });
      } catch {
        this.$emit("close");
        this.arrNews = [];
        this.$router.replace({
          path: "/news/all-news",
          query: {
            name: this.valSearch,
          },
        });
      }
    },
  },
  mounted() {
    this.valSearch = !this.$route.query.name ? "" : this.$route.query.name;
  },
};
</script>

<style scoped>
.header__search {
  display: flex;
  align-items: center;
}

.header__search_input {
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  background: none;
  border: 1px solid white;
  padding: 10px 15px;
  color: white;
  width: 100%;
  border-radius: 40px;
  transition: all 0.3s ease;
}
.header__search_input::placeholder {
  color: white;
}
.activeMobInput {
  color: black;
  border: 1px solid black;
}

.activeMobInput::placeholder {
  color: black;
}

@media screen and (max-width: 960px) {
  .header__search_block {
    min-width: 250px;
  }
}
@media screen and (max-width: 536px) {
  .header__search_input {
    border: 1px solid black;
    color: black;
    margin-bottom: 20px;
  }
  .header__search_input::placeholder {
    color: black;
  }
}
</style>
