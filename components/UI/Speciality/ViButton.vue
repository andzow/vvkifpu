<template>
  <button class="button"><slot /></button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  font-size: 20px;
  padding: 16px 30px;
  background: #fff;
  border-radius: 50px;
  text-transform: uppercase;
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
