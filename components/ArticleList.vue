<template>
  <div class="content clearfix">
    <div class="main-content">
      <h1 v-if="title" class="recent-post-title">{{ title }}</h1>
      <ArticlePreview
        v-for="article in articles"
        :key="article.title"
        v-bind="article"
      />
    </div>
    <!-- <div class="sidebar">
      <div class="section topics">
        <h2 class="section-title">Popular Posts</h2>
        <ul>
          <li>
            <nuxt-link to="/table-of-contents/stage-0/introduction/"
              >Introduction</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/table-of-contents/stage-0/site-layout/"
              >Site Layout</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/table-of-contents/stage-0/overview/"
              >Overview</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div> -->
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
  width: 90%;
  margin: 30px auto 30px;
}

.content .main-content {
  width: 70%;
  float: left;
}

.content .main-content .recent-post-title {
  width: 80%;
  margin: 20px auto;
}
.content .sidebar {
  width: 30%;
  float: left;
  height: 300px;
}
.content .sidebar .section {
  background: white;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
</style>
