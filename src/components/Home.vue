<template>
  <div class="home">
    <div class="img-cover"></div>
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
      msg: "Home"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.home
  height: 100%

.img-cover
  margin-top: -5.1rem
  background: linear-gradient(to right top, rgba(139, 160, 250, 0.8), rgba(142, 163, 250, 0.8), rgba(145, 165, 250, 0.8), rgba(148, 168, 250, 0.8), rgba(151, 170, 250, 0.8)), url('/static/img/home_cover.jpg') no-repeat center center
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  height: 100%
</style>
