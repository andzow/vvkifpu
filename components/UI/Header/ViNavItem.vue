<template>
  <div v-if="item" class="header__item">
    <div
      class="header__item_text"
      :class="{ activeBlock: idx === activeIdxList }"
      v-for="(list, idx) in item.allPages"
      :key="list"
      @mouseenter="openChildren(list, idx)"
      @mouseleave="closeChildren"
    >
      <p class="header__item_name">{{ list.name }}</p>
      <div class="header__item_block" v-if="list.children">
        <div class="header__item_image">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L0.803847 -2.51245e-08L11.1962 8.834e-07L6 9Z"
              fill="#333333"
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
  },
  data() {
    return {
      activeIdxList: null,
    };
  },
  methods: {
    openChildren(el, idx) {
      this.$emit("slideChildren", el.children);
      this.activeIdxList = idx;
    },
    closeChildren(e) {
      const nameSlide = "header__slide";
      if (!e?.relatedTarget?.className.includes(nameSlide)) {
        this.$emit("slideChildren", null);
        return;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.header__item {
  overflow: auto;
  padding: 15px 0;
  max-height: calc(80vh - 40px);
}
.header__item::-webkit-scrollbar {
  width: 7px;
  background: #fff;
}
.header__item::-webkit-scrollbar-thumb {
  background: var(--violo);
  border-radius: 5px;
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
  font-size: 17px;
  font-weight: 500;
  max-width: 320px;
  min-width: 320px;
  color: #333;
  text-transform: capitalize;
  transition: all 0.3s ease;
}
.header__item_image {
  display: flex;
  align-items: center;
  margin-left: 15px;
  transition: all 0.3s ease;
}
.activeBlock {
  background: #542fe6;
}
.activeBlock .header__item_name {
  color: white;
}
.activeBlock .header__item_image {
  transform: rotate(180deg);
}
.activeBlock path {
  fill: white;
}

/* .header__item_card {
  position: absolute;
  top: 0;
  right: -100%;
  width: 200px;
  height: 20px;
  border: 1px solid red;
  z-index: 10000;
} */
</style>
