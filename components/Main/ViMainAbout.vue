<template>
  <div class="main__about">
    <h1 class="main__title">
      Думать. Делать.<br />
      Действовать
    </h1>
    <div class="main__des">
      <p class="main__link">Полезные ссылки:</p>
      <div class="main__information">
        <p class="main__text">Платные образовательные услуги</p>
        <p class="main__text">Виды материальной поддержки</p>
        <p class="main__text">Документы</p>
        <p class="main__text">Дополнительные информационные ресурсы</p>
      </div>
    </div>
    <UISpecialityViButton>Оставить заявку</UISpecialityViButton>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main__title {
  font-size: 68px;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: white;
  margin-bottom: 40px;
}
.main__information {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main__link {
  font-family: "inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: white;
  margin-bottom: 20px;
}
.main__text {
  position: relative;
  font-family: "inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  color: #b9b9b9;
  transition: all 0.3s ease;
  cursor: pointer;
}
.main__text:last-child {
  margin-bottom: 50px;
}
.main__text::before {
  content: "";
  position: absolute;
  left: 0.5%;
  bottom: -50%;
  width: 30%;
  border-radius: 20px;
  border: 1px solid #b9b9b9;
  transition: all 0.3s ease;
}
.main__text:hover::before {
  width: 100%;
  color: white;
}
.main__text:hover {
  color: white;
}
</style>
