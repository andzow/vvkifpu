<template>
  <button class="button border font" data-font-actual="17"><slot /></button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  font-size: 17px;
  padding: 14px 25px;
  background: #fff;
  font-family: "inter", sans-serif;
  font-weight: 700;
  border-radius: 50px;
  color: #542fe6;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 2;
}
.button:hover {
  color: white;
  background: #542fe6;
}
@media screen and (max-width: 990px) {
  .button {
    font-size: 16px !important;
    padding: 12px 20px;
  }
}
@media screen and (max-width: 604px) {
  .button {
    font-size: 16px !important;
    padding: 12px 20px;
  }
}
@media screen and (max-width: 404px) {
  .button {
    font-size: 15px !important;
  }
}
</style>
