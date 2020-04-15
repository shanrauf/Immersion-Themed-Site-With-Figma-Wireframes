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
export default {
  transition: 'page',
  head() {
    return {
      title: this.title,
      titleTemplate: 'Success Stories - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'These are a few success stories of people who followed the Mass Immersion Approach and reached a high level in their target language.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Success Stories - Mass Immersion Approach'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'These are a few success stories of people who followed the Mass Immersion Approach and reached a high level in their target language.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Success Stories - Mass Immersion Approach'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'These are a few success stories of people who followed the Mass Immersion Approach and reached a high level in their target language.'
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
