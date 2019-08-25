<template>
  <div class="contact">
    <div class="container">
      <div class="hero fullscreen v-centered">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <h2 id="contact-title">Let's Build Something Together</h2>
            </div>

            <div class="col-md-8 col-sm-6 end-sm">
              <p id="contact-subtitle">Get in touch</p>
              <p id="contact"><a href="mailto:girishdaloso@hotmail.com" id="email">girishdaloso@hotmail.com</a></p>
              <a class="footer-icon" href="https://github.com/reeshkeed" target="_blank"><span class="icon-github"></span></a>
              <a class="footer-icon" href="https://www.linkedin.com/in/girishdaloso/" target="_blank"><span class="icon-linkedin"></span></a>
              <a class="footer-icon" href="https://twitter.com/reeshkeed" target="_blank"><span class="icon-twitter"></span></a>
            </div>
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
  padding: 0

#contact-title
  font-weight: 300
  font-size: 5rem
  margin: 0 0 3rem

#contact-subtitle
  font-size: 1.8rem
  color: #434343
  margin: 1rem 0 0 0

#contact
  font-size: 1.4rem
  font-weight: 100

#email
  color: #ee3e67
  font-weight: 400
  text-decoration: none

@media (max-width: 768px)
  #contact-title
    font-size: 3rem

  #contact-subtitle
    font-size: 1.6rem

  #contact
    font-size: 1.2rem


</style>
