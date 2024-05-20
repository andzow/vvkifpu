<template>
  <section class="menu" :style="setActiveBack">
    <div class="menu__content" :style="setActiveBack">
      <div class="menu__search">
        <UIHeaderViSearchMob
          :bodyClassName="bodyClassName"
          @close="$emit('close')"
        />
      </div>
      <nav class="menu__nav">
        <ul class="menu__ul">
          <li
            class="menu__li"
            :style="borderBottom"
            v-for="(item, idx) in navArr"
            :key="item"
            @click="setActiveItemIdx(idx, item)"
          >
            <div
              class="menu__li_block"
              :class="{
                activeColor: activeVectorIdx === idx && !bodyClassName,
              }"
              :style="setActiveText"
            >
              {{ item.name }}
              <div
                v-if="item.allPages"
                class="menu__img"
                :class="{
                  activeVectorImg: activeVectorIdx === idx,
                }"
              >
                <svg
                  class="image_opacity"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="image__path"
                    d="M1 1L6 6L1 11"
                    stroke="#333"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <Transition name="fade-ul">
              <UIViMenuList
                v-if="activeVectorIdx === idx"
                :pages="item.allPages"
                :bodyClassName="bodyClassName"
                @close="$emit('close')"
              />
            </Transition>
          </li>
        </ul>
      </nav>
      <div class="menu__about">
        <p class="menu__text" :style="setActiveText">
          Адрес: 610002, г.Киров, ул.Герцена 43
        </p>
        <p class="menu__text" :style="setActiveText">07:30 - 19:00</p>
        <p class="menu__text" :style="setActiveText">8 (8332) 64-18-98</p>
        <p class="menu__text" :style="setActiveText">vvkifpu@mail.ru</p>
      </div>
      <UIHeaderViVisual
        :activeMobileBurger="activeMobileBurger"
        @closeVisual="$emit('closeVisual')"
        @changeBody="$emit('changeBody')"
        @closeWindow="versiaActive = false"
        :bodyClassName="bodyClassName"
        v-if="versiaActive"
      />
      <button
        class="menu__btn border"
        :style="borderBurgerVisualActive"
        @click="versiaActive = !versiaActive"
      >
        Версия для слабовидящих
      </button>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["close", "changeBody", "closeVisual"],
  props: {
    activeMobileBurger: { type: Boolean },
    bodyClassName: { type: Boolean },
  },
  data() {
    return {
      navArr: useMobileNavArr(),
      activeVectorIdx: null,
      versiaActive: false,
      fontSize: useFontSize(),
      useImage: useSvgImage,
      counter: false,
    };
  },
  methods: {
    setActiveItemIdx(idx, item) {
      if (item.path !== "/") {
        this.$emit("close");
        this.$router.push(item.path);
        return;
      }

      if (this.activeVectorIdx === idx) {
        this.activeVectorIdx = null;
        return;
      }
      this.activeVectorIdx = idx;
    },
  },
  computed: {
    setActiveBack() {
      if (!this.bodyClassName) {
        return {
          background: "",
        };
      }
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const color = computedStyle.color;
      return {
        background: computedStyle.backgroundColor,
      };
    },
    setActiveText() {
      if (!this.bodyClassName) {
        return {
          fontSize: `${!this.fontSize ? "16" : this.fontSize}px`,
          color: "",
        };
      }
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const color = computedStyle.color;

      return {
        fontSize: `${!this.fontSize ? "16" : this.fontSize}px`,
        color: color,
      };
    },
    borderBurgerVisualActive() {
      if (!this.bodyClassName) {
        return {
          border: ``,
          fontSize: `${!this.fontSize ? "16" : this.fontSize}px`,
          color: "",
          background: "",
        };
      }
      const bodyElement = document?.body;
      const computedStyle = window?.getComputedStyle(bodyElement);
      const color = computedStyle.borderColor;
      const backgroundC = computedStyle.backgroundColor;
      return {
        border: `1px solid ${color}`,
        fontSize: `${!this.fontSize ? "16" : this.fontSize}px`,
        color: color,
        background: backgroundC,
      };
    },
    borderBottom() {
      if (!this.bodyClassName) {
        return {
          fontSize: `${!this.fontSize ? "16" : this.fontSize}px`,
          borderBottom: ``,
        };
      }
      const bodyElement = document?.body;
      const computedStyle = window?.getComputedStyle(bodyElement);
      const color = computedStyle.borderColor;
      return {
        fontSize: `${!this.fontSize ? "16" : this.fontSize}px`,
        borderBottom: `1px solid ${color}`,
      };
    },
  },
  watch: {
    bodyClassName(val) {
      if (!val && this.counter) {
        const element = document.querySelectorAll(".image__path");
        element.forEach((el) => el.setAttribute("stroke", "#333"));
      }
      this.counter = true;
    },
  },
  mounted() {
    this.useImage(this.bodyClassName);
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 6rem;
  background: #f6f5f3;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10;
}
.menu__content {
  background: #f6f5f3;
  padding: 150px 20px 0 20px;
}
.menu__li {
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
  margin-bottom: 30px;
}
.menu__li:last-child {
  margin-bottom: 40px;
}
.menu__li_block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.activeColor {
  color: #542fe6;
}
.menu__img {
  display: flex;
  transition: all 0.3s ease;
}
.activeVectorImg {
  transform: rotate(90deg);
}

.menu__about {
  margin-bottom: 40px;
}
.menu__text {
  font-family: "inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #1c1c1c;
  margin-bottom: 10px;
}
.menu__btn {
  font-size: 15px;
  padding: 15px 0;
  background: #542fe6;
  font-family: "inter", sans-serif;
  font-weight: 500;
  width: 100%;
  border-radius: 50px;
  margin-bottom: 30px;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 2;
}
.menu__search {
  margin-bottom: 30px;
  display: none;
}
.fade-ul-enter-from {
  opacity: 0;
  transition: all 0.3s ease;
}
.fade-ul-enter-to {
  opacity: 1;
  transition: all 0.3s ease;
}
.fade-ul-leave-from {
  opacity: 1;
}

.fade-ul-leave-to {
  opacity: 0;
}
@media screen and (max-width: 536px) {
  .menu__search {
    display: block;
  }
}
</style>
