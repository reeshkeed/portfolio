<template>
  <div class="iparentportal">
    <div class="hero">
      <div class="container text-white">
        <div class="line"></div>
        <h1 class="project-title">iParentPortal</h1>
        <p class="project-position">Front-End Developer Intern</p>
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
            iParentPortal Inc is an educational technology company that aims to help different schools to improve teachers,
            parents, and student's experience.
          </p>
          <p>
            To showcase their products, I am tasked to create and redesign their existing front-facing website.
          </p>
        </div>

        <div class="content">
          <h2 class="subtitle">Views</h2>
          <img class="project-img" src="../../static/img/work/ipp/home.png" alt="">
          <img class="project-img" src="../../static/img/work/ipp/contact.png" alt="">
          <img class="project-img" src="../../static/img/work/ipp/products.png" alt="">
        </div>

        <div class="content">
          <h2 class="subtitle">Technologies</h2>
          <ul>
            <li>Bulma</li>
            <li>SASS</li>
          </ul>
        </div>

        <div class="content">
          <h2 class="subtitle">Website</h2>
          <p>Visit website at <a class="weblink line-through" href="https://www.iparentportal.com" target="_blank" rel="noopener">https://www.iparentportal.com</a></p>
        </div>

        <div class="content">
          <h2 class="subtitle">Disclaimer</h2>
          <p>All SVG images is created by my Senior <a class="weblink" href="https://www.linkedin.com/in/levi-hernandez-95b916203/" target="_blank" rel="noopener">Ms. Levi Hernandez</a></p>
        </div>
      </div>

      <div class="container">
        <div class="navigation">
          <div class="text-right">
            <router-link class="navigation-control" to="/icon">Next Project<span class="icon-arrow-right2"></span></router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import illusion from "@/components/ProjectsIllusion.vue"

export default {
  name: 'iparentportal',
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

.line-through
  text-decoration: line-through

</style>
