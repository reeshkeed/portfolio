<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <div class="row v-centered">
          <div class="col-sm-7 col-xs-9 text-white">
            <div class="line"></div>
            <h2 class="name">GIRISH</h2>
            <h2 class="name">DALOSO</h2>
            <p id="my-title">Designer & Developer</p>
            <p id="intro">I love producing simple but awesome design and converting it to code.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-illusion">
      <illusion/>
    </div>

    <div class="home-recent">
      <div class="container">
        <h2 class="subtitle">Featured Works</h2>

        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="card">
              <h1>iCon</h1>
              <p>A Wi-fi Vending Machine.</p>
              <img class="card-image" src="../../static/img/featured/icon_fea.png" alt="">
              <button class="button" type="button">View Project</button>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="card">
              <h1>Jose Rizal Website</h1>
              <p>Website that contains Rizal's life.</p>
              <img class="card-image" src="../../static/img/featured/rizal_fea.png" alt="">
              <button class="button" type="button">View Project</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import illusion from '@/components/Illusion.vue'

export default {
  name: 'home',
  components: {
    illusion
  }
}
</script>

<style scoped lang="sass">
.hero
  position: relative
  z-index: 2

.home-illusion
  width: 100%
  justify-content: center
  align-items: center
  position: absolute
  overflow: hidden
  left: 0
  top: 0
  z-index: 1

.line
  background-color: #fff

.name
  font-size: 7rem
  font-weight: 400
  margin-top: 0
  margin-bottom: -1rem
  font-family: 'Monoton', cursive

#my-title
  font-size: 2.5rem
  font-weight: 300

#intro
  font-size: 1.5rem
  font-weight: 100

#my-title, #intro
  margin-top: 1.5rem
  margin-bottom: 0

.home-recent
  margin: 14rem 0

.card
  padding: 4rem 3rem
  border-radius: 1rem
  background-color: #f3f3f4

.card > h1, .card > p
  margin: 1rem

.card > button
  margin: 0.7rem

.card > p
  font-size: 1.1rem
  margin-bottom: 2rem

.card-image
  width: 100%
  margin-bottom: 1.5rem

@media (min-width: 1216px) and (max-width: 1407px)
  .hero
    padding: 4rem 0

  .name
    font-size: 6rem

  #my-title
    font-size: 2rem

  #intro
    font-size: 1.3rem

@media (min-width: 1024px) and (max-width: 1215px)
  .hero
    padding: 4rem 0

  .name
    font-size: 5rem

  #my-title
    font-size: 1.7rem

  #intro
    font-size: 1.2rem

@media (min-width: 769px) and (max-width: 1023px)
  .hero
    padding: 3rem 0

  .name
    font-size: 4.5rem

  #my-title
    font-size: 1.6rem

  #intro
    font-size: 1.2rem

@media (min-width: 569px) and (max-width: 768px)
  .home
    position: relative
    z-index: 1
    margin-top: -11rem

  .hero
    padding: 3.5rem 0
    padding-top: 13rem

  .name
    font-size: 3.5rem

  #my-title
    font-size: 1.4rem

  #intro
    font-size: 1.1rem

@media (max-width: 568px)
  .home
    position: relative
    z-index: 1
    margin-top: -11rem

  .hero
    padding: 1.6rem 0
    padding-top: 12rem

  .name
    font-size: 3.5rem

  #my-title
    font-size: 1.4rem

  #intro
    font-size: 1.1rem

</style>
