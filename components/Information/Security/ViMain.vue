<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Материально-техническое обеспечение и оснащенность образовательного
        процесса</UIViTitle
      >
      <div class="main__content">
        <div
          class="main__link"
          v-for="item in getArray"
          :key="item"
          @click="setPage(item?.attributes)"
        >
          <p class="main__link_text font" data-font-actual="17">
            {{ item?.attributes?.title }}
          </p>
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
          name: "Материально-техническое обеспечение и оснащенность образовательного процесса",
          path: "/information/social-security",
        },
      ],
      arrStudents: null,
    };
  },
  computed: {
    getArray() {
      if (this.arrStudents !== null) {
        this.arrStudents.push(
          {
            attributes: {
              title: "Условия питания",
              set: "link",
              href: "/information/canteen",
            },
          },
          {
            attributes: {
              title: "Электронная библиотека",
              set: "link",
              href: "/library/digital",
            },
          },
          {
            attributes: {
              title:
                "Договор об информационном и консультационно-справочном обслуживании",
              set: "link",
              href: "/library/additionally",
            },
          }
        );
      }
      return this.arrStudents;
    },
  },
  methods: {
    setPage(item) {
      console.log(item);
      if (item?.href) {
        this.$router.push(item.href);
        return;
      }
      window.open(USE_STRAPI_UPLOADS + item.file.data.attributes.url, "_blank");
    },
    async initApp() {
      try {
        const {
          data: { data: response },
        } = await axios.get(USE_STRAPI + `social-securitys?populate=file`);
        this.arrStudents = response;
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
  font-size: 48px !important;
}

.main__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 80px;
}
.main__link {
  border: 1px solid var(--violo);
  border-radius: 70px;
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__link:hover {
  background: var(--violo);
}
.main__link_text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: black;
  transition: all 0.3s ease;
  text-align: center;
}
.main__link:hover .main__link_text {
  color: white;
}
@media screen and (max-width: 990px) {
  .main {
    padding-top: 150px;
  }
  .main__header {
    margin-bottom: 50px;
    font-size: 28px !important;
  }
}
@media screen and (max-width: 790px) {
  .main__content {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 550px) {
  .main__link {
    border: none;
    border-bottom: 1px solid var(--violo);
    text-align: start;
    border-radius: 0px;
    padding: 20px 0px;
  }
}
</style>
