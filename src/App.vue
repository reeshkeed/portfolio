<template>
  <div id="app">
    <!-- Navbar -->
    <div class="nav container">
      <nav class="navbar"  @click="toggleMenu">
        <router-link class="navbar-first" to="/"
          ><img class="navbar-logo" src="/static/img/g_triangle.svg" alt=""
        /></router-link>

        <div class="navbar-last">
          <div class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="menu" :class="{ 'active': menuVisible }">
            <router-link class="navbar-link" to="/">Home</router-link>
            <router-link class="navbar-link" to="/projects">Projects</router-link>
            <router-link class="navbar-link" to="/samples">Samples</router-link>
            <router-link class="navbar-link" to="/contact">Contact</router-link>
          </div>
        </div>
      </nav>
    </div>

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

.navbar, .navbar-first, .navbar-last, .navbar-link
  align-items: stretch
  display: flex

.navbar
  margin: 3rem 0
  display: flex
  align-items: center

.navbar-logo
  height: 2.7rem

.navbar-first
  justify-content: flex-start
  margin-right: auto

.navbar-last
  justify-content: flex-end
  margin-left: auto

.navbar-link
  font-size: 0.9rem
  color: #434343
  text-decoration: none
  text-transform: uppercase
  font-weight: 400
  padding-left: 3rem

.burger
  display: none

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
  .burger
    background: #ccc
    box-sizing: border-box
    display: block

    height: 52px
    width: 52px
    padding: 10px

    cursor: pointer

  .burger span
    display: block
    border-top: 1px solid #333
    height: 13px
    width: 100%

  .menu
    background: #ccc
    display: none

  .menu.active
    display: block

  .menu .item
    display: block
    padding: 10px
</style>
