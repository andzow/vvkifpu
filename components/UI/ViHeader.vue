<template>
  <header
    :class="{
      activeHeader: isHover || isScrollDown,
      disableUpperHeader: activeInnerHeader,
    }"
  >
    <div class="header__container">
      <div class="header__info">
        <div class="header__left">
          <p class="header__text">07:30 - 19:00</p>
          <p class="header__text">г. Киров, ул. Герцена 41</p>
          <p class="header__text">8 (8332) 64-18-98</p>
          <div class="header__hide">
            <button class="header__btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5819 12.0004C15.5819 13.9804 13.9819 15.5804 12.0019 15.5804C10.0219 15.5804 8.42188 13.9804 8.42188 12.0004C8.42188 10.0204 10.0219 8.42041 12.0019 8.42041C13.9819 8.42041 15.5819 10.0204 15.5819 12.0004Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0018 20.2702C15.5318 20.2702 18.8218 18.1902 21.1118 14.5902C22.0118 13.1802 22.0118 10.8102 21.1118 9.40021C18.8218 5.80021 15.5318 3.72021 12.0018 3.72021C8.4718 3.72021 5.1818 5.80021 2.8918 9.40021C1.9918 10.8102 1.9918 13.1802 2.8918 14.5902C5.1818 18.1902 8.4718 20.2702 12.0018 20.2702Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <UIHeaderViSearch :isHover="isHover" :isScrollDown="isScrollDown" />
      </div>
      <div class="header__nav">
        <h1 class="header__logo">ВВКИФПУ</h1>
        <nav class="header__words">
          <ul
            class="header__ul"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
          >
            <li
              class="header__li"
              v-for="(item, idx) in navArr"
              :key="item"
              @mouseenter="setActiveLi(idx)"
              @mouseleave="setDisableLi"
              :class="{ activeLi: activeIdxLi === idx }"
              ref="navItem"
            >
              {{ item.name }}
              <UIHeaderViInner
                :idx="idx"
                :activeIdxLi="activeIdxLi"
                :item="item"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { Body } from "~/node_modules/nuxt/dist/head/runtime/components";
export default {
  data() {
    return {
      navArr: [
        {
          name: "АБИТУРИЕНТАМ",
          allPages: [
            {
              name: "День открытых дверей",
              path: "/",
              children: null,
            },
            {
              name: "Приемная комиссия",
              path: "/",
              children: null,
            },
            {
              name: "Список специальностей",
              path: "/",
              children: [
                {
                  name: "9.02.04 “Информационные системы”",
                  path: "/",
                },
                {
                  name: "40.02.02 “Правоохранительная деятельность”",
                  path: "/",
                },
                {
                  name: "43.02.10 “Туризм”",
                  path: "/",
                },
                {
                  name: "38.02.04 “Коммерция (По отраслям)”",
                  path: "/",
                },
                {
                  name: "43.02.17 “Технологии индустрии красоты”",
                  path: "/",
                },
                {
                  name: "43.02.02 “Парикмахерское искусство”",
                  path: "/",
                },
              ],
            },
            {
              name: "Правила приема",
              path: "/",
              children: null,
            },
            {
              name: "Стоимость обучения",
              path: "/",
              children: null,
            },
          ],
          path: "/",
          height: 500,
        },
        {
          name: "СТУДЕНТАМ",
          allPages: [
            {
              name: "Оплата обучения",
              path: "/",
              children: null,
            },
            {
              name: "Онлайн обучение",
              path: "/",
              children: null,
            },
            {
              name: "Документы на практику",
              path: "/",
              children: null,
            },
            {
              name: "Контактные данные сотрудников ВВКИФПУ",
              path: "/",
              children: null,
            },
          ],
          path: "/",
          height: 100,
        },
        {
          name: "БИБЛИОТЕКА",
          allPages: [
            {
              name: "Электронная библиотека",
              path: "/",
              children: null,
            },
            {
              name: "Дополнительная информация",
              path: "/",
              children: null,
            },
            {
              name: "Дополнительные информационные ресурсы",
              path: "/",
              children: null,
            },
          ],
          path: "/",
          height: 200,
        },
        {
          name: "СВЕДЕНИЯ ОБ ОО",
          allPages: [
            {
              name: "Основные сведения",
              path: "/",
              children: null,
            },
            {
              name: "Структура и органы управления ОО",
              path: "/",
              children: null,
            },
            {
              name: "Документы",
              path: "/",
              children: null,
            },
            {
              name: "Образование",
              path: "/",
              children: [
                {
                  name: "Численность обучающихся",
                  path: "/",
                },
                {
                  name: "Основные профессиональные образовательные стандарты",
                  path: "/",
                },
                {
                  name: "Учебные планы и Основные профессиональные образовательные программы",
                  path: "/",
                },
              ],
            },
            {
              name: "Руководство",
              path: "/",
              children: null,
            },
            {
              name: "Педагогический состав",
              path: "/",
              children: null,
            },
            {
              name: `Материально-техническое обеспечение
и оснащенность образовательного процесса. Доступная среда`,
              path: "/",
              children: null,
            },
            {
              name: "Платные образовательнные услуги",
              path: "/",
              children: null,
            },
            {
              name: "Финансово-хозяйственная деятельность",
              path: "/",
              children: null,
            },
            {
              name: "Вакантные места для приема (перевода) обучающихся",
              path: "/",
              children: null,
            },
            {
              name: "Стипендии и меры поддержки обучающихся",
              path: "/",
              children: null,
            },
            {
              name: "Международное сотрудничество",
              path: "/",
              children: null,
            },
            {
              name: "Организация питания в образовательной организации",
              path: "/",
              children: null,
            },
            {
              name: "Образовательные стандарты",
              path: "/",
              children: null,
            },
            {
              name: "Правила приема",
              path: "/",
              children: null,
            },
            {
              name: "Виды материальной поддержки",
              path: "/",
              children: null,
            },
            {
              name: "Наши реквизиты",
              path: "/",
              children: null,
            },
          ],
          path: "/",
          height: 300,
        },
        {
          name: "НОВОСТИ",
          allPages: [
            {
              name: "Новости колледжа",
              path: "/",
              children: null,
            },
            {
              name: "Мероприятия",
              path: "/",
              children: null,
            },
          ],
          path: "/",
          height: 400,
        },
        {
          name: "КОНТАКТЫ",
          path: "/",
          height: 700,
        },
      ],
      isHover: false,
      isScrollDown: false,
      activeIdx: false,
      activeInnerHeader: false,
      activeScrollHeight: 0,
      activeIdxLi: null,
      distancePx: null,
    };
  },
  methods: {
    hideUpperHeader(scrH) {
      if (this.activeScrollHeight < scrH) {
        this.activeInnerHeader = true;
        this.isScrollDown = true;
      } else {
        this.activeInnerHeader = false;
      }
    },
    changeColorHeader(scrH) {
      if (scrH !== 0) {
        this.isScrollDown = true;
        return;
      }
      this.activeInnerHeader = false;
      this.isScrollDown = false;
    },
    scrollChangeColor() {
      window.addEventListener("scroll", () => {
        let scrollHeight = window.pageYOffset;
        this.hideUpperHeader(scrollHeight);
        this.activeScrollHeight = scrollHeight;
        this.changeColorHeader(scrollHeight);
      });
    },
    setActiveLi(idx) {
      this.activeIdxLi = idx;
      this.distancePx = this.$refs.navItem[idx].getBoundingClientRect().left;
      document.body.style.overflow = "hidden";
    },
    setDisableLi(e) {
      this.activeIdxLi = null;
      document.body.style.overflow = "auto";
    },
  },
  mounted() {
    this.scrollChangeColor();
  },
  watch: {},
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100vw;
  background: none;
  padding: 30px 0 0 0;
  transition: all 0.3s ease;
  z-index: 5;
}
.activeHeader {
  background: white;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
}
.header__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.header__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  height: 60px;
  border-bottom: 1px solid #fff;
  /* border-bottom: 1px solid #fff; */
  transition: all 0.3s ease;
}
.disableUpperHeader {
  padding: 0;
}
.disableUpperHeader .header__info {
  height: 0;
  padding: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0) !important;
  overflow: hidden;
}
.activeHeader .header__info {
  border-bottom: 1px solid black;
}
.activeHeader .header__info path {
  stroke: black;
}
.header__left {
  display: flex;
  align-items: center;
}
.header__text {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #fff;
  margin-right: 30px;
  transition: all 0.3s ease;
}
.activeHeader .header__text {
  color: #000;
}
.header__btn {
  display: flex;
  align-items: center;
  background: none;
}
.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
}
.header__logo {
  font-size: 40px;
  color: white;
  transition: all 0.3s ease;
}
.activeHeader .header__logo {
  color: #000;
}
.header__ul {
  display: flex;
  align-items: center;
}
.header__li {
  font-size: 20px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  text-transform: lowercase;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}
.header__li:nth-child(1) {
  padding: 35px 0px 35px 0px;
}
.header__li:not(:first-child) {
  padding: 35px 0px 35px 55px;
}
.activeHeader .header__li {
  color: #000;
}
.activeLi {
  color: #542fe6 !important;
}
</style>
