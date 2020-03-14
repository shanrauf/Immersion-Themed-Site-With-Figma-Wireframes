<template>
  <div class="article-container">
    <h2>Mass Immersion Approach</h2>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/extra/success-stories/"
      >Success Stories</nuxt-link
    >
    <h2>BritVsJapan</h2>
    <p>
      BritVsJapan speaking after 2 years of learning Japanese:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/gXBgK4a3FWQ" />

    <p>
      Interview with BritVsJapan:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/uCgiP_ZXDJk" />

    <h1>Update Videos</h1>
    <p>
      6 month update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/vmJHKByxvVM" />

    <p>
      1 year update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/PsFBbWXBJyc" />

    <p>
      1.5 year update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/t2H63wUoVlU" />
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
