<template>
  <main class="main">
    <div class="main__video">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/video/video.webm" type="video/webm" />
      </video>
    </div>
    <div class="main__container">
      <div class="main__breadcrumbs" :style="distanceUnderHeader">
        <UIViBreadcrumbs :isColor="true" />
      </div>
      <div class="main__name">
        <h1
          class="main__title font_special"
          v-html="specialityTitle"
          data-font-actual="78"
        ></h1>
        <div class="main__button">
          <UISpecialityViButton @click="useModal = true"
            >Заявка на обучение</UISpecialityViButton
          >
        </div>
      </div>
      <div class="main__about border">
        <div class="main__content">
          <div class="main__start" v-for="item in arrDes" :key="item">
            <p class="main__start_title font" data-font-actual="18">
              {{ item.name }}
            </p>
            <p
              class="main__start_des font"
              data-font-actual="15"
              v-for="list in item.arrDes"
              :key="list"
            >
              {{ list }}
            </p>
          </div>
          <div class="main__proffesions">
            <p class="main__proffesions_title font" data-font-actual="18">
              Будущие профессии
            </p>
            <ul class="main__proffesions_ul">
              <li
                class="main__proffesions_li font"
                data-font-actual="15"
                v-for="item in arrProffesions"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="main__image" v-html="imageSrc"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: String,
    },
    specialityTitle: {
      type: String,
    },
    arrDes: {
      type: Array,
    },
    arrProffesions: {
      type: Array,
    },
    imageSrc: {
      type: String,
    },
    backImage: {
      type: String,
    },
  },
  data() {
    return {
      useModal: useModal(),
    };
  },
  computed: {
    distanceUnderHeader() {
      return {
        padding: `${200}px 20px 0 20px`,
      };
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow-x: hidden;
}
.main__video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 1);
  z-index: 1;
}
.main__container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
}
.main__breadcrumbs {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
}
.main__name {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 90px;
}
.main__title {
  text-align: center;
  color: #fff;
  font-size: 78px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.main__about {
  width: 100vw;
  padding: 30px 0;
  background: black;
  min-height: 150px;
}
.main__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__start_title {
  font-size: 18px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin-bottom: 15px;
  color: white;
}
.main__start_des {
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  margin-bottom: 0px;
  color: #cdcdcd;
}
.main__proffesions_title {
  font-size: 18px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin-bottom: 15px;
  color: white;
}
.main__proffesions_ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
}
.main__proffesions_li {
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  max-width: 350px;
  margin-left: 20px;
  color: #cdcdcd;
  list-style-type: circle;
}
</style>
