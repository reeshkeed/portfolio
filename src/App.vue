<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar"  @click="toggleMenu">
      <div class="container">
        <div class="navbar-menu">
          <router-link class="navbar-logo" to="/"
            ><img class="logo" src="../static/img/logo.svg" alt=""
          /></router-link>

          <div class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-items" :class="{ 'active': menuVisible }">
          <router-link class="navbar-link" to="/">Home</router-link>
          <router-link class="navbar-link" to="/work">Work</router-link>
          <router-link class="navbar-link" to="/samples">Samples</router-link>
          <router-link class="navbar-link" to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    menuVisible: false
  }),

  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
};
</script>

<style lang="sass">
@import "/assets/sass/app.sass"

.navbar
  padding: 3rem 0
  align-items: stretch
  display: flex
  position: relative
  z-index: 2

.navbar > .container
  align-items: stretch
  display: flex

.navbar-menu
  align-items: stretch
  display: flex
  justify-content: flex-start
  margin-right: auto

.logo
  height: 2.7rem

.navbar-logo
  align-items: stretch
  display: flex
  flex-shrink: 0

.navbar-link
  font-size: 0.9rem
  color: #fff
  text-decoration: none
  text-transform: uppercase
  font-weight: 400
  padding-left: 3rem

.navbar-items
  align-items: stretch
  display: flex
  flex-grow: 1
  flex-shrink: 0
  justify-content: flex-end
  margin-left: auto
  align-items: center

.burger
  display: none
  justify-content: flex-end
  margin-left: auto

.router-link-exact-active
  color: $primary !important

.navbar-link:hover, .link:hover
  color: $tertiary

@media (max-width: 768px)
  .navbar-logo
    justify-content: flex-start
    margin-right: auto

  .navbar > .container
    display: initial

  .navbar-link
    display: block
    padding-left: 0
    padding-top: 0.8rem
    padding-bottom: 0.8rem
    color: #434343

  .burger
    justify-content: flex-end
    box-sizing: border-box
    display: block
    height: 52px
    width: 52px
    padding: 10px
    cursor: pointer
    margin-left: auto

  .burger span
    border-top: 2px solid #fff
    display: block
    height: 8px
    width: 100%

  .navbar-items
    display: block
    position: absolute
    left: 0
    right: 0
    text-align: center
    z-index: 2
    max-height: 0px
    overflow-y: hidden
    background-color: #fff
    box-shadow: 0px 7px 7px 0 rgba(32, 33, 36, 0.14)
    transition: height, 0.5s ease

  .navbar-items.active
    max-height: 500px
</style>
