<template>
  <div class="main__control">
    <div class="main__control_navigation">
      <button class="main__control_prev btn_prev" @click="$emit('prev')">
        <svg
          width="14"
          height="25"
          viewBox="0 0 14 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            class="stroke"
            d="M1 12.5L13 1ZM1 12.5L13 24Z"
            fill="url(#pattern0)"
          />
          <path
            class="stroke"
            d="M1 12.5L13 1ZM1 12.5L13 24Z"
            fill="url(#paint0_linear_2133_986)"
            fill-opacity="0.2"
          />
          <path
            class="stroke"
            d="M13 1L1 12.5L13 24"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_2133_986"
                transform="matrix(0.000467936 0 0 0.000244141 -0.285197 0)"
              />
            </pattern>
            <linearGradient
              id="paint0_linear_2133_986"
              x1="15.25"
              y1="27.7367"
              x2="0.775504"
              y2="25.2439"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.2" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <button class="main__control_next btn_next" @click="$emit('next')">
        <svg
          width="14"
          height="25"
          viewBox="0 0 14 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            class="stroke"
            d="M13 12.5L1 1ZM13 12.5L1 24Z"
            fill="url(#pattern0)"
          />
          <path
            class="stroke"
            d="M13 12.5L1 1ZM13 12.5L1 24Z"
            fill="url(#paint0_linear_2133_988)"
            fill-opacity="0.2"
          />
          <path
            class="stroke"
            d="M1 1L13 12.5L1 24"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_2133_988"
                transform="matrix(0.000467936 0 0 0.000244141 -0.285197 0)"
              />
            </pattern>
            <linearGradient
              id="paint0_linear_2133_988"
              x1="-1.25"
              y1="27.7367"
              x2="13.2245"
              y2="25.2439"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.2" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
    <div class="main__control_items">
      <div class="main__control_pagination">
        <div class="main__control_item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main__control {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
}
.main__control_next {
  margin-left: 40px;
}
.main__control_prev {
  transition: all 0.3s ease;
}
.main__control_next {
  transition: all 0.3s ease;
}
.main__control_next:hover {
  transform: scale(0.98);
}
.main__control_prev:hover {
  transform: scale(0.98);
}
</style>
