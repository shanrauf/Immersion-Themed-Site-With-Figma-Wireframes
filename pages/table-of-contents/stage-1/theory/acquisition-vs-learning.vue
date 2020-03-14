<template>
  <div>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
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

<style></style>
