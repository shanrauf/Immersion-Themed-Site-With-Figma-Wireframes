<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/extra/success-stories"
        >Success Storiess</nuxt-link
      >
    </p>
    <h1>BritVsJapan</h1>
    <div class="article-content">
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
