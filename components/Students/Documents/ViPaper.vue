<template>
  <section class="paper">
    <div class="paper__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="paper__title" :settings="true"
        >Документы на практику</UIViTitle
      >
      <div class="paper__table">
        <div
          class="paper__item"
          v-for="(item, idx) in getArray"
          :key="idx"
          :class="{ loadingActive: item.loading }"
        >
          <h3
            class="paper__name font"
            data-font-actual="17"
            v-if="!item.loading"
          >
            {{ item.attributes.title }} <span class="paper__special">-</span>
          </h3>
          <a
            v-if="!item.loading"
            :href="urlServer + item.attributes.files.data.attributes.url"
            class="paper__btn font"
            data-font-actual="17"
            >Скачать</a
          >
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
      arrCrumbs: [
        {
          name: "Документы на практику",
          path: "/students/documents",
        },
      ],
      ArrayDocument: [
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
      urlServer: null,
    };
  },
  computed: {
    getArray() {
      return this.ArrayDocument;
    },
  },
  methods: {
    async initApp() {
      try {
        const {
          data: { data: response },
        } = await axios.get(USE_STRAPI + `documents/?populate=files`);
        this.ArrayDocument = response;
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
.paper {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.paper__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.paper__title {
  margin-top: 30px;
}
.paper__item {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}
.loadingActive {
  height: 20px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1s infinite;
  max-width: 600px;
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
.paper__item:not(:last-child) {
  margin-bottom: 20px;
}
.paper__table {
  margin-top: 40px;
}
.paper__name {
  font-family: "Inter", sans-serif;
  font-size: 17px;
}
.paper__btn {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 700;
  border-radius: 50px;
  overflow: hidden;
  color: var(--violo);
  transition: all 0.3s ease-in-out;
  margin-left: 10px;
}
.paper__btn:hover {
  transform: scale(1.05);
}
@media (max-width: 990px) {
  .paper {
    padding-top: 150px;
  }
}
@media (max-width: 720px) {
  .paper__item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--violo);
  }
  .paper__name {
    text-align: center;
  }
  .paper__special {
    display: none;
  }
  .paper__btn {
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
