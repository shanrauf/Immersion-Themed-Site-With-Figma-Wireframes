<template>
  <div class="article-container">
    <ArticleList :title="'Stage 0'" :articles="articles" />
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
          title: 'Introduction',
          link: '/table-of-contents/stage-0/introduction/',
          description:
            'The Mass Immersion Approach is a comprehensive guide to acquiring high levels of fluency in a foreign language. Here are a few videos describing MIA and how to use the site.'
        },
        {
          title: 'Site Layout',
          link: '/table-of-contents/stage-0/site-layout/',
          description:
            'The articles on this website are structured within stages. There are 5 main stages of MIA. Here is a video explaining the site layout in more detail:'
        },
        {
          title: 'Overview',
          link: '/table-of-contents/stage-0/overview/',
          description:
            'This is an overview of every stage of the Mass Immersion Approach. To get a more detailed introduction into each stage select the specific stage in the Table of Contents'
        }
      ]
    }
  },
  head() {
    return {
      title: this.title,
      titleTemplate: 'Stage 0 - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'The following is the table of contents for stage 0 of MIA.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Stage 0 - Mass Immersion Approach'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'The following is the table of contents for stage 0 of MIA.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Stage 0 - Mass Immersion Approach'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'The following is the table of contents for stage 0 of MIA.'
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
