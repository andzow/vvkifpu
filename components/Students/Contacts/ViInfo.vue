<template>
  <section class="info">
    <div class="info__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="info__title" :settings="true"
        >Контактные данные сотрудников ВВКИФПУ</UIViTitle
      >
      <p class="info__description font" data-font-actual="18">
        <span class="info__description_special">Огромная просьба</span> по
        указанным номерам телефонов звонить строго с 10:00 до 17:00.<br />
        Уважайте личное время сотрудников колледжа.
      </p>
      <table class="info__table" cellpadding="0" cellspacing="0" border="0">
        <thead class="info__thead border">
          <tr>
            <th class="info__pos font" data-font-actual="16">Ф. И. О.</th>
            <th class="info__pos font" data-font-actual="16">Должность</th>
            <th class="info__pos font" data-font-actual="16">Дисциплина</th>
            <th class="info__pos font" data-font-actual="16">Эл. почта</th>
            <th class="info__pos font" data-font-actual="16">ВКонтакте</th>
            <th class="info__pos font" data-font-actual="16">Телефон</th>
          </tr>
        </thead>
        <tbody class="info__tbody">
          <tr v-for="(contact, index) in getArray" :key="index">
            <td class="info__element font_special" data-font-actual="16">
              {{ contact.name }}
            </td>
            <td class="info__element font_special" data-font-actual="16">
              {{ contact.post }}
            </td>
            <td class="info__element font_special" data-font-actual="16">
              {{ contact.discipline }}
            </td>
            <td class="info__element font_special" data-font-actual="16">
              {{ contact.info.mail }}
            </td>
            <td class="info__element font_special" data-font-actual="16">
              {{ contact.info.vk }}
            </td>
            <td class="info__element font_special" data-font-actual="16">
              {{ contact.info.phone }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="contacts__block" v-for="(item, idx) in getArray" :key="idx">
        <p class="contacts__info">{{ item.name }}</p>
        <p class="contacts__info">{{ item.post }}</p>
        <p class="contacts__info">{{ item.info.mail }}</p>
        <p class="contacts__info">{{ item.info.vk }}</p>
        <p class="contacts__info">{{ item.info.phone }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { USE_STRAPI } from "~/url";

export default {
  data() {
    return {
      arrCrumbs: [
        {
          name: "Контактные данные сотрудников ВВКИФПУ",
          path: "/students/contacts",
        },
      ],
      ArrayContacts: [
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
        {
          name: "...",
          post: "...",
          discipline: "...",
          info: {
            mail: "",
            vk: "",
            phone: "",
          },
        },
      ],
    };
  },
  computed: {
    getArray() {
      return this.ArrayContacts;
    },
  },
  methods: {
    async initApp() {
      try {
        const {
          data: {
            data: [response],
          },
        } = await axios.get(USE_STRAPI + `contact-staffs`);
        this.ArrayContacts = response.attributes.staff;
      } catch (e) {}
    },
  },
  mounted() {
    this.initApp();
  },
};
</script>

<style scoped>
.info {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.info__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.info__title {
  margin-top: 30px;
}
.info__table {
  margin-top: 40px;
}
.contacts__info {
  font-size: 18px;
  font-family: "Inter", sans-serif;
}
.contacts__block {
  border-bottom: 1px solid var(--violo);
  padding: 10px 0;
  display: none;
}
.info__pos {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  padding: 20px 0px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
.info__element {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding: 15px 20px;
  color: #000;
  text-align: center;
  border: solid 1px #000;
}
.info__description {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
}
.info__description_special {
  font-family: "Inter", sans-serif;
  color: #6700eb;
  font-weight: 700;
}
.info__table {
  border-collapse: collapse;
  max-width: 1600px;
}
.info__thead {
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
@media (max-width: 990px) {
  .info {
    padding-top: 150px;
  }
}
@media (max-width: 1200px) {
  .info__table {
    display: none;
  }
  .contacts__block {
    display: block;
  }
}
</style>
