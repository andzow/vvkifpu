<template>
  <main class="main">
    <div class="main__container">
      <div class="main__breadcrumbs" :style="distanceUnderHeader">
        Главная - 09.02.04 Информационные системы
      </div>
      <div class="main__name">
        <h1 class="main__title">
          09.02.04<br />
          ИНФОРМАЦИОННЫЕ СИСТЕМЫ
        </h1>
        <div class="main__button">
          <UISpecialityViButton>Заявка на обучение</UISpecialityViButton>
        </div>
      </div>
      <div class="main__about">
        <div class="main__content">
          <div class="main__start" v-for="item in arrAbout" :key="item">
            <p class="main__start_title">{{ item.name }}</p>
            <p class="main__start_des" v-for="list in item.arrDes" :key="list">
              {{ list }}
            </p>
          </div>
          <div class="main__proffesions">
            <p class="main__proffesions_title">Будущие профессии</p>
            <ul class="main__proffesions_ul">
              <li
                class="main__proffesions_li"
                v-for="item in arrProffesions"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="main__image">
            <img :src="'../assets/images/Speciality/arrow.svg'" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: null,
      arrAbout: [
        {
          name: "Начало обучения",
          arrDes: ["01 сен 2024"],
        },
        {
          name: "Продолжительность",
          arrDes: ["3 г 10 мес (база 9 кл)", "2 г 10 мес (база 11 кл)"],
        },
      ],
      arrProffesions: [
        "программист информационных систем",
        "системный администратор",
        "администратор компьютерной сети",
        "техник по обслуживанию аппаратных средств",
        "веб-мастер (веб-дизайнер)",
        "ИТ-специалист",
        "администратор базы данных",
        "и многие другие",
      ],
      imageSrc: "../assets/images/Speciality/arrow.svg",
    };
  },
  mounted() {
    this.headerHeight = document
      ?.querySelector("header")
      ?.getBoundingClientRect().height;
  },
  computed: {
    distanceUnderHeader() {
      return {
        padding: `${this.headerHeight + 20}px 20px 0 20px`,
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
  background: url("@/assets/images/Speciality/information.webp") no-repeat;
  background-size: cover;
  overflow-x: hidden;
}
.main__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main__breadcrumbs {
  width: 100%;
  max-width: 1800px;
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
  font-size: 88px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.main__about {
  width: 100vw;
  padding: 30px 0;
  background: black;
}
.main__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1800px;
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
  color: #cdcdcd;
  list-style-type: circle;
}
</style>
