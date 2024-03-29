<template>
  <UIViHeader />
  <main>
    <NuxtPage/>
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
  <UIViFooter />
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
  watch: {
    isActive(val) {
      if (val) {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style scoped>
main {
  overflow-x: hidden;
}
</style>
<style>
body {
  overflow: hidden;
}
/* body {
  overflow: auto;
} */
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
