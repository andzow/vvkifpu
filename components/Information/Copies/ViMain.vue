<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Копии документов</UIViTitle
      >
      <div class="main__menu" v-for="item in getArray" :key="item">
        <h2
          class="main__title font"
          data-font-actual="34"
          :class="{ activeLoadingTitle: item.loading }"
        >
          {{ item?.attributes?.title }}
        </h2>
        <div class="main__content" v-if="!item.loading">
          <div
            clas="main__href"
            :href="list.href"
            target="_blank"
            v-for="list in item?.attributes?.files?.data"
            :key="list"
          >
            <a class="main__log" :href="urlServer + list?.attributes?.url">
              <div class="main__item">
                <div class="main__link font" data-font-actual="18">
                  {{ list?.attributes?.alternativeText }}
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="main__loading" v-else>
          <div
            class="main__loading_item"
            v-for="list in item.arrDocs"
            :key="list"
          ></div>
        </div>
        <div class="main__des font" data-font-actual="18">
          {{ item?.attributes?.des }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { USE_STRAPI } from "~/url";
import { USE_STRAPI_UPLOADS } from "~/url";

export default {
  data() {
    return {
      urlServer: null,
      arrCrumbs: [
        {
          name: "Копии документов",
          path: "/information/copies-documents",
        },
      ],
      arrCopies: [
        {
          name: "",
          loading: true,
          arrDocs: [
            {
              loading: true,
            },
            {
              loading: true,
            },
            {
              loading: true,
            },
            {
              loading: true,
            },
            {
              loading: true,
            },
            {
              loading: true,
            },
            {
              loading: true,
            },
          ],
        },
        {
          name: "",
          loading: true,
          arrDocs: [
            {
              loading: true,
            },
            {
              loading: true,
            },
            {
              loading: true,
            },
            {
              loading: true,
            },
          ],
        },
      ],
    };
  },
  computed: {
    getArray() {
      return this.arrCopies;
    },
  },
  methods: {
    async initApp() {
      try {
        const {
          data: { data: response },
        } = await axios.get(USE_STRAPI + `copies-documents?populate=files`);
        this.arrCopies = response;
        this.urlServer = USE_STRAPI_UPLOADS;
      } catch (e) {}
    },
  },
  mounted() {
    this.initApp();
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  padding-top: 230px;
}
.main__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__breadcrumbs {
  margin-bottom: 30px;
}
.main__header {
  margin-bottom: 50px;
}
.main__menu {
  margin-bottom: 80px;
}
.main__title {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  margin-bottom: 30px;
  max-width: 900px;
  color: black;
}

.activeLoadingTitle {
  height: 63px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  border: none;
  border-radius: 70px;
  transition: all 0.3s ease;
}

.main__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.main__loading {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.main__loading_item {
  border-radius: 70px;
  height: 63px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  border: none;
  transition: all 0.3s ease;
}

@keyframes slide {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 200%;
  }
}
.main__log {
  height: 100%;
}
.main__item {
  height: 100%;
}
.main__link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 20px 30px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: black;
  cursor: pointer;
  height: 100%;
  transition: all 0.3s ease;
}
.main__link:hover {
  color: white;
  background: var(--violo);
}
.main__des {
  margin-top: 40px;
  font-family: "Inter", sans-serif;
  max-width: 700px;
  line-height: 14 0%;
  font-weight: 500;
  font-size: 16px;
  color: black;
}
@media screen and (max-width: 1320px) {
  .main__content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 990px) {
  .main {
    padding-top: 150px;
  }
  .main__title {
    font-size: 28px !important;
  }

  .main__header {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 760px) {
  .main__content {
    grid-template-columns: repeat(1, 1fr);
  }
  .main__link {
    border: none;

    border-bottom: 1px solid var(--violo);
    border-radius: 0px;
    font-size: 18px !important;
    font-weight: 500;
  }
}
</style>
