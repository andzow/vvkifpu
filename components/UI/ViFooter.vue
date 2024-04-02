<template>
  <footer>
    <div class="footer__content">
      <div class="footer__container">
        <div class="footer__about">
          <div class="foooter__logo font" data-font-actual="40">ВВКИФПУ</div>
          <ul class="footer__spec">
            <li
              class="footer__spec_li"
              v-for="item in arrSpeciality"
              :key="item"
            >
              <router-link class="font" :to="item.path" data-font-actual="16">{{
                item.name
              }}</router-link>
            </li>
          </ul>
          <div class="footer__contact">
            <div class="footer__contact_title font" data-font-actual="40">
              КОНТАКТЫ
            </div>
            <p class="footer__contact_text font" data-font-actual="16">
              Адрес: 610002, г.Киров, ул.Герцена 41
            </p>
            <p class="footer__contact_text font" data-font-actual="16">
              07:30 - 19:00
            </p>
            <p class="footer__contact_text font" data-font-actual="16">
              8 (8332) 64-18-98
            </p>
            <p class="footer__contact_text font" data-font-actual="16">
              vvkifpu@mail.ru
            </p>
            <div class="footer__contact_image">
              <svg
                width="38"
                height="23"
                viewBox="0 0 38 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M20.6969 23C7.71385 23 0.30856 14.3663 0 0H6.50347C6.71703 10.5446 11.5114 15.011 15.3091 15.9319V0H21.433V9.09405C25.1831 8.70267 29.1227 4.55853 30.4518 0H36.5757C35.5551 5.61758 31.2827 9.76173 28.2446 11.4655C31.2827 12.8468 36.1486 16.4614 38 23H31.259C29.8112 18.6256 26.2037 15.2412 21.433 14.7808V23H20.6969Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="footer__nav" v-for="item in arrNav" :key="item">
          <div class="footer__nav_title font" data-font-actual="22">
            {{ item.name }}
          </div>
          <ul class="footer__nav_ul">
            <li
              class="footer__nav_li font"
              v-for="el in item.allPages"
              :key="el"
              data-font-actual="16"
            >
              {{ el.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      arrSpeciality: [
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
      arrNav: useNavArrFooter(),
    };
  },
};
</script>

<style scoped>
footer {
  position: relative;
  overflow: hidden;
}
.footer__content {
  width: 100vw;
  background: black;
  padding-top: 136px;
  padding-bottom: 60px;
  overflow-x: hidden;
}
.footer__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.footer__about {
  max-width: 350px;
}
.foooter__logo {
  font-size: 40px;
  margin-bottom: 25px;
  height: 50px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.footer__spec {
  margin-bottom: 80px;
}
.footer__spec_li {
  transition: all 0.3s ease;
}
.footer__spec_li a {
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #a5a5a5;
  transition: all 0.3s ease;
  cursor: pointer;
}
.footer__spec_li {
  margin-bottom: 20px;
}
.footer__spec_li:last-child {
  margin-bottom: 0px;
}
.footer__spec_li:hover {
  transform: scale(1.02);
}
.footer__spec_li a:hover {
  color: white;
  transform: scale(1.2);
}
.footer__contact_title {
  font-size: 40px;
  margin-bottom: 25px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}
.footer__contact_text {
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #a5a5a5;
  margin-bottom: 20px;
}
.footer__contact_image {
  margin-top: 50px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.footer__contact_image:hover path {
  fill: #542fe6;
}
.footer__nav {
  margin-right: 10px;
}
.footer__nav:last-child {
  margin-right: 0;
}
.footer__nav_title {
  font-size: 22px;
  padding-top: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-transform: lowercase;
  color: white;
  height: 50px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.footer__nav_li {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  max-width: 250px;
  margin-bottom: 20px;
  color: #a5a5a5;
  text-transform: capitalize;
  transition: all 0.3s ease;
  cursor: pointer;
}
.footer__nav_li:hover {
  color: White;
  transform: scale(1.02);
}
</style>
