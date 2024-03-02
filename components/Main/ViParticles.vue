<template>
  <div class="particles">
    <NuxtParticles id="tsparticles" :options="options" />
  </div>
</template>

<script setup>
import { ref, useRuntimeConfig } from "#imports";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";

const { mode } = useRuntimeConfig().public.particles;

const show = ref(false);

if (process.client && mode === "custom") {
  await loadFull(tsParticles);
}

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 155.84415584415586,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 155.84415584415586,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 183.8161838161838,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
</script>

<style>
#tsparticles {
  position: relative;
  z-index: 5;
  /* position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100vw;
  z-index: 5;
  overflow: hidden;
  border: 1px solid red; */
}
</style>
