<template>
  <div class="app">
    <MainVimain />
    <MainViTraning />
    <MainViApplication />
    <MainViNews />
    <MainViAbout />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrPages: [
        {
          name: "home",
          path: "/home",
          file: "C:/projects/vvkifpu/pages/home.vue",
          children: [],
        },
        {
          name: "index",
          path: "/",
          file: "C:/projects/vvkifpu/pages/index.vue",
          children: [],
        },
        {
          name: "information-copies-documents",
          path: "/information/copies-documents",
          file: "C:/projects/vvkifpu/pages/information/copies-documents.vue",
          children: [],
        },
        {
          name: "library-digital",
          path: "/library/digital",
          file: "C:/projects/vvkifpu/pages/library/digital.vue",
          children: [],
        },
        {
          name: "library",
          path: "/library",
          file: "C:/projects/vvkifpu/pages/library/index.vue",
          children: [],
        },
        {
          name: "library-informational-resources",
          path: "/library/informational-resources",
          file: "C:/projects/vvkifpu/pages/library/informational-resources.vue",
          children: [],
        },
        {
          name: "news-college",
          path: "/news/college",
          file: "C:/projects/vvkifpu/pages/news/college.vue",
          children: [],
        },
        {
          name: "news-events",
          path: "/news/events",
          file: "C:/projects/vvkifpu/pages/news/events.vue",
          children: [],
        },
        {
          name: "news",
          path: "/news",
          file: "C:/projects/vvkifpu/pages/news/index.vue",
          children: [],
        },
        {
          name: "speciality-admission-rules",
          path: "/speciality/admission-rules",
          file: "C:/projects/vvkifpu/pages/speciality/admission-rules.vue",
          children: [],
        },
        {
          name: "speciality-beauty-industry",
          path: "/speciality/beauty-industry",
          file: "C:/projects/vvkifpu/pages/speciality/beauty-industry.vue",
          children: [],
        },
        {
          name: "speciality-commerce",
          path: "/speciality/commerce",
          file: "C:/projects/vvkifpu/pages/speciality/commerce.vue",
          children: [],
        },
        {
          name: "speciality-hairdressing",
          path: "/speciality/hairdressing",
          file: "C:/projects/vvkifpu/pages/speciality/hairdressing.vue",
          children: [],
        },
        {
          name: "speciality",
          path: "/speciality",
          file: "C:/projects/vvkifpu/pages/speciality/index.vue",
          children: [],
        },
        {
          name: "speciality-information-systems",
          path: "/speciality/information-systems",
          file: "C:/projects/vvkifpu/pages/speciality/information-systems.vue",
          children: [],
        },
        {
          name: "speciality-pravoved",
          path: "/speciality/pravoved",
          file: "C:/projects/vvkifpu/pages/speciality/pravoved.vue",
          children: [],
        },
        {
          name: "speciality-tourism",
          path: "/speciality/tourism",
          file: "C:/projects/vvkifpu/pages/speciality/tourism.vue",
          children: [],
        },
        {
          name: "students-contacts",
          path: "/students/contacts",
          file: "C:/projects/vvkifpu/pages/students/contacts.vue",
          children: [],
        },
        {
          name: "students-documents",
          path: "/students/documents",
          file: "C:/projects/vvkifpu/pages/students/documents.vue",
          children: [],
        },
        {
          name: "students",
          path: "/students",
          file: "C:/projects/vvkifpu/pages/students/index.vue",
          children: [],
        },
        {
          name: "students-support",
          path: "/students/support",
          file: "C:/projects/vvkifpu/pages/students/support.vue",
          children: [],
        },
        {
          name: "students-tuition-fees",
          path: "/students/tuition-fees",
          file: "C:/projects/vvkifpu/pages/students/tuition-fees.vue",
          children: [],
        },
        { name: "Дом", path: "/home", file: "~/pages/home.vue" },
      ],
    };
  },
  mounted() {
    const arrForPages = this.arrPages;
    const newArr = [];

    this.arrPages.forEach((elU, index) => {
      const arrFilters = arrForPages.filter((elD) => elU.path === elD.path);
      if (arrFilters.length > 1) {
        console.log(arrFilters);
      }
    });
    console.log(this.arrPages);
  },
};
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
