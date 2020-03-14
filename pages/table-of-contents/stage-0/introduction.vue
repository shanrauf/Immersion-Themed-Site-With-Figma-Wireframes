<template>
  <div class="article-container">
    <h1 class="article-title">Introduction</h1>
    <div class="article-content">
      <div>
        <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
        <nuxt-link to="/table-of-contents/stage-0/">Stage 0</nuxt-link>
      </div>
      <h1>Welcome to MIA!</h1>

      <YouTubeEmbed src="https://youtube.com/embed/KItnRHuKeEs" />

      <h1>The Origin Story</h1>
      <YouTubeEmbed src="https://youtube.com/embed/9ogE7WfywHA" />

      <div>
        Links:
        <ul>
          <li>
            <nuxt-link
              to="https://www.antimoon.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Antimoon</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="http://www.alljapaneseallthetime.com/blog/all-japanese-all-the-time-ajatt-how-to-learn-japanese-on-your-own-having-fun-and-to-fluency/"
              target="_blank"
              rel="noopener noreferrer"
              >AJATT</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="https://www.youtube.com/user/MATTvsJapan"
              target="_blank"
              rel="noopener noreferrer"
              >Matt's YouTube Channel</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="https://www.youtube.com/channel/UCQFe3x4WAgm7joN5daMm5Ew"
              target="_blank"
              rel="noopener noreferrer"
              >Yoga's YouTube Channel</nuxt-link
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
.post {
  width: 95%;
  height: 270px;
  margin: 20px auto;
  border-radius: 5px;
  background: white;
  position: relative;
}

.post .post-image {
  width: 40%;
  height: 100%;
  float: left;
}
.post .post-preview {
  padding: 10px;
  width: 60%;
  /* float: right; */
  float: left;
}
</style>
