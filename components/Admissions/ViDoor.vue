<template>
  <section class="door">
    <img class="door__image image" :src="'../assets/images/UI/background.webp'" alt="">
    <div class="door__color"></div>
    <div class="door__container">
      <div class="door__position">
        <h1 class="door__name font_special" data-font-actual="56">День открытых дверей</h1>
        <p class="door__text font" data-font-actual="40">30 марта 2024</p>
        <p class="door__date font" data-font-actual="28">
          Осталось: {{ remainingTime.days }}д {{ remainingTime.hours }}ч
          {{ remainingTime.minutes }}м {{ remainingTime.seconds }}с
        </p>
      </div>
      <div class="door__position">
        <div class="door__map border">
          <iframe
            class="door__frame image"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3680bbe87b8f8d4e18aa9b5e7e7a0fc04493ff0fe533a4d0009d44a98fb2642a&amp;source=constructor"
            frameborder="0"
          ></iframe>
          <div class="door__background"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      targetDate: this.getTargetDate(),
      remainingTime: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  mounted() {
    this.calculateTimeRemaining();
    setInterval(this.calculateTimeRemaining, 1000);
  },
  methods: {
    getTargetDate() {
      const now = new Date();

      if (now > new Date(`${now.getFullYear()}-03-30T10:00:00`)) {
        return new Date(`${now.getFullYear() + 1}-03-30T10:00:00`);
      }
      return new Date(`${now.getFullYear()}-03-30T10:00:00`);
    },
    calculateTimeRemaining() {
      const now = new Date().getTime();
      const difference = this.targetDate - now;

      this.remainingTime.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.remainingTime.hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.remainingTime.minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.remainingTime.seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
      );
    },
  },
};
</script>

<style scoped>
.door {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 10;
}
.door__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--violo);
  z-index: 2;
}
.door__color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--violo);
  z-index: 1;
}
.door__container {
  display: flex;
  align-items: center;
  margin-top: 50px;
  max-width: 1400px;
  padding: 0 20px;
}
.door__name {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 56px;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
}
.door__text {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
}
.door__date {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #fff;
  text-align: center;
}
.door__frame {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  transition: all 0.3s ease-in-out;
}
.door__frame:hover {
  transform: translate(-10px, -10px);
}
.door__position {
  position: relative;
  z-index: 5;
}
.door__map {
  position: relative;
  width: 650px;
  height: 480px;
  margin-left: 40px;
}
.door__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--violo);
  z-index: 4;
}
@media(max-width: 1200px) {
  .door__map {
  width: 450px;
  height: 280px;
}
}
@media(max-width: 960px) {
  .door__map {
  display: none;
}
}
@media(max-width: 520px) {
  .door__image {
    min-width: 700px;
  }
  .door__name {
    font-size: 48px !important;
  }
  .door__text {
    font-size: 34px !important;
  }
}
@media(max-width: 450px) {
  .door__image {
    min-width: 700px;
  }
  .door__name {
    font-size: 44px !important;
  }
  .door__date  {
    font-size: 22px !important;
  }
}
</style>
