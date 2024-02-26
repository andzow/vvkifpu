<template>
  <div class="modal" v-show="useModal" @click="useModal = false">
    <div class="modal__container">
        <div class="modal__content border" @click.stop>
            <h3 class="modal__title font" data-font-actual='60'>Оставьте заявку и мы<br> вам перезвоним</h3>
            <p class="modal__description font" data-font-actual='18'>Наши специалисты ответят на все вопросы и смогут подобрать нужную программу</p>
            <input class="modal__input font border" type="text" data-font-actual='22' placeholder="Имя">
            <input class="modal__input font modal__input_phone border" data-font-actual='22' type="text" placeholder="+7 (000) - 000 - 00 - 00">
            <button class="modal__btn font" data-font-actual='22'>Отправить</button>
            <div class="modal__con">
                <p class="modal__info font" data-font-actual='14'>*Нажимая кнопку вы соглашаетесь на обработку персональных данных на условиях, определенных <span class="modal__info_special">Политикой конфиденциальности</span></p>
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
export default {
    data() {
        return {
            useModal: useModal()
        }
    },
    mounted() {
        console.log(this.useModal)
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal__container {
    padding:  0 20px;
}
.modal__content {
    position: relative;
    padding: 55px;
    background: #fff;
    border-radius: 60px;
    max-width: 1000px;
}
.modal__title {
    font-family: "Inter", sans-serif;
    font-size:  60px;
    color: var(--violo);
    font-weight: 700;
    line-height: 60px;
}
.modal__description {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    margin: 20px 0 45px 0;
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
  transition: all .3s ease;
  background: var(--violo);
}
.modal__input_phone {
    margin-top: 12px;
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
    transition: all .3s ease;
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
    transition: all .3s ease;
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
    transition: all .3s ease;
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
    transform:translateY(1px) rotate(45deg);
}
.modal__line:nth-child(2) {
    transform:translateY(-3px) rotate(-45deg);
}
</style>