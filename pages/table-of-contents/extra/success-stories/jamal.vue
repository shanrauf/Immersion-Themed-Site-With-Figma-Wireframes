<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/extra/success-stories/"
      >Success Stories</nuxt-link
    >
    <h2>Jamal (Phantom Madman)</h2>
    Jamal speaking after Japanese after 1 year 9 months of MIA:
    <YouTubeEmbed src="https://youtube.com/embed/4HLOmG_K9cE" />

    <h1>Update Videos</h1>
    <p>
      5 month update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/IeygfBeIWdc" />

    <p>
      1 year update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/ipYyPQJsUPk" />
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
