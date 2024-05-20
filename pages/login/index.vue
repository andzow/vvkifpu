<template>
  <div>
    <LoginViForm />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: `Вход в админ панель`,
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "../favicon.svg",
        },
      ],
      htmlAttrs: { lang: "ru-RU" },
    });
  },
};
</script>

<style></style>
