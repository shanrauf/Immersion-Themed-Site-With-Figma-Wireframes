<template>
  <div class="article-container">
    <div>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
    </div>
    <h2>Stage 1 Overview</h2>
    For a brief summary of the action steps in written form:
    <nuxt-link to="/table-of-contents/stage-0/overview/"
      >MIA Overview</nuxt-link
    >
    <h1>Goals:</h1>
    <ul>
      <li>Build a foundation in language acquisition theory.</li>
      <li>Create a robust immersion environment.</li>
      <li>Become comfortable with tools such as Anki.</li>
      <li>
        Gain a foundation in understanding the spoken and written forms of your
        target language, such that you can understand roughly 50% of basic
        native content.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  transition: 'page',
  head() {
    return {
      title: this.title,
      titleTemplate: 'Stage 1 Overview - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Here is a general overview of stage one of MIA.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Stage 1 Overview - Mass Immersion Approach'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Here is a general overview of stage one of MIA.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Stage 1 Overview - Mass Immersion Approach'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Here is a general overview of stage one of MIA.'
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
