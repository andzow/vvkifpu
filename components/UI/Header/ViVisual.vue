<template>
  <div
    class="header__visual"
    :class="{
      activeVisual: activeVisualHeader,
      activeVisualBurger: activeMobileBurger,
    }"
  >
    <div class="header__visual_images">
      <p class="header__visual_text">Выкл. картинки</p>
      <div class="header__visual_switches">
        <UIHeaderViToggle />
      </div>
    </div>
    <div class="header__visual_font">
      <p class="header__visual_size" @click="increaseFontSize(100)">А</p>
      <p class="header__visual_size" @click="increaseFontSize(150)">А</p>
      <p class="header__visual_size" @click="increaseFontSize(200)">А</p>
    </div>
    <div class="header__visual_colors">
      <p class="header__visual_color exception" @click="changeBackgroundWhite">
        А
      </p>
      <p class="header__visual_color exception" @click="changeBackgroundBlack">
        А
      </p>
      <p class="header__visual_color exception" @click="changeBackgroundBlue">
        А
      </p>
      <p class="header__visual_color exception" @click="changeBackgroundYellow">
        А
      </p>
      <p class="header__visual_color exception" @click="changeBackgroundBrown">
        А
      </p>
    </div>
    <div class="header__visual_btn">
      <button class="header__visual_button border" @click="offVersion">
        обычная версия
      </button>
    </div>
    <div class="header__visual_leave">
      <button class="header__visual_leav border" @click="$emit('closeWindow')">
        -
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeVisualHeader: { type: Boolean },
    activeMobileBurger: { type: Boolean },
    bodyClassName: { type: Boolean },
  },
  data() {
    return {
      ArrayFontSpecial: 100,
      ArrayBackground: [],
      activeVisual: false,
      useToogle: useToogle(),
      fontSizeInner: useFontSize(),
      scrollbarBackground: "#000",
      useImage: useSvgImage,
      checkVer: useChangeSpeciality(),
    };
  },
  mounted() {
    //   localStorage.removeItem('ArrayBacground');
    // localStorage.removeItem('imageOff');
    // localStorage.removeItem('background');
    // localStorage.removeItem('ArrayFont');
    const background = localStorage.getItem("background");
    const font = localStorage.getItem("ArrayFont");
    this.summFontSizeInner(true);
    if (font !== null) {
      this.increaseFontSize(font);
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
  },
  methods: {
    delayChangeBackground() {
      setTimeout(() => {
        this.$emit("checkClass");
      }, 5);
    },
    increaseFontSize(size) {
      setTimeout(() => {
        const elements = document.querySelectorAll(".font");
        this.summFontSizeInner(false, size);
        elements.forEach((element) => {
          const dataFontValue = parseInt(
            element.getAttribute("data-font-actual")
          );
          const newFontSize = (dataFontValue / 100) * size;
          element.style.fontSize = `${newFontSize}px`;
        });
        const elements_special = document.querySelectorAll(".font_special");
        elements_special.forEach((element) => {
          if (size >= 150) {
            this.ArrayFontSpecial = 150;
          } else {
            this.ArrayFontSpecial = 100;
          }
          const elementFont = parseInt(
            element.getAttribute("data-font-actual")
          );
          const newFont = (elementFont / 100) * this.ArrayFontSpecial;
          element.style.fontSize = `${newFont}px`;
        });
        localStorage.setItem("ArrayFont", size);
      }, 0);
    },
    summFontSizeInner(font, size) {
      const fontStorage = localStorage.getItem("ArrayFont");
      if (font) {
        this.fontSizeInner = (16 / 100) * Number(fontStorage);
        return;
      }
      this.fontSizeInner = (16 / 100) * size;
    },
    changeBackgroundBlue() {
      this.delayChangeBackground();
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const backs = document.querySelectorAll(".back");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          !element.classList.contains("exception") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");
      const strokes = document.querySelectorAll(".stroke");

      paths.forEach((path) => {
        path.style.fill = "#063462";
      });
      strokes.forEach((path) => {
        path.style.stroke = "#063462";
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
      backs.forEach((back) => {
        back.classList.add("back-blue");
      });
      localStorage.setItem("background", "blue");
      this.$emit("changeBody");
      this.useImage(this.bodyClassName);
    },
    changeBackgroundBlack() {
      this.delayChangeBackground();
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const backs = document.querySelectorAll(".back");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          !element.classList.contains("exception") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");
      const strokes = document.querySelectorAll(".stroke");

      strokes.forEach((path) => {
        path.style.stroke = "#fff";
      });
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
      backs.forEach((back) => {
        back.classList.add("back-black");
      });
      localStorage.setItem("background", "black");
      this.$emit("changeBody");
      this.useImage(this.bodyClassName);
    },
    changeBackgroundWhite() {
      this.delayChangeBackground();
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const backs = document.querySelectorAll(".back");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          !element.classList.contains("exception") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");
      const strokes = document.querySelectorAll(".stroke");

      strokes.forEach((path) => {
        path.style.stroke = "#000";
      });

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
      backs.forEach((back) => {
        back.classList.add("back-white");
      });
      localStorage.setItem("background", "white");
      this.$emit("changeBody");
      this.useImage(this.bodyClassName);
    },
    changeBackgroundBrown() {
      this.delayChangeBackground();
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const backs = document.querySelectorAll(".back");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          !element.classList.contains("exception") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");
      const strokes = document.querySelectorAll(".stroke");

      strokes.forEach((path) => {
        path.style.stroke = "#a9e44d";
      });

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
      backs.forEach((back) => {
        back.classList.add("back-brown");
      });
      localStorage.setItem("background", "brown");
      this.$emit("changeBody");
      this.useImage(this.bodyClassName);
    },
    changeBackgroundYellow() {
      this.delayChangeBackground();
      this.resetChangeBackground();
      const elements = document.querySelectorAll("*");
      const backs = document.querySelectorAll(".back");
      const filteredElements = Array.from(elements).filter(
        (element) =>
          !element.classList.contains("background") &&
          !element.classList.contains("exception") &&
          element.tagName !== "SVG" &&
          !element.classList.contains("traningCard__icon")
      );
      const elementsBorder = document.querySelectorAll(".border");
      const elementsBorderFilter = Array.from(elementsBorder).filter(
        (element) => !element.classList.contains("background")
      );
      const inputs = document.querySelectorAll("input");
      const paths = document.querySelectorAll(".path");
      const strokes = document.querySelectorAll(".stroke");

      strokes.forEach((path) => {
        path.style.stroke = "#4d4b43";
      });
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
      backs.forEach((back) => {
        back.classList.add("back-yellow");
      });
      localStorage.setItem("background", "yellow");
      this.$emit("changeBody");
      this.useImage(this.bodyClassName);
    },
    resetChangeBackground() {
      this.delayChangeBackground();
      const elements = document.querySelectorAll("*");
      const paths = document.querySelectorAll(".path");
      const strokes = document.querySelectorAll(".stroke");

      strokes.forEach((path) => {
        path.removeAttribute("style");
      });
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
          "input-blue",
          "back-white",
          "back-black",
          "back-blue",
          "back-yellow",
          "back-brown"
        );
      });

      localStorage.removeItem("background");
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
    offVersion() {
      this.$emit("closeW");
      this.increaseFontSize(100);
      this.resetChangeBackground();
      this.useToogle = false;
      this.$emit("closeVisual");
    },
  },
  watch: {
    $route() {
      setTimeout(() => {
        const font = localStorage.getItem("ArrayFont");
        const background = localStorage.getItem("background");
        if (font !== null) {
          this.increaseFontSize(font);
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
      }, 700);
    },
    checkVer(val) {
      if (val) {
        setTimeout(() => {
          const font = localStorage.getItem("ArrayFont");
          const background = localStorage.getItem("background");
          if (font !== null) {
            this.increaseFontSize(font);
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
        }, 0);
      }
    },
  },
};
</script>

<style scoped>
.header__visual {
  max-width: 1400px;
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
.activeVisualBurger {
  height: 100%;
  padding: 0;
  flex-wrap: wrap;
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
  background: white;
  color: black;
  border: 1px solid black;
}
.header__visual_color:nth-child(2) {
  background: black;
  color: white;
  border: 1px solid white;
}
.header__visual_color:nth-child(3) {
  background: #9dd1ff;
  color: #063462;
  border: 1px solid #063462;
}
.header__visual_color:nth-child(4) {
  background: #f7f3d6;
  color: #4d4b43;
  border: 1px solid #4d4b43;
}
.header__visual_color:nth-child(5) {
  background: #3b2716;
  color: #a9e44d;
  border: 1px solid #a9e44d;
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
@media screen and (max-width: 1300px) {
  .header__visual_size {
    font-size: 16px;
    min-width: 50px;
    border-radius: 20px;
  }
  .header__visual_size:nth-child(2) {
    font-size: 24px;
  }
  .header__visual_size:nth-child(3) {
    font-size: 36px;
  }
  .header__visual_color {
    font-size: 16px;
    min-width: 50px;
    border-radius: 20px;
  }
  .header__visual_button {
    font-size: 14px;
    padding: 15px 20px;
  }
}
@media screen and (max-width: 936px) {
  .header__visual_size {
    font-size: 20px;
    padding: 8px 10px;
    min-width: 75px;
    height: 50px;
  }
  .header__visual_size:nth-child(2) {
    font-size: 32px;
  }
  .header__visual_size:nth-child(3) {
    font-size: 40px;
  }
  .header__visual_color {
    font-size: 20px;
    padding: 8px 10px;
    min-width: 75px;
  }
  .header__visual_button {
    font-size: 14px;
    padding: 15px 20px;
  }
  .header__visual_btn {
    margin: 15px 0;
  }
  .header__visual_colors {
    margin: 0;
  }
  .header__visual_leave {
    margin: 0;
  }
}
@media screen and (max-width: 677px) {
  .header__visual_leave {
    margin: 0 0 15px 0;
    padding: 0;
  }
}
@media screen and (max-width: 600px) {
  .header__visual_colors {
    /* margin: 15px 0 0 0; */
    gap: 8px;
    flex-wrap: wrap;
  }
  .header__visual_font {
    padding: 0;
    margin: 0;
    gap: 8px;
    margin-bottom: 8px;
  }
  .header__visual_leave {
    margin: 0 0 0px 15px;
    padding: 0;
  }
}
@media screen and (max-width: 510px) {
  /* .header__visual_colors {
    margin: 15px 0 0 0;
  }
  .header__visual_font {
    margin: 15px 0 0 0;
  } */
}
@media screen and (max-width: 447px) {
}
</style>
