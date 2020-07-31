<template>
  <div>
    <section class="hero-section">
      <div class="hero-container">
        <div class="tagline">
          <h1 class="heading-1">
            A comprehensive guide to reach fluency
          </h1>
          <p class="body-intro-text">
            The Mass Immersion Approach seeks to optimize the path to true
            foreign language proficiency
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div class="image">
          <DynamicImage src="mia_gradient.svg" style="z-index: 1;" />
          <Ripple />
        </div>
      </div>

      <MovingWaves />
    </section>

    <section class="roadmap-section">
      <h2 class="heading-2 roadmap-title">
        Roadmap
      </h2>
      <Timeline />
    </section>

    <section class="more-content">
      <div class="more-card">
        <h2>Theory</h2>
      </div>
      <div class="more-card">
        <h2>Practice</h2>
      </div>
      <div class="more-card">
        <h2>Extra</h2>
      </div>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue'
import BaseFooter from '../components/BaseFooter.vue'
import MovingWaves from '~/components/MovingWaves.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import Ripple from '~/components/Ripple.vue'

export default {
  layout: 'default',
  components: {
    MovingWaves,
    PrimaryButton,
    Ripple,
    Timeline,
    BaseFooter,
  },
}
</script>

<style>
.hero-section {
  background: linear-gradient(60deg, #6a00c1 0%, rgba(0, 172, 193, 1) 100%);
  color: white;
}
.hero-container {
  height: 65vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.tagline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  height: 400px;
  justify-content: space-between;
}
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 1000px;
}
.roadmap-section {
  padding: 25px 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.roadmap-section:before {
  content: '';
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/blue-strokes.svg');
  background-position: right;
  background-repeat: no-repeat;
}
.roadmap-title {
  text-align: center;
  background: #f2f6ff;
  padding-bottom: 20px;
}
.more-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.more-card {
  width: 400px;
  height: 250px;
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }
}
</style>
