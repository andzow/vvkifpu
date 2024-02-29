<template>
  <div class="app">
    <UISpecialityViMain
      :specialityTitle="specialityTitle"
      :arrDes="arrDes"
      :arrProffesions="arrProffesions"
      :imageSrc="imageSrc"
      :backImage="backImage"
      breadcrumbs="43.02.02 Парикмахерское искусство"
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
      specialityTitle: `43.02.02 <br />
      Парикмахерское искусство`,
      arrDes: [
        {
          name: "Начало обучения",
          arrDes: ["01 сен 2024"],
        },
        {
          name: "Продолжительность",
          arrDes: ["2 г 10 мес (база 9 кл)", "1 г 10 мес (база 11 кл)"],
        },
      ],
      backImage: "../assets/images/Speciality/hairdressing-back.webp",
      arrProffesions: [
        "профессиональный парикмахер",
        "профессиональный стилист",
      ],
      imageSrc: "../assets/images/Speciality/hairdressing.svg",
      arrAbout: [
        "Пластическая анатомия человека",
        "Санитария и гигиена парикмахерских услуг",
        "Основы анатомии и физиологии кожи и волос",
        "Пластическая анатомия",
        "Основы декоративной косметики",
        "Основы декоративной косметики",
        "и прочие.",
      ],
      arrLearn: [
        "Организовывать подготовительные работы по обслуживанию заказчика",
        "Анализировать индивидуальные пластические особенности потребителя",
        "Разрабатывать форму прически с учетом индивидуальных особенностей",
        "Анализировать состояние кожи головы и волос",
        "Проводить санитарно-эпидемиологическую обработку контактной зоны при выполнении парикмахерских услуг",
        "Внедрять новые технологии и тенденции моды",
        "Выполнять прически различного назначения",
        "Организовывать заключительные работы по обслуживанию заказчика",
      ],
      arrFeatures: [
        {
          name: "Особеннсть учебного процесса в колледже",
          des: `Учебный процесс обеспечивают высококвалифицированный преподавательский состав со значительным опытом работы. Обучение студентов происходит
          непосредственно в самой лаборатории, где студенты сразу могут применить теоретические знания на практике.`,
        },
        {
          name: "Что дает наш колледж?",
          des: `ВВКИФПУ обеспечивает всех студентов базами практики, которая проводится на предприятиях различных форм
                    собственности города Кирова.<br><br>Образовательное учреждение поддерживает тесные деловые отношения с крупными организациями города.
                    В ходе такого сотрудничества организуются встречи, на которых обсуждаются вопросы организации прохождения практики студентов и перспективы
                    трудоустройства выпускников.<br><br>`,
        },
        {
          name: "Квалификация по диплому",
          des: `По окончании обучения выпускнику присваивается квалификация: «Технолог»`,
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
