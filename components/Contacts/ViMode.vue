<template>
  <section class="mode">
    <div class="mode__container">
      <UIViTitle class="mode__title" :settings="true"
        >Режим работы ВВКИФПУ:</UIViTitle
      >
      <div class="mode__position" v-for="(item, idx) in ArrayMode" :key="idx">
        <div class="mode__circle font" data-font-actual="18">
          {{ item.name }}
        </div>
        <p class="mode__text font" data-font-actual="20">{{ item.time }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ArrayMode: [
        {
          name: "Пн",
          time: "с 8:00 до 19:00",
        },
        {
          name: "Вт",
          time: "с 8:00 до 19:00",
        },
        {
          name: "Ср",
          time: "с 8:00 до 19:00",
        },
        {
          name: "Чт",
          time: "с 8:00 до 19:00",
        },
        {
          name: "Пт",
          time: "с 8:00 до 19:00",
        },
        {
          name: "Сб",
          time: "с 8:00 до 17:00.",
        },
        {
          name: "Вс",
          time: "Выходной",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mode {
  width: 100vw;
  margin-bottom: 65px;
}
.mode__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.mode__title {
  margin-top: 30px;
  margin-bottom: 30px;
}
.mode__position {
  display: flex;
  align-items: center;
}
.mode__position:not(:last-child) {
  margin-bottom: 10px;
}
.mode__circle {
  width: 55px;
  height: 55px;
  background: var(--violo);
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Inter", sans-serif;
}
.mode__text {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-left: 5px;
}
</style>
