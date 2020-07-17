<template>
  <div>
    <section class="hero-section">
      <div class="hero-container">
        <div class="tagline">
          <h1>A comprehensive approach to acquiring foreign languages</h1>
          <p>
            The Mass Immersion Approach seeks to optimize the path to true
            foreign language proficiency
          </p>
          <MovingWaveButton>Button</MovingWaveButton>
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

    <section class="content">
      <p>MIA | 2020 | Free to use</p>
    </section>
  </div>
</template>

<script>
import MovingWaves from '~/components/MovingWaves.vue'
import MovingWaveButton from '~/components/MovingWaveButton.vue'
import LiquidButton from '~/components/LiquidButton.vue'
import Ripple from '~/components/Ripple.vue'

export default {
  components: {
    MovingWaves,
    MovingWaveButton,
    LiquidButton,
    Ripple,
  },
}
</script>

<style>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

body {
  margin: 0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}
p {
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
.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
