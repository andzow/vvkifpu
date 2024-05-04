<template>
  <div
    class="header__mob"
    :class="{ activeMobHeader: activeBurger || isHover || isScrollDown }"
  >
    <div class="header__mob_head">
      <div
        class="header__mob_logo"
        :style="setFontSizeAndColor()"
        @click="$router.push('/')"
      >
        ВВКИФПУ
      </div>
      <div class="header__mob_search">
        <UIHeaderViSearchMob
          :bodyClassName="bodyClassName"
          :activeBurger="activeBurger"
          :isHover="isHover"
          :isScrollDown="isScrollDown"
        />
      </div>
      <div
        class="header__mob_burger"
        @click="setActiveBurger"
        :class="{
          activeBurgerMenu: activeBurger,
          activeBack: !bodyClassName,
        }"
      >
        <div class="header__mob_line" v-for="item in 3" :key="item">
          <svg
            width="31"
            height="3"
            viewBox="0 0 31 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke"
              d="M2 1.5H29"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bodyClassName: { type: Boolean },
    isHover: { type: Boolean },
    isScrollDown: { type: Boolean },
    activeMobileBurger: {},
  },
  data() {
    return {
      activeBurger: false,
      fontSize: useFontSize(),
      className: false,
      borderColor: useColor(),
      checkVer: useChangeSpeciality(),
    };
  },
  methods: {
    setActiveBurger() {
      this.activeBurger = !this.activeBurger;
      this.$emit("open", this.activeBurger);
      this.checkVer = true;
    },
    setFontSizeAndColor() {
      if (!this.bodyClassName) {
        return;
      }
      const bodyElement = document?.body;
      if (bodyElement) {
        const computedStyle = window?.getComputedStyle(bodyElement);
        const color = computedStyle.color;
        return {
          fontSize: `${this.fontSize + 19}px`,
          color: color,
          background: computedStyle.backgroundColor,
        };
      }
    },
  },
  computed: {
    borderBurgerVisualActive() {
      if (!this.bodyClassName) {
        return;
      }
      const bodyElement = document?.body;
      const computedStyle = window?.getComputedStyle(bodyElement);
      const color = computedStyle.borderColor;
      return {
        border: `1px solid ${color}`,
      };
    },
  },
  watch: {
    activeMobileBurger(val) {
      if (!val) {
        this.activeBurger = false;
      }
    },
  },
  mounted() {
    this.setFontSizeAndColor();
  },
};
</script>

<style scoped>
.header__mob {
  padding: 30px 20px;
  width: 100vw;
  display: none;
  background: none;
  transition: all 0.3s ease;
}
.header__mob_head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__mob_logo {
  font-size: 35px !important;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.header__mob_search {
  padding: 0 50px;
  flex-grow: 2;
}
.header__mob_burger {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  padding: 0 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.activeBack {
  background: #542fe6;
}

.activeMobHeader .header__mob_logo {
  color: black;
  transition: all 0.3s ease;
}
.header__mob_line {
  width: 100%;
  height: 3px;
  margin: 3px 0;
  transition: all 0.3s ease;
}

.activeBurgerMenu .header__mob_line:nth-child(1) {
  transform: translateX(2px);
}
.activeBurgerMenu .header__mob_line:nth-child(2) {
  transform: translateX(-2px);
}
.activeBurgerMenu .header__mob_line:nth-child(3) {
  transform: translateX(2px);
}

@media screen and (max-width: 990px) {
  .header__mob {
    display: block;
  }
}
@media screen and (max-width: 600px) {
  .header__mob_search {
    padding: 0 20px;
    flex-grow: 0.5;
  }
}
@media screen and (max-width: 536px) {
  .header__mob_search {
    display: none;
  }
}
@media screen and (max-width: 488px) {
  /* .header__mob_logo {
    font-size: 32px !important;
  } */
}
</style>
