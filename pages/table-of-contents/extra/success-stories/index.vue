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
