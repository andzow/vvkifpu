<template>
  <ol
    class="breadcrumbs__ol"
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
    :class="{ breadcrumbs__ol_active: isColor }"
  >
    <li class="breadcrumbs__li" property="itemListElement" typeof="ListItem">
      <NuxtLink
        class="font"
        data-font-actual="16"
        property="item"
        typeof="WebPage"
        to="/"
      >
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
      :class="{ activeLi: index + 1 === crumbs.length && !isColor }"
    >
      <NuxtLink
        class="font"
        data-font-actual="16"
        property="item"
        typeof="WebPage"
        :to="crumb.path"
      >
        <span property="name">{{ crumb.name }}</span>
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
    isColor: {
      type: Boolean,
    },
    arrCrumbs: { type: Array },
  },
  computed: {
    crumbs() {
      // const fullPath = this.$route.fullPath.split("/");
      // fullPath.shift();

      // let path = "";

      // const crumbs = fullPath.map((el) => {
      //   path = `${path}/${el}`;
      //   const resolveRoute = this.$router.resolve(path);
      //   if (resolveRoute.name !== null) {
      //     return resolveRoute;
      //   }
      // });
      return this.arrCrumbs;
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
.breadcrumbs__span {
  color: #8d8d8d;
}
.breadcrumbs__li:after {
  content: " - ";
  display: inline;
  font-size: 16px;
  font-weight: 500;
  color: #8d8d8d;
}
.breadcrumbs__ol_active .breadcrumbs__li:after {
  color: white;
}
.breadcrumbs__li:last-child:after {
  content: "";
}
.breadcrumbs__li a {
  font-size: 16px;
  font-weight: 500;
  color: #8d8d8d;
}
.breadcrumbs__ol_active .breadcrumbs__li a {
  color: white;
}
.breadcrumbs__li a:hover {
  text-decoration: underline;
}
.breadcrumbs__li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}

.activeLi a {
  color: black;
}
.activeSpan {
  color: black;
}

@media screen and (max-width: 990px) {
  .breadcrumbs__li:after {
    font-size: 15px;
  }
  .breadcrumbs__li a {
    font-size: 15px;
  }
}
</style>
