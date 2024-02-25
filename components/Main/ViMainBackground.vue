<template>
  <div class="main__animation">
    <div
      class="main__animation_item"
      :class="'main__animation_item' + (idx + 1)"
      v-for="(item, idx) in 6"
      :key="item"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.main__animation {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.main__animation_item {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 100%;
  animation: moveAndResize 4s infinite alternate ease-in-out;
}

.main__animation_item1 {
  top: 50%;
  left: 5%;
  animation-delay: 0.5s;
}
.main__animation_item2 {
  top: 30%;
  left: 40%;
  animation-delay: 1s;
}
.main__animation_item3 {
  top: 80%;
  left: 90%;
  animation-delay: 1.5s;
}
.main__animation_item4 {
  top: 20%;
  left: 20%;
  animation-delay: 2s;
}
.main__animation_item5 {
  top: 70%;
  left: 9%;
  animation-delay: 2.5s;
}
.main__animation_item6 {
  top: 30%;
  left: 90%;
  animation-delay: 3s;
}

@keyframes moveAndResize {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(17px, 17px) scale(1.2);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}
</style>
