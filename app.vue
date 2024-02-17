<template>
  <div>
    <NuxtPage :class="{page__inactive: !isActive}"/>
    <Transition>
      <UIPreloader v-if="!isActive"/>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isActive = true
    }, 2000)
  }
}
</script>

<style>
.page__inactive {
  overflow: hidden;
  height: 100vh;
}
.v-enter-active,
.v-leave-active {
  transition: all .8s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
