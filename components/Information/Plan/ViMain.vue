<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Учебные планы и Основные профессиональные образовательные программы
      </UIViTitle>
      <div class="main__menu" v-for="item in arrCopies" :key="item">
        <h2 class="main__title">{{ item.name }}</h2>
        <div class="main__content">
          <div
            clas="main__href"
            :href="list.href"
            target="_blank"
            v-for="list in item.arrDocs"
            :key="list"
          >
            <a
              ><div class="main__item">
                <div class="main__link">{{ list.name }}</div>
              </div></a
            >
          </div>
        </div>
        <div class="main__des">{{ item.des }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrCopies: [
        {
          name: "40.02.02 ПРАВООХРАНИТЕЛЬНАЯ ДЕЯТЕЛЬНОСТЬ",
          arrDocs: [
            {
              name: "2020 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2021 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2022 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2023 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Основная профессиональная образовательная программы",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "09.02.04 ИНФОРМАЦИОННЫЕ СИСТЕМЫ (ПО ОТРАСЛЯМ)",
          arrDocs: [
            {
              name: "2020 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Основная профессиональная образовательная программы",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "09.02.07 ИНФОРМАЦИОННЫЕ СИСТЕМЫ И ПРОГРАММИРОВАНИЕ",
          arrDocs: [
            {
              name: "2021 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "Приказ о проведении самообследования",
            },
            {
              name: "2022 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "Отчет о результатах самообследования",
            },
            {
              name: "2023 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "Отчет о результатах самообследования",
            },
            {
              name: "Основная профессиональная образовательная программы",
              href: "Отчет о результатах самообследования",
            },
          ],
        },
        {
          name: "43.02.10 ТУРИЗМ",
          arrDocs: [
            {
              name: "2021 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2022 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2023 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Основная профессиональная образовательная программы",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "38.02.04 КОММЕРЦИЯ(ПО ОТРАСЛЯМ)",
          arrDocs: [
            {
              name: "2021 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2022 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2023 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Основная профессиональная образовательная программы",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "43.02.03 СТИЛИСТИКА И ИСКУССТВО ВИЗАЖА",
          arrDocs: [
            {
              name: "2020 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2021 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "2022 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Основная профессиональная образовательная программы",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "43.02.17 ТЕХНОЛОГИИ ИНДУСТРИИ КРАСОТЫ",
          arrDocs: [
            {
              name: "2023 год. Учебный план, график учебного процесса, пояснительная записка.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Основная профессиональная образовательная программы",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  padding-top: 230px;
}
.main__container {
  max-width: 1600px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__breadcrumbs {
  margin-bottom: 30px;
}
.main__header {
  margin-bottom: 50px;
  max-width: 1400px;
}
.main__menu {
  margin-bottom: 80px;
}
.main__title {
  font-weight: 700;
  font-family: "Inter", sans-serif;
  font-size: 34px;
  margin-bottom: 30px;
  max-width: 900px;
  color: black;
}
.main__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.main__link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 18px 30px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  height: 80px;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
}
.main__link:hover {
  color: white;
  background: var(--violo);
}
.main__des {
  margin-top: 40px;
  font-family: "Inter", sans-serif;
  max-width: 700px;
  line-height: 14 0%;
  font-weight: 500;
  font-size: 16px;
  color: black;
}
</style>
