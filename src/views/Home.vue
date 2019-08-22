<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <div class="row v-centered">
          <div class="col-xs-9 text-white">
            <div class="line"></div>
            <h2 class="name">GIRISH</h2>
            <h2 class="name">DALOSO</h2>
            <p id="my-title">Designer & Developer</p>
            <p id="intro">I love producing simple but awesome design and converting it to code.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-banner">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 1000 574.4" enable-background="new 0 0 1000 574.4" xml:space="preserve">
      <g>
      	<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-513.7166" y1="-424.1549" x2="1636.9565" y2="533.3865">
      		<stop  offset="0" style="stop-color:#34355E"/>
      		<stop  offset="0.1993" style="stop-color:#3A355F"/>
      		<stop  offset="0.4755" style="stop-color:#493661"/>
      		<stop  offset="0.7951" style="stop-color:#5F3764"/>
      		<stop  offset="1" style="stop-color:#703766"/>
      	</linearGradient>
      	<path fill="url(#SVGID_1_)" d="M-413.6-649V619.4c78.7-38.7,160.6-57.4,244.8-71.2c235.5-38.4,459.9,12,697.3-57.6
      		c116.8-33.6,224.4-72,326.4-148.8c13-9.7,25.9-19.2,38.9-28.5L1225.1-649H-413.6z"/>
      	<path fill="#703766" d="M1225.1-649L893.9,313.4c172.6-123.2,346.8-204.9,543.4-245c1.2-0.3,2.5-0.5,3.7-0.8V-649H1225.1z"/>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      </svg>
    </div>

    <div class="container">
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
      <h1>This is an home page</h1>
    </div>
  </div>
</template>

<style scoped lang="sass">
.home
  height: 100%
  width: 100%

.hero
  position: relative
  z-index: 2
  padding: 4rem 0

.home-banner
  align-items: center
  background: #fff
  display: flex
  justify-content: center
  left: 0
  overflow: hidden
  position: absolute
  top: 0
  width: 100%
  z-index: 1

.home-banner svg
  height: 55rem
  width: 100%

.name
  font-size: 7rem
  font-family: 'Monoton', cursive
  font-weight: 400
  margin-top: 0
  margin-bottom: -1rem

#my-title
  font-size: 2.5rem
  font-weight: 200

#intro
  font-size: 1.5rem
  font-weight: 100

#my-title, #intro
  margin-top: 1.5rem
  margin-bottom: 0

@media (min-width: 1216px) and (max-width: 1407px)
  .name
    font-size: 6rem

  #my-title
    font-size: 2rem

  #intro
    font-size: 1.3rem

@media (min-width: 1024px) and (max-width: 1215px)
  .name
    font-size: 5rem

  #my-title
    font-size: 1.7rem

  #intro
    font-size: 1.2rem

@media (min-width: 769px) and (max-width: 1023px)
  .name
    font-size: 4.5rem

  #my-title
    font-size: 1.6rem

  #intro
    font-size: 1.2rem

@media (max-width: 768px)
  .name
    font-size: 3.5rem

  #my-title
    font-size: 1.4rem

  #intro
    font-size: 1.1rem

  .home-banner svg
    height: 40rem

</style>
