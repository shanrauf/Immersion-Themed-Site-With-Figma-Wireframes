<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
    </p>
    <h2>Stage 1 Overview</h2>
    For a brief summary of the action steps in written form:
    <nuxt-link to="/table-of-contents/stage-0/overview/"
      >MIA Overview</nuxt-link
    >
    <h1>Goals:</h1>
    <ul>
      <li>Build a foundation in language acquisition theory.</li>
      <li>Create a robust immersion environment.</li>
      <li>Become comfortable with tools such as Anki.</li>
      <li>
        Gain a foundation in understanding the spoken and written forms of your
        target language, such that you can understand roughly 50% of basic
        native content.
      </li>
    </ul>
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
</style>
