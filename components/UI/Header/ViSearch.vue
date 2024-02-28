<template>
  <form
    class="header__search"
    @submit.prevent
    :class="{ activeForm: isHover || isScrollDown }"
  >
    <div class="header__search_block">
      <input
        class="header__search_input"
        type="text"
        placeholder="Поиск..."
        ref="inputSearch"
        :class="{ activeInp: activeInput }"
      />
    </div>
    <div class="header__search_btn">
      <button class="header__search_button" type="submit" @click="setInput">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58268 17.4998C13.9549 17.4998 17.4993 13.9554 17.4993 9.58317C17.4993 5.21092 13.9549 1.6665 9.58268 1.6665C5.21043 1.6665 1.66602 5.21092 1.66602 9.58317C1.66602 13.9554 5.21043 17.4998 9.58268 17.4998Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3327 18.3332L16.666 16.6665"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    isHover: { type: Boolean },
    isScrollDown: { type: Boolean },
    activeVisualHeader: { type: Boolean },
  },
  data() {
    return {
      activeInput: false,
    };
  },
  methods: {
    setInput() {
      if (!this.isScrollDown && this.activeVisualHeader) {
        this.$refs.inputSearch.style.border = "1px solid black";
        this.$refs.inputSearch.style.color = "black";
        this.activeInput = true;
        return;
      }

      if (this.activeInput && !this.isScrollDown) {
        this.activeInput = false;
        this.$refs.inputSearch.style.border = "1px solid rgba(0,0,0,0)";
      } else if (!this.activeInput && !this.isScrollDown) {
        this.$refs.inputSearch.style.border = "1px solid white";
        this.$refs.inputSearch.style.color = "white";
        this.activeInput = true;
      } else if (this.isScrollDown && !this.activeInput) {
        this.$refs.inputSearch.style.border = "1px solid black";
        this.$refs.inputSearch.style.color = "black";
        this.activeInput = true;
      } else if (this.isScrollDown && this.activeInput) {
        this.$refs.inputSearch.style.border = "1px solid rgba(0,0,0,0)";
        this.$refs.inputSearch.style.color = "white";
        this.activeInput = false;
      }
    },
    changeColorsHeader(value) {
      if (value && this.activeInput && !this.isScrollDown) {
        this.$refs.inputSearch.style.border = "1px solid black";
        this.$refs.inputSearch.style.color = "black";
      } else if (!value && this.activeInput && !this.isScrollDown) {
        this.$refs.inputSearch.style.border = "1px solid white";
        this.$refs.inputSearch.style.color = "white";
      }
    },
  },
  watch: {
    isHover(val) {
      this.changeColorsHeader(val);
    },
    isScrollDown(val) {
      if (val && this.activeInput && !this.isHover) {
        this.$refs.inputSearch.style.border = "1px solid black";
        this.$refs.inputSearch.style.color = "black";
      } else if (!val && this.activeInput && !this.isHover) {
        this.$refs.inputSearch.style.border = "1px solid white";
        this.$refs.inputSearch.style.color = "white";
      }
    },
  },
};
</script>

<style scoped>
.header__search {
  display: flex;
  align-items: center;
}
.header__search_block {
  margin-right: 30px;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
}
.header__search_input {
  color: white;
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 10px 15px;
  width: 0%;
  border-radius: 40px;
  transition: all 0.3s ease;
}
.activeInp {
  width: 100%;
}
.header__search_input::placeholder {
  color: white;
  transition: all 0.3s ease;
}
.header__search_button {
  background: none;
  display: flex;
  align-items: center;
  border: none;
}

.activeForm .header__search_input::placeholder {
  color: black;
}
.activeForm path {
  stroke: black;
}
</style>
