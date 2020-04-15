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

    <section id="articles-section" class="articles-section">
      <h1 style="font-size: 50px;">Popular Posts:</h1>
      <ArticleCarousel />
    </section>
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton'
import BaseWave from '~/components/BaseWave'
import ArticleCarousel from '~/components/ArticleCarousel'

export default {
  transition: 'page',
  components: {
    BaseButton,
    BaseWave,
    ArticleCarousel
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
  },
  head() {
    return {
      title: this.title,
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Mass Immersion Approach'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Mass Immersion Approach'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'The Mass Immersion Approach seeks to optimize the path to true foreign language proficiency.'
        }
      ]
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
  min-height: 35vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.landing-content {
  height: 80%;
  max-width: 900px;
  margin: 10px auto;
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
  margin: 10px 0;
}
.landing-text {
  color: #fff;
  font-size: 18px;
}
.articles-section {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
@media screen and (max-width: 700px) {
  .landing-section {
    justify-content: center;
  }
  .landing-title {
    font-size: 25px;
  }
  .landing-text {
    font-size: 12px;
  }
}
</style>
