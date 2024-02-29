<template>
  <ol
    class="breadcrumbs__ol"
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
  >
    <li class="breadcrumbs__li" property="itemListElement" typeof="ListItem">
      <NuxtLink property="item" typeof="WebPage" to="/">
        <span property="name">Главная</span>
      </NuxtLink>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
      class="breadcrumbs__li"
    >
      <NuxtLink property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.name
        }}</span>
      </NuxtLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";

      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.resolve(path);
        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, " "),
            ...match,
          });
        }
      });
      return crumbs;
    },
  },
};
</script>
<style scoped>
.breadcrumbs__ol {
  list-style: none;
}
.breadcrumbs__ol span {
  font-family: "Inter", sans-serif;
}
.breadcrumbs__li {
  display: inline;
}
.breadcrumbs__li:after {
  content: " - ";
  display: inline;
  font-size: 16px;
  font-weight: 400;
  color: white;
}
.breadcrumbs__li:last-child:after {
  content: "";
}
.breadcrumbs__li a {
  font-size: 16px;
  font-weight: 400;
  color: white;
}
.breadcrumbs__li a:hover {
  text-decoration: underline;
}
.breadcrumbs__li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}
</style>
