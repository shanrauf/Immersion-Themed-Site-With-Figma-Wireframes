<template>
  <div class="article-container">
    <div>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
    </div>
    <h1>Theory vs. Practice</h1>
    <div class="article-content">
      <p>
        The following video discusses theory vs practice as it pertains to
        langauge learning:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/UHAa0mFOsYM" />

      <p>
        In the context of language acqusition, the idea of Theory vs Practice
        applies on two different levels:
      </p>
      <ul>
        <li>
          "Language acquisition theory" vs "direct experience acquiring
          language"
        </li>
        <li>
          "Grammar and vocabulary knowledge" vs "intuitive (acquired) language
          ability"
        </li>
      </ul>
      <p>
        Everything I explain in the video above applies to both of these
        domains.
      </p>
    </div>
  </div>
</template>

<script>
import YouTubeEmbed from '@/components/YouTubeEmbed'

export default {
  transition: 'page',
  components: { YouTubeEmbed },
  head() {
    return {
      title: this.title,
      titleTemplate: 'Theory vs. Practice - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'In the context of language acqusition, the idea of Theory vs Practice applies on two different levels...'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Theory vs. Practice - %s'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'In the context of language acqusition, the idea of Theory vs Practice applies on two different levels...'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Theory vs. Practice - %s'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'In the context of language acqusition, the idea of Theory vs Practice applies on two different levels...'
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
