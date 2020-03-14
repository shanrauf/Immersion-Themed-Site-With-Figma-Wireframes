<template>
  <div class="content clearfix">
    <h1 v-if="title" class="recent-post-title">{{ title }}</h1>
    <ArticlePreview
      v-for="article in articles"
      :key="article.title"
      v-bind="article"
    />
  </div>
</template>

<script>
import ArticlePreview from '~/components/ArticlePreview'

export default {
  transition: 'page',
  components: {
    ArticlePreview
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    articles: {
      type: Array,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  margin: 30px auto 30px;
}

.content .recent-post-title {
  width: 75%;
  margin: 20px auto;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
</style>
