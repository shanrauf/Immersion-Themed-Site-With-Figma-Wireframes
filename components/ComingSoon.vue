<template>
  <div class="coming-soon-container">
    <div class="title-container">
      <h1>Coming Soon...</h1>
    </div>
    <ArticleList title="In the meantime..." :articles="popularArticles" />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList'
export default {
  components: { ArticleList },
  data() {
    return {
      popularArticles: [
        {
          title: 'Japanese Quickstart Guide',
          description:
            'The following guide was designed to contain everything needed to complete Stage 1 of MIA for Japanese. It’s mainly focused on what to do and less on why to do it.',
          link: '/table-of-contents/stage-1/jp-quickstart-guide'
        },
        {
          title: 'MIA Japanese Addon Guide',
          description:
            'MIA Japanese is an Anki 2.1 add-on that provides a variety of features for improving the ease and efficiency of Japanese study.',
          link: '/table-of-contents/anki/mia-japanese-addon/'
        },
        {
          title: 'The 6-Point Model of Language Ability',
          description:
            "As language learners, we need to be able to talk about different levels of ability. It's what allows us to set concrete goals, measure how effective different methods are, and determine how qualified someone is to give advice.",
          link: '/table-of-contents/stage-1/theory/6-point-model'
        }
      ]
    }
  }
}
</script>

<style>
.coming-soon-container {
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
