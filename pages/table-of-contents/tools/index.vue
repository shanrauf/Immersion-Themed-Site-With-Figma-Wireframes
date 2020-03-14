<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link>
    <h2>Tools</h2>
    <ul>
      <li>
        <nuxt-link to="/table-of-contents/tools/glossary/">Glossary</nuxt-link>
      </li>
      <li><nuxt-link to="/table-of-contents/anki/">Anki</nuxt-link></li>
      <li>
        <nuxt-link
          to="https://frenchyann.github.io/language-aptitude-graphs"
          target="_blank"
          rel="noopener"
          >6-Point Ability Graphing Widget</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default { transition: 'page' }
</script>

<style lang="scss" scoped>
.article-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
