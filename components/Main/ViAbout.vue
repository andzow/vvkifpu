<template>
  <section class="about">
    <div class="about__container">
      <div class="about__nav">
        <UIViTitle :color="'white'" style="margin-bottom: 40px"
          >о ВВКИФПУ</UIViTitle
        >
        <div class="about__button" v-for="item in arrNav" :key="item">
          <button class="about__btn">
            {{ item.name }}
            <svg
              class="news__svg"
              width="55"
              height="19"
              viewBox="0 0 66 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66 9.5L51 0.839743L51 18.1603L66 9.5ZM52.5 8L-6.55671e-08 8L6.55671e-08 11L52.5 11L52.5 8Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="about__description">
        <p class="about__text">{{ desText }}</p>
        <div class="about__animate">
          <div
            class="about__animate_item"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-duration="800"
            :data-aos-delay="item.delay"
            v-for="item in arrAnimateText"
            :key="item"
          >
            <h3 class="about__animate_title">{{ item.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <MainViAboutAnimation />
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrNav: [
        {
          name: "СВЕДЕНИЯ ОБ ОО",
          path: "/",
        },
        {
          name: "Лицензии",
          path: "/",
        },
      ],
      arrAnimateText: [
        {
          name: "Качественное образование",
          delay: 0,
        },
        {
          name: "Удобное расположение",
          delay: 100,
        },
        {
          name: "Высокая занятость учеников",
          delay: 200,
        },
      ],
      desText: `Входит в список колледжей города Кирова, и выполняет обучение по самым
          востребованным специальностям текущего года. С нашей командой
          преподавателей у Вас не встанет вопрос «Куда пойти учиться?», потому
          что обучение студентов проводится командой профессионалов. Прием
          абитуриентов проводится на базе 9 и 11 классов по многим
          специальностям.`,
    };
  },
  mounted() {},
};
</script>

<style scoped>
.about {
  position: relative;
  width: 100vw;
  margin: 60px 0 0 0;
  padding: 113px 0;
  background: black;
}
.about__container {
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.about__btn {
  display: flex;
  align-items: center;
  /* max-width: 790px; */
  font-size: 22px;
  font-family: "Inter", sans-serif;
  line-height: 140%;
  font-weight: 600;
  text-transform: lowercase;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}
.about__btn:nth-child(1) {
  margin-bottom: 5px;
}
.about__btn svg {
  margin-left: 15px;
  transition: all 0.3s ease;
}
.about__btn:hover svg {
  transform: translateX(5px);
}
.about__description {
  max-width: 750px;
}
.about__text {
  padding-top: 6px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  line-height: 140%;
  font-weight: 400;
  margin-bottom: 60px;
  color: white;
}
.about__animate_title {
  font-size: 28px;
  font-family: "Inter", sans-serif;
  line-height: 140%;
  font-weight: 600;
  text-transform: lowercase;
  color: white;
}
.about__animate_item:nth-child(1) .about__animate_title {
  max-width: 300px;
}
.about__animate_item:nth-child(2) .about__animate_title {
  max-width: 300px;
  padding-left: 0px;
}

.about__animate_item:nth-child(3) .about__animate_title {
  max-width: 280px;
}
.about__animate_item:nth-child(2) {
  display: flex;
  justify-content: center;
}

.about__animate_item:nth-child(3) {
  display: flex;
  justify-content: flex-end;
}
</style>
