<template>
  <div class="header__visual" :class="{ activeVisual: activeVisualHeader }">
    <div class="header__visual_images">
      <p class="header__visual_text">Скрыть картинки</p>
      <div class="header__visual_switches">
        <UIHeaderViToggle />
      </div>
    </div>
    <div class="header__visual_font">
      <p class="header__visual_size">А</p>
      <p class="header__visual_size">А</p>
      <p class="header__visual_size">А</p>
    </div>
    <div class="header__visual_colors">
      <p class="header__visual_color">А</p>
      <p class="header__visual_color">А</p>
      <p class="header__visual_color">А</p>
      <p class="header__visual_color">А</p>
      <p class="header__visual_color">А</p>
    </div>
    <div class="header__visual_btn">
      <button class="header__visual_button">обычная версия сайта</button>
    </div>
    <div class="header__visual_leave">
      <button class="header__visual_leav" @click="$emit('closeVisual')">
        -
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeVisualHeader: { type: Boolean },
  },
  data() {
    return {
      activeVisual: false,
    };
  },
  watch: {
    activeVisual(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.header__visual {
  max-width: 1800px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}
.activeVisual {
  height: 80px;
  overflow: visible;
}
.header__visual_images {
  display: flex;
  align-items: center;
  background: #f3f3f3;
  border-radius: 50px;
  padding: 5px 10px;
}
.header__visual_text {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: black;
}
.header__visual_font {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.header__visual_size {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 8px 10px;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  min-width: 75px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid black;
  margin-right: 5px;
  cursor: pointer;
}
.header__visual_size:nth-child(2) {
  font-size: 32px;
}
.header__visual_size:nth-child(3) {
  font-size: 40px;
}
.header__visual_colors {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.header__visual_color {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 8px 10px;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  min-width: 75px;
  height: 50px;
  border-radius: 50px;
  margin-right: 5px;
  cursor: pointer;
}
.header__visual_color:nth-child(1) {
  border: 1px solid black;
}
.header__visual_color:nth-child(2) {
  background: black;
  color: white;
}
.header__visual_color:nth-child(3) {
  background: #9dd1ff;
  color: #063462;
}
.header__visual_color:nth-child(4) {
  background: #f7f3d6;
  color: #4d4b43;
}
.header__visual_color:nth-child(5) {
  background: #3b2716;
  color: #a9e44d;
}
.header__visual_btn {
  margin-left: 20px;
}
.header__visual_button {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: black;
  border-radius: 50px;
  padding: 12px 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.header__visual_leave {
  margin-left: 20px;
  padding: 5px 10px;
}
.header__visual_leav {
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: white;
  background: black;
  border-radius: 50px;
  padding: 4px 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
</style>
