<template>
  <div>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/stage-0/">Stage 0</nuxt-link>
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

<style></style>
