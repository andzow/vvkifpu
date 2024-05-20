<template>
  <main class="main">
    <div class="main__video">
      <video
        class="main__mp4"
        autoplay
        muted
        loop
        poster="@/assets/video/video.webm"
        type="video/webm"
        preload="metadata"
        playsinline
        v-if="!tourismVideo"
      >
        <source src="@/assets/video/video.webm" type="video/webm" />
      </video>
      <video
        class="main__mp4"
        autoplay
        muted
        loop
        poster="@/assets/video/tourism.mp4"
        type="video/mp4"
        preload="metadata"
        playsinline
        v-else
      >
        <source src="@/assets/video/tourism.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="main__container">
      <div class="main__breadcrumbs" :style="distanceUnderHeader">
        <UIViBreadcrumbs
          :isColor="true"
          :arrCrumbs="arrCrumbs"
          v-if="arrCrumbs"
        />
      </div>
      <div class="main__name">
        <div
          class="main__cd font_special"
          data-font-actual="58"
          v-show="arrCrumbs"
        >
          {{ codeSpec }}
        </div>
        <div class="main__loadcd" v-show="!arrCrumbs"></div>
        <h1
          class="main__title font_special"
          v-html="specialityTitle"
          v-show="arrCrumbs"
          data-font-actual="58"
        ></h1>
        <div class="main__loadtitl" v-show="!arrCrumbs"></div>
        <div class="main__button" v-show="arrCrumbs">
          <UISpecialityViButton @click="useModal = true"
            >Заявка на обучение</UISpecialityViButton
          >
        </div>
        <div class="main__loadbtn" v-show="!arrCrumbs"></div>
      </div>
      <div class="main__about border">
        <div class="main__content" id="main__content">
          <div class="main__start" v-for="item in getArrDes" :key="item">
            <p
              class="main__start_title font"
              data-font-actual="18"
              :class="{ loadingTitle: !item.name }"
            >
              {{ item.name }}
            </p>
            <p
              class="main__start_des font"
              data-font-actual="15"
              v-for="list in item.arrDes"
              :class="{ loadingDes: !item.name }"
              :key="list"
            >
              {{ list }}
            </p>
          </div>
          <div class="main__proffesions">
            <p
              class="main__proffesions_title font"
              data-font-actual="18"
              :class="{ loadingProfTitle: !arrProffesions }"
            >
              Будущие профессии
            </p>
            <ul class="main__proffesions_ul">
              <li
                class="main__proffesions_li font"
                data-font-actual="15"
                v-for="item in getArrProffesions"
                :class="{ loadingProffesions: !item }"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="main__check">
            <div
              class="main__image"
              v-html="imageSrc"
              v-show="arrProffesions"
            ></div>
            <div class="main__check_loading" v-show="!arrProffesions"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    codeSpec: { type: String },
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
    arrCrumbs: {
      type: Array,
    },
    tourismVideo: {
      type: Boolean,
    },
  },
  data() {
    return {
      useModal: useModal(),
      arrDesLoading: [
        {
          name: false,
          arrDes: [false],
        },
        {
          name: false,
          arrDes: [false, false],
        },
      ],
      arrProffesionsLoading: [false, false, false, false, false, false],
    };
  },
  computed: {
    setColor() {
      const elements = document.querySelectorAll(".breadcrumbs__hr");
      const eleme = document.querySelector(".breadcrumbs__span");
      const bodyEl = document.body;
      var computedStyle = window.getComputedStyle(bodyEl);
      elements.forEach((el) => {
        el.style.color = computedStyle.color;
      });
      eleme.style.color = computedStyle.color;
    },
    distanceUnderHeader() {
      return {
        padding: `${200}px 20px 0 20px`,
      };
    },
    getArrDes() {
      if (this.arrDes === null) {
        return this.arrDesLoading;
      }
      return this.arrDes;
    },
    getArrProffesions() {
      if (this.arrDes === null) {
        return this.arrProffesionsLoading;
      }
      return this.arrProffesions;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100vw;
  height: auto;
  min-height: 100vh;
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

.main__video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main__video::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
}

.main__container {
  position: relative;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
}
.main__breadcrumbs {
  width: 100%;
  max-width: 1400px;
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
  padding-bottom: 60px;
  margin-bottom: 20px;
}
.main__title {
  font-size: 58px;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  max-width: 900px;
  margin: 0 20px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.main__cd {
  font-size: 58px;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  margin: 0 20px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
}
.main__about {
  width: 100vw;
  padding: 30px 0;
  background: black;
  min-height: 150px;
}
.main__loadabout {
  min-height: 150px;
  width: 100vw;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  border: none;
  transition: all 0.3s ease;
}

.main__loadcd {
  border-radius: 50px;
  min-height: 50px;
  width: 300px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  margin-bottom: 20px;
  border: none;
  transition: all 0.3s ease;
}
.main__loadtitl {
  border-radius: 50px;
  min-height: 50px;
  width: 600px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  margin-bottom: 30px;
  border: none;
  transition: all 0.3s ease;
}
.main__loadbtn {
  border-radius: 50px;
  min-height: 33px;
  width: 150px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  margin-bottom: 30px;
  border: none;
  transition: all 0.3s ease;
}

.loadingTitle {
  border-radius: 15px;
  font-size: 0px !important;
  height: 25px;
  width: 150px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  margin-bottom: 30px;
  border: none;
  transition: all 0.3s ease;
}
.loadingProfTitle {
  border-radius: 15px;
  font-size: 0px !important;
  height: 25px;
  width: 150px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  margin-bottom: 30px;
  border: none;
  transition: all 0.3s ease;
}
.loadingDes {
  border-radius: 15px;
  font-size: 0px !important;
  height: 15px;
  width: 200px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  margin-bottom: 10px !important;
  animation: slide 1.3s infinite;
  border: 1px solid red;
  border: none;
  transition: all 0.3s ease;
}
.loadingProffesions {
  border-radius: 15px;
  font-size: 0px !important;
  height: 15px;
  width: 300px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  margin-bottom: 10px !important;
  list-style-type: none !important;
  margin-left: 0 !important;
  animation: slide 1.3s infinite;
  border: 1px solid red;
  border: none;
  transition: all 0.3s ease;
}
.main__check_loading {
  border-radius: 23px;
  font-size: 0px !important;
  height: 70px;
  width: 70px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  margin-bottom: 10px !important;
  list-style-type: none !important;
  margin-left: 0 !important;
  animation: slide 1.3s infinite;
  border: 1px solid red;
  border: none;
  transition: all 0.3s ease;
}

.main__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
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
@keyframes slide {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 200%;
  }
}

@media screen and (max-width: 1320px) {
  .main__title {
    font-size: 54px !important;
  }
  .main__cd {
    font-size: 54px !important;
  }
  .main__name {
    padding-bottom: 0;
  }
  .main__image {
    max-width: 80px;
  }
  .main__content {
    column-gap: 20px;
  }
  .main__proffesions_ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 50px;
  }
  .main__proffesions_li:nth-child(n + 4) {
    display: none;
  }
  .main__breadcrumbs {
    padding: 220px 20px 0px !important;
  }
}
@media screen and (max-width: 990px) {
  .main__name {
    padding-bottom: 50px;
  }
  .main__breadcrumbs {
    padding: 140px 20px 0px !important;
  }
}
@media screen and (max-width: 860px) {
  .main__image {
    display: none;
  }
}
@media screen and (max-width: 830px) {
  .main__name {
    padding-bottom: 0px;
    margin: 15px 0;
  }
  .main__title {
    font-size: 44px !important;
  }
  .main__cd {
    font-size: 44px !important;
  }
  /* .main__start:nth-child(2) {
    display: block;
  } */
}

@media screen and (max-width: 760px) {
  .main__breadcrumbs {
    padding: 120px 20px 0px !important;
  }
  .main__proffesions_title {
    font-size: 15px !important;
  }
  .main__start_title {
    font-size: 15px !important;
  }
  .main__proffesions_li {
    font-size: 14px !important;
  }
  .main__start_des {
    font-size: 14px !important;
  }
  .main__start:nth-child(2) {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .main__name {
    padding-bottom: 30px;
  }
  .main__start:nth-child(1) {
    display: none;
  }
  .main__title {
    font-size: 32px !important;
  }
  .main__cd {
    font-size: 32px !important;
  }
}
@media screen and (max-width: 370px) {
  .main__title {
    font-size: 30px !important;
  }
  .main__cd {
    font-size: 30px !important;
  }
}
</style>
