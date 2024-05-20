<template>
  <section class="files border" id="specialityFiles">
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
            <img
              v-if="idx === 0"
              class="image_opacity"
              :src="'../assets/images/Speciality/word.svg'"
            />
            <img
              v-if="idx === 1"
              class="image_opacity"
              :src="'../assets/images/Speciality/xml.svg'"
            />
            <img
              v-if="idx === 2"
              class="image_opacity"
              :src="'../assets/images/Speciality/jav.svg'"
            />
          </div>
          <div class="files__des">
            <p class="files__index font_special" data-font-actual="40">
              {{ idx + 1 < 10 ? "0" + (idx + 1) : idx + 1 }}
            </p>
            <p class="files__name font" data-font-actual="17">
              {{ item.attributes.alternativeText }}
            </p>
          </div>
        </div>
        <Transition name="fade-button">
          <div
            class="files__button"
            v-if="isActiveIndex === idx || checkMobile"
          >
            <UISpecialityViFilesBtn :srcFile="item.attributes.url" />
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
      checkMobile: false,
    };
  },
  computed: {},
  mounted() {
    if (window.innerWidth <= 990) {
      this.checkMobile = true;
    }
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

.files__about {
  display: flex;
  align-items: center;
}
.files__image img {
  max-width: 65px;
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

@media screen and (max-width: 1320px) {
  .files__index {
    font-size: 34px !important;
  }
  .files__name {
    font-size: 16px !important;
  }
  .files__image img {
    max-width: 60px;
  }
}
@media screen and (min-width: 990px) {
  .files__item:hover {
    background: rgba(84, 47, 230, 0.15);
  }
  .files__item:hover .files__index {
    color: #542fe6;
  }
}
@media screen and (max-width: 670px) {
  .files__item {
    padding: 20px 40px;
  }
}
@media screen and (max-width: 600px) {
  .files__item {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .files__about {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 550px) {
  .files__index {
    font-size: 32px !important;
  }
  .files__name {
    font-size: 15px !important;
  }
}
</style>
