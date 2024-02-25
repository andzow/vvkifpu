<template>
  <div class="preloader">
    <div class="preloader__info">
      <div class="preloader__name">
        <p v-for="(item, idx) in wordArray" :key="idx" class="preloader__letter" :class="'preloader__letter_' + idx">{{ item }}</p>
      </div>
      <div class="preloader__container">
        <div class="preloader__progress"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordArray: [
        'В','В','К','И','Ф','П','У'
      ]
    }
  }
}
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preloader__info {
  position: relative;
}
.preloader__container {
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 12px;
  width: 312px;
  background: #F8F7F7;
  border-radius: 20px;
  overflow: hidden;
}
.preloader__progress {
  height: 100%;
  width: 0;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
  animation: progress 1.3s ease forwards;
  animation-delay: 1s;
}
.preloader__name {
  display: flex;
  align-items: center;
  color: #542FE6;
  font-size: 80px;
  overflow: hidden;
}
.preloader__letter {
  opacity: 0;
  animation: appear 0.5s ease forwards;
}

@keyframes appear {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes progressColor {
  0% {
    background-color: #8001bc;
  }
  50% {
    background-color: #6700eb;
  }
  100% {
    background-color: #00eace;
  }
}
.preloader__letter_0 { animation-delay: 0.1s; }
.preloader__letter_1 { animation-delay: 0.2s; }
.preloader__letter_2 { animation-delay: 0.3s; }
.preloader__letter_3 { animation-delay: 0.4s; }
.preloader__letter_4 { animation-delay: 0.5s; }
.preloader__letter_5 { animation-delay: 0.6s; }
.preloader__letter_6 { animation-delay: 0.7s; }
</style>