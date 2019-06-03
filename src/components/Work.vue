<template>
  <div class="work">
    <div class="container">
      <h1 class="title">Work</h1>

      <div class="container">

        <router-link class="card-link" to="/ipp">
          <div class="wide-card is-green">
            <div class="row">
              <div class="col-lg-7 col-xs-12 v-centered">
                <div class="wide-card-content text-white">
                  <h2 class="wide-title">iParentPortal</h2>
                  <p class="card-description">School RFID Solutions and Parent Apps.</p>
                </div>
              </div>

              <div class="col-lg-5 col-xs-12">
                <div class="wide-image first-project-wide"></div>
              </div>
            </div>
          </div>
        </router-link>

        <router-link class="card-link" to="/rizal">
          <div class="wide-card is-blue">
            <div class="row">
              <div class="col-lg-7 col-xs-12 v-centered">
                <div class="wide-card-content text-white">
                  <h2 class="wide-title">Jose Rizal Website</h2>
                  <p class="card-description">Contains information about Rizal’s life and works.</p>
                </div>
              </div>

              <div class="col-lg-5 col-xs-12">
                <div class="wide-image second-project-wide"></div>
              </div>
            </div>
          </div>
        </router-link>

        <router-link class="card-link" to="/icon">
          <div class="wide-card is-yellow">
            <div class="row">
              <div class="col-lg-7 col-xs-12 v-centered">
                <div class="wide-card-content text-white">
                  <h2 class="wide-title">iCon</h2>
                  <p class="card-description">A Wi-fi Vending Machine.</p>
                </div>
              </div>

              <div class="col-lg-5 col-xs-12">
                <div class="wide-image third-project-wide"></div>
              </div>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </div>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141297455-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-141297455-1');
  </script>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style lang="sass">
  .title
    font-weight: 200

  .box
    height: 10rem
    background: #434343
</style>
