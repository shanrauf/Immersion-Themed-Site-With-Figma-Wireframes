<template>
  <!-- <h1>{{ $route.params.article }}</h1> -->
  <nuxt-content :document="page" />
</template>

<script>
export default {
  layout: 'article',

  async asyncData({ $content, params }) {
    const page = await $content(params.article).fetch()

    return {
      page,
    }
  },
}
</script>

<style lang="scss">
.nuxt-content-container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
.nuxt-content {
  p,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    width: calc(100% - 40px);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    max-width: 600px;
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
