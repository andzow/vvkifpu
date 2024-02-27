<template>
  <div class="app">
    <UISpecialityViMain
      :specialityTitle="specialityTitle"
      :arrDes="arrDes"
      :arrProffesions="arrProffesions"
      :imageSrc="imageSrc"
      :backImage="backImage"
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
      specialityTitle: `43.02.10 <br />
      ТУРИЗМ`,
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
      backImage: "../assets/images/Speciality/tourism-back.webp",
      arrProffesions: [
        "специалист по туристским услугам",
        "менеджер по экскурсионной работе",
        "менеджер по внутреннему туризму",
        "менеджер визового отдела",
        "старший менеджер",
        "аниматор и др",
      ],
      imageSrc: "../assets/images/Speciality/tourism.svg",
      arrAbout: [
        "Информационно-коммуникационные технологии в профессиональной деятельности",
        "География туризма",
        "Организация туристской индустрии",
        "Иностранный язык в сфере профессиональной коммуникации",
        "Технология и организация турагентской деятельности",
        "Организация досуга туристов",
        "и прочие.",
      ],
      arrLearn: [
        "Предоставлять турагентские услуги",
        "Предоставлять услуги по сопровождению туристов",
        "Обеспечивать соблюдение законодательства субъектами права",
        "Управлять функциональным подразделением организации",
        "Предоставление туроператорских услуг и прочее",
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
};
</script>

<style scoped>
.app {
  overflow-x: hidden;
}
</style>
