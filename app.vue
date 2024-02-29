<template>
  <div>
    <!-- <UIViHeader /> -->
    <NuxtPage :class="{ page__active: !isActive }" />
    <UIViFooter />
    <Transition>
      <UIViPreloader v-if="!isActive" />
    </Transition>
    <Transition>
      <UIModalViModal />
    </Transition>
    <Transition>
      <UIModalViModalFinal />
    </Transition>
    <!-- <UIViHelper /> -->
  </main>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    if (process.client) {
      AOS.init();
    }
    setTimeout(() => {
      this.isActive = true;
    }, 2400);
  },
};
</script>

<style>
main {
  overflow-x: hidden;
}
.page__active {
  overflow: hidden;
  height: 100vh;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
