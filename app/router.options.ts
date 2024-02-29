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
      path: "/college",
      component: () => import("~/pages/news/college.vue"),
    },
    {
      name: "Мероприятия",
      path: "/events",
      component: () => import("~/pages/news/events.vue"),
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
  ],
};
