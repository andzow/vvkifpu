<template>
  <div class="modal" v-show="useModal" @click="useModal = false">
    <div class="modal__container">
      <div class="modal__content border" @click.stop>
        <h3 class="modal__title font" data-font-actual="60">
          Оставьте заявку и мы вам перезвоним
        </h3>
        <p class="modal__description font" data-font-actual="18">
          Наши специалисты ответят на все вопросы и смогут подобрать нужную
          программу
        </p>
        <div class="modal__dop">
          <p class="modal__text modal__text_name font" data-font-actual="16">
            Короткое имя
          </p>
          <input
            class="modal__input modal__input_name font border"
            type="text"
            data-font-actual="22"
            placeholder="Имя"
            @input="nameValidator"
            v-model="isName"
          />
        </div>
        <div class="modal__dop">
          <p class="modal__text modal__text_phone font" data-font-actual="16">
            Некорректный телефон
          </p>
          <input
            class="modal__input font modal__input_phone border"
            data-font-actual="22"
            type="text"
            placeholder="+7 (000) - 000 - 00 - 00"
            v-model="isNumber"
            @beforeinput="handleBeforeInput"
            @input="numberValidator"
          />
        </div>
        <button class="modal__btn font" data-font-actual="22" @click="sendData">
          Отправить
        </button>
        <div class="modal__con">
          <p class="modal__info font" data-font-actual="14">
            *Нажимая кнопку вы соглашаетесь на обработку персональных данных на
            условиях, определенных
            <span class="modal__info_special"
              >Политикой конфиденциальности</span
            >
          </p>
        </div>
        <button class="modal__close" @click="useModal = false">
          <div class="modal__line back"></div>
          <div class="modal__line back"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationController from "@/http/controllers/ApplicationController";

export default {
  data() {
    return {
      isName: "",
      isNumber: "",
      isNumberPrev: "",
      phoneValidator: 0,
      NameValidator: 0,
      useModal: useModal(),
      useModalFinal: useModalFinal(),
    };
  },
  methods: {
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
    handleBeforeInput() {
      this.isNumberPrev = this.isNumber;
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
        this.useModal = false;
        this.useModalFinal = true;
        const FormObject = {
          name: this.isName,
          phone: this.isNumber,
          status: "check",
          statusName: "Ожидает ответа",
        };
        await ApplicationController.createApplication(FormObject);
        this.isName = "";
        this.isNumber = "";
        this.phoneValidator = 0;
        this.NameValidator = 0;
        this.isNumberPrev = "";
      }
    },
  },
  watch: {
    phoneValidator() {
      const input = document.querySelector(".modal__input_phone");
      const text = document.querySelector(".modal__text_phone");
      if (this.phoneValidator === 1) {
        text.classList.add("card__text_error");
        input.classList.add("input__error");
        input.classList.remove("phoneValidator");
      }
      if (this.phoneValidator === 2) {
        text.classList.remove("card__text_error");
        input.classList.add("phoneValidator");
        input.classList.remove("input__error");
      }
      if (this.phoneValidator === 0) {
        text.classList.remove("card__text_error");
        input.classList.remove("phoneValidator");
        input.classList.remove("input__error");
      }
    },
    NameValidator() {
      const input = document.querySelector(".modal__input_name");
      const text = document.querySelector(".modal__text_name");
      if (this.NameValidator === 1) {
        text.classList.add("card__text_error");
        input.classList.add("input__error");
        input.classList.remove("input__validator");
      }
      if (this.NameValidator === 2) {
        text.classList.remove("card__text_error");
        input.classList.add("input__validator");
        input.classList.remove("input__error");
      }
      if (this.NameValidator === 0) {
        text.classList.remove("card__text_error");
        input.classList.remove("input__validator");
        input.classList.remove("input__error");
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  z-index: 20;
}
.modal__container {
  padding: 0 20px;
}
.modal__content {
  position: relative;
  padding: 55px;
  background: #fff;
  border-radius: 60px;
  width: 1000px;
  margin-top: 0px;
}
.modal__title {
  font-family: "Inter", sans-serif;
  font-size: 60px;
  color: var(--violo);
  font-weight: 700;
  line-height: 60px;
  max-width: 670px;
}
.modal__description {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin: 20px 0 30px 0;
  color: var(--violo);
  font-size: 18px;
}
.modal__input {
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  padding: 20px;
  border-radius: 50px;
  text-align: center;
  font-size: 22px;
  color: #fff;
  transition: all 0.3s ease;
  background: var(--violo);
}
.modal__btn {
  margin-top: 12px;
  width: 100%;
  padding: 20px;
  border: 1px solid var(--violo);
  border-radius: 60px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: var(--violo);
  transition: all 0.3s ease;
}
.modal__btn:hover {
  background: var(--violo);
  color: #fff;
}
.modal__con {
  width: 100%;
  display: flex;
  justify-content: center;
}
.modal__info {
  text-align: center;
  margin-top: 20px;
  max-width: 670px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
}
.modal__info_special {
  font-family: "Inter", sans-serif;
  color: var(--violo);
  cursor: pointer;
  transition: all 0.3s ease;
}
.modal__info_special:hover {
  border-bottom: 1px solid var(--violo);
}
.modal__close {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 30px;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.modal__close:hover {
  transform: rotate(180deg);
}
.modal__line {
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: var(--violo);
}
.modal__line:nth-child(1) {
  transform: translateY(1px) rotate(45deg);
}
.modal__line:nth-child(2) {
  transform: translateY(-3px) rotate(-45deg);
}
.input__error {
  background: #dc143c;
}
.modal__dop {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.modal__text {
  color: #dc143c;
  max-height: 0;
  opacity: 0;
  transition: all 0.3s ease;
  margin-bottom: 0px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}
.card__text_error {
  max-height: 100px;
  margin-bottom: 10px;
  opacity: 1;
}
@media (max-width: 1050px) {
  .modal__content {
    width: 100%;
  }
}
@media (max-width: 860px) {
  .modal__title {
    font-size: 50px !important;
    line-height: 50px;
  }
}
@media (max-width: 720px) {
  .modal__title {
    font-size: 40px !important;
    line-height: 40px;
    text-align: center;
  }
  .modal__description {
    text-align: center;
  }
}
@media (max-width: 550px) {
  .modal__content {
    border-radius: 40px;
  }
  .modal__description {
    font-size: 16px;
  }
  .modal__title {
    font-size: 28px !important;
    line-height: 36px;
  }
  .modal__content {
    padding: 60px 25px 30px 25px;
    margin-top: 120px;
  }
  .modal__input {
    padding: 15px;
    font-size: 16px !important;
  }
  .modal__btn {
    padding: 15px;
    font-size: 16px !important;
  }
  .modal {
    backdrop-filter: blur(0px);
  }
  .modal__close {
    width: 30px;
    height: 30px;
    top: 25px;
    right: 25px;
  }
  .modal__line {
    width: 30px;
  }
}
</style>
