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

    <div class="project-content">
      <div class="container">
        <h2 class="subtitle">About the Project</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <h2 class="subtitle">Technologies</h2>
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
