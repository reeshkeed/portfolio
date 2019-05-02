<template>
  <div class="samples">
    <div class="container">
      <h1 class="title">Sample</h1>

      <router-link class="card-link" to="/ipp">
        <div class="wide-card is-red">
          <div class="row">
            <div class="col-lg-7 col-xs-12 v-centered">
              <div class="wide-card-content text-white">
                <h2 class="wide-title">Xhander's</h2>
                <p class="card-description">A sample for restaurant website.</p>
              </div>
            </div>

            <div class="col-lg-5 col-xs-12">
              <div class="wide-image fourth-project-wide"></div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Samples"
};
</script>
