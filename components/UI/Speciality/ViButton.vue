<template>
  <button class="button"><slot /></button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  font-size: 24px;
  padding: 17px 40px;
  background: #fff;
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
</style>
