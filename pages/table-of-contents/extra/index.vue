<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link>
    <h2>Extra</h2>
    <ul>
      <li>
        <nuxt-link to="/table-of-contents/extra/success-stories/"
          >Success Stories</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/table-of-contents/extra/patreon-qa-archive/"
          >Patreon Q&amp;A Archive</nuxt-link
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
