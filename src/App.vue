<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="row center-xs">
          <div class="col-xs-6">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/projects">Projects</router-link>
            <router-link class="link" to="/samples">Samples</router-link>
            <router-link class="link" to="/contact">Contact</router-link>
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
  padding: 2rem

.link
  color: #fff
  text-decoration: none
  margin-right: 0.5rem
  font-weight: 300

.text-centered
</style>
