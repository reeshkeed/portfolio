<template>
  <div class="work">
    <div class="container">
      <h1 class="title">Work</h1>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xs-12">
            <a href="#" class="card-link">
              <div class="card-box">
                <div class="card-content">
                  <h2 class="card-title">iParentPortal</h2>
                  <p class="card-description">School RFID Solutions and Parent Apps.</p>
                </div>
                <div class="card-image second-project"></div>
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
                <div class="card-image first-project"></div>
              </div>
            </a>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-xs-12">
            <a href="#" class="card-link">
              <div class="card-box">
                <div class="card-content">
                  <h2 class="card-title">iCon</h2>
                  <p class="card-description">A Wi-fi Vending Machine</p>
                </div>
                <div class="card-image third-project"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
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
