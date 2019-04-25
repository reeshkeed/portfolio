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
            <p id="description">I love producing simple but awesome design and converting it to code.</p>
          </div>

          <div class="col-xs-3 mobile-hidden">
            <img src="/static/img/monotoned.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-6">
          <a href="#" class="card-link">
            <div class="card">
              <div class="card-content text-white">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <img class="card-image" src="/static/img/projects/rizal.png" alt="">
            </div>
          </a>
        </div>

        <div class="col-xs-6">
          <a href="#" class="card-link">
            <div class="card">
              <div class="card-content text-white">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <img class="card-image" src="/static/img/projects/1.PNG" alt="">
            </div>
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-6">
          <a href="#" class="card-link">
            <div class="card">
              <div class="card-content text-white">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <img class="card-image" src="/static/img/projects/2.PNG" alt="">
            </div>
          </a>
        </div>

        <div class="col-xs-6">
          <a href="#" class="card-link">
            <div class="card">
              <div class="card-content text-white">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <img class="card-image" src="/static/img/projects/3.PNG" alt="">
            </div>
          </a>
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

#description
  font-size: 1.5rem
  font-weight: 100

.card
  position: relative
  width: auto
  overflow: hidden

.card:hover img
  -moz-transform: scale(1.1)
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

.card-image
  max-width: 100%

.card-content
  position: absolute
  width: -webkit-fill-available
  padding: 5.5rem 4.5rem

.card-title
  font-size: 2rem
  font-weight: 400

.card-description
  font-size: 1.2rem
  font-weight: 100

//*** MEDIA Query ***//

//@media (min-width: 1408px)

@media (min-width: 1216px) and (max-width: 1407px)
  .name
    font-size: 6rem

  #my-title
    font-size: 2rem

  #description
    font-size: 1.3rem

@media (min-width: 1024px) and (max-width: 1215px)
  .name
    font-size: 5rem

  #my-title
    font-size: 1.7rem

  #description
    font-size: 1.2rem

@media (min-width: 769px) and (max-width: 1023px)
  .name
    font-size: 4.5rem

  #my-title
    font-size: 1.6rem

  #description
    font-size: 1.2rem

@media (max-width: 768px)
  .name
    font-size: 3.5rem

  #my-title
    font-size: 1.4rem

  #description
    font-size: 1.1rem

</style>
