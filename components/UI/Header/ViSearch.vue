<template>
  <form class="header__search" @submit.prevent>
    <div class="header__search_block">
      <input
        class="header__search_input"
        type="text"
        placeholder="Поиск..."
        :class="{ activeInp: activeInput }"
      />
    </div>
    <div class="header__search_btn">
      <button
        class="header__search_button"
        type="submit"
        @click="activeInput = !activeInput"
      >
        <img src="@/assets/images/Header/search.svg" />
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      activeInput: false,
    };
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
  overflow: hidden;
  border-radius: 40px;
  transition: all 0.3s ease;
}
.activeInp {
  border: 1px solid #fff;
  width: 100%;
}
.header__search_input::placeholder {
  color: white;
}
.header__search_button {
  background: none;
  display: flex;
  align-items: center;
  border: none;
}
</style>
