<template>
  <div class="work">
    <div class="hero">
      <div class="container text-center text-white">
        <h1>Work</h1>
        <p>Here are some of the projects that I have work on.</p>
      </div>
    </div>

    <div class="illusion-cover">
      <illusion/>
    </div>

    <div class="work-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card has-shadow">
              <h1>iParentPortal</h1>
              <p>A front-facing website for iParentPortal products.</p>
              <img class="card-image" src="../../static/img/work/ipp/prev.png" alt="">
              <router-link class="button" to="/iparentportal">View Project</router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card has-shadow">
              <h1>iCon</h1>
              <p>iCon is a wi-fi vending machine dedicated for Bus Stations.</p>
              <img class="card-image" src="../../static/img/work/icon/prev.png" alt="">
              <router-link class="button" to="/icon">View Project</router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="card has-shadow">
              <h1>Jose Rizal</h1>
              <p>Contains information about Jose Rizal's life and works.</p>
              <img class="card-image" src="../../static/img/work/rizal/prev.png" alt="">
              <router-link class="button" to="/joserizal">View Project</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import illusion from '@/components/WorkIllusion.vue'

export default {
  name: 'work',
  components: {
    illusion
  }
}
</script>

<style scoped lang="sass">

.hero, .work-container
  position: relative
  z-index: 2

.work-container
  margin-bottom: 5rem

.hero h1
  margin: 0
  font-size: 4rem
  text-transform: uppercase

.hero p
  margin: 0.6rem 0
  font-size: 1.5rem
  font-weight: 100

.card
  background-color: #fff

.card-image
  margin-bottom: 0.3rem

@media (max-width: 568px)
  .hero h1
    font-size: 3rem

  .hero p
    font-size: 1.2rem


</style>
