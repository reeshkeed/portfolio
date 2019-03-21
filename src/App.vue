<template>
  <div id="app">
    <img src="./assets/img/kslogo.png">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00adef;
  margin-top: 60px;
}
</style>
