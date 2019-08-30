<template>
  <div class="icon">
    <div class="hero">
      <div class="container text-white">
        <div class="line"></div>
        <h1 class="project-title">iCon Wi-fi Vending Machine</h1>
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
            iCon is a wi-fi vending machine dedicated for Bus Stations. Through this system, bus station passengers can access internet connection
            by inserting a coin. Afterwards, it will give time on to use depending on the coin that was inserted. This system will provide an
            easy internet access to bus stations passenger.
          </p>
          <p>
            <b>The machine accepts 1 peso coin, 5 peso coin, and 10 peso coin</b>. Both old version of coins and new version of coins the machine can
            accepts. 1 peso coin is equal to 5 minutes of internet connection, 5 peso coin is equal to 25 minutes, and 10 peso is equal
            to 50 minutes.
          </p>
        </div>

        <div class="content">
          <h2 class="subtitle">User Views</h2>
          <img class="project-img" src="../../static/img/work/icon/prev.png" alt="">
        </div>

        <div class="content">
          <h2 class="subtitle">Admin Views</h2>
          <img class="project-img" src="../../static/img/work/icon/admin-login.png" alt="">

          <p>The admin has the privilege to block user device or add time to the user.</p>
          <img class="project-img" src="../../static/img/work/icon/dashboard.png" alt="">
          <img class="project-img" src="../../static/img/work/icon/users.png" alt="">
        </div>

        <div class="content">
          <div class="row">
            <div class="col-lg col-md col-sm col-xs-12">
              <h2 class="subtitle">Technologies</h2>
              <ul>
                <li>PHP</li>
                <li>Python</li>
                <li>C Language</li>
                <li>Bootstrap 4</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div class="col-lg col-md col-sm col-xs-12">
              <h2 class="subtitle">Hardware</h2>
              <ul>
                <li>Raspberry Pi 3 B+</li>
                <li>Arduino UNO</li>
                <li>Thermal Printer</li>
                <li>Coin Acceptor</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="content">
          <h2 class="subtitle">Exhibit</h2>
          <p>
            Team iCon had the chance to participate in ICT Exhibit 2018 in our school. The purpose of the event is to give chance for students to
            showcase their thesis project.
          </p>
          <div class="row">
            <div class="col-lg">
              <img class="project-img" src="../../static/img/work/icon/exhibit.jpg" alt="">
            </div>
            <div class="col-lg">
              <img class="project-img" src="../../static/img/work/icon/award.jpeg" alt="">
            </div>
          </div>
          <p>Big shoutout to my team mates <i>Pearl Acala</i>, <i>John Henry Badeo</i>, and <i>Lizel Caliguid</i>.</p>
        </div>

        <div class="content">
          <h2 class="subtitle">Want to build your own?</h2>
          <p>
            This tutorial can help you get started
            <a class="weblink" href="https://pimylifeup.com/raspberry-pi-captive-portal/" target="_blank" rel="noopener">Raspberry Pi Captive Portal</a>
          </p>
        </div>

        <div class="content">
          <h2 class="subtitle">Source</h2>
          <p>
            Portal source code available at
            <a class="weblink" href="https://github.com/reeshkeed/iCon-v2" target="_blank" rel="noopener">Github</a>
          </p>
        </div>
      </div>

      <div class="container">
        <div class="navigation">
          <div class="text-left">
            <router-link class="navigation-control" to="/iparentportal"><span class="icon-arrow-left2"></span>Previous Project</router-link>
          </div>
          <div class="text-right">
            <router-link class="navigation-control" to="/joserizal">Next Project<span class="icon-arrow-right2"></span></router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import illusion from "@/components/ProjectsIllusion.vue"

export default {
  name: 'icon',
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
