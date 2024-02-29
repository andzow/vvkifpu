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
      path: "/students/tuition-fees",
      component: () => import("~/pages/students/tuition-fees.vue"),
    },
    {
      name: "Виды материальной поддержки",
      path: "/students/support",
      component: () => import("~/pages/students/support.vue"),
    },
  ],
};
