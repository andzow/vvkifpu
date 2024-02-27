<template>
  <section class="basics">
    <div class="basics__container">
      <div class="basics__menu">
        <UISpecialityViBasicsItem />
      </div>
      <div class="basics__content">
        <UISpecialityViAbout :arrAbout="arrAbout" />
        <UISpecialityViLearn :arrLearn="arrLearn" />
        <UISpecialityVIFeatures :arrFeatures="arrFeatures" />
        <UISpecialityViFiles :arrFiles="arrFiles" />
        <UISpecialityViSert :arrSert="arrSert" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      arrAbout: [
        "Основы алгоритмизации и программирования",
        "Основы проектирования баз данных",
        "Технология разработки программного обеспечения",
        "Разработка и эксплуатация удаленных баз данных",
        "Информационные системы на базе Интернет –технологий",
        "Разработка кода информационных систем",
        "Технические средства информатизации",
        "Интеллектуальные системы и технологии",
        "и прочие",
      ],
      arrLearn: [
        "Разрабатывать программное обеспечение на Delphi, C++, JAVA, PHP и других языках",
        "Эксплуатировать и сопровождать информационные системы и сервисы",
        "Устанавливать и настраивать аппаратное обеспечение для информационных и автоматизированных систем",
        "Выполнять монтаж и настройку компьютерных сетей",
        "Управлять корпоративной сетью предприятия (организации)",
        "Ставить и решать прикладные задачи, используя современные информационно-коммуникационные технологии",
        "Помогать заказчику в оценке и выборе вариантов программного обеспечения",
        "Работать с современным программным обеспечением, выполнять его настройку, тестирование, администрирование",
      ],
      arrFeatures: [
        {
          name: "Особеннсть учебного процесса в колледже",
          des: `Особенностью организации учебного процесса в колледже является его практикоориентированная направленность. Большинство занятий посвящено
          практическому изучению современных автоматизированных систем, систем управления базами данных, автоматизированных систем бухгалтерского учета;
          веб-программированию, программного обеспечения для создания и сопровождения интерактивных веб-сайтов.
           <br><br>В колледже имеются компьютерные классы, оснащенные современными персональными компьютерами на базе многоядерных микропроцессоров и программным
            обеспечением ведущих производителей (Microsoft, Adobe Systems, 1C, Лаборатория Касперского и пр.).`,
        },
        {
          name: "Что дает наш колледж?",
          des: `ВВКИФПУ обеспечивает всех студентов базами практики, которая проводится на предприятиях различных форм
          собственности города Кирова.<br><br>Образовательное учреждение поддерживает тесные деловые отношения с крупными организациями города.
          В ходе такого сотрудничества организуются встречи, на которых обсуждаются вопросы организации прохождения практики студентов и перспективы
          трудоустройства выпускников.<br><br>`,
        },
      ],
      arrFiles: [
        {
          name: "Образовательная программа",
          imageSrc: "../assets/images/Speciality/word.svg",
        },
        {
          name: "Учебный план",
          imageSrc: "../assets/images/Speciality/xml.svg",
        },
        {
          name: "Рабочая программа",
          imageSrc: "../assets/images/Speciality/jav.svg",
        },
      ],
      arrSert: [
        {
          imageSrc: "./assets/images/Speciality/doc1.png",
          imageOpen: "../assets/images/Speciality/doc1.png",
        },
        {
          imageSrc: "./assets/images/Speciality/doc2.png",
          imageOpen: "../assets/images/Speciality/doc2.png",
        },
        {
          imageSrc: "./assets/images/Speciality/doc3.png",
          imageOpen: "../assets/images/Speciality/doc3.png",
        },
      ],
    };
  },
  mounted() {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".basics__container", {
    //   scrollTrigger: {
    //     trigger: ".basics__container",
    //     markers: true,
    //     start: "top 30%",
    //     end: "bottom 60%",
    //     onEnter: () => {
    //       // this.settingsObject = {
    //       //   top: "200px",
    //       //   isActive: true,
    //       // };
    //       console.log("вошел");
    //     },
    //     onLeave: () => {
    //       // this.settingsObject = {
    //       //   top: "200px",
    //       //   isActive: false,
    //       // };
    //       console.log("вышел");
    //     },
    //   },
    // });
  },
};
</script>

<style scoped>
.basics {
  width: 100vw;
  background-image: linear-gradient(
    to right,
    #8001bc 0%,
    #6700eb 30%,
    #00eace 100%
  );
  padding: 60px 0 30px 0;
}
.basics__container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-left: 80px;
}
.basics__content {
  position: relative;
  width: 100%;
}
.basics__menu {
  position: relative;
  display: grid;
}
</style>
