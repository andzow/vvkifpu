<template>
  <div class="about__animate">
    <div class="about__animate_item about__animate_item1"></div>
    <div class="about__animate_item about__animate_item2"></div>
    <div class="about__animate_item about__animate_item3"></div>
    <div class="about__animate_item about__animate_item4"></div>
    <div class="about__animate_item about__animate_item5"></div>
    <div class="about__animate_item about__animate_item6"></div>
    <!-- Добавленные шарики -->
    <div class="about__animate_item about__animate_item7"></div>
    <div class="about__animate_item about__animate_item8"></div>
    <div class="about__animate_item about__animate_item9"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about__animate {
  position: absolute;
  left: 10%;
  bottom: -10%;
  width: 40%;
  height: 400px;
  overflow: hidden;
}

.about__animate_item {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  animation: moveAndResize 4s infinite alternate ease-in-out;
}

.about__animate_item1 {
  top: 10%;
  left: 50%;
  width: 12px;
  height: 12px;
  animation-delay: 0.5s;
}

.about__animate_item2 {
  top: 50%;
  left: 30%;
  animation-delay: 1s;
}

.about__animate_item3 {
  top: 20%;
  left: 80%;
  width: 15px;
  height: 15px;
  animation-delay: 1.5s;
}

.about__animate_item4 {
  top: 30%;
  left: 10%;
  animation-delay: 2s;
}

.about__animate_item5 {
  top: 60%;
  left: 10%;
  width: 10px;
  height: 10px;
  animation-delay: 2.5s;
}

.about__animate_item6 {
  top: 30%;
  left: 70%;
  animation-delay: 3s;
}

.about__animate_item7 {
  top: 60%;
  left: 20%;
  width: 18px;
  height: 18px;
  animation-delay: 1.2s;
}

.about__animate_item8 {
  top: 40%;
  left: 60%;
  width: 14px;
  height: 14px;
  animation-delay: 2.8s;
}

.about__animate_item9 {
  top: 70%;
  left: 90%;
  width: 16px;
  height: 16px;
  animation-delay: 3.7s;
}

@keyframes moveAndResize {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(15px, 15px) scale(1.02);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}
</style>
