<template>
  <section class="commissions">
    <img
      class="commissions__img image"
      src="~/assets/images/UI/commission.webp"
      alt=""
    />
    <div class="commissions__color"></div>
    <div class="commissions__container">
      <h1 class="commissions__title font_special" data-font-actual="85">
        Приемная комиссия
      </h1>
      <p class="commissions__text font" data-font-actual="24">
        Звоните с понедельника по пятницу с 10:00 до 16:00
      </p>
      <p
        class="commissions__text font commissions__number"
        data-font-actual="24"
      >
        8 (8332) 64-18-98
      </p>
      <button
        class="commissions__btn border font"
        data-font-actual="17"
        @click="useModal = true"
      >
        Заявка на обучение
      </button>
    </div>
    <div class="commissions__info">
      <svg
        width="26"
        height="32"
        viewBox="0 0 26 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9733 18.1321C16.3132 18.1321 19.0207 15.4245 19.0207 12.0846C19.0207 8.74466 16.3132 6.03711 12.9733 6.03711C9.63333 6.03711 6.92578 8.74466 6.92578 12.0846C6.92578 15.4245 9.63333 18.1321 12.9733 18.1321Z"
          fill="transperent"
        />
        <path
          d="M12.9735 19.028C9.14451 19.028 6.0293 15.9129 6.0293 12.0839C6.0293 8.25492 9.14445 5.13965 12.9735 5.13965C16.8026 5.13965 19.9178 8.2548 19.9178 12.0839C19.9178 15.9129 16.8026 19.028 12.9735 19.028ZM12.9735 6.93335C10.1336 6.93335 7.823 9.2438 7.823 12.0839C7.823 14.9238 10.1336 17.2343 12.9735 17.2343C15.8135 17.2343 18.1241 14.9238 18.1241 12.0839C18.1241 9.2438 15.8135 6.93335 12.9735 6.93335Z"
          fill="white"
        />
        <path
          d="M12.9732 0C6.30978 0 0.888672 5.4211 0.888672 12.0845C0.888672 16.5889 3.36632 20.5252 7.03009 22.6033L12.1965 31.5518C12.3567 31.8293 12.6528 32.0002 12.9732 32.0002C13.2936 32.0002 13.5897 31.8293 13.7499 31.5518L19.0016 22.4557C19.2493 22.0267 19.1022 21.4782 18.6733 21.2306C18.2442 20.9829 17.6959 21.1299 17.4482 21.5589L12.9733 29.3097L9.75343 23.7327C10.779 24.0166 11.8586 24.169 12.9733 24.169C13.4686 24.169 13.8701 23.7675 13.8701 23.2722C13.8701 22.7769 13.4685 22.3753 12.9733 22.3753C7.29885 22.3753 2.6825 17.7588 2.6825 12.0845C2.6825 6.41011 7.29885 1.7937 12.9732 1.7937C18.6476 1.7937 23.264 6.41017 23.264 12.0845C23.264 14.6409 22.3203 17.0919 20.6068 18.9859C20.2746 19.3533 20.3029 19.9203 20.6702 20.2527C21.0375 20.585 21.6046 20.5566 21.937 20.1893C23.9493 17.9649 25.0577 15.0866 25.0577 12.0846C25.0577 5.4211 19.6366 0 12.9732 0Z"
          fill="white"
        />
      </svg>
      <p class="commissions__address">Киров, Герцена 41, 3 этаж, 34 каб.</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      useModal: useModal(),
    };
  },
};
</script>

<style scoped>
.commissions {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.commissions__color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--violo);
  z-index: 1;
}
.commissions__img {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.commissions__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;
}
.commissions__title {
  font-size: 85px;
  font-family: "Inter", sans-serif;
  color: #fff;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
}
.commissions__text {
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  margin-top: 20px;
  text-align: center;
}
.commissions__number {
  font-size: 36px;
  margin-top: 10px;
}
.commissions__btn {
  font-size: 17px;
  padding: 14px 25px;
  background: #fff;
  margin-top: 20px;
  font-family: "inter", sans-serif;
  font-weight: 700;
  border-radius: 50px;
  color: #542fe6;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 2;
}
.commissions__btn:hover {
  transform: scale(0.98);
}
.commissions__info {
  position: absolute;
  bottom: 20px;
  right: 30px;
  display: flex;
  align-items: flex-end;
}
.commissions__address {
  margin-left: 10px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 20px;
}
@media (max-width: 800px) {
  .commissions__title {
    font-size: 75px !important;
  }
}
@media (max-width: 720px) {
  .commissions__title {
    font-size: 65px !important;
  }
}
@media (max-width: 620px) {
  .commissions__title {
    font-size: 55px !important;
  }
  .commissions__img {
    min-width: 800px;
  }
}
@media (max-width: 520px) {
  .commissions__title {
    font-size: 45px !important;
  }
}
@media (max-width: 520px) {
  .commissions__title {
    font-size: 42px !important;
  }
}
@media (max-width: 400px) {
  .commissions__title {
    font-size: 35px !important;
  }
  .commissions__text {
    font-size: 20px !important;
  }
}
</style>
