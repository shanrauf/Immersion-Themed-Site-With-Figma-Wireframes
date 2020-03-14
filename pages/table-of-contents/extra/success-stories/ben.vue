<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/extra/success-stories/"
      >Success Stories</nuxt-link
    >
    <h2>Ben</h2>
    <p>
      Ben speaking after 2 years of learning Japanese:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/NYb5o2lewkY" />

    <p>
      Interview with Ben:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/cFgrqtvfwEQ" />
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
