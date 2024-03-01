<template>
  <section class="digital">
    <div class="digital__container">
        <UIViBreadcrumbs />
        <UIViTitle class="digital__title" :settings="true">Электронная библиотека</UIViTitle>
        <p class="digital__text digital__text_info"><span class="digital__text_special">Уважаемые студенты,</span> колледж предоставляет доступ к электронной библиотечной системе Юрайт.</p>
        <p class="digital__text">Для регистрации в библиотечной системе вам потребуется следовать инструкциям.</p>
        <p class="digital__text_name">Инструкции для регистрации в системе</p>
        <div class="digital__position digital__position_special">
            <div class="digital__circle"></div>
            <a class="digital__description" href="../assets/downloads/Информация для преподавателей.pdf">Информация для преподавателей</a>
        </div>
        <div class="digital__position">
            <div class="digital__circle"></div>
            <a class="digital__description" href="../assets/downloads/Информация для студентов.pdf">Информация для студентов</a>
        </div>
        <div class="digital__position">
            <div class="digital__circle"></div>
            <a class="digital__description" href="../assets/downloads/Инструкция о регистрации.pdf">Инструкция о регистрации</a>
        </div>
        <p class="digital__text digital__text_info"><span class="digital__text_special">ВАЖНО</span> при регистрации указывать свои настоящие данные! Несуществующие студенты будут удалены из ЭБС.</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.digital {
  width: 100vw;
  padding-top: 230px;
  margin-bottom: 65px;
}
.digital__container {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
}
.digital__title {
  margin-top: 30px;
}
.digital__text {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    max-width: 1200px;
}
.digital__text_info {
    margin-top: 20px;
}
.digital__text_special {
    font-family: "Inter", sans-serif;
    color: #6700eb;
    font-weight: 700;
}
.digital__text_name {
    font-weight: 700;
    font-family: "Inter", sans-serif;
    font-size: 34px;
    text-transform: uppercase;
    margin-top: 40px;
    color: black;
}
.digital__position {
  display: flex;
  align-items: center;
}
.digital__position:not(:last-child) {
  margin-bottom: 7px;
}
.digital__circle {
  width: 7px;
  height: 7px;
  background: var(--violo);
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
}
.digital__description {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    cursor: pointer;
    transition: all .3s ease;
}
.digital__description:hover {
    color: #6700eb;
}
.digital__position_special {
    margin-top: 15px;
}
</style>