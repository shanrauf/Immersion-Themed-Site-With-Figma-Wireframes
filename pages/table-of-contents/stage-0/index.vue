<template>
  <div>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link>
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
            'The Mass Immersion Approach is a comprehensive guide to acquiring high levels of fluency in a foreign language.'
        },
        {
          title: 'Site Layout',
          link: '/table-of-contents/stage-0/site-layout/',
          description:
            'The articles on this website are structured within stages. There are 5 main stages of MIA.'
        },
        {
          title: 'Overview',
          link: '/table-of-contents/stage-0/overview/',
          description:
            'This is an overview of every stage of the Mass Immersion Approach.'
        }
      ]
    }
  }
}
</script>

<style></style>
