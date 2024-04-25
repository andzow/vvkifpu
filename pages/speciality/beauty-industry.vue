<template>
  <div class="app">
    <UISpecialityViMain
      :specialityTitle="specialityTitle"
      :arrDes="arrDes"
      :arrProffesions="arrProffesions"
      :imageSrc="imageSrc"
      :backImage="backImage"
      :arrCrumbs="arrCrumbs"
      breadcrumbs="43.02.17 Технологии индустрии красоты"
    />
    <UISpecialityViBasics
      :arrAbout="arrAbout"
      :arrLearn="arrLearn"
      :arrFeatures="arrFeatures"
      :arrFiles="arrFiles"
      :arrSert="arrSert"
    />
    <MainViApplication />
  </div>
</template>

<script>
export default {
  data() {
    return {
      specialityTitle: `43.02.17<br />
      Технологии индустрии красоты`,
      arrCrumbs: [
        {
          name: "43.02.17 Технологии индустрии красоты",
          path: "/speciality/beauty-industry",
        },
      ],
      arrDes: [
        {
          name: "Начало обучения",
          arrDes: ["01 сен 2024"],
        },
        {
          name: "Продолжительность",
          arrDes: ["3 г 10 мес (база 9 кл)", "2 г 10 мес (база 11 кл)"],
        },
      ],
      backImage: "../assets/images/Speciality/makeup-back.webp",
      arrProffesions: ["профессиональный визажист", "профессиональный стилист"],
      imageSrc: `<svg class="image_opacity" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="path" d="M57 14L64.0224 32.9776L83 40L64.0224 47.0224L57 66L49.9776 47.0224L31 40L49.9776 32.9776L57 14Z" fill="white"/>
<path class="path" d="M31 59L34.7813 69.2187L45 73L34.7813 76.7813L31 87L27.2187 76.7813L17 73L27.2187 69.2187L31 59Z" fill="white"/>
</svg>
`,
      arrAbout: [
        "Пластическая анатомия человека",
        "Коррекция и окрашивание бровей и ресниц",
        "Выполнение салонного и специфического макияжа",
        "Выполнение фейс-арта, боди-арта",
        "Создание индивидуального стиля заказчика в соответствии с запросами, историческими стилями и тенденциями моды",
        "Выполнение работ по профессиям маникюрша, педикюрша, гример-пастижер",
        "и прочие.",
      ],
      arrLearn: [
        "Организовывать подготовительные работы по обслуживанию заказчика",
        "Выполнять коррекцию и окрашивание бровей",
        "Выполнять специфический макияж",
        "Выполнять грим для кино, театра и подиума",
        "Оказывать консультационные услуги по выполнению макияжа в домашних условиях",
        "Обеспечивать эффективное взаимодействие специалистов с целью создания образа",
        "Выполнять рисунки в технике фейс-арт и боди-арт",
        "Организовывать заключительные работы по обслуживанию заказчика",
      ],
      arrFeatures: [
        {
          name: "Особеннсть учебного процесса в колледже",
          des: `Учебный процесс обеспечивают высококвалифицированный преподавательский состав со значительным опытом работы. 
          Обучение студентов происходит непосредственно в самой лаборатории, где студенты сразу могут применить теоретические знания на практике.`,
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
};
</script>

<style scoped>
.app {
  overflow-x: hidden;
}
</style>
