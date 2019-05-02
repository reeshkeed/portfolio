<template>
  <div class="home">

    <div class="fullscreen v-centered">
      <div class="container">
        <div class="row v-centered">
          <div class="col-xs-9">
            <div class="line"></div>
            <h2 class="name">GIRISH</h2>
            <h2 class="name">DALOSO</h2>
            <p id="my-title">Designer & Developer</p>
            <p id="intro">I love producing simple but awesome design and converting it to code.</p>
          </div>

          <div class="col-xs-3 mobile-hidden">
            <img src="/static/img/monotoned.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <p class="small-subtitle">Recent work</p>
      <div class="row">

        <div class="col-lg-6 col-xs-12">
          <router-link to="/ipp">
            <div class="card-box">
              <div class="card-content">
                <h2 class="card-title">iParentPortal</h2>
                <p class="card-description">School RFID Solutions and Parent Apps.</p>
              </div>
              <div class="card-image first-featured is-green"></div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-6 col-xs-12">
          <router-link to="/icon">
            <div class="card-box">
              <div class="card-content">
                <h2 class="card-title">iCon</h2>
                <p class="card-description">A Wi-fi Vending Machine</p>
              </div>
              <div class="card-image second-featured is-yellow"></div>
            </div>
          </router-link>
        </div>

      </div>
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
  margin-top: -8.7rem

.name
  font-size: 7.5rem
  font-family: 'Monoton', cursive
  font-weight: 400
  color: #434343

#my-title
  font-size: 2.5rem
  font-weight: 100

#intro
  font-size: 1.5rem
  font-weight: 100

.featured
  position: relative




//*** MEDIA Query ***//

//@media (min-width: 1408px)

@media (min-width: 1216px) and (max-width: 1407px)
  .name
    font-size: 6rem

  #my-title
    font-size: 2rem

  #intro
    font-size: 1.3rem

@media (min-width: 1024px) and (max-width: 1215px)
  .name
    font-size: 5rem

  #my-title
    font-size: 1.7rem

  #intro
    font-size: 1.2rem

@media (min-width: 769px) and (max-width: 1023px)
  .name
    font-size: 4.5rem

  #my-title
    font-size: 1.6rem

  #intro
    font-size: 1.2rem

@media (max-width: 768px)
  .name
    font-size: 3.5rem

  #my-title
    font-size: 1.4rem

  #intro
    font-size: 1.1rem

</style>
