<template>
  <div class="contact">
    <div class="container">
      <div class="hero">
        <div class="row text-white">
          <div class="col-lg-5 col-md-5 col-sm-6 col-xs">
            <h2 class="title">Let's Build Something Together</h2>
          </div>

          <div class="col-lg col-md col-sm col-xs">
            <p class="subtitle">Get in touch</p>
            <p><a href="mailto:girishdaloso@hotmail.com" id="email">girishdaloso@hotmail.com</a></p>
            <a class="icon" href="https://github.com/reeshkeed" target="_blank" rel="noopener"><span class="icon-github"></span></a>
            <a class="icon" href="https://www.linkedin.com/in/girishdaloso/" target="_blank" rel="noopener"><span class="icon-linkedin"></span></a>
            <a class="icon" href="https://twitter.com/reeshkeed" target="_blank" rel="noopener"><span class="icon-twitter"></span></a>
          </div>
        </div>
      </div>

      <div class="illusion-cover">
        <illusion/>
      </div>
    </div>
  </div>
</template>

<script>
import illusion from '@/components/ContactIllusion.vue'

export default {
  name: 'contact',
  components: {
    illusion
  }
}
</script>

<style scoped lang="sass">
.hero
  position: relative
  z-index: 2
  margin-bottom: 18rem

.title
  font-weight: 300
  font-size: 4rem
  margin: 0 0 3rem

#email
  color: #fff
  font-size: 2rem
  font-weight: 200
  text-decoration: none

#email:hover
  text-decoration: underline

.icon
  color: #fff
  font-size: 2rem
  text-decoration: none
  margin-right: 1rem

.icon:hover
  color: #5eb1d2

@media (min-width: 1024px) and (max-width: 1215px)
  .title
    font-size: 3.3rem

  #email
    font-size: 1.8rem

@media (min-width: 769px) and (max-width: 1023px)
  .title
    font-size: 3rem

  #email
    font-size: 1.5rem


@media (max-width: 768px)
  .title
    font-size: 2.7rem

  #email
    font-size: 1.4rem

  .icon
    font-size: 1.7rem

@media (max-width: 568px)
  .hero
    padding: 0

  .title
    margin-bottom: 1rem
</style>
