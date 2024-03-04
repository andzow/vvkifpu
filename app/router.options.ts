import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "Главная",
      path: "/",
      component: () => import("~/pages/index.vue"),
    },
    {
      name: "Новости",
      path: "/news/college",
      component: () => import("~/pages/news/college.vue"),
    },
    {
      name: "Мероприятия",
      path: "/news/events",
      component: () => import("~/pages/news/events.vue"),
    },
    {
      name: "Специальности",
      path: "/speciality",
      component: () => import("~/pages/speciality/index.vue"),
    },
    {
      name: "43.02.17 Технологии индустрии красоты",
      path: "/speciality/beauty-industry",
      component: () => import("~/pages/speciality/beauty-industry.vue"),
    },
    {
      name: "43.02.17 Технологии индустрии красоты",
      path: "/speciality/beauty-industry",
      component: () => import("~/pages/speciality/beauty-industry.vue"),
    },
    {
      name: "38.02.04 Коммерция (по отраслям)",
      path: "/speciality/commerce",
      component: () => import("~/pages/speciality/commerce.vue"),
    },
    {
      name: "43.02.02 Парикмахерское искусство",
      path: "/speciality/hairdressing",
      component: () => import("~/pages/speciality/hairdressing.vue"),
    },
    {
      name: "09.02.04 Информационные системы",
      path: "/speciality/information-systems",
      component: () => import("~/pages/speciality/information-systems.vue"),
    },
    {
      name: "40.02.02 Правоохранительная деятельность",
      path: "/speciality/pravoved",
      component: () => import("~/pages/speciality/pravoved.vue"),
    },
    {
      name: "43.02.10 Туризм",
      path: "/speciality/tourism",
      component: () => import("~/pages/speciality/tourism.vue"),
    },
    {
      name: "Оплата обучения",
      path: "/students/payment",
      component: () => import("~/pages/students/tuition-fees.vue"),
    },
    {
      name: "Виды материальной поддержки",
      path: "/students/support",
      component: () => import("~/pages/students/support.vue"),
    },
    {
      name: "Документы на практику",
      path: "/students/documents",
      component: () => import("~/pages/students/documents.vue"),
    },
    {
      name: "Правила приема",
      path: "/speciality/admission-rules",
      component: () => import("~/pages/speciality/admission-rules.vue"),
    },
    {
      name: "Контактные данные сотрудников ВВКИФПУ",
      path: "/students/contacts",
      component: () => import("~/pages/students/contacts.vue"),
    },
    {
      name: "Электронная библиотека",
      path: "/library/digital",
      component: () => import("~/pages/library/digital.vue"),
    },
    {
      name: "Дополнительная информация",
      path: "/library/additionally",
      component: () => import("~/pages/library/additionally.vue"),
    },
    {
      name: "Копии документов",
      path: "/information/copies-documents",
      component: () => import("~/pages/information/copies-documents.vue"),
    },
    {
      name: "Структура и органы управления ПОУ «ВВКИФПУ»",
      path: "/information/administration",
      component: () => import("~/pages/information/administration.vue"),
    },
    {
      name: "Основные сведения ПОУ Волго-Вятский колледж",
      path: "/information/intelligence",
      component: () => import("~/pages/information/intelligence.vue"),
    },
    {
      name: "Руководство и педагогический состав",
      path: "/information/guide",
      component: () => import("~/pages/information/guide.vue"),
    },
    {
      name: "Международное сотрудничество",
      path: "/information/cooperation",
      component: () => import("~/pages/information/cooperation.vue"),
    },
    {
      name: "Вакантные места для приема (перевода)",
      path: "/information/places",
      component: () => import("~/pages/information/places.vue"),
    },
    {
      name: "Основные профессиональные образовательные стандарты",
      path: "/information/education/standards",
      component: () => import("~/pages/information/education/standards.vue"),
    },
  ],
};
