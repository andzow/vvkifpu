<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs :arrCrumbs="arrCrumbs" v-if="arrCrumbs" />
      </div>
      <div class="main__content">
        <div class="main__information">
          <div class="main__title">
            <UIViTitle :settings="true" class="main__header"
              >Требования прокуратуры</UIViTitle
            >
          </div>
        </div>
        <div class="main__image">
          <img src="@/assets/images/procuratura.webp" />
        </div>
        <div class="main__menu">
          <div class="main__item" v-for="item in arrProcuratura" :key="item">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
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
      arrCrumbs: [
        {
          name: "Требования прокуратуры",
          path: "/procuratura",
        },
      ],
      arrProcuratura: [
        {
          name: "Прокуратура разъясняет -Уничтожение и повреждение объектов культурного наследия- (прокуратура Ленинского района г. Кирова)",
          href: "../Files/1.pdf",
        },
        {
          name: "Прокуратура разъясняет -Объекты культурного наследия- (прокуратура Ленинского района г. Кирова)",
          href: "../Files/2.pdf",
        },
        {
          name: `Прокуратура разъясняет -Уничтожение либо повреждение воинских захоронений, памятников, стел, обелисков и 
          других мемориальных сооружений- (прокуратура Ленинского района г. Кирова)`,
          href: "../Files/3.pdf",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.main__container {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__breadcrumbs {
  margin-bottom: 30px;
}
.main__information {
  margin-bottom: 50px;
}
.main__image {
  max-width: 300px;
  margin-bottom: 40px;
}
.main__image {
  width: 100%;
}
.main__item {
  margin-bottom: 20px;
  max-width: 900px;
}
.main__item a {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  text-decoration: underline;
}
</style>
