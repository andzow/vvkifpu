<template>
  <header
    :class="{
      activeHeader: isHover || isScrollDown || activeVisualHeader,
      disableUpperHeader: activeInnerHeader,
      activeBackground: backgroundLinear,
    }"
  >
    <UIHeaderViVisual
      :activeVisualHeader="activeVisualHeader"
      @closeVisual="(activeVisualHeader = false), (isHover = false)"
    />
    <div class="header__container">
      <div class="header__info">
        <div class="header__left">
          <p class="header__text">07:30 - 19:00</p>
          <p class="header__text">г. Киров, ул. Герцена 41</p>
          <p class="header__text">8 (8332) 64-18-98</p>
          <div class="header__hide">
            <button
              class="header__btn"
              @click="
                (activeVisualHeader = !activeVisualHeader), (isHover = !isHover)
              "
            >
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
        <UIHeaderViSearch
          :isHover="isHover"
          :isScrollDown="isScrollDown"
          :activeVisualHeader="activeVisualHeader"
        />
      </div>
      <div class="header__nav">
        <h1 class="header__logo" @click="$router.push('/')">ВВКИФПУ</h1>
        <nav class="header__words">
          <ul
            class="header__ul"
            @mouseenter="isHover = true"
            @mouseleave="activeVisualHeader ? isHover : (isHover = false)"
          >
            <li
              class="header__li"
              v-for="(item, idx) in navArr"
              :key="item"
              @mouseenter="setActiveLi(idx), (headerBackgroundActive = false)"
              @mouseleave="setDisableLi"
              :class="{ activeLi: activeIdxLi === idx }"
              ref="navItem"
            >
              {{ item.name }}
              <UIHeaderViInner
                :idx="idx"
                :activeIdxLi="activeIdxLi"
                :item="item"
                :distancePx="distancePx"
                @animateCloseLi="setCloseLi"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["animateCloseLi"],
  data() {
    return {
      navArr: useNavArr(),
      isHover: false,
      isScrollDown: false,
      activeIdx: false,
      activeInnerHeader: false,
      activeScrollHeight: 0,
      activeIdxLi: null,
      distancePx: null,
      activeVisualHeader: false,
      headerBackgroundActive: false,
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
    setCloseLi() {
      this.isHover = false;
      this.activeIdxLi = null;
      document.body.style.overflow = "auto";
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
      this.distancePx = this.$refs.navItem[idx].getBoundingClientRect();
      document.body.style.overflow = "hidden";
    },
    setDisableLi(e) {
      this.activeIdxLi = null;
      document.body.style.overflow = "auto";
    },
  },
  computed: {
    backgroundLinear() {
      const arrNav = [
        "/",
        "/speciality/beauty-industry",
        "/speciality/commerce",
        "/speciality/hairdressing",
        "/speciality/information-systems",
        "/speciality/pravoved",
        "/speciality/tourism",
      ];
      const { path } = this.$route;

      if (arrNav.findIndex((el) => el === path) === -1 && !this.isHover) {
        return true;
      }
      return false;
    },
  },
  watch: {},
  mounted() {
    this.scrollChangeColor();
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 30px 0 0 0;
  background: rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
  z-index: 15;
}

.header__container {
  max-width: 1600px;
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
.header__left {
  display: flex;
  align-items: center;
}
.header__text {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #fff;
  margin-right: 30px;
  transition: all 0.3s ease;
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
  cursor: pointer;
  transition: all 0.3s ease;
}
.header__ul {
  display: flex;
  align-items: center;
}
.header__li {
  font-size: 19px;
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
.activeLi {
  color: #542fe6 !important;
}
.header__images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
  z-index: -1;
}

.activeBackground {
  background: #6700eb;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
}

/* .activeBackground .header__logo {
  color: #000;
}
.activeBackground .header__li {
  color: #000;
}
.activeBackground .header__text {
  color: #000;
}
.activeBackground .header__info {
  border-bottom: 1px solid black;
}
.activeBackground .header__info path {
  stroke: black;
} */

.activeHeader {
  background: white;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
}
.activeHeader .header__logo {
  color: #000;
}
.activeHeader .header__li {
  color: #000;
}
.activeHeader .header__text {
  color: #000;
}
.activeHeader .header__info {
  border-bottom: 1px solid black;
}
.activeHeader .header__info path {
  stroke: black;
}
</style>
