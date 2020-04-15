<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/extra/success-stories"
        >Success Stories</nuxt-link
      >
    </p>
    <h1>Chris</h1>
    <div class="article-content">
      <p>
        Chris speaking after 1.5 years of MIA:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/Svs8Pu_zdAs" />

      <p>
        Interview with Chris:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/8fVk8_mmoNY" />

      <h1>Update Videos</h1>
      <p>
        1 month update:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/HHH7avGhbic" />

      <p>
        6 month update:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/QVGUi06cOwk" />

      9 month update:
      <YouTubeEmbed src="https://youtube.com/embed/W4zH6A4L3fc" />

      1 year update:
      <YouTubeEmbed src="https://youtube.com/embed/X0-BaJPhENo" />

      <p>
        15 month update:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/MDdyKJTgdAs" />

      <p>
        16 month update:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/OF65LBVci00" />

      <p>
        18 month update:
      </p>
      <YouTubeEmbed src="https://youtube.com/embed/qd6tOH-efVg" />
    </div>
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
      titleTemplate: 'Success Stories (Chris) - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Success Stories (Chris) - %s'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Success Stories (Chris) - %s'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
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
