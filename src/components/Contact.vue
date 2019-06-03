<template>
  <div class="contact">
    <div class="fullscreen v-centered">
      <div class="container">
        <h2 id="contact-title">Hi there!</h2>

        <p id="contact-subtitle">Interested working with me?</p>
        <p id="contact">send an email to <a href="mailto:girishdaloso@hotmail.com" id="email">girishdaloso@hotmail.com</a></p>
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
  name: "Contact"
};
</script>

<style lang="sass">
.contact
  margin-top: -8.7rem

#contact-title
  font-weight: 300
  font-size: 4rem

#contact-subtitle
  font-size: 2rem
  color: #434343

#contact
  font-size: 1.4rem
  font-weight: 100

#email
  color: #aba9e7
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
