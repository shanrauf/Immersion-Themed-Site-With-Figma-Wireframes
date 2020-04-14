<template>
  <div class="article-container">
    <div>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-0/">Stage 0</nuxt-link>
    </div>
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
  },
  head() {
    return {
      title: this.title,
      titleTemplate: 'Site Layout - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Here is a description of the site layout for the Mass Immersion Approach that will help you efficiently utilize the website.'
        }
      ]
    }
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
