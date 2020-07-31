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
          <PrimaryButton>Button</PrimaryButton>
        </div>
        <div class="image">
          <DynamicImage src="mia_gradient.svg" style="z-index: 1;" />
          <Ripple />
        </div>
      </div>

      <div>
        <MovingWaves />
      </div>
    </section>

    <Timeline />
    <section class="more-content">
      <div class="card">
        <h2>Theory</h2>
      </div>
      <div class="card">
        <h2>Practice</h2>
      </div>
      <div class="card">
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
.more-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
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
