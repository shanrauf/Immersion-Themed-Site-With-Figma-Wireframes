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
          @click="goToAbout"
          >Learn More</BaseButton
        >
      </div>
      <!-- <button
        class="cd-scroll-down cd-image-replace"
        @click="scrollTo('articles-section')"
      >
        scroll down
      </button> -->
    </section>

    <BaseWave color="#204f70" />

    <v-divider />

    <section id="articles-section" class="articles-section">
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
  },
  methods: {
    scrollTo(elementId) {
      const section = document.getElementById(elementId)
      const top = section.offsetTop
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    },
    goToAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/partials/variables';

@import '../assets/scss/partials/mixins';

@import '../assets/scss/partials/layout';

.landing-section {
  background: #204f70;
  margin-bottom: -2px;
  width: 100%;
  // height: 95vh;
  height: 35vh;
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
  // display: flex; // could also do grid...
  // flex-direction: row;
  // justify-content: center;
}
.cd-scroll-down {
  position: relative;
  @include center(x);
  bottom: 0px;
  width: 44px;
  height: 44px;
  background: url(../assets/cd-arrow-bottom.svg) no-repeat center center;
}
.cd-image-replace {
  /* replace text with image */
  display: inline-block;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  color: transparent;
}
</style>
