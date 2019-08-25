<template>
  <div class="experiments">
    <div class="hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-9 col-xs">
            <h1>Experiments</h1>
            <p>My future experimental works goes here. Website design, graphic design, and more.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="experiments-illusion">
      <illusion/>
    </div>

    <div class="experiments-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="card has-shadow text-center is-mint-green">
              <h1>Browser Mockup</h1>

              <div class="badges">
                <span class="badge photoshop"></span>
                <span class="badge illustrator"></span>
              </div>

              <img class="card-image" src="../../static/img/browser-mockup.png" alt="">
              <a class="button" href="https://drive.google.com/open?id=1S-ZgsNRI1JR0tODuYNXUO50JDMqds-Yb" target="_blank">Download</a>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="card has-shadow text-center is-light-blue">
              <h1>Photoshop Mockup</h1>

              <div class="badges">
                <span class="badge photoshop"></span>
                <span class="badge illustrator"></span>
              </div>

              <img class="card-image" src="../../static/img/photoshop-mockup.png" alt="">
              <a class="button" href="https://drive.google.com/open?id=13zoLZs2oNfDueC1KtP4rKtz0Ju_5HDOn" target="_blank">Download</a>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="card has-shadow text-center is-violet">
              <h1>Atom Mockup</h1>

              <div class="badges">
                <span class="badge photoshop"></span>
                <span class="badge illustrator"></span>
              </div>

              <img class="card-image" src="../../static/img/atom-mockup.png" alt="">
              <a class="button" href="https://drive.google.com/open?id=1bdQk6NCqKX6VU3i6m2lkTBM1uRDY_aK3" target="_blank">Download</a>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="card has-shadow text-center is-light-red">
              <h1>Phone Mockup</h1>

              <div class="badges">
                <span class="badge photoshop"></span>
                <span class="badge illustrator"></span>
              </div>

              <img class="card-image" src="../../static/img/phone-mockup.png" alt="">
              <a class="button" href="https://drive.google.com/open?id=1xOkj2qAbTRucnn4lfKbJRAMZu-9srO4i" target="_blank">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import illusion from '@/components/ExperimentsIllusion.vue'

export default {
  name: 'experiments',
  components: {
    illusion
  }
}
</script>

<style scoped lang="sass">
.experiments-illusion
  margin-top: -18rem

.hero, .experiments-container
  position: relative
  z-index: 2

.experiments-container
  margin-bottom: 5rem
  margin-top: -20rem

.hero > .container > .row > .col-lg-9
  margin: 0 auto

.hero h1
  margin: 0
  font-size: 4rem
  text-transform: uppercase

.hero p
  margin: 0.6rem 0
  font-size: 1.5rem
  font-weight: 100

.card
  color: #fff

.card-image
  margin: 1.5rem 0

.card h1
  font-weight: 200

@media (min-width: 1215px)
  .card
    margin: 1rem

@media (min-width: 569px) and (max-width: 768px)
  .card
    padding: 1.4rem

  .card h1
    font-size: 1.5rem

  .badge
    height: 1.5rem
    width: 1.5rem

@media (max-width: 568px)
  .hero h1
    font-size: 2rem

  .hero p
    font-size: 1.2rem

  .experiments-container
    margin-top: -17rem

  .card-image
    margin: 0.6rem 0

</style>
