<template>
  <UIViHeader v-if="isPath" />
  <main>
    <NuxtPage />
    <Transition>
      <UIViPreloader v-if="!isActive" />
    </Transition>
    <Transition>
      <UIModalViModal />
    </Transition>
    <Transition>
      <UIModalViModalFinal />
    </Transition>
    <UIViModalStatus />
  </main>
  <UIViFooter v-if="isPath" />
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      isActive: false,
      isPath: false,
    };
  },
  mounted() {
    if (this.$route.name == "login") {
      this.isPath = false;
    } else {
      this.isPath = true;
    }
    if (process.client) {
      AOS.init();
    }
    setTimeout(() => {
      this.isActive = true;
    }, 2400);
  },
  watch: {
    $route() {
      this.checkPath(this.$route.name);
    },
    isActive(val) {
      if (val) {
        document.body.style.overflow = "auto";
      }
    },
  },
  methods: {
    checkPath(path) {
      if (path == "Вход") {
        this.isPath = false;
      } else {
        this.isPath = true;
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
