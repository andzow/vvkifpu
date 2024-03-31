<template>
  <section class="files border">
    <div class="files__container">
      <div
        class="files__item"
        v-for="(item, idx) in arrFiles"
        :key="item"
        @mouseenter="isActiveIndex = idx"
        @mouseleave="isActiveIndex = null"
      >
        <div class="files__about">
          <div class="files__image">
            <img class="image_opacity" :src="item.imageSrc" />
          </div>
          <div class="files__des">
            <p class="files__index font_special" data-font-actual="40">
              {{ idx + 1 < 10 ? "0" + (idx + 1) : idx + 1 }}
            </p>
            <p class="files__name font" data-font-actual="17">
              {{ item.name }}
            </p>
          </div>
        </div>
        <Transition name="fade-button">
          <div class="files__button" v-if="isActiveIndex === idx">
            <button class="files__btn border font" data-font-actual="20">
              скачать
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    arrFiles: {
      type: Array,
    },
  },
  data() {
    return {
      isActiveIndex: null,
    };
  },
};
</script>

<style scoped>
.files {
  background: white;
  margin-bottom: 30px;
}
.files__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 30px 60px;
  background: none;
  transition: all 0.3s ease;
}
.files__item:hover {
  background: rgba(84, 47, 230, 0.15);
}
.files__item:hover .files__index {
  color: #542fe6;
}
.files__about {
  display: flex;
  align-items: center;
}
.files__image img {
  max-width: 70px;
}
.files__des {
  padding-top: 5px;
  margin-left: 15px;
}
.files__index {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 5px;
  color: black;
  transition: all 0.3s ease;
}
.files__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
  color: black;
}
.files__button {
  transition: all 0.3s ease;
}
.files__btn {
  font-size: 20px;
  color: white;
  background: #542fe6;
  border-radius: 50px;
  padding: 13px 40px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.files__btn:hover {
  transform: scale(1.02);
}
.fade-button-enter-from {
  opacity: 0;
}
.fade-button-enter-to {
  opacity: 1;
}
.fade-button-leave-from {
  opacity: 1;
}
.fade-button-leave-to {
  opacity: 0;
}
</style>
