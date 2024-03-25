<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Дополнительные информационные ресурсы</UIViTitle
      >
      <div class="main__content">
        <div class="main__item" v-for="item in arrMain" :key="item">
          <p class="main__name">{{ item.name }}</p>
          <div class="main__btns">
            <div class="main__button" v-for="el in item.arrBtn" :key="el">
              <a :href="el.href" target="_blank"
                ><button class="main__href">{{ el.name }}</button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrMain: [
        {
          name: "40.02.02 Правоохранительная деятельность",
          arrBtn: [
            {
              name: "Официальный сайт Гарант",
              href: "https://www.garant.ru/",
            },
            {
              name: "Официальный сайт Консультант +",
              href: "https://www.consultant.ru/",
            },
          ],
        },
        {
          name: "09.02.04 Информационные системы (По отраслям)",
          arrBtn: [
            {
              name: "Сайт Метанит",
              href: "https://metanit.com/",
            },
            {
              name: "Официальный сайт Microsoft",
              href: "https://learn.microsoft.com/ru-ru/dotnet/csharp/",
            },
            {
              name: "Консультант +",
              href: "https://www.consultant.ru/",
            },
          ],
        },
        {
          name: "09.02.04 Информационные системы и программирование",
          arrBtn: [
            {
              name: "Сайт Метанит",
              href: "https://metanit.com/",
            },
            {
              name: "Официальный сайт Microsoft",
              href: "https://learn.microsoft.com/ru-ru/dotnet/csharp/",
            },
            {
              name: "Консультант +",
              href: "https://www.consultant.ru/",
            },
          ],
        },
        {
          name: "43.02.10 Туризм",
          arrBtn: [
            {
              name: "Официальный сайт Юрайт",
              href: "https://urait.ru/",
            },
            {
              name: "Министерство экономического развития Российской Федерации+",
              href: "https://www.economy.gov.ru/",
            },
            {
              name: "Консультант +",
              href: "https://www.consultant.ru/",
            },
          ],
        },
        {
          name: "38.02.04 Коммерция (по отраслям)",
          arrBtn: [
            {
              name: "Официальный сайт Гарант",
              href: "https://www.garant.ru/",
            },
            {
              name: "Официальный сайт Консультант +",
              href: "https://www.consultant.ru/",
            },
          ],
        },
        {
          name: "43.02.03 Стилистика и исскуство визажа",
          arrBtn: [
            {
              name: "Сайт Метанит",
              href: "https://metanit.com/",
            },
            {
              name: "Официальный сайт Microsoft",
              href: "https://learn.microsoft.com/ru-ru/dotnet/csharp/",
            },
            {
              name: "Официальный сайт Консультант +",
              href: "https://www.consultant.ru/",
            },
          ],
        },
        {
          name: "43.02.17 Технологии индустрии красоты",
          arrBtn: [
            {
              name: "Официальный сайт Консультант +",
              href: "https://www.consultant.ru/",
            },
            {
              name: "Подборка стиля — Jessica Cheetham",
              href: "https://the-glitter-collective.pixpa.com/home",
            },
            {
              name: "Поисковая система Дзен +",
              href: "https://dzen.ru/",
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
  margin-bottom: 80px;
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
  max-width: 1200px;
}
.main__content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 15px;
}
.main__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 15px 40px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.main__name {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: black;
}
.main__btns {
  display: flex;
  align-items: center;
}
.main__button {
  margin-right: 20px;
}
.main__href {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: black;
  background: none;
  border: 1px solid #542fe6;
  padding: 15px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.main__href:hover {
  color: white;
  background: #542fe6;
}
</style>
