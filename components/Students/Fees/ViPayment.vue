<template>
  <section class="payment">
    <div class="payment__container">
      <UIViBreadcrumbs />
      <UIViTitle class="payment__title" :settings="true"
        >Оплата обучения</UIViTitle
      >
      <div class="payment__back">
        <p class="payment__description font" data-font-actual="22">
          Стоимость обучения в 2024-2025 учебном году:
        </p>
      </div>
      <div class="payment__grid">
        <div class="payment__item" v-for="(item, idx) in ArrauInfo" :key="idx">
          <div class="payment__head">
            <p class="payment__code font" data-font-actual="18">
              {{ item.code }}
            </p>
            <p class="payment__name font" data-font-actual="18">
              {{ item.name }}
            </p>
          </div>
          <div class="payment__footer">
            <div class="payment__term">
              <p class="payment__price font" data-font-actual="18">
                {{ item.info[0].price }} руб
              </p>
              <p class="payment__line font" data-font-actual="18">-</p>
              <p class="payment__price font" data-font-actual="18">
                {{ item.info[0].term1 }} сем.
              </p>
            </div>
            <div class="payment__border font" data-font-actual="18">|</div>
            <div class="payment__term">
              <p class="payment__price font" data-font-actual="18">
                {{ item.info[1].price }} руб
              </p>
              <p class="payment__line font" data-font-actual="18">-</p>
              <p class="payment__price font" data-font-actual="18">
                {{ item.info[1].term1 }} сем.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ArrauInfo: [
        {
          code: "09.02.07",
          name: "Информационные системы и программирование",
          info: [
            {
              term1: "1",
              price: "22 000",
            },
            {
              term1: "2",
              price: "22 000",
            },
          ],
        },
        {
          code: "40.02.02",
          name: "Правоохранительная деятельность",
          info: [
            {
              term1: "1",
              price: "22 000",
            },
            {
              term1: "2",
              price: "22 000",
            },
          ],
        },
        {
          code: "43.02.10",
          name: "Туризм",
          info: [
            {
              term1: "1",
              price: "20 000",
            },
            {
              term1: "2",
              price: "20 000",
            },
          ],
        },
        {
          code: "38.02.04",
          name: "Коммерция (по отраслям)",
          info: [
            {
              term1: "1",
              price: "20 000",
            },
            {
              term1: "2",
              price: "20 000",
            },
          ],
        },
        {
          code: "43.02.17",
          name: "Технологии индустрии красоты",
          info: [
            {
              term1: "1",
              price: "20 000",
            },
            {
              term1: "2",
              price: "20 000",
            },
          ],
        },
        {
          code: "43.02.02",
          name: "Парикмахерское искусство",
          info: [
            {
              term1: "1",
              price: "20 000",
            },
            {
              term1: "2",
              price: "20 000",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.payment {
  width: 100vw;
  padding-top: 230px;
}
.payment__container {
  max-width: 1600px;
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
  cursor: pointer;
  transition: all 0.3s ease;
}
.payment__item:hover {
  background: var(--violo);
  color: #fff;
}
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
</style>
