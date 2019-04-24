<template>
  <div class="home">
    <div class="home-bg text-centered">
      <div class="container">
        <div class="">
          <div class="line"></div>
          <h1 class="me">GIRISH</h1>
          <h1 class="me">DALOSO</h1>
          <p id="designer-text">{{ designer }}</p>
          <p id="developer-text">{{ developer }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      designer: "Designer",
      developer: "<developer>"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.home
  height: 100%

.home-bg
  background-image: url('/static/img/portfolio-bg.svg')
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 85%
  margin-top: -3.7rem
  padding: 4rem

.me
  margin: 0
  font-size: 9rem
  font-family: 'Monoton', cursive
  font-weight: 400
  color: #434343

#designer-text, #developer-text
  font-size: 2rem
  display: inline-block
  margin: 0
  color: #434343

#designer-text
  font-family: 'Norican', cursive

#developer-text
  font-family: 'Inconsolata', monospace

#description
  font-size: 3rem
  font-weight: 200
  text-align: center

.monotoned
  height: 25rem
</style>
