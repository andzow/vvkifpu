<template>
  <ol vocab="http://schema.org/" typeof="BreadcrumbList">
    <li property="itemListElement" typeof="ListItem">
      <NuxtLink property="item" typeof="WebPage" to="/">
        <span property="name">Vonage Learn</span>
      </NuxtLink>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <NuxtLink property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
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
        console.log(match);
        // if (match.name !== null) {
        //   crumbs.push({
        //     title: param.replace(/-/g, " "),
        //     ...match,
        //   });
        // }
      });
      return crumbs;
    },
  },
};
</script>
<style scoped>
ol {
  list-style: none;
}
li {
  display: inline;
}
li:after {
  content: " » ";
  display: inline;
  font-size: 0.9em;
  color: #aaa;
  padding: 0 0.0725em 0 0.15em;
}
li:last-child:after {
  content: "";
}
li a {
  color: black;
}
li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}
</style>
