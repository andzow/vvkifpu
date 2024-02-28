<template>
  <div class="app">
    <UISpecialityViMain
      :specialityTitle="specialityTitle"
      :arrDes="arrDes"
      :arrProffesions="arrProffesions"
      :imageSrc="imageSrc"
      :backImage="backImage"
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
    <UIViFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      specialityTitle: `43.02.17<br />
      Технологии индустрии красоты`,
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
      imageSrc: "../assets/images/Speciality/makeup.svg",
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
