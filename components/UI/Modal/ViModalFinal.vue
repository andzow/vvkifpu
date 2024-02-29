<template>
  <div class="modalFinal" v-show="useModalFinal" @click="useModalFinal = false">
    <div class="modalFinal__container">
        <div class="modalFinal__content" @click.stop>
            <h3 class="modalFinal__title">Заявка принята!</h3>
            <div class="modalFinal__position">
                <div class="modalFinal__image">
                    <img src="~/assets/images/UI/graduates.webp" alt="">
                </div>
                <div class="modalFinal__info">
                    <p class="modalFinal__description">Наши специалисты свяжутся с вами в ближайшее время с телефона 8 (8332) 64-18-98</p>
                    <button class="modalFinal__btn" @click="useModalFinal = false">Окей</button>
                </div>
            </div>
            <button class="modalFinal__close" @click="useModalFinal = false">
                <div class="modalFinal__line"></div>
                <div class="modalFinal__line"></div>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            useModalFinal: useModalFinal()
        }
    }
}
</script>

<style scoped>
.modalFinal {
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
.modalFinal__container {
    padding:  0 20px;
}
.modalFinal__content {
    position: relative;
    padding: 55px;
    background: #fff;
    border-radius: 60px;
    width: 1000px;
}
.modalFinal__title {
    font-family: "Inter", sans-serif;
    font-size:  60px;
    color: var(--violo);
    font-weight: 700;
    line-height: 60px;
    text-align: center;
}
.modalFinal__position {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}
.modalFinal__image {
    border-radius: 30px;
    overflow: hidden;
}
.modalFinal__close {
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
.modalFinal__close:hover {
    transform: rotate(180deg);
}
.modalFinal__line {
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: var(--violo);
}
.modalFinal__line:nth-child(1) {
    transform:translateY(1px) rotate(45deg);
}
.modalFinal__line:nth-child(2) {
    transform:translateY(-3px) rotate(-45deg);
}
.modalFinal__info {
    margin-left: 50px;
}
.modalFinal__description {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: var(--violo);
    max-width: 360px;
}
.modalFinal__btn {
    width: 200px;
    margin-top: 20px;
    padding: 20px;
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 700;
    border: 1px solid var(--violo);
    border-radius: 50px;
    overflow: hidden;
    color: var(--violo);
    transition: all 0.3s ease-in-out;
}
.modalFinal__btn:hover {
    background: var(--violo);
    color: #fff;
}
</style>