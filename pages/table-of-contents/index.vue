<template>
  <div class="article-container">
    <h2 style="text-align: center;">Table of Contents</h2>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/stage-0/">Stage 0</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/stage-2/">Stage 2</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/stage-3/">Stage 3</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/stage-4/">Stage 4</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/stage-5/">Stage 5</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/tools/">Tools</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="table-of-contents/anki/">Anki</nuxt-link>
    </h1>
    <h1 style="text-align: center;">
      <nuxt-link to="/table-of-contents/extra/">Extra</nuxt-link>
    </h1>
  </div>
</template>

<script>
export default { transition: 'page' }
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
