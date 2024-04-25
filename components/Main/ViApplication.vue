<template>
  <section class="application">
    <div class="application__container">
      <div class="application__info" data-aos="fade-up-right" data-aos-duration="1000">
        <h3 class="application__title font_special" data-font-actual="68">
          Оставьте заявку и мы вам перезвоним
        </h3>
        <p class="application__description font" data-font-actual="17">
          Наши специалисты ответят на все вопросы и смогут подобрать нужную
          программу
        </p>
      </div>
      <div class="application__form" data-aos="fade-up-left" data-aos-duration="1000">
        <div class="application__data">
          <div class="application__dop">
            <p class="application__text application__text_name font" data-font-actual="16">
              Короткое имя
            </p>
            <input class="application__input application__input_name font border" data-font-actual="22" type="text"
              placeholder="Имя" @input="nameValidator" v-model="isName" />
          </div>
          <div class="application__dop">
            <p class="application__text appliction__text_phone font" data-font-actual="16">
              Некорректный телефон
            </p>
            <input class="application__input application__input_phone font border" data-font-actual="22" type="text"
              placeholder="+7 (000) - 000 - 00 - 00" v-model="isNumber" @beforeinput="handleBeforeInput"
              @input="numberValidator" />
          </div>
        </div>
        <button class="application__btn font" data-font-actual="22" @click="sendData">
          Отправить
        </button>
        <p class="application__policy font" data-font-actual="14">
          *Нажимая кнопку вы соглашаетесь на обработку персональных данных на
          условиях, определенных
          <span class="application__policy_special">Политикой конфиденциальности</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import ApplicationController from '@/http/controllers/ApplicationController'

export default {
  data() {
    return {
      isName: "",
      isNumber: "",
      phoneValidator: 0,
      NameValidator: 0,
      isNumberPrev: "",
      useModalFinal: useModalFinal(),
    };
  },
  methods: {
    handleBeforeInput() {
      this.isNumberPrev = this.isNumber;
    },
    numberValidator(event) {
      const hasLetters = /[a-zA-Zа-яА-Я!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]$/.test(
        this.isNumber
      );
      const cursorPosition = event.target.selectionStart;
      if (cursorPosition < this.isNumber.length) {
        this.isNumber = this.isNumberPrev;
      }
      if (hasLetters) {
        this.isNumber = this.isNumber.replace(
          /[a-zA-Zа-яА-Я!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]$/,
          ""
        );
      }
      if (this.isNumber[0] !== "+") {
        this.isNumber = "+7 (" + this.isNumber;
      }
      if (this.isNumber.length === 3) {
        this.isNumber = "";
      }
      if (this.isNumber.length === 7) {
        this.isNumber = this.isNumber + ") - ";
      }
      if (this.isNumber.length === 9) {
        this.isNumber = this.isNumber.slice(0, -3);
      }
      if (this.isNumber.length === 14) {
        this.isNumber = this.isNumber + " - ";
      }
      if (this.isNumber.length === 15) {
        this.isNumber = this.isNumber.slice(0, -2);
      }
      if (this.isNumber.length === 19) {
        this.isNumber = this.isNumber + " - ";
      }
      if (this.isNumber.length === 20) {
        this.isNumber = this.isNumber.slice(0, -2);
      }
      if (this.isNumber.length === 25) {
        this.isNumber = this.isNumber.slice(0, -1);
      }

      if (this.isNumber.length != 0) {
        this.phoneValidator = 1;
      }
      if (this.isNumber.length === 24) {
        this.phoneValidator = 2;
      }
      if (this.isNumber.length === 0) {
        this.phoneValidator = 0;
      }
    },
    nameValidator() {
      if (this.isName.length <= 1) {
        this.NameValidator = 1;
      } else {
        this.NameValidator = 2;
      }

      if (this.isName.length === 0) {
        this.NameValidator = 0;
      }
    },
    async sendData() {
      if (this.phoneValidator !== 2) {
        this.phoneValidator = 1;
      }
      if (this.NameValidator !== 2) {
        this.NameValidator = 1;
      }
      if (this.phoneValidator === 2 && this.NameValidator === 2) {
        const FormObject = {
          name: this.isName,
          phone: this.isNumber,
          status: 'check',
          statusName: 'Ожидает ответа',
        }
        this.useModalFinal = true;
        await ApplicationController.createApplication(FormObject)
      }
    },
  },
  watch: {
    phoneValidator() {
      const input = document.querySelector(".application__input_phone");
      const text = document.querySelector(".appliction__text_phone");
      if (this.phoneValidator === 1) {
        text.classList.add("application__text_error");
        input.classList.add("input__error");
        input.classList.remove("phoneValidator");
      }
      if (this.phoneValidator === 2) {
        text.classList.remove("application__text_error");
        input.classList.add("phoneValidator");
        input.classList.remove("input__error");
      }
      if (this.phoneValidator === 0) {
        text.classList.remove("application__text_error");
        input.classList.remove("input__validator");
        input.classList.remove("input__error");
      }
    },
    NameValidator() {
      const input = document.querySelector(".application__input_name");
      const text = document.querySelector(".application__text_name");
      if (this.NameValidator === 1) {
        text.classList.add("application__text_error");
        input.classList.add("input__error");
        input.classList.remove("input__validator");
      }
      if (this.NameValidator === 2) {
        text.classList.remove("application__text_error");
        input.classList.add("input__validator");
        input.classList.remove("input__error");
      }
      if (this.NameValidator === 0) {
        text.classList.remove("application__text_error");
        input.classList.remove("input__validator");
        input.classList.remove("input__error");
      }
    },
  },
};
</script>

<style scoped>
.application {
  width: 100vw;
  background: #000;
  padding: 100px 0 100px 0;
  overflow: hidden;
}
.application__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.application__title {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 68px;
  max-width: 1000px;
  color: #fff;
  line-height: 75px;
  transition: all 0.3s ease;
}
.application__description {
  font-family: "Inter", sans-serif;
  max-width: 840px;
  font-weight: 400;
  margin-top: 30px;
  color: #fff;
  font-size: 17px;
  transition: all 0.3s ease;
}
.application__form {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.application__data {
  display: flex;
  align-items: flex-end;
}
.application__input {
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  padding: 20px 25px;
  border-radius: 50px;
  text-align: center;
  font-size: 22px;
  color: var(--violo);
  transition: all 0.3s ease;
}
.application__dop:nth-child(1) {
  flex-basis: 40%;
}
.application__dop:nth-child(2) {
  transform: translateX(-10px);
  flex-basis: 60%;
}
.application__btn {
  width: 98%;
  font-family: "Inter", sans-serif;
  padding: 20px 0;
  border: 1px solid #fff;
  font-weight: 500;
  font-size: 22px;
  color: #fff;
  border-radius: 50px;
  margin-top: 20px;
  transition: all 0.3s ease;
}
.application__btn:hover {
  background: var(--violo);
  border: 1px solid var(--violo);
}
.application__policy {
  font-family: "Inter", sans-serif;
  text-align: center;
  max-width: 670px;
  color: #fff;
  font-size: 14px;
  margin-top: 15px;
  transition: all 0.3s ease;
}
.application__policy_special {
  color: var(--violo);
  font-weight: 500;
  cursor: pointer;
}
.application__policy_special:hover {
  border-bottom: 1px solid var(--violo);
}
.application__text {
  color: #dc143c;
  max-height: 0;
  opacity: 0;
  transition: all 0.3s ease;
  margin-bottom: 0px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
}
.application__info {
  margin-right: 20px;
}
.application__text_error {
  max-height: 100px;
  margin-bottom: 10px;
  opacity: 1;
}
@media(max-width: 960px) {
  .application__container {
    display: flex;
    max-width: 800px;
    flex-direction: column;
  }
  .application__info  {
    margin-right: 0;
    margin-bottom: 30px;
  }
  .application__title {
    text-align: center;
  }
  .application__description {
    text-align: center;
  }
}
@media(max-width: 740px) {
  .application__form  {
    width: 100%;
  }
}
@media(max-width: 600px) {
  .application__title {
    font-size: 48px !important;
    line-height: 48px;
  }
}
@media(max-width: 520px) {
  .application__title {
    font-size: 38px !important;
    line-height: 48px;
  }
  .application {
    padding: 60px 0 60px 0;
  }
}
@media(max-width: 424px) {
  .application__title {
    font-size: 36px !important;
    line-height: 48px;
  }
}
</style>
