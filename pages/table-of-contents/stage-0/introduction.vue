<template>
  <div class="article-container">
    <div>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-0/">Stage 0</nuxt-link>
    </div>
    <h1 class="article-title">Introduction</h1>
    <div class="article-content">
      <h1>Welcome to MIA!</h1>

      <YouTubeEmbed src="https://youtube.com/embed/KItnRHuKeEs" />

      <h1>The Origin Story</h1>
      <YouTubeEmbed src="https://youtube.com/embed/9ogE7WfywHA" />

      <div>
        Links:
        <ul>
          <li>
            <a
              href="https://www.antimoon.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Antimoon</a
            >
          </li>
          <li>
            <a
              href="http://www.alljapaneseallthetime.com/blog/all-japanese-all-the-time-ajatt-how-to-learn-japanese-on-your-own-having-fun-and-to-fluency/"
              target="_blank"
              rel="noopener noreferrer"
              >AJATT</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/MATTvsJapan"
              target="_blank"
              rel="noopener noreferrer"
              >Matt's YouTube Channel</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCQFe3x4WAgm7joN5daMm5Ew"
              target="_blank"
              rel="noopener noreferrer"
              >Yoga's YouTube Channel</a
            >
          </li>
        </ul>
      </div>
      <p>
        Sorry the videos got a little long! Future videos will be shorter, I
        promise.
      </p>
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
      titleTemplate: 'Introduction - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        { hid: 'og:title', name: 'og:title', content: 'Introduction - %s' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Introduction - %s'
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
