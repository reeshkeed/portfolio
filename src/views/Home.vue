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

    <div class="home-recent container">
      <h1>Top</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
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
  padding: 6rem 0

.home-illusion
  width: 100%
  justify-content: center
  align-items: center
  position: absolute
  overflow: hidden
  left: 0
  top: 0
  z-index: 1

.home-recent
  margin-top: 14rem

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
