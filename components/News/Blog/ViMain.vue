<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <div class="main__content">
        <div class="main__image">
          <img class="main__img" :src="'../blog.png'" />
        </div>
        <div class="main__information">
          <UIViTitle :settings="true" class="main__header"
            >Правила приема</UIViTitle
          >
          <p class="main__time font" data-font-actual="17">
            15 сентября, 2020 |
            <span class="main__span">Новости колледжа </span>
          </p>
          <div class="main__about" v-for="item in arrInformation" :key="item">
            <h2 class="main__about_header font_special" data-font-actual="34">
              {{ item.name }}
            </h2>
            <p
              class="main__about_text font"
              data-font-actual="17"
              v-html="item.inf"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrInformation: [
        {
          name: "Особенности учебного процесса в колледже",
          inf: `Студенты колледжа не меньше преподавателей и сотрудников готовились и ждали первокурсников. Посвящение в первокурсники –
          это не только поздравление вчерашних школьников. Это способ познакомиться со своими сокурсниками, одногруппниками и, конечно, преподавателями.
          Очень многие хотели бы пройти по этому пути. Вам повезло – вы на него вступили!<br><br>
          Студенты колледжа не меньше преподавателей и сотрудников готовились и ждали первокурсников. Посвящение в первокурсники –
           это не только поздравление вчерашних школьников. Это способ познакомиться со своими сокурсниками, одногруппниками и,
          конечно, преподавателями. Очень многие хотели бы пройти по этому пути. Вам повезло – вы на него вступили!
          `,
        },
        {
          name: "Развитие технологий",
          inf: `Студенты колледжа не меньше преподавателей и сотрудников готовились и ждали первокурсников. Посвящение в первокурсники –
          это не только поздравление вчерашних школьников. Это способ познакомиться со своими сокурсниками, одногруппниками и, конечно, преподавателями.
          Очень многие хотели бы пройти по этому пути.
          `,
        },
      ],
      arrCrumbs: null,
    };
  },
  methods: {
    initNews() {
      this.arrCrumbs = [
        {
          name: this.$route.params.id,
          path: this.$route.path,
        },
      ];
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
  justify-content: space-between;
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
</style>
