<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar"  @click="toggleMenu">
      <div class="container">
        <div class="test">
          <router-link class="navbar-first" to="/"
            ><img class="navbar-logo" src="/static/img/g_triangle.svg" alt=""
          /></router-link>

          <div class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-items" :class="{ 'active': menuVisible }">
          <router-link class="navbar-link" to="/">Home</router-link>
          <router-link class="navbar-link" to="/projects">Projects</router-link>
          <router-link class="navbar-link" to="/samples">Samples</router-link>
          <router-link class="navbar-link" to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>


    <!-- Render Views -->
    <router-view />

    <!-- Footer -->
    <div class="footer">
      <div class="container">
        <p class="footer-name">© Girish Daloso</p>
        <div>
          <a class="icon" href="https://github.com/reeshkeed" target="_blank"><span class="icon-github"></span></a>
          <a class="icon" href="https://www.linkedin.com/in/girishdaloso/" target="_blank"><span class="icon-linkedin"></span></a>
        </div>
      </div>
    </div>
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
@import "/assets/sass/style.css"

.navbar
  padding: 3rem 0
  align-items: stretch
  display: flex

.navbar > .container
  align-items: stretch
  display: flex

.test
  align-items: stretch
  display: flex
  justify-content: flex-start
  margin-right: auto

.navbar-logo
  height: 2.7rem

.navbar-first
  align-items: stretch
  display: flex
  flex-shrink: 0

.navbar-link
  font-size: 0.9rem
  color: #434343
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

.footer
  padding: 5rem 0

.footer-name
  color: #555
  margin-bottom: 2rem

.icon
  text-decoration: none
  margin-right: 1rem
  color: #cecece
  font-size: 1.4rem

.icon:hover
  color: #434343

@media (max-width: 768px)
  .navbar-first
    justify-content: flex-start
    margin-right: auto

  .navbar > .container
    display: initial

  .navbar-link
    display: block
    padding-left: 0
    padding-top: 0.8rem
    padding-bottom: 0.8rem

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
    border-top: 1px solid #333
    display: block
    height: 13px
    width: 100%

  .navbar-items
    display: block
    position: absolute
    left: 0
    right: 0
    text-align: center

    max-height: 0px
    overflow-y: hidden

    background-color: #fff
    box-shadow: 0px 7px 7px 0 rgba(32, 33, 36, 0.14)

    transition: height, 0.5s ease

  .navbar-items.active
    max-height: 500px
</style>
