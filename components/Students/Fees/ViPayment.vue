<template>
  <section class="payment">
    <div class="payment__container">
      <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      <UIViTitle class="payment__title" :settings="true"
        >Оплата обучения</UIViTitle
      >
      <div class="payment__back">
        <p class="payment__description font" data-font-actual="22">
          Стоимость обучения в {{ textSpan }} учебном году:
        </p>
      </div>
      <div class="payment__grid" v-if="ArrayInfo">
        <div
          class="payment__item"
          v-for="(item, idx) in getArray"
          :key="idx"
          :class="{ loadingActive: item.attributes?.loading }"
        >
          <div class="payment__head" v-if="!item.attributes?.loading">
            <p class="payment__code font" data-font-actual="18">
              {{ item.attributes.specCode }}
            </p>
            <p class="payment__name font" data-font-actual="18">
              {{ item.attributes.title }}
            </p>
          </div>
          <div class="payment__footer" v-if="!item.attributes?.loading">
            <div class="payment__term">
              <p class="payment__price font" data-font-actual="18">
                {{ item.attributes.info.info[0].price }} руб
              </p>
              <p class="payment__line font" data-font-actual="18">-</p>
              <p class="payment__price font" data-font-actual="18">
                {{ item.attributes.info.info[0].term1 }} сем.
              </p>
            </div>
            <div class="payment__border font" data-font-actual="18">|</div>
            <div class="payment__term">
              <p class="payment__price font" data-font-actual="18">
                {{ item.attributes.info.info[0].price }} руб
              </p>
              <p class="payment__line font" data-font-actual="18">-</p>
              <p class="payment__price font" data-font-actual="18">
                {{ item.attributes.info.info[0].term1 }} сем.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { USE_STRAPI } from "~/url";
import axios from "axios";

export default {
  data() {
    return {
      textSpan: "2024 - 2025",
      arrCrumbs: [
        {
          name: "Оплата обучения",
          path: "/students/payment",
        },
      ],
      ArrayInfo: [
        {
          attributes: {
            loading: true,
          },
        },
        {
          attributes: {
            loading: true,
          },
        },
        {
          attributes: {
            loading: true,
          },
        },
        {
          attributes: {
            loading: true,
          },
        },
        {
          attributes: {
            loading: true,
          },
        },
      ],
    };
  },
  computed: {
    getArray() {
      return this.ArrayInfo;
    },
  },
  methods: {
    async initApp() {
      try {
        const { data } = await axios.get(USE_STRAPI + "oplata-obucheniyas");
        this.ArrayInfo = data.data;
      } catch {}
    },
  },
  mounted() {
    this.initApp();
  },
};
</script>

<style scoped>
.payment {
  width: 100vw;
  padding-top: 230px;
}
.payment__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.payment__title {
  margin-top: 30px;
}
.payment__back {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.payment__description {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 22px;
  margin-top: 30px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
}
.payment__grid {
  display: grid;

  margin-top: 40px;
  row-gap: 15px;
  max-width: 1600px;
}
.payment__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 30px;
  transition: all 0.3s ease;
}
.loadingActive {
  height: 83px;
  background: linear-gradient(to right, #f3f3f3 50%, #ddd 50%);
  background-size: 200% 100%;
  animation: slide 1.3s infinite;
  border: none;
  transition: all 0.3s ease;
}
.loadingActive:hover {
  background: none !important;
  color: initial;
}

@keyframes slide {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 200%;
  }
}
/* .payment__item:hover {
  background: var(--violo);
  color: #fff;
} */
.payment__head {
  display: flex;
  align-items: center;
}
.payment__footer {
  display: flex;
  align-items: center;
}
.payment__term {
  display: flex;
  align-items: center;
}
.payment__code {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-right: 10px;
}
.payment__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
}
.payment__price {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  white-space: nowrap;
}
.payment__line {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin: 0 10px;
}
.payment__border {
  color: var(--violo);
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin: 0 40px;
}
@media (max-width: 990px) {
  .payment {
    padding-top: 150px;
  }
  .payment__grid {
    max-width: 700px;
  }
  .payment__item {
    flex-direction: column;
  }
  .payment__head {
    flex-direction: column;
  }
  .payment__code {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .payment__name {
    margin-bottom: 10px;
  }
}
@media (max-width: 580px) {
  .payment__footer {
    flex-direction: column;
  }
  .payment__name {
    text-align: center;
    color: var(--violo);
  }
  .payment__border {
    display: none;
  }
  .payment__term:nth-child(1) {
    margin-bottom: 10px;
  }
}
</style>
