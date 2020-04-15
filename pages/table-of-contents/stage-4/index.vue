<template>
  <ComingSoon />
</template>

<script>
import ComingSoon from '~/components/ComingSoon'

export default {
  transition: 'page',
  components: { ComingSoon },
  head() {
    return {
      title: this.title,
      titleTemplate: 'Stage 4 - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        { hid: 'og:title', name: 'og:title', content: 'Stage 4 - %s' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Stage 4 - %s'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
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
