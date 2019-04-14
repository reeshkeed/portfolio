<template>
  <div class="home">
    <div class="img-cover text-centered text-white">
      <div class="">
        <h1 id="me">GIRISH</h1>
        <h1 id="me">DALOSO</h1>
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
      description: "Designer / <developer>"
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

#me
  font-family: 'Code Light'
  font-size: 8rem
  text-align: center
  color: #8ba0fa

#description
  font-size: 2rem
  font-weight: 200
  text-align: center
</style>
