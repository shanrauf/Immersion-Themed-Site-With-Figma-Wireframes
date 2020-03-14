<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-0/">Stage 0</nuxt-link>
    </p>
    <h2>Site Layout</h2>
    <YouTubeEmbed src="https://www.youtube.com/embed/jrh2VdGoYJw" />
  </div>
</template>

<script>
import YouTubeEmbed from '~/components/YouTubeEmbed'

export default {
  transition: 'page',
  components: {
    YouTubeEmbed
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  margin: 25px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
