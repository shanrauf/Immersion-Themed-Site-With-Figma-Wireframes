<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/extra/success-stories"
        >Success Stories</nuxt-link
      >
    </p>
    <h1>Jamal (Phantom Madman)</h1>
    <div class="article-content">
      <p>
        Jamal speaking after Japanese after 1 year 9 months of MIA:
      </p>
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
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
img {
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  clear: both;
}
@media screen and (max-width: 600px) {
  .article-container {
    width: 80%;
  }
  .article-content img {
    max-width: 400px;
  }
}
</style>
