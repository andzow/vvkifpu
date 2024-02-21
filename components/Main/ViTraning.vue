<template>
  <section class="traning">
    <div class="traning__container">
      <div class="traning__grid">
        <MainViTraningCard
          v-for="(item, idx) in ArrayCard"
          :key="idx"
          :card="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ArrayCard: [
        {
          id: 0,
          name: "Информационные системы",
          code: "09.02.04",
          image: "../assets/images/Main/code.webp",
          icon: "<svg width='30' height='50' viewBox='0 0 40 60' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M40 3.92199e-05L1.90869e-06 23.094L40 46.1881L40 3.92199e-05ZM18.5359 29.177L3.5359 55.1577L10.4641 59.1577L25.4641 33.177L18.5359 29.177Z' fill='white'/> </svg>",
        },
        {
          id: 1,
          name: "Информационные системы",
          code: "09.02.04",
          image: "../assets/images/Main/code.webp",
        },
        {
          id: 2,
          name: "Информационные системы",
          code: "09.02.04",
          image: "../assets/images/Main/code.webp",
        },
        {
          id: 3,
          name: "Информационные системы",
          code: "09.02.04",
          image: "../assets/images/Main/code.webp",
        },
        {
          id: 4,
          name: "Информационные системы",
          code: "09.02.04",
          image: "../assets/images/Main/code.webp",
        },
        {
          id: 5,
          name: "Информационные системы",
          code: "09.02.04",
          image: "../assets/images/Main/code.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.traning {
  padding-top: 60px;
  padding-bottom: 60px;
}
.traning__container {
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
}
.traning__grid {
  width: 100%;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
}
</style>
