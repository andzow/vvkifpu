<template>
  <footer>
    <div class="footer__content" ref="footer_content">
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
          <div class="footer__contact footer__contact_des">
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
            <div class="footer__contact_image" @click="redirectVk">
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
        <div
          class="footer__nav"
          v-for="item in arrNav"
          :key="item"
          @click="redirectPage(item)"
        >
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
              <NuxtLink class="footer__nav_link" :to="el.path">{{
                el.name
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__contact footer__contact_mob">
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
          <div class="footer__contact_image" @click="redirectVk">
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
          path: "/speciality/information-systems",
        },
        {
          name: "40.02.02 “Правоохранительная деятельность”",
          path: "/speciality/pravoved",
        },
        {
          name: "43.02.10 “Туризм”",
          path: "/speciality/tourism",
        },
        {
          name: "38.02.04 “Коммерция (По отраслям)”",
          path: "/speciality/commerce",
        },
        {
          name: "43.02.17 “Технологии индустрии красоты”",
          path: "/speciality/beauty-industry",
        },
      ],
      arrNav: useNavArrFooter(),
    };
  },
  methods: {
    redirectVk() {
      window.open("https://vk.com/vvkifpu", "_blank");
    },
    redirectPage(item) {
      if (item.path !== "/") {
        this.$router.push(item.path);
      }
    },
    changePadding(val) {
      if (val.path !== "/") {
        this.$refs.footer_content.style.paddingTop = "50px";
        return;
      }
      this.$refs.footer_content.style.paddingTop = "136px";
    },
  },
  mounted() {
    this.changePadding(this.$route);
  },
  watch: {
    $route(val) {
      this.changePadding(val);
    },
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
  margin-right: 30px;
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
  max-width: 250px;
  margin-bottom: 20px;
  color: #a5a5a5;
  transition: all 0.3s ease;
  cursor: pointer;
}
.footer__nav_link {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #a5a5a5;
  transition: all 0.3s ease;
  cursor: pointer;
}
.footer__nav_li:hover {
  color: White;
  transform: scale(1.02);
}
.footer__contact_mob {
  display: none;
}
@media screen and (max-width: 1230px) {
  .footer__nav:nth-child(5) {
    display: none;
  }
}
@media screen and (max-width: 1030px) {
  .foooter__logo {
    font-size: 34px !important;
    margin-bottom: 15px;
    height: 43px;
  }
  .footer__contact_title {
    font-size: 34px !important;
    margin-bottom: 15px;
  }
  .footer__spec_li a {
    font-size: 14px !important;
  }
  .footer__contact_text {
    font-size: 14px !important;
    margin-bottom: 20px;
  }
  .footer__nav_title {
    font-size: 19px !important;
    padding-top: 10px;
    height: 40px;
    margin-bottom: 15px;
  }
  .footer__nav_li {
    font-size: 14px !important;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 960px) {
  .footer__content {
    padding-top: 60px !important;
  }
  .footer__nav:nth-child(4) {
    display: none;
  }
  .footer__nav:nth-child(6) {
    display: none;
  }
  .footer__nav:nth-child(7) {
    display: none;
  }
  .footer__spec {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 600px) {
  .footer__content {
    padding-top: 20px !important;
  }
  .footer__container {
    flex-wrap: wrap;
  }
  .footer__contact {
    margin-bottom: 30px;
  }
  .footer__contact_mob {
    display: block;
  }
  .footer__contact_des {
    display: none;
  }
}
</style>
