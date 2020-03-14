<template>
  <div class="article-container">
    <h1>Stage 1</h1>
    <ArticleList :articles="articles" />

    <ArticleList title="Theory" :articles="theoryArticles" />

    <ArticleList title="Practice" :articles="practiceArticles" />
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
          title: 'Stage 1 Overview',
          description:
            'The goals of stage 1 of MIA are to build a foundation in language acquisition theory, create a robust immersion environment, become comfortable with tools such as Anki, etc.',
          link: '/table-of-contents/stage-1/stage-1-overview'
        }
      ],
      theoryArticles: [
        {
          title: 'The Fluency Illusion',
          description:
            'If you’re a beginner (or any level, really) in a foreign language, up to what point are you able to judge someone’s language ability? The answer to this question is simple: You can only judge ability up to your own level...',
          link: '/table-of-contents/stage-1/theory/the-fluency-illusion'
        },
        {
          title: 'Epistemology',
          description:
            'The Dunning–Kruger effect is a cognitive bias in which, for any given skill, people at relatively low levels tend to overestimate their ability, due to not being competent enough to recognize their own incompetence. In language learning...',
          link: '/table-of-contents/stage-1/theory/epistemology'
        },
        {
          title: 'Theory Vs. Practice',
          description:
            'In the context of language acqusition, the idea of Theory vs Practice applies on two different levels...',
          link: '/table-of-contents/stage-1/theory/theory-versus-practice'
        },
        {
          title: 'Acquisition Vs. Learning',
          description:
            'The difference between acquisition and learning is crucial to understand when attempting to learn a foreign langauge.',
          link: '/table-of-contents/stage-1/theory/acquisition-vs-learning'
        },
        {
          title: 'The 6-Point Model of Language Ability',
          description:
            "As language learners, we need to be able to talk about different levels of ability. It's what allows us to set concrete goals, measure how effective different methods are, and determine how qualified someone is to give advice.",
          link: '/table-of-contents/stage-1/theory/6-point-model'
        }
      ],
      practiceArticles: [
        {
          title: 'Japanese Quickstart Guide',
          description:
            'The following guide was designed to contain everything needed to complete Stage 1 of MIA for Japanese. It’s mainly focused on what to do and less on why to do it.',
          link: '/table-of-contents/stage-1/jp-quickstart-guide'
        },
        {
          title: 'Recognition RTK / RTH',
          description:
            'In the two videos above I am talking about Japanese kanji and the book Remembering the Kanji, but all of the same principles apply to Chinese hanzi and the books Remembering Simplified Hanzi and Remembering Traditional Hanzi (from here on RTH) respectively.',
          link: '/table-of-contents/stage-1/practice/recognition-rtk'
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
}
</style>
