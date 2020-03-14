<template>
  <div class="article-container">
    <h1>Anki</h1>
    <ArticleList title="Low-Key Anki" :articles="lowKeyAnkiArticles" />

    <ArticleList title="Anki Guides" :articles="articles" />
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
          title: 'MIA Japanese Addon Guide',
          description:
            'MIA Japanese is an Anki 2.1 add-on that provides a variety of features for improving the ease and efficiency of Japanese study.',
          link: '/table-of-contents/anki/mia-japanese-addon/'
        },
        {
          title: 'MIA Dictionary Addon Guide',
          description:
            'The MIA Dictionary Anki addon is designed to radically streamline the card creation process for language learning.',
          link: '/table-of-contents/anki/mia-dictionary'
        },
        {
          title: 'MorphMan Guide',
          description:
            'MorphMan is an Anki add-on that keeps track of what words you know and uses that to reorder your new cards into an optimal order for learning.',
          link: '/table-of-contents/anki/morphman'
        },
        {
          title: 'Anki Optimizer and Simulator',
          description:
            'This tool helps you optimize your learning steps and interval modifier in Anki.',
          link: 'https://pheartheceal.github.io/anki-optimizer/'
        }
      ],
      lowKeyAnkiArticles: [
        {
          title: 'Low-Key Anki: Introduction',
          description:
            'The MIA Glossary contains entries for all technical, language learning terms that you may come across on the site.',
          link: '/table-of-contents/anki/low-key-anki/intro'
        },
        {
          title: 'The Forgetting Curve',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link: '/table-of-contents/anki/low-key-anki/the-forgetting-curve'
        },
        {
          title: 'Forgetting Strategically',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link: '/table-of-contents/anki/low-key-anki/forgetting-strategically'
        },
        {
          title: 'The Ease Factor Problem',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link: '/table-of-contents/anki/low-key-anki/the-ease-factor-problem'
        },
        {
          title: 'Can the Easy Button Save The Day',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link:
            '/table-of-contents/anki/low-key-anki/can-the-easy-button-save-the-day'
        },
        {
          title: 'Solving the Ease Factor Problem',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link:
            '/table-of-contents/anki/low-key-anki/solving-the-ease-factor-problem'
        },
        {
          title: 'Low-Key Anki: No Penalties or Boosting',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link:
            '/table-of-contents/anki/low-key-anki/low-key-anki-no-penalties-or-boosting'
        },
        {
          title: 'Low-Key Anki: Pass/Fail',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link: '/table-of-contents/anki/low-key-anki/low-key-anki-pass-fail'
        },
        {
          title: 'Low-Key Anki: Summary and Installation',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link:
            '/table-of-contents/anki/low-key-anki/low-key-anki-summary-and-installation'
        },
        {
          title: 'Low-Key Anki: Usage Guide',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link: 'table-of-contents/anki/low-key-anki/low-key-anki-usage-guide'
        },
        {
          title: 'Low-Key Anki: Closing',
          description:
            'The Mass Immersion Approach encourages the use of Anki when learning a foreign language and actively develops addons for the program.',
          link: 'table-of-contents/anki/low-key-anki/closing'
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
  .article-content img {
    max-width: 400px;
  }
}
</style>
