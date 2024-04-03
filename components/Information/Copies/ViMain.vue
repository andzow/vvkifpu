<template>
  <section class="main">
    <div class="main__container">
      <div class="main__breadcrumbs">
        <UIViBreadcrumbs />
      </div>
      <UIViTitle :settings="true" class="main__header"
        >Копии документов</UIViTitle
      >
      <div class="main__menu" v-for="item in arrCopies" :key="item">
        <h2 class="main__title font" data-font-actual="34">{{ item.name }}</h2>
        <div class="main__content">
          <div
            clas="main__href"
            :href="list.href"
            target="_blank"
            v-for="list in item.arrDocs"
            :key="list"
          >
            <a class="main__log">
              <div class="main__item">
                <div class="main__link font" data-font-actual="18">
                  {{ list.name }}
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="main__des font" data-font-actual="18">{{ item.des }}</div>
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
          name: "Нормативные документы",
          arrDocs: [
            {
              name: "Устав ПОУ «ВВКИФПУ»",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Лицензия на осуществление образовательной деятельности №1306 от 08.06.2016",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приложение №1 к лицензии на осуществление образовательной деятельности №1306 от 08.06.2016 (сторона 1)",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приложение №1 к лицензии на осуществление образовательной деятельности №1306 от 08.06.2016 (сторона 2)",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Свидетельство о государственной аккредитации №1686 от 30.05.2018",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приложение №1 к свидетельству о государственной аккредитации №1686 от 30.05.2018",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Паспорт безопасности (титульный лист)",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "Локальные и нормативные акты ПОУ «ВВКИФПУ»",
          arrDocs: [
            {
              name: "Приказ об утверждении должностных инструкций и локальных актов ПОУ «ВВКИФПУ»",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приказ о запрете использования персональных устройств",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "Отчет о результатах самообследования",
          arrDocs: [
            {
              name: "Устав ПОУ «ВВКИФПУ»",
              href: "Приказ о проведении самообследования",
            },
            {
              name: "Лицензия на осуществление образовательной деятельности №1306 от 08.06.2016",
              href: "Отчет о результатах самообследования",
            },
          ],
        },
        {
          name: "Документы о порядке оказания платных образовательных услуг",
          arrDocs: [
            {
              name: "Договор на обучение",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Документ об установлении размера оплаты",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приказ об установление скидки на обучение для старост",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приказ об установление скидки на обучение для отдельных категорий",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приказ о сроках оплаты за обучение за 1 семестр 2019-2020 уч.г.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Приказ о сроках оплаты за обучение за 1 семестр 2019-2020 уч.г.",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "Предписания надзорных органов в сфере образования и отчеты об их устранении",
          arrDocs: [
            {
              name: "Заключение о соответствии объекта защиты требованиям пожарной безопасности",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Акт специальной оценки труда",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Федеральная служба по надзору в сфере защиты прав потребителей и благополучия человека",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Антикоррупционная реклама",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
          des: "Предписаний органов, осуществляющих государственный контроль в сфере образования, не имеется.",
        },
        {
          name: "Воспитательная работа",
          arrDocs: [
            {
              name: "Планы и прочее",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "Программа гос. поддержки образовательного кредитования граждан, обучающихся по образовательным программам СПО",
          arrDocs: [
            {
              name: "О направлении информационных материалов",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "О направлении информационных материалов",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Презентация",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Дополнительная информация",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "О проведении мониторинга",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
            {
              name: "Чек-лист — кредит на образование с господдержкой",
              href: "http://vvkifpu.ru/wp-content/uploads/2019/10/IMG_0450-14-10-19-15-37.pdf",
            },
          ],
        },
        {
          name: "Рекомендации МЧС",
          arrDocs: [
            {
              name: "Детям и родителям о пожарной безопасности в период летних каникул",
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
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}
.main__breadcrumbs {
  margin-bottom: 30px;
}
.main__header {
  margin-bottom: 50px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.main__log {
  height: 100%;
}
.main__item {
  height: 100%;
}
.main__link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--violo);
  border-radius: 70px;
  padding: 20px 30px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: black;
  cursor: pointer;
  height: 100%;
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
