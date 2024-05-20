<template>
  <div class="main__about">
    <h1
      class="main__title font_speciality"
      ref="main__about_title"
      data-font-actual="58"
    >
      Фундаментальное<br />
      Образование
    </h1>
    <div class="main__des">
      <p class="main__link font" ref="main__link" data-font-actual="17">
        Справочная информация:
      </p>
      <div class="main__information">
        <p
          class="main__text font"
          ref="main__text"
          data-font-actual="18"
          @click="$router.push('/students/payment')"
        >
          Платные образовательные услуги
        </p>
        <p
          class="main__text font"
          ref="main__text"
          data-font-actual="18"
          @click="$router.push('/students/support')"
        >
          Виды материальной поддержки
        </p>
        <p
          class="main__text font"
          ref="main__text"
          data-font-actual="18"
          @click="$router.push('/information/copies-documents')"
        >
          Документы
        </p>
        <p
          class="main__text font"
          ref="main__text"
          data-font-actual="18"
          @click="$router.push('/students/documents')"
        >
          Документы на практику
        </p>
      </div>
    </div>
    <div class="main__btn">
      <UISpecialityViButton @click="useModal = true"
        >Оставить заявку</UISpecialityViButton
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useModal: useModal(),
    };
  },
  methods: {
    resizeWindow() {},
  },
  mounted() {
    this.resizeWindow();
  },
};
</script>

<style scoped>
.main__title {
  font-size: 58px;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: white;
  margin-bottom: 40px;
}
.main__information {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main__link {
  font-family: "inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: white;
  margin-bottom: 20px;
}
.main__text {
  position: relative;
  font-family: "inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  color: #b9b9b9;
  transition: all 0.3s ease;
  cursor: pointer;
}
.main__text:last-child {
  margin-bottom: 50px;
}
.main__text::before {
  content: "";
  position: absolute;
  left: 0.5%;
  bottom: -50%;
  width: 30%;
  border-radius: 20px;
  border: 1px solid #b9b9b9;
  transition: all 0.3s ease;
}
.main__text:hover::before {
  width: 100%;
  color: white;
}
.main__text:hover {
  color: white;
}
@media screen and (max-width: 1600px) {
  .main__title {
    font-size: 50px !important;
    margin-bottom: 30px;
  }
  .main__link {
    font-size: 18px !important;
  }
  .main__text {
    font-size: 16px !important;
    margin-bottom: 25px;
  }
}
@media screen and (max-width: 1024px) {
  .main__title {
    font-size: 68px !important;
  }
}
@media screen and (max-width: 710px) {
  .main__title {
    font-size: 58px !important;
  }
}
@media screen and (max-width: 604px) {
  .main__title {
    font-size: 48px !important;
  }
  .main__link {
    font-size: 17px !important;
  }
  .main__text {
    font-size: 15px !important;
  }
}
@media screen and (max-width: 488px) {
  .main__title {
    font-size: 38px !important;
  }
}
@media screen and (max-width: 410px) {
  .main__title {
    font-size: 36px !important;
  }
  .main__link {
    font-size: 17px !important;
  }
  .main__text {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 356px) {
  .main__title {
    font-size: 30px !important;
  }
}

/* @media screen and (max-width: 1100px) {
  .main__title {
    text-align: center;
  }
  .main__des {
    display: none;
  }
  .main__btn {
    display: none;
  }
} */
</style>
