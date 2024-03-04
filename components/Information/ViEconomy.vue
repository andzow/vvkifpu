<template>
  <section class="economy">
    <div class="economy__container">
        <UIViBreadcrumbs />
        <UIViTitle class="economy__title" :settings="true">План финансово-хозяйственной деятельности ПОУ «ВВКИФПУ» на 2019-2020 учебный год</UIViTitle>
        <p class="economy__text">Полный отчет о финансово-хозяйственной деятельности колледжа отражен на сайте министерства юстиции Кировской области.</p>
        <img class="economy__img" src="~/assets/images/Information/document.webp" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.economy {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.economy__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.economy__title {
  margin-top: 30px;
}
.economy__text {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 20px;
    margin-top: 40px;
}
.economy__img {
    margin-top: 20px;
    max-width: 500px;
}
</style>