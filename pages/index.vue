<template>
  <div>
    <section class="landing-section">
      <div class="landing-content">
        <h1 class="landing-title">
          A comprehensive approach to acquiring foreign languages
        </h1>
        <p class="landing-text">
          The Mass Immersion Approach seeks to optimize the path to true foreign
          language proficiency
        </p>
        <BaseButton
          background-color="#207069"
          padding="12px 40px"
          rounded
          border="2px solid #207069"
          >Learn More</BaseButton
        >
      </div>
    </section>
    <BaseWave color="#204f70" />

    <section class="articles-section">
      <div class="featured-article">
        <h1>Featured Article title</h1>
        <span>Date</span>
        <div class="featured-article-content">
          <p>ajflajslefjsaliejfilasjeflsaef</p>
          <nuxt-link to="/">Read More ></nuxt-link>
        </div>
      </div>
      <div class="popular-articles">
        <div class="popular-article">
          <h1>Title</h1>
          <span>Date</span>
          <p>Mini description or first line?</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton'
import BaseWave from '~/components/BaseWave'

export default {
  components: {
    BaseButton,
    BaseWave
  }
}
</script>

<style lang="scss" scoped>
.landing-section {
  background: #204f70;
  // background: #efefef;
  // background-size: cover;
  // background-position: bottom;
  // background-image: url(('../assets/manga_wall.jpg'));
  margin-bottom: -2px;
  width: 100%;
  height: 95vh;
}
.landing-content {
  height: 80%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.landing-title {
  color: #fff;
  max-width: 700px;
  font-size: 50px;
}
.landing-text {
  color: #fff;
  font-size: 18px;
}
.articles-section {
  background: #fff;
  width: 100%;
  height: 100vh;
  display: flex; // could also do grid...
  flex-direction: row;
  justify-content: center;
}
</style>
