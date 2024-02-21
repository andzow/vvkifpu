<template>
  <header>
    <div class="header__container">
      <div class="header__info">
        <div class="header__left">
          <p class="header__text">07:30 - 19:00</p>
          <p class="header__text">г. Киров, ул. Герцена 41</p>
          <p class="header__text">8 (8332) 64-18-98</p>
          <div class="header__hide">
            <button class="header__btn">
              <img src="@/assets/images/Header/eye.svg" />
            </button>
          </div>
        </div>
        <UIHeaderViSearch />
      </div>
      <div class="header__nav">
        <p class="header__logo">ВВКИФПУ</p>
        <nav class="header__words">
          <ul class="header__ul">
            <li class="header__li" v-for="item in navArr" :key="item">
              {{ item.name }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navArr: [
        {
          name: "АБИТУРИЕНТАМ",
          path: "/",
        },
        {
          name: "СТУДЕНТАМ",
          path: "/",
        },
        {
          name: "БИБЛИОТЕКА",
          path: "/",
        },
        {
          name: "СВЕДЕНИЯ ОБ ОО",
          path: "/",
        },
        {
          name: "НОВОСТИ",
          path: "/",
        },
        {
          name: "КОНТАКТЫ",
          path: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: none;
  padding: 30px 0;
  z-index: 5;
}
.header__container {
  max-width: 1780px;
  padding: 0 20px;
  margin: 0 auto;
}
.header__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
  margin-bottom: 25px;
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
}
.header__logo {
  font-size: 40px;
  color: white;
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
  margin-left: 50px;
  color: white;
}
</style>
