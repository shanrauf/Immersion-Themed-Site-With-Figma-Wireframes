<template>
  <div>
    <section class="hero-section">
      <div class="hero-container">
        <div class="tagline">
          <h1 class="title">
            A comprehensive approach to acquiring foreign languages
          </h1>
          <p class="description">
            The Mass Immersion Approach seeks to optimize the path to true
            foreign language proficiency
          </p>
          <LiquidButton ripple hover-wave>Button</LiquidButton>
        </div>
        <div class="image">
          <DynamicImage src="mia.png" style="z-index: 1;" />
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
import LiquidButton from '~/components/LiquidButton.vue'
import Ripple from '~/components/Ripple.vue'

export default {
  layout: 'default',
  components: {
    MovingWaves,
    LiquidButton,
    Ripple,
    Timeline,
    BaseFooter,
  },
}
</script>

<style>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin: 0;
}

.title {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}
.description {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.hero-section {
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
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
  align-items: center;
  width: 750px;
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
