<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link>
    <h2>Success Stories</h2>
    <ul>
      <li>
        <nuxt-link to="/table-of-contents/extra/success-stories/nick/"
          >Nick (Nitbean)</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/table-of-contents/extra/success-stories/ben/"
          >Ben</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/table-of-contents/extra/success-stories/britvsjapan/"
          >BritVsJapan</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/table-of-contents/extra/success-stories/chris/"
          >Chris</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/table-of-contents/extra/success-stories/jamal/"
          >Jamal (Phantom Madman)</nuxt-link
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
