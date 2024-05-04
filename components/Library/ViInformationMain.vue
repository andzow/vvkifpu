<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Дополнительные информационные ресурсы</UIViTitle
      >
      <div class="main__content">
        <div
          class="main__item"
          v-for="item in getArray"
          :key="item"
          :class="{ loadingActive: item.loading }"
        >
          <p class="main__name font" data-font-actual="18">{{ item.name }}</p>
          <div class="main__btns" v-if="!item.loading">
            <div class="main__button" v-for="el in item.arrBtn" :key="el">
              <a :href="el.href" target="_blank"
                ><button class="main__href font" data-font-actual="16">
                  {{ el.name }}
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { USE_STRAPI } from "~/url";

export default {
  data() {
    return {
      arrCrumbs: [
        {
          name: "Дополнительные информационные ресурсы",
          path: "/library/informational-resources",
        },
      ],
      arrMain: [
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
    };
  },
  computed: {
    getArray() {
      return this.arrMain;
    },
  },
  methods: {
    async initApp() {
      try {
        const {
          data: {
            data: [response],
          },
        } = await axios.get(USE_STRAPI + `informational-resources`);
        this.arrMain = response.attributes.resources;
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
  margin-bottom: 80px;
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
  max-width: 1200px;
}
.main__content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 15px;
}
.main__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 15px 40px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.loadingActive {
  height: 83px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  border: none;
  transition: all 0.3s ease;
}
.loadingActive:hover {
  background: none !important;
  color: initial;
}

@keyframes slide {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 200%;
  }
}
.main__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: black;
}
.main__btns {
  display: flex;
  align-items: center;
}
.main__button {
  margin-right: 20px;
}
.main__href {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: black;
  background: none;
  border: 1px solid #542fe6;
  padding: 15px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.main__href:hover {
  color: white;
  background: #542fe6;
}
@media screen and (max-width: 990px) {
  .main {
    padding-top: 150px;
  }
  .main__name {
    font-size: 28px !important;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .main__item {
    flex-wrap: wrap;
    padding: 25px 0px;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #542fe6;
  }
  .main__header {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 830px) {
  .main {
    padding-top: 150px;
  }
  .main__name {
    font-size: 17px !important;
    margin-bottom: 25px;
  }
  .main__btns {
    gap: 15px;
    flex-wrap: wrap;
  }
}
</style>
