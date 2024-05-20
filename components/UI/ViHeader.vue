<template>
  <header
    :class="{
      activeHeader:
        (isHover || isScrollDown || activeVisualHeader || activeMobileBurger) &&
        !bodyClassName,
      activeMobHeader: activeMobileHeader && !bodyClassName,
      disableUpperHeader: activeInnerHeader && !bodyClassName,
      activeBackground: backgroundLinear && !bodyClassName,
    }"
    class="header"
  >
    <div class="header__desktop">
      <UIHeaderViVisual
        :activeVisualHeader="activeVisualHeader"
        @closeWindow="(activeVisualHeader = false), (isHover = false)"
        @checkClass="setBodyClassName"
        :bodyClassName="bodyClassName"
      />
      <div class="header__container">
        <div class="header__info">
          <div class="header__left">
            <p class="header__text font" data-font-actual="15">07:30 - 19:00</p>
            <p class="header__text font" data-font-actual="15">
              г. Киров, ул. Герцена 43
            </p>
            <p class="header__text font" data-font-actual="15">
              8 (8332) 64-18-98
            </p>
            <div class="header__hide">
              <button
                class="header__btn"
                @click="
                  (activeVisualHeader = !activeVisualHeader),
                    (isHover = !isHover)
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
                    class="stroke"
                    d="M15.5819 12.0004C15.5819 13.9804 13.9819 15.5804 12.0019 15.5804C10.0219 15.5804 8.42188 13.9804 8.42188 12.0004C8.42188 10.0204 10.0219 8.42041 12.0019 8.42041C13.9819 8.42041 15.5819 10.0204 15.5819 12.0004Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    class="stroke"
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
            :bodyClassName="bodyClassName"
          />
        </div>
        <div class="header__nav">
          <h1
            class="header__logo font"
            @click="$router.push('/')"
            ref="header__logo"
            data-font-actual="40"
          >
            ВВКИФПУ
          </h1>
          <nav class="header__words">
            <ul
              class="header__ul"
              @mouseenter="isHover = true"
              @mouseleave="activeVisualHeader ? isHover : (isHover = false)"
            >
              <li
                class="header__li font"
                data-font-actual="17"
                v-for="(item, idx) in navArr"
                :key="item"
                @click="redirectPage(idx, item)"
                @mouseenter="setActiveLi(idx)"
                @mouseleave="setDisableLi"
                :class="{ activeLi: activeIdxLi === idx && !bodyClassName }"
                ref="navItem"
              >
                {{ item.name }}
                <UIHeaderViInner
                  :idx="idx"
                  :activeIdxLi="activeIdxLi"
                  :item="item"
                  :distancePx="distancePx"
                  :bodyClassName="bodyClassName"
                  @close="setCloseLi"
                  @animateCloseLi="setCloseLi"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <UIViHeaderMobile
      @open="setActiveMenu"
      :bodyClassName="bodyClassName"
      :isHover="isHover"
      :isScrollDown="isScrollDown"
      :activeMobileBurger="activeMobileBurger"
    />
  </header>
  <Transition name="fade-menu">
    <UIViMenu
      v-if="activeMobileBurger"
      :activeMobileBurger="activeMobileBurger"
      @closeVisual="bodyClassName = false"
      @close="
        (bodyClassName = false),
          (activeMobileBurger = false),
          (activeMobileHeader = false),
          (isHover = false),
          (isScrollDown = false)
      "
      @changeBody="bodyClassName = true"
      :bodyClassName="bodyClassName"
    />
  </Transition>
</template>

<script>
export default {
  emits: ["animateCloseLi", "close"],
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
      activeVisual: false,
      bodyClassName: false,
      activeMobileBurger: false,
      activeMobileHeader: false,
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
    setActiveMenu(item) {
      this.activeMobileBurger = item;
    },
    setCloseLi(item) {
      if (!item?.children) {
        this.isHover = false;
        this.activeIdxLi = null;
        document.body.style.overflow = "auto";
      }
    },
    scrollChangeColor() {
      window.addEventListener("scroll", () => {
        if (this.bodyClassName) return;
        let scrollHeight = window.pageYOffset;
        this.hideUpperHeader(scrollHeight);
        this.activeScrollHeight = scrollHeight;
        this.changeColorHeader(scrollHeight);
      });
    },
    setActiveLi(idx) {
      if (this.$refs.navItem[idx]) {
        this.activeIdxLi = idx;
        this.distancePx = this.$refs.navItem[idx].getBoundingClientRect();
        idx === 3 ? (document.body.style.overflow = "hidden") : "";
        this.headerBackgroundActive = false;
      }
    },
    setDisableLi(e) {
      this.activeIdxLi = null;
      document.body.style.overflow = "auto";
    },
    checkMobileDevice() {
      return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    },
    redirectPage(idx, item) {
      if (item.path === "/contacts") {
        this.$router.push("/contacts");
      }
      if (!this.$refs.navItem[idx]) {
        return;
      }
      this.distancePx = this.$refs.navItem[idx].getBoundingClientRect();
      document.body.style.overflow = "auto";
      this.headerBackgroundActive = false;
    },
    closeWindow() {
      this.activeIdxLi = null;
    },

    setBodyClassName() {
      setTimeout(() => {
        const headerItem = document.querySelector(".header");
        if (document.body.className) {
          this.bodyClassName = true;
        } else {
          this.bodyClassName = false;
        }
      }, 0);
    },
    resizeMobileVersion() {
      if (window.innerWidth > 1160) return;
      else if (window.innerWidth <= 1160) {
        this.$refs.header__logo.setAttribute("data-font-actual", "35");
        this.$refs.navItem.forEach((el) =>
          el.setAttribute("data-font-actual", "16")
        );
      }
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
        "/applicants/open",
        "/commissions",
      ];
      const { path } = this.$route;

      if (arrNav.findIndex((el) => el === path) === -1 && !this.isHover) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.scrollChangeColor();

    this.resizeMobileVersion();

    if (document.body.className) {
      this.bodyClassName = true;
    }
  },
  watch: {
    activeMobileBurger(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        return;
      }
      document.body.style.overflow = "auto";
    },
    isHover() {
      this.setBodyClassName();
    },
    isScrollDown() {
      this.setBodyClassName();
    },
    activeVisualHeader() {
      this.setBodyClassName();
    },
    activeInnerHeader() {
      this.setBodyClassName();
    },
    backgroundLinear() {
      this.setBodyClassName();
    },
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
  z-index: 19;
}

.header__container {
  max-width: 1400px;
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
  font-size: 15px;
  font-family: 300;
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
  gap: 50px;
}
.header__li {
  font-size: 17px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}
.header__li:nth-child(1) {
  padding: 35px 0px 35px 0px;
}
.header__li:not(:first-child) {
  padding: 35px 0px 35px 0px;
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

.activeMobHeader {
  background: white;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
}
.fade-menu-enter-from {
  opacity: 0;
  transition: all 0.3s ease;
}
.fade-menu-enter-to {
  opacity: 1;
  transition: all 0.3s ease;
}
.fade-menu-leave-from {
  opacity: 1;
  transition: all 0.3s ease;
}

.fade-menu-leave-to {
  opacity: 0;
  transition: all 0.3s ease;
}
@media screen and (max-width: 1600px) {
  .header__logo {
    font-size: 35px !important;
  }
  .header__li {
    font-size: 17px !important;
  }
}

@media screen and (max-width: 1160px) {
  .header__logo {
    font-size: 35px;
    padding-bottom: 10px;
  }
  .header__li {
    font-size: 16px;
  }
  .header__li:nth-child(1) {
    padding: 35px 0px 35px 0px;
  }
  .header__li:not(:first-child) {
    padding: 35px 0px 35px 0px;
  }
  .header__ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
@media screen and (max-width: 990px) {
  header {
    padding: 0px 0 0 0;
  }
  .header__desktop {
    display: none;
  }
}
</style>
