<template>
  <div class="home">
    <div class="slanted-container">
      <div class="slanted-bg"></div>
      <div class="slanted-content">
        <h1 class="me">GIRISH</h1>
        <h1 class="me">DALOSO</h1>
      </div>
    </div>

    <section>
      <h1>Section Content</h1>
    </section>

    <div class="img-cover text-centered text-white">
      <div class="">
        <div class="">
          <p id="designer-text">{{ designer }}</p>
          <p id="developer-text">{{ developer }}</p>
        </div>
      </div>
    </div>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
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

.img-cover
  margin-top: -5.7rem
  height: 100%

.me
  -webkit-background-clip: text
  margin: 0
  color: transparent
  font-size: 8rem
  text-align: center
  font-family: 'Monoton', cursive
  font-weight: 400
  background-image: url('/static/img/bg.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover

#designer-text, #developer-text
  font-size: 1.5rem
  color: #434343
  display: inline-block

#designer-text
  font-family: 'Norican', cursive

#developer-text
  font-family: 'Inconsolata', monospace

#description
  font-size: 2rem
  font-weight: 200
  text-align: center
</style>
