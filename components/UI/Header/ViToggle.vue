<template>
  <label class="header__visual_toggle border">
    <input class="header__visual_checkbox" type="checkbox" v-model="useToogle"/>
    <div class="header__visual_switch"></div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      useToogle: useToogle(),
      ArrayBackground: []
    }
  },
  methods: {
    hiddenImage() {
      const elements = document.querySelectorAll('.background');
      const elementsBack = document.querySelectorAll(".image")
      const elementsOpacity = document.querySelectorAll(".image_opacity")
      elementsOpacity.forEach(elementBack => {
        elementBack.style.opacity = "0"
      })
      elementsBack.forEach(elementBack => {
        elementBack.style.display = "none"
      })
      elements.forEach(element => {
        console.log(element)
        const backgroundImage = window.getComputedStyle(element).getPropertyValue('background-image');
        const imageUrl = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
        const checkArray = this.ArrayBackground.find(item => item === imageUrl)
        if (!checkArray) {
          this.ArrayBackground.push(imageUrl);
        }
        element.style.background = 'none'
        element.classList.remove('traningCard__animation');
      })
      localStorage.setItem('ArrayBacground', JSON.stringify(this.ArrayBackground));
      localStorage.setItem('imageOff', true);
    },
    visibleImage() {
      const elements = document.querySelectorAll('.background');
      const elementsBack = document.querySelectorAll(".image")
      const elementsOpacity = document.querySelectorAll(".image_opacity")
      elementsOpacity.forEach(elementBack => {
        elementBack.style.opacity = "1"
      })
      elementsBack.forEach(elementBack => {
        elementBack.style.display = "block"
      })
      elements.forEach((element, index) => {
        const imageUrl = this.ArrayBackground[index];
        element.style.backgroundImage = `url('${imageUrl}')`;
        element.classList.add('traningCard__animation');
      })
      localStorage.setItem('imageOff', false);
    },
  },
  mounted() {
    const image = localStorage.getItem("imageOff")
    if (image == "true") {
      this.hiddenImage()
      this.useToogle = true
    }
  },
  watch: {
    useToogle(val) {
      if (val) {
        this.hiddenImage()
      } else {
        this.visibleImage()
      }
    },
    $route() {
      setTimeout(() => {
        const image = localStorage.getItem("imageOff")
        if (image == "true") {
          this.hiddenImage()
        }
      }, 700)
    }
  }
};
</script>

<style scoped>
.header__visual_toggle {
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
  border-radius: 20px;
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
