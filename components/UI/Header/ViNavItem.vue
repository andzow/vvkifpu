<template>
  <div v-if="item" class="header__item" :style="changeBackground">
    <div
      class="header__item_text"
      ref="headerItem"
      :class="{
        activeBlock: idx === activeIdxList && !bodyClassName,
      }"
      v-for="(list, idx) in item.allPages"
      @click="redirectPage(list)"
      :key="list"
      @mouseenter="openChildren(list, idx)"
      @mouseleave="closeChildren($event, idx)"
    >
      <div
        class="header__item_name"
        :style="summFontSizeStyle"
        :class="{ activeBlockBody: bodyClassName }"
      >
        <NuxtLink class="header__item_link" :to="list.path">
          {{ list.name }}</NuxtLink
        >
      </div>
      <div class="header__item_block" v-if="list.children">
        <div class="header__item_image">
          <svg
            class="image_opacity"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke"
              d="M1 1L6 6L1 11"
              :style="strokeChangeColor"
              stroke="#542FE6"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="header__item_card"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
    activeIdxLi: {
      type: Number,
    },
    idx: {
      type: Number,
    },
    bodyClassName: {
      type: Boolean,
    },
  },
  data() {
    return {
      activeIdxList: null,
      fontSize: useFontSize(),
      color: useColor(),
    };
  },
  computed: {
    summFontSizeStyle() {
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const color = computedStyle.color;
      if (!document.body.className) return;
      return {
        color: color,
      };
    },
    changeBackground() {
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const backgroundColor = computedStyle.backgroundColor;
      if (!document.body.className) return;
      return {
        background: backgroundColor,
      };
    },
    strokeChangeColor() {
      const bodyElement = document.body;
      const computedStyle = window.getComputedStyle(bodyElement);
      const backgroundColor = computedStyle.color;
      if (!document.body.className) return;
      return {
        stroke: backgroundColor,
      };
    },
  },
  methods: {
    openChildren(el, idx) {
      this.$emit("slideChildren", el.children);
      this.activeIdxList = idx;
    },
    closeChildren(e, idx) {
      if (!this.$refs.headerItem[idx]) return;
      const yItem = this.$refs.headerItem[idx].getBoundingClientRect().top;
      this.$emit("iItem", yItem);
      const nameSlide = "header__slide";
      if (!e?.relatedTarget?.className.includes(nameSlide)) {
        this.$emit("slideChildren", null);
        return;
      }
    },
    redirectPage(item) {
      setTimeout(() => {
        if (item.children === null) {
          this.$router.push(item.path);
          this.$emit("close", item);
        }
      }, 0);
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.bodyClassName) {
        const textEl = document.querySelectorAll(".header__item_name");
        for (let i = 0; i < textEl.length; i++) {
          textEl[i].classList.add(document.body.className);
        }
      }
    }, 0);
    const elements = document.querySelectorAll(".header__item_name");
    elements.forEach((el) => {
      el.style.fontSize = this.fontSize + "px";
    });
  },
};
</script>

<style scoped>
.header__item {
  overflow: auto;
  padding: 15px 0;
  max-height: calc(80vh - 40px);
}
.header__item_text {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  cursor: pointer;
}
.header__item_name {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  max-width: 320px;
  min-width: 320px;
  color: #333;
  text-transform: capitalize;
  transition: all 0.3s ease;
}

.header__item_link {
  font-family: "Inter", sans-serif;
  font-size: 16px;
}

.header__item_image {
  display: flex;
  align-items: center;
  margin-left: 15px;
  transition: all 0.3s ease;
}
.activeBlockBody:hover {
  text-decoration: underline;
}
.activeBlock {
  background: #542fe6;
}
.activeBlock .header__item_name {
  color: white;
}
.activeBlock .header__item_image {
  transform: rotate(-180deg);
}
.activeBlock path {
  stroke: white;
}
@media screen and (max-width: 1280px) {
  .header__item_name {
    max-width: 240px;
    min-width: auto;
  }
  .header__item_name {
    font-size: 15px;
  }
  .header__item_link {
    font-size: 15px;
    font-weight: 500;
  }
}
</style>
