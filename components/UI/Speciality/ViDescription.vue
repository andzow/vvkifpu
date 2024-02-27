<template>
  <section class="description">
    <div class="description__container">
      <div
        class="description__item"
        v-for="(item, idx) in arrDescriptionFiles"
        :key="item"
        @mouseenter="isActiveIndex = idx"
        @mouseleave="isActiveIndex = null"
      >
        <div class="description__about">
          <div class="description__image">
            <img :src="item.imageSrc" />
          </div>
          <div class="description__des">
            <p class="description__index">
              {{ idx + 1 < 10 ? "0" + (idx + 1) : idx + 1 }}
            </p>
            <p class="description__name">{{ item.name }}</p>
          </div>
        </div>
        <Transition name="fade-button">
          <div class="description__button" v-if="isActiveIndex === idx">
            <button class="description__btn">скачать</button>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    arrDescriptionFiles: {
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
.description {
  background: white;
  margin-bottom: 30px;
}
.description__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 30px 60px;
  background: none;
  transition: all 0.3s ease;
}
.description__item:hover {
  background: rgba(84, 47, 230, 0.15);
}
.description__item:hover .files__index {
  color: #542fe6;
}
.description__about {
  display: flex;
  align-items: center;
}
.description__image img {
  max-width: 70px;
}
.description__des {
  padding-top: 5px;
  margin-left: 15px;
}
.description__index {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 5px;
  color: black;
  transition: all 0.3s ease;
}
.description__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
  color: black;
}
.description__button {
  transition: all 0.3s ease;
}
.description__btn {
  font-size: 20px;
  color: white;
  background: #542fe6;
  border-radius: 50px;
  padding: 13px 40px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.description__btn:hover {
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
