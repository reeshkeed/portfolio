<template>
  <div id="app">
    <!-- Navbar -->
    <div class="nav container">
      <nav class="navbar text-centered">
        <router-link class="navbar-first" to="/"
          ><img class="navbar-logo" src="/static/img/g_triangle.svg" alt=""
        /></router-link>
        <div class="navbar-last">
          <router-link class="navbar-link" to="/">Home</router-link>
          <router-link class="navbar-link" to="/projects">Projects</router-link>
          <router-link class="navbar-link" to="/samples">Samples</router-link>
          <router-link class="navbar-link" to="/contact">Contact</router-link>
        </div>
      </nav>
    </div>

    <!-- Render Views -->
    <router-view />
    
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="sass">
.nav
  z-index: 999
  position: relative

.navbar, .navbar-first, .navbar-last, .navbar-link
  align-items: stretch
  display: flex

.navbar
  margin: 3rem 0

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
</style>
