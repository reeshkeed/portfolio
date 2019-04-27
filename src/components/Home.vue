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
        <div class="col-lg-6 col-xs-12">
          <a href="#" class="card-link">
            <div class="card-box">
              <div class="card-content">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <div class="card-image first-project"></div>
            </div>
          </a>
        </div>

        <div class="col-lg-6 col-xs-12">
          <a href="#" class="card-link">
            <div class="card-box">
              <div class="card-content">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <div class="card-image second-project"></div>
            </div>
          </a>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-xs-12">
          <a href="#" class="card-link">
            <div class="card-box">
              <div class="card-content">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <div class="card-image third-project"></div>
            </div>
          </a>
        </div>

        <div class="col-lg-6 col-xs-12">
          <a href="#" class="card-link">
            <div class="card-box">
              <div class="card-content">
                <h2 class="card-title">Jose Rizal Website</h2>
                <p class="card-description">Contains information about Rizal’s life and works.</p>
              </div>
              <div class="card-image fourth-project"></div>
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

.card-title
  font-size: 2rem
  font-weight: 400

.card-description
  font-size: 1.2rem
  font-weight: 100

.card-box
  position: relative
  height: 644px
  overflow: hidden

.card-image
  height: 100%
  width: 100%
  background-size: cover
  background-position: center
  transition: all 0.7s ease

.first-project
  background-image: url('/static/img/projects/rizal.PNG')

.second-project
  background-image: url('/static/img/projects/2.PNG')

.third-project
  background-image: url('/static/img/projects/3.PNG')

.fourth-project
  background-image: url('/static/img/projects/1.PNG')

.card-image:hover
  transform: scale(1.1) rotate(1deg)
  //background-image: url('/static/img/projects/1.PNG')

.card-content
  position: absolute
  top: 0
  left: 0
  width: -webkit-fill-available
  padding: 6rem 4rem
  color: #fff
  border-radius: 1px 1px 0 0
  z-index: 100

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

  .card-image
    background-position: left

  .card-image:hover
    transform: none

</style>
