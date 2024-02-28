<template>
  <label class="header__visual_toggle">
    <input class="header__visual_checkbox" type="checkbox" />
    <div class="header__visual_switch"></div>
  </label>
</template>

<script>
export default {};
</script>

<style scoped>
.header__visual_toggle {
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
}

.header__visual_switch {
  display: inline-block;
  background: #ccc;
  border-radius: 16px;
  width: 58px;
  height: 32px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;
}
.header__visual_switch:before,
.header__visual_switch:after {
  content: "";
}
.header__visual_switch:before {
  display: block;
  background: linear-gradient(to bottom, #fff 0%, #eee 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: left 0.25s;
}
.header__visual_toggle:hover .header__visual_switch:before {
  background: linear-gradient(to bottom, #fff 0%, #fff 100%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}
.header__visual_checkbox:checked + .header__visual_switch {
  background: black;
}
.header__visual_checkbox:checked + .header__visual_switch:before {
  left: 30px;
}

.header__visual_checkbox {
  position: absolute;
  visibility: hidden;
}

.toggle-label {
  margin-left: 5px;
  position: relative;
  top: 2px;
}
</style>
