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
