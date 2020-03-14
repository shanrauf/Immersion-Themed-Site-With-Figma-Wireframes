<template>
  <div class="article-container">
    <h1>Tools</h1>
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
          title: 'MIA Glossary',
          description:
            'The MIA Glossary contains entries for all technical, language learning terms that you may come across on the site.',
          link: '/table-of-contents/tools/glossary'
        },
        {
          title: 'Anki',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link: '/table-of-contents/anki'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  margin: 25px auto;
  width: 40%;
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
</style>
