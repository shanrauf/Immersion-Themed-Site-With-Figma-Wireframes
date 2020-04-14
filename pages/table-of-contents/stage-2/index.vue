<template>
  <div class="article-container">
    <h1>Stage 2</h1>
    <ArticleList :articles="articles" />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList'

export default {
  transition: 'page',
  components: {
    ArticleList
  },
  data() {
    return {
      articles: [
        {
          title: 'Stage 2 Guide',
          description:
            'The following guide provides the basic instructions necessary to complete MIA Stage 2 for any major language. It’s mainly focused on what to do and less on why to do it.',
          link: '/table-of-contents/stage-2/mia-stage-2-guide'
        }
      ]
    }
  },
  head() {
    return {
      title: this.title,
      titleTemplate: 'Stage 2 - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency'
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
