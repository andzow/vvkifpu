<template>
  <section class="application">
    <div class="application__container">
        <div class="application__info">
            <h3 class="application__title">Оставьте заявку и мы вам перезвоним</h3>
            <p class="application__description">наши специалисты ответят на все вопросы и смогут подобрать нужную программу</p>
        </div>
        <div class="application__form">
            <div class="application__data">
                <input class="application__input" type="text" placeholder="Имя">
                <input class="application__input" type="text" placeholder="+7 (000) - 000 - 00 - 00" v-model="isNumber" @beforeinput="handleBeforeInput" @input="numberValidator">
            </div>
            <button class="application__btn">Отправить</button>
            <p class="application__policy">*Нажимая кнопку вы соглашаетесь на обработку персональных данных на условиях, определенных <span class="application__policy_special">Политикой конфиденциальности</span></p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            isNumber: '',
            isNumberPrev: ''
        }
    },
    methods: {
        handleBeforeInput() {
            this.isNumberPrev = this.isNumber
        },
        numberValidator(event) {
            console.log(this.isNumber)
            const hasLetters = /[a-zA-Zа-яА-Я!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]$/.test(this.isNumber)
            const cursorPosition = event.target.selectionStart;

            if (cursorPosition < this.isNumber.length) {
                this.isNumber = this.isNumberPrev
            }

            if (hasLetters) {
                this.isNumber = this.isNumber.replace(/[a-zA-Zа-яА-Я!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]$/, '');
            }

            if (this.isNumber[0] !== '+') {
                this.isNumber = "+7 (" + this.isNumber
            }
            if (this.isNumber.length === 3) {
                this.isNumber = ''
            }
            if (this.isNumber.length === 7) {
                this.isNumber = this.isNumber + ') - '
            }
            if (this.isNumber.length === 9) {
                this.isNumber = this.isNumber.slice(0, -3)
            }
            if (this.isNumber.length === 14) {
                this.isNumber = this.isNumber + ' - '
            }
            if (this.isNumber.length === 15) {
                this.isNumber = this.isNumber.slice(0, -2)
            }
            if (this.isNumber.length === 19) {
                this.isNumber = this.isNumber + ' - '
            }
            if (this.isNumber.length === 20) {
                this.isNumber = this.isNumber.slice(0, -2)
            }
            if (this.isNumber.length === 25) {
                this.isNumber = this.isNumber.slice(0, -1)
            }

            if (this.isNumber.length != 0) {
                this.phoneValidator = 1
            }
            if (this.isNumber.length === 24) {
                this.phoneValidator = 2
            }
            if (this.isNumber.length === 0) {
                this.phoneValidator = 0
            }
        }
    }
}
</script>

<style scoped>
.application {
    background: #000;
    padding: 100px 0 100px 0;
}
.application__container {
    max-width: 1800px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.application__title {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 80px;
    max-width: 890px;
    color: #fff;
    line-height: 75px;
}
.application__description {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    margin-top: 30px;
    color: #fff;
    font-size: 20px;
}
.application__form {
    width: 745px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.application__data {
    display: flex;
    align-items: center;
    
}
.application__input {
    width: 100%;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    padding: 20px;
    border-radius: 50px;
    text-align: center;
    font-size: 28px;
    color: var(--violo);
}
.application__input:nth-child(1) {
    flex-basis: 40%;
}
.application__input:last-child {
    transform: translateX(-10px);
    flex-basis: 60%;
}
.application__btn {
    width: 100%;
    padding: 20px 0;
    border: 1px solid #fff;
    font-weight: 700;
    font-size: 28px;
    color: #fff;
    border-radius: 50px;
    margin-top: 20px;
    transition: all .3s ease;
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
}
.application__policy_special {
    color: var(--violo);
    font-weight: 500;
    cursor: pointer;
}
.application__policy_special:hover {
    border-bottom: 1px solid var(--violo);
}
</style>