<template>
  <div class="helper">
    <div class="helper__test">
      <div class="helper__item" @click="increaseFontSize(100)"></div>
      <div class="helper__item" @click="increaseFontSize(150)"></div>
      <div class="helper__item" @click="increaseFontSize(200)"></div>
    </div>
    <div class="helper__test">
      <div class="helper__item" @click="hiddenImage"></div>
      <div class="helper__item" @click="visibleImage"></div>
    </div>
    <div class="helper__test">
      <div class="helper__item" @click="changeBackgroundBlue"></div>
      <div class="helper__item" @click="changeBackgroundYellow"></div>
      <div class="helper__item" @click="changeBackgroundBrown"></div>
      <div class="helper__item" @click="changeBackgroundBlack"></div>
      <div class="helper__item" @click="changeBackgroundWhite"></div>
      <div class="helper__item" @click="resetChangeBackground"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ArrayFont: [],
      ArrayBackground: [],
    };
  },
  mounted() {
    const background = localStorage.getItem("background");
    const font = localStorage.getItem("ArrayFont");
    const image = localStorage.getItem("imageOff");
    if (font !== null) {
      this.loadArrayFont();
    }
    if (image !== null) {
      this.loadBackground();
    }
    switch (background) {
      case "blue":
        this.changeBackgroundBlue();
        break;
      case "yellow":
        this.changeBackgroundYellow();
        break;
      case "brown":
        this.changeBackgroundBrown();
        break;
      case "black":
        this.changeBackgroundBlack();
        break;
      case "white":
        this.changeBackgroundWhite();
        break;
      default:
        break;
    }
    // localStorage.removeItem('ArrayBacground');
    // localStorage.removeItem('imageOff');
    // localStorage.removeItem('background');
  },
  methods: {
    increaseFontSize(size) {
      let fontLog = size;
      const elements = document.querySelectorAll(".font");
      elements.forEach((element) => {
        const dataFontValue = parseInt(
          element.getAttribute("data-font-actual")
        );
        let fontObject = this.ArrayFont.find(
          (item) => item.font === dataFontValue
        );
        if (dataFontValue === 68 && size > 150) {
          size = 150;
        } else {
          size = fontLog;
        }
        console.log(size);
        if (!fontObject) {
          fontObject = {
            font: dataFontValue,
            new: (dataFontValue / 100) * size,
          };
          this.ArrayFont.push(fontObject);
        } else {
          fontObject.new = (dataFontValue / 100) * size;
        }
        const newFontSize = (dataFontValue / 100) * size;
        element.style.fontSize = `${newFontSize}px`;
        localStorage.setItem("ArrayFont", JSON.stringify(this.ArrayFont));
      });
    },
    hiddenImage() {
      const elements = document.querySelectorAll(".background");
      const elementsBack = document.querySelectorAll(".image");
      elementsBack.forEach((elementBack) => {
        elementBack.style.opacity = "0";
      });
      elements.forEach((element) => {
        const backgroundImage = window
          .getComputedStyle(element)
          .getPropertyValue("background-image");
        const imageUrl = backgroundImage.replace(
          /url\(['"]?(.*?)['"]?\)/i,
          "$1"
        );
        const checkArray = this.ArrayBackground.find(
          (item) => item === imageUrl
        );
        if (!checkArray) {
          this.ArrayBackground.push(imageUrl);
        }
        element.style.background = "none";
        element.classList.remove("traningCard__animation");
      });
      localStorage.setItem(
        "ArrayBacground",
        JSON.stringify(this.ArrayBackground)
      );
      localStorage.setItem("imageOff", true);
    },
    visibleImage() {
      const elements = document.querySelectorAll(".background");
      const elementsBack = document.querySelectorAll(".image");
      elementsBack.forEach((elementBack) => {
        elementBack.style.opacity = "1";
      });
      elements.forEach((element, index) => {
        const imageUrl = this.ArrayBackground[index];
        element.style.backgroundImage = `url('${imageUrl}')`;
        element.classList.add("traningCard__animation");
      });
      localStorage.setItem("imageOff", false);
    },
    loadBackground() {
      const background = localStorage.getItem("imageOff");
      if (background == "false") {
        const elementsBack = document.querySelectorAll(".image");
        elementsBack.forEach((elementBack) => {
          elementBack.style.opacity = "1";
        });
        const savedArrayBackground = localStorage.getItem("ArrayBacground");
        if (savedArrayBackground !== null) {
          const arrayBackground = JSON.parse(savedArrayBackground);
          const elements = document.querySelectorAll(".background");
          elements.forEach((element, index) => {
            const imageUrl = arrayBackground[index];
            element.style.backgroundImage = `url('${imageUrl}')`;
          });
        }
      }
      if (background == "true") {
        this.hiddenImage();
      }
    },
    loadArrayFont() {
      const savedArrayFont = localStorage.getItem("ArrayFont");
      const arrayFont = JSON.parse(savedArrayFont);
      const elements = document.querySelectorAll(".font");
      elements.forEach((element) => {
        const dataFontValue = parseInt(
          element.getAttribute("data-font-actual")
        );
        const font = arrayFont.find((item) => item.font === dataFontValue);
        element.style.fontSize = `${font.new}px`;
      });
    },
    changeBackgroundBlue() {
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");

      paths.forEach((path) => {
        path.style.fill = "#063462";
      });
      inputs.forEach((input) => {
        input.classList.add("input-blue");
      });
      elementsBorderFilter.forEach((elementBorder) => {
        elementBorder.classList.add("border-log");
      });
      filteredElements.forEach((element) => {
        element.classList.add("blue");
      });
      localStorage.setItem("background", "blue");
    },
    changeBackgroundYellow() {
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");

      paths.forEach((path) => {
        path.style.fill = "#4d4b43";
      });
      inputs.forEach((input) => {
        input.classList.add("input-yellow");
      });
      elementsBorderFilter.forEach((elementBorder) => {
        elementBorder.classList.add("border-log");
      });
      filteredElements.forEach((element) => {
        element.classList.add("yellow");
      });
      localStorage.setItem("background", "yellow");
    },
    changeBackgroundBrown() {
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");

      paths.forEach((path) => {
        path.style.fill = "#a9e44d";
      });
      inputs.forEach((input) => {
        input.classList.add("input-brown");
      });
      elementsBorderFilter.forEach((elementBorder) => {
        elementBorder.classList.add("border-log");
      });
      filteredElements.forEach((element) => {
        element.classList.add("brown");
      });
      localStorage.setItem("background", "brown");
    },
    changeBackgroundBlack() {
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");

      paths.forEach((path) => {
        path.style.fill = "#fff";
      });
      inputs.forEach((input) => {
        input.classList.add("input-black");
      });
      elementsBorderFilter.forEach((elementBorder) => {
        elementBorder.classList.add("border-log");
      });
      filteredElements.forEach((element) => {
        element.classList.add("black");
      });
      localStorage.setItem("background", "black");
    },
    changeBackgroundWhite() {
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");

      paths.forEach((path) => {
        path.style.fill = "#000";
      });
      inputs.forEach((input) => {
        input.classList.add("input-white");
      });
      elementsBorderFilter.forEach((elementBorder) => {
        elementBorder.classList.add("border-log");
      });
      filteredElements.forEach((element) => {
        element.classList.add("white");
      });
      localStorage.setItem("background", "white");
    },
    resetChangeBackground() {
      const elements = document.querySelectorAll("*");
      const paths = document.querySelectorAll(".path");
      paths.forEach((path) => {
        path.removeAttribute("style");
      });
      elements.forEach((element) => {
        element.classList.remove(
          "white",
          "blue",
          "yellow",
          "brown",
          "black",
          "border-log",
          "input-white",
          "input-black",
          "input-brown",
          "input-yellow",
          "input-blue"
        );
      });

      localStorage.removeItem("background");
    },
  },
};
</script>

<style>
.helper {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
}
.helper__test {
  display: flex;
  align-items: center;
  justify-content: center;
}
.helper__item {
  width: 50px;
  height: 50px;
  background: #09627e !important;
  border-radius: 50%;
  cursor: pointer;
}
</style>
