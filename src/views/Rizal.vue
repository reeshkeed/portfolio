<template>
  <div class="rizal">
    <div class="hero">
      <div class="container text-white">
        <div class="line"></div>
        <h1 class="project-title">Jose Rizal Website</h1>
        <p class="project-position">Lead Programmer</p>
      </div>
    </div>

    <div class="illusion-cover">
      <illusion/>
    </div>

    <div class="project-container">
      <div class="container">
        <div class="content">
          <h2 class="subtitle">About the Project</h2>
          <p>
            As we are completing our course, we are tasked to develop a website about Jose Rizal. This website will contain information about
            Jose Rizal's life and works. It also aims to help our fellow students and other people research and discover something about Rizal's life.
          </p>
          <p>
            It contains the details of his different characteristics, his family, his travels abroad to study, his poems, philosophies, achievements,
            and other works and accomplishments.
          </p>
          <p>
            Through this website, you will learn the importance of learning the life and works of Rizal.
          </p>
        </div>

        <div class="content">
          <h2 class="subtitle">Views</h2>
          <img class="project-img" src="../../static/img/work/rizal/home.png" alt="">
          <img class="project-img" src="../../static/img/work/rizal/biography.png" alt="">
          <img class="project-img" src="../../static/img/work/rizal/travels.png" alt="">
          <img class="project-img" src="../../static/img/work/rizal/sculptures.png" alt="">
          <img class="project-img" src="../../static/img/work/rizal/about.png" alt="">
        </div>

        <div class="content">
          <h2 class="subtitle">Technologies</h2>
          <ul>
            <li>Vue.js</li>
            <li>Bootstrap 4</li>
            <li>SASS</li>
            <li>JSON</li>
          </ul>
        </div>

        <div class="content">
          <h2 class="subtitle">Website</h2>
          <p>This site is hosted at <a class="weblink" href="https://joserizal.girishdaloso.me/" target="_blank" rel="noopener">https://joserizal.girishdaloso.me/</a></p>
        </div>

        <div class="content">
          <h2 class="subtitle">Source</h2>
          <p>Code is available at <a class="weblink" href="https://github.com/reeshkeed/Rizal" target="_blank" rel="noopener">Github</a></p>
        </div>
      </div>

      <div class="container">
        <div class="navigation">
          <div class="text-left">
            <router-link class="navigation-control" to="/icon"><span class="icon-arrow-left2"></span>Previous Project</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import illusion from "@/components/ProjectsIllusion.vue"

export default {
  name: 'rizal',
  components: {
    illusion
  }
}
</script>

<style lang="sass" scoped>
.hero
  z-index: 2
  padding: 3rem 0
  position: relative

.line
  background: #fff

</style>
