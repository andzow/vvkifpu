<template>
  <div class="helper">
    <div class="helper__item" @click="increaseFontSize(1)"></div>
    <div class="helper__item" @click="increaseFontSize(-1)"></div>
  </div>
</template>

<script>
export default {
    methods: {
        increaseFontSize(size) {
            const elements = document.querySelectorAll('.font'); // Получаем ссылки на все элементы
            elements.forEach(element => {
                const computedStyle = window.getComputedStyle(element); // Получаем вычисленные стили
                const currentFontSize = parseFloat(computedStyle.fontSize); // Текущий размер шрифта в пикселях
                const newFontSize = currentFontSize + size // Увеличиваем размер шрифта в два раза
                element.style.fontSize = `${newFontSize}px`; // Применяем новый размер шрифта
                console.log(newFontSize)
            });
        }
    }
}
</script>

<style>
.helper {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 300px;
    width: 600px;
    background: #1098c2;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
.helper__item {
    width: 50px;
    height: 50px;
    background: #09627e;
    border-radius: 50%;
    cursor: pointer;
}
</style>