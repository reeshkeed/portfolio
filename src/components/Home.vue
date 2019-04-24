<template>
  <div class="home">
    <div class="fullscreen v-centered">
      <div class="container">
        <div class="row v-centered">
          <div class="col-xs-9">
            <div class="line"></div>
            <h2 class="name first">GIRISH</h2>
            <h2 class="name last">DALOSO</h2>
            <p id="my-title">Designer & Developer</p>
            <p id="description">I love producing simple but awesome design and converting it to code.</p>
          </div>

          <div class="col-xs-3">
            <img class="monotoned" src="/static/img/monotoned.svg" alt="">
          </div>
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
  height: 100vh
  margin-top: -8.7rem

.name
  font-size: 7.5rem
  font-family: 'Monoton', cursive
  font-weight: 400
  color: #434343

#my-title
  font-size: 2.5rem
  font-weight: 100

#description
  font-size: 1.5rem
  font-weight: 100

.monotoned
  height: 30rem
</style>
