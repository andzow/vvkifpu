<template>
  <section class="door">
    <div class="door__container">
      <div class="door__position">
        <h1 class="door__name">День открытых дверей</h1>
        <p class="door__text">30 марта 2024 </p>
        <p class="door__date">Осталось: 24д 12ч 10м</p>
      </div>
      <div class="door__position">
        <div class="door__map">      
          <iframe class="door__frame" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3680bbe87b8f8d4e18aa9b5e7e7a0fc04493ff0fe533a4d0009d44a98fb2642a&amp;source=constructor" frameborder="0"></iframe>
          <div class="door__background"></div>
        </div>
      </div>
    </div>
    <MainViBackground/>
  </section>
</template>

<script>


</script>

<style scoped>
.door {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/UI/background.webp");
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.door__container {
  display: flex;
  align-items: center;
}
.door__name {
  font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 56px;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
}
.door__text {
  font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
}
.door__date {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: var(--violo);
  text-align: center;
}
.door__frame {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  transition: all .3s ease-in-out;
}
.door__frame:hover {
  transform: translate(-10px, -10px);
}
.door__position {
  position: relative;
  z-index: 5;
}
.door__map {
  position: relative;
  width: 650px;
  height: 480px;
  margin-left: 40px;
}
.door__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--violo);
  z-index: 4;
}
</style>
