<template>
  <div id="app">
    <div class="hero">
      <div class="d-flex">
        <img
          class="logo"
          src="../static/img/logo.svg"
          alt="Girish Daloso, Web Developer, Software Engineer"
        />

        <div class="rk-text d-flex">
          <p>REESH</p>
          <p>KEED</p>
        </div>
      </div>

      <a class="email" href="mailto:hello@girishdaloso.com"
        >hello@girishdaloso.com</a
      >

      <div class="icons d-flex">
        <a
          href="https://github.com/reeshkeed"
          aria-label="Github account link"
          target="_blank"
          rel="noopener"
          ><span class="icon-github"></span
        ></a>

        <a
          href="https://www.linkedin.com/in/girishdaloso/"
          aria-label="Linkedin account link"
          target="_blank"
          rel="noopener"
          ><span class="icon-linkedin"></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    menuVisible: false,
  }),

  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style lang="sass">
@import "/assets/sass/app.sass"
@import "../static/style.css"

*
  transition: .2s
  transition-timing-function: ease-in

.d-flex
  display: flex

.hero
  background-image: url("../static/img/silhouette.svg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover

  justify-content: center
  flex-direction: column
  align-items: center
  display: flex
  height: 100vh

.logo
  height: 6rem
  width: 6rem

.rk-text
  justify-content: center
  flex-direction: column
  color: #FFFFFF
  margin-left: 0.5rem

  p
    font-family: 'Monoton', cursive
    font-size: 3rem
    line-height: 3rem
    margin: 0

.email
  letter-spacing: 0.2rem
  text-decoration: none
  margin-top: 0.5rem
  font-size: 1rem
  font-weight: 100
  color: #FFFFFF

  &:hover
    text-decoration: underline

.icons
  position: absolute
  bottom: 0

  a
    color: $dark-tertiary
    text-decoration: none
    margin: 1rem 0.4rem
    font-size: 1.7rem

    &:hover
      color: #FFF

@media (min-width: 569px) and (max-width: 768px)
  .logo
    height: 7rem
    width: 7rem

  .rk-text p
    font-size: 3.2rem
    line-height: 3.2rem

  .email
    font-size: 1.1rem

  .icons a
    margin: 1rem 0.5rem
    font-size: 1.8rem

@media (min-width: 769px) and (max-width: 1023px)
  .logo
    height: 8rem
    width: 8rem

  .rk-text p
    font-size: 3.5rem
    line-height: 3.5rem

  .email
    font-size: 1.2rem

  .icons a
    margin: 1rem 0.5rem
    font-size: 2rem


@media (min-width: 1024px) and (max-width: 1215px)
  .logo
    height: 9rem
    width: 9rem

  .rk-text p
    font-size: 4rem
    line-height: 4rem

  .email
    font-size: 1.2rem

  .icons a
    margin: 1rem 0.5rem
    font-size: 2rem

@media (min-width: 1216px) and (max-width: 1407px)
  .logo
    height: 10rem
    width: 10rem

  .rk-text p
    font-size: 4.5rem
    line-height: 4.5rem

  .email
    font-size: 1.5rem

  .icons a
    margin: 1rem 0.5rem
    font-size: 2rem

@media (min-width: 1408px)
  .logo
    height: 11rem
    width: 11rem

  .rk-text p
    font-size: 5rem
    line-height: 5rem

  .email
    font-size: 1.6rem

  .icons a
    margin: 1rem 0.5rem
    font-size: 2rem
</style>
