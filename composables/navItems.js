export const useModal = () => useState("use_modal", () => false);
export const useModalFinal = () => useState("use_modal_final", () => false);
export const useToogle = () => useState("use_toogle", () => false);
export const useFontSize = () => useState("size", () => 16);
export const useColor = () => useState("color", () => "black");
export const useUserAuth = () => useState("use_user_auth", () => false);
export const useUserData = () => useState("use_user_data", () => {});
export const useStatus = () => useState("use_user_data", () => null);
export const useApplication = () => useState("use_application", () => []);
export const usePostAll = () => useState("use_post_all", () => []);
export const usePage = () => useState("use_page", () => 1);
export const usePageActive = () => useState("use_page_active", () => 1);
export const useInfoActive = () =>
  useState("use_info_active", () => "application");
export const usePostData = () => useState("use_post_data", () => {});
export const useNews = () => useState("use_news", () => "Просмотр новостей");

export const useNewsAll = () => useState("use_news_all", () => null);

const navArr = [
  {
    name: "Абитуриентам",
    allPages: [
      {
        name: "День открытых дверей",
        path: "/applicants/open",
        children: null,
      },
      {
        name: "Приемная комиссия",
        path: "/commissions",
        children: null,
      },
      {
        name: "Список специальностей",
        path: "/",
        children: [
          {
            name: "9.02.04 “Информационные системы”",
            path: "/speciality/information-systems",
          },
          {
            name: "40.02.02 “Правоохранительная деятельность”",
            path: "/speciality/pravoved",
          },
          {
            name: "43.02.10 “Туризм”",
            path: "/speciality/tourism",
          },
          {
            name: "38.02.04 “Коммерция (По отраслям)”",
            path: "/speciality/commerce",
          },
          {
            name: "43.02.17 “Технологии индустрии красоты”",
            path: "/speciality/beauty-industry",
          },
          {
            name: "43.02.02 “Парикмахерское искусство”",
            path: "/speciality/hairdressing",
          },
        ],
      },
      {
        name: "Правила приема",
        path: "/speciality/admission-rules",
        children: null,
      },
      {
        name: "Стоимость обучения",
        path: "/students/payment",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Студентам",
    allPages: [
      {
        name: "Оплата обучения",
        path: "/students/payment",
        children: null,
      },
      {
        name: "Виды материальной поддержки",
        path: "/students/support",
        children: null,
      },
      {
        name: "Документы на практику",
        path: "/students/documents",
        children: null,
      },
      {
        name: "Контактные данные сотрудников ВВКИФПУ",
        path: "/students/contacts",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Библиотека",
    allPages: [
      {
        name: "Электронная библиотека",
        path: "/library/digital",
        children: null,
      },
      {
        name: "Дополнительная информация",
        path: "/library/additionally",
        children: null,
      },
      {
        name: "Дополнительные информационные ресурсы",
        path: "/library/informational-resources",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Сведения об ОО",
    allPages: [
      {
        name: "Основные сведения",
        path: "/information/intelligence",
        children: null,
      },
      {
        name: "Структура и органы управления ОО",
        path: "/information/administration",
        children: null,
      },
      {
        name: "Документы",
        path: "/information/copies-documents",
        children: null,
      },
      {
        name: "Образование",
        path: "/",
        children: [
          {
            name: "Численность обучающихся",
            path: "/information/number-students",
          },
          {
            name: "Основные профессиональные образовательные стандарты",
            path: "/information/education/standards",
          },
          {
            name: "Учебные планы и Основные профессиональные образовательные программы",
            path: "/information/study-plan",
          },
        ],
      },
      {
        name: "Руководство",
        path: "/information/guide",
        children: null,
      },
      {
        name: `Материально-техническое обеспечение
и оснащенность образовательного процесса. Доступная среда`,
        path: "/information/social-security",
        children: null,
      },
      {
        name: "Платные образовательнные услуги",
        path: "/students/payment",
        children: null,
      },
      {
        name: "Стипендии и меры поддержки обучающихся",
        path: "/students/support",
        children: null,
      },
      {
        name: "Финансово-хозяйственная деятельность",
        path: "/information/economy",
        children: null,
      },
      {
        name: "Доступная среда",
        path: "http://vvkifpu.ru/wp-content/uploads/2021/04/dostup-sreda.pdf",
        children: null,
      },
      {
        name: "Международное сотрудничество",
        path: "/information/cooperation",
        children: null,
      },
      {
        name: "Вакансии для преподавателей",
        path: "/information/job",
        children: null,
      },

      {
        name: "Правила приема",
        path: "/speciality/admission-rules",
        children: null,
      },

      {
        name: "Вакантные места для приема (перевода) обучающихся",
        path: "/information/places",
        children: null,
      },
      {
        name: "Наши реквизиты",
        path: "/students/payment",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Новости",
    allPages: [
      {
        name: "Новости колледжа",
        path: "/news/college",
        children: null,
      },
      {
        name: "Мероприятия",
        path: "/news/events",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Контакты",
    path: "/contacts",
  },
];

const mobileNavArr = [
  {
    name: "Абитуриентам",
    allPages: [
      {
        name: "День открытых дверей",
        path: "/applicants/open",
        children: null,
      },
      {
        name: "Приемная комиссия",
        path: "/commissions",
        children: null,
      },

      {
        name: "9.02.04 “Информационные системы”",
        path: "/speciality/information-systems",
        children: null,
      },
      {
        name: "40.02.02 “Правоохранительная деятельность”",
        path: "/speciality/pravoved",
        children: null,
      },
      {
        name: "43.02.10 “Туризм”",
        path: "/speciality/tourism",
        children: null,
      },
      {
        name: "38.02.04 “Коммерция (По отраслям)”",
        path: "/speciality/commerce",
        children: null,
      },
      {
        name: "43.02.17 “Технологии индустрии красоты”",
        path: "/speciality/beauty-industry",
        children: null,
      },
      {
        name: "43.02.02 “Парикмахерское искусство”",
        path: "/speciality/hairdressing",
        children: null,
      },
      {
        name: "Правила приема",
        path: "/speciality/admission-rules",
        children: null,
      },
      {
        name: "Стоимость обучения",
        path: "/students/payment",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Студентам",
    allPages: [
      {
        name: "Оплата обучения",
        path: "/students/payment",
        children: null,
      },
      {
        name: "Виды материальной поддержки",
        path: "/students/support",
        children: null,
      },
      {
        name: "Документы на практику",
        path: "/students/documents",
        children: null,
      },
      {
        name: "Контактные данные сотрудников ВВКИФПУ",
        path: "/students/contacts",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Библиотека",
    allPages: [
      {
        name: "Электронная библиотека",
        path: "/library/digital",
        children: null,
      },
      {
        name: "Дополнительная информация",
        path: "/library/additionally",
        children: null,
      },
      {
        name: "Дополнительные информационные ресурсы",
        path: "/library/informational-resources",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Сведения об ОО",
    allPages: [
      {
        name: "Основные сведения",
        path: "/information/intelligence",
        children: null,
      },
      {
        name: "Структура и органы управления ОО",
        path: "/information/administration",
        children: null,
      },
      {
        name: "Документы",
        path: "/information/copies-documents",
        children: null,
      },
      {
        name: "Численность обучающихся",
        path: "/information/number-students",
        children: null,
      },
      {
        name: "Основные профессиональные образовательные стандарты",
        path: "/information/education/standards",
        children: null,
      },
      {
        name: "Учебные планы и Основные профессиональные образовательные программы",
        path: "/information/study-plan",
        children: null,
      },
      {
        name: "Руководство",
        path: "/information/guide",
        children: null,
      },
      {
        name: `Материально-техническое обеспечение
и оснащенность образовательного процесса. Доступная среда`,
        path: "/information/social-security",
        children: null,
      },
      {
        name: "Платные образовательнные услуги",
        path: "/students/payment",
        children: null,
      },
      {
        name: "Стипендии и меры поддержки обучающихся",
        path: "/students/support",
        children: null,
      },
      {
        name: "Финансово-хозяйственная деятельность",
        path: "/information/economy",
        children: null,
      },
      {
        name: "Доступная среда",
        path: "http://vvkifpu.ru/wp-content/uploads/2021/04/dostup-sreda.pdf",
        children: null,
      },
      {
        name: "Международное сотрудничество",
        path: "/information/cooperation",
        children: null,
      },
      {
        name: "Вакансии для преподавателей",
        path: "/information/job",
        children: null,
      },

      {
        name: "Правила приема",
        path: "/speciality/admission-rules",
        children: null,
      },

      {
        name: "Вакантные места для приема (перевода) обучающихся",
        path: "/information/places",
        children: null,
      },
      {
        name: "Наши реквизиты",
        path: "/students/payment",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Новости",
    allPages: [
      {
        name: "Новости колледжа",
        path: "/news/college",
        children: null,
      },
      {
        name: "Мероприятия",
        path: "/news/events",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "Контакты",
    path: "/contacts",
  },
];

const navArrFooter = [
  {
    name: "АБИТУРИЕНТАМ",
    allPages: [
      {
        name: "День открытых дверей",
        path: "/",
        children: null,
      },
      {
        name: "Приемная комиссия",
        path: "/",
        children: null,
      },
      {
        name: "Список специальностей",
        path: "/",
      },
      {
        name: "Правила приема",
        path: "/speciality/admission-rules",
        children: null,
      },
      {
        name: "Стоимость обучения",
        path: "/students/payment",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "СТУДЕНТАМ",
    allPages: [
      {
        name: "Оплата обучения",
        path: "/students/payment",
        children: null,
      },

      {
        name: "Документы на практику",
        path: "/students/documents",
        children: null,
      },
      {
        name: "Контактные данные сотрудников ВВКИФПУ",
        path: "/students/contacts",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "БИБЛИОТЕКА",
    allPages: [
      {
        name: "Электронная библиотека",
        path: "/library/digital",
        children: null,
      },
      {
        name: "Дополнительная информация",
        path: "/library/additionally",
        children: null,
      },
      {
        name: "Дополнительные информационные ресурсы",
        path: "/library/informational-resources",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "СВЕДЕНИЯ ОБ ОО",
    allPages: [
      {
        name: "Основные сведения",
        path: "/",
        children: null,
      },
      {
        name: "Структура и органы управления ОО",
        path: "/",
        children: null,
      },
      {
        name: "Документы",
        path: "/",
        children: null,
      },
      {
        name: "Образование",
        path: "/",
      },
      {
        name: "Руководство",
        path: "/",
        children: null,
      },
      {
        name: "Педагогический состав",
        path: "/",
        children: null,
      },
      {
        name: "Правила приема",
        path: "/",
        children: null,
      },
      {
        name: "Виды материальной поддержки",
        path: "/",
        children: null,
      },
      {
        name: "Наши реквизиты",
        path: "/",
        children: null,
      },
      {
        name: "Численность обучающихся",
        path: "/",
      },
      {
        name: "Основные профессиональные образовательные стандарты",
        path: "/",
      },
      {
        name: "Учебные планы и Основные профессиональные образовательные программы",
        path: "/",
      },
    ],
    path: "/",
  },
  {
    name: "НОВОСТИ",
    allPages: [
      {
        name: "Новости колледжа",
        path: "/",
        children: null,
      },
      {
        name: "Мероприятия",
        path: "/",
        children: null,
      },
    ],
    path: "/",
  },
  {
    name: "КОНТАКТЫ",
    path: "/",
  },
];

export const useNavArr = () => {
  return navArr;
};
export const useMobileNavArr = () => {
  return mobileNavArr;
};

export const useNavArrFooter = () => {
  return navArrFooter;
};

export const useSvgImage = (bodyClassName) => {
  if (!bodyClassName) {
    return;
  }
  const bodyElement = document?.body;
  const computedStyle = window?.getComputedStyle(bodyElement);
  const color = computedStyle.color;
  const pathEl = document.querySelectorAll(".image__path");
  pathEl.forEach((el) => el.setAttribute("stroke", color));
};
