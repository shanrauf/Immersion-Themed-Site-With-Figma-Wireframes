<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
    </p>
    <h2>Acquisition vs. Learning</h2>
    <YouTubeEmbed src="https://youtube.com/embed/CgIvG2ui5D8" />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
