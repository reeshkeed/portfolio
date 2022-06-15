<template>
  <div class="logo">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="4 83 593 518"
      style="enable-background:new 4 83 593 518;"
      xml:space="preserve"
    >
      <path
        class="logo-top-shape"
        opacity="0.85"
        fill="none"
        d="M449.9,88H156L82.5,214.7h440.9L449.9,88z"
      />
      <path
        class="logo-middle-shape"
        opacity="0.85"
        fill="none"
        d="M156,341.3l73.5-126.7L156,88L82.5,214.7L9,341.3L82.5,468L156,594.6L229.4,468L156,341.3z"
      />
      <path
        class="logo-bottom-shape"
        opacity="0.85"
        fill="none"
        d="M597,341.3H449.9L376.4,468H82.6l73.5,126.7H450L523.5,468L597,341.3z"
      />
      <path
        class="logo-outlines"
        stroke="#ffffff"
        stroke-width="5"
        fill="none"
        d="M449.1,88H157.4L84.5,214.3H522L449.1,88z"
      />
      <path
        class="logo-outlines"
        stroke="#ffffff"
        stroke-width="5"
        fill="none"
        d="M156.4,342.6l73-126.3h-0.1L156.4,90L83.5,216.3L10.6,342.6l72.9,126.3l72.9,126.3l73-126.3h-0.1L156.4,342.6z"
      />
      <path
        class="logo-outlines"
        stroke="#ffffff"
        stroke-width="5"
        fill="none"
        d="M594,343.6H448.2l-73,126.3H83.6l72.9,126.3h291.7l72.9-126.3L594,343.6z"
      />
    </svg>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es';

export default {
  name: 'LogoAnimation',

  mounted() {
    // Animate logo draw outline
    anime({
      targets: '.logo-outlines',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: 100,
      direction: 'normal',
      loop: false,
    });

    // Animate logo fill fade in
    anime
      .timeline({
        delay: 2000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: false,
      })
      .add({ targets: '.logo-top-shape', fill: '#ef3f67' }, 0)
      .add({ targets: '.logo-middle-shape', fill: '#703766' }, 0)
      .add({ targets: '.logo-bottom-shape', fill: '#5f5da9' }, 0)
      .add({ targets: '.logo-outlines', stroke: 'rgba(255,255,255, 0)' }, 0);
  },
};
</script>

<style lang="sass" scoped>
.logo
  height: auto
  width: 6rem
  display: flex

@media (min-width: 569px) and (max-width: 768px)
  .logo
    width: 7rem

@media (min-width: 769px) and (max-width: 1023px)
  .logo
    width: 8rem

@media (min-width: 1024px) and (max-width: 1215px)
  .logo
    width: 9rem

@media (min-width: 1216px) and (max-width: 1407px)
  .logo
    width: 10rem

@media (min-width: 1408px)
  .logo
    height: auto
    width: 11rem
</style>
