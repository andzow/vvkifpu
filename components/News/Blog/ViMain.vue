<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <div class="main__content" v-if="arrInformation">
        <div class="main__image">
          <img class="main__img" :src="arrInformation.image" />
        </div>
        <div class="main__information">
          <UIViTitle :settings="true" class="main__header">{{
            arrInformation.name
          }}</UIViTitle>
          <p class="main__time font" data-font-actual="17">
            {{ arrInformation.date }} |
            <span class="main__span">{{ arrInformation.type }}</span>
          </p>
          <div
            class="main__about"
            v-for="item in arrInformation.text"
            :key="item"
          >
            <h2 class="main__about_header font_special" data-font-actual="34">
              {{ item.title }}
            </h2>
            <p
              class="main__about_text font"
              data-font-actual="17"
              v-for="list in item.info"
              :key="list"
              v-html="list"
            ></p>
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
      arrInformation: null,
      arrCrumbs: null,
    };
  },
  methods: {
    async initNews() {
      try {
        const route = await useRoute();
        const post = await PostController.fetchPostOne(route.params.name);

        if (post === 404) {
          this.$router.push("/page/not-found");
        }
        this.changeArray(post);
        if (this.arrInformation.type === "Мероприятия") {
          this.arrCrumbs = [
            {
              name: "Мероприятия",
              path: "/news/events",
            },
            {
              name: this.$route.params.name,
              path: this.$route.path,
            },
          ];
          return;
        }
        this.arrCrumbs = [
          {
            name: "Новости колледжа",
            path: "/news/college",
          },
          {
            name: this.$route.params.name,
            path: this.$route.path,
          },
        ];
      } catch (e) {}
    },
    async changeArray(post) {
      const newArr = [post];
      const arr = newArr.map((el) => {
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
        obj.text = JSON.parse(obj.text);
        return obj;
      });
      this.arrInformation = arr[0];
    },
  },
  mounted() {
    this.initNews();
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.main__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__breadcrumbs {
  margin-bottom: 30px;
}
.main__content {
  display: flex;
  align-items: flex-start;
}
.main__information {
  max-width: 950px;
  margin-left: 40px;
}
.main__header {
  margin-bottom: 10px;
}
.main__time {
  font-family: "inter", sans-serif;
  font-size: 17px;
  color: #9b9b9b;
  margin-bottom: 40px;
}
.main__span {
  color: #542fe6;
}

.main__img {
  width: 641px;
  height: 488px;
  object-fit: cover;
}
.main__about_header {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  margin-bottom: 15px;
  color: black;
}
.main__about_text {
  font-weight: 500;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-bottom: 30px;
  color: #151515;
  max-width: 750px;
}

@media screen and (max-width: 1230px) {
  .main__time {
    font-size: 16px !important;
    margin-bottom: 20px;
  }
  .main__time {
    font-size: 16px !important;
  }
  .main__about_header {
    font-size: 28px !important;
  }
  .main__about_text {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 990px) {
  .main {
    padding-top: 150px;
  }
  .main__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .main__image {
    width: 100%;
    margin-bottom: 30px;
  }
  .main__information {
    margin-left: 0px;
  }
}
@media screen and (max-width: 750px) {
  .main {
    margin-bottom: 25px;
  }
  .main__time {
    font-size: 15px !important;
  }
  .main__about_header {
    font-size: 27px !important;
  }
  .main__about_text {
    font-size: 15px !important;
  }
}
@media screen and (max-width: 650px) {
  .main__img {
    width: 641px;
    height: 310px;
    object-fit: cover;
  }
}
</style>
