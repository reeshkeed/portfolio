<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-centered">
            <router-link class="link to-left" to="/"><img class="logo" src="/static/img/girish_logo.svg" alt=""></router-link>
            <div class="to-right">
              <router-link class="link" to="/">Home</router-link>
              <router-link class="link" to="/projects">Projects</router-link>
              <router-link class="link" to="/samples">Samples</router-link>
              <router-link class="link" to="/contact">Contact</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

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
html, body
  height: 100%

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  height: 100%

.navbar
  margin: 1rem

.link
  color: #000
  text-decoration: none
  margin-right: 1rem
  font-weight: 300

.logo
  fill: #000
  height: 3rem
</style>
