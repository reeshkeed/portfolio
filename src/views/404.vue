<template class="temps" lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-xs-12 v-centered">
        <div class="text-center">
          <h1 class="">404</h1>
          <h2>Page not found</h2>
          <p>The page you're looking for doesn't exist. Anyways I'm chilling here go see my projects.</p>
          <router-link class="button work" to="/work">Work</router-link>
          <router-link class="button experiments" to="/experiments">Experiments</router-link>
        </div>
      </div>
      <div class="col-md-7 col-xs-12">
        <img src="../../static/img/404.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.col-md-5, .col-xs-12
  margin-bottom: 5rem

h1
  margin: 0
  color: #0e1e25
  line-height: 9rem
  font-size: 10rem

h2
  margin: 0
  color: #0e1e25
  font-size: 2.5rem

p
  margin: 1rem 0 2rem
  color: #0e1e25
  font-size: 1.5rem

.experiments
  background: #5e5ca8
  margin-left: 0.6rem

.experiments:hover
  background: #46449b

@media (max-width: 568px)
  .col-md-5, .col-xs-12
    margin-bottom: 2rem

  h1
    line-height: normal
    font-size: 5rem

  h2
    font-size: 2rem

  p
    font-size: 1.2rem
</style>
