<template>
  <div>
    <section class="hero-section">
      <div class="hero-container">
        <div class="tagline">
          <h1 class="heading-1">
            A comprehensive guide to reach fluency
          </h1>
          <p id="hero-subtitle" class="body-intro-text">
            The Mass Immersion Approach seeks to optimize the path to true
            foreign language proficiency
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div class="hero-image-container">
          <DynamicImage
            class="hero-image"
            src="mia_gradient.png"
            style="z-index: 1;"
          />
          <Ripple delay="1" />
        </div>
      </div>

      <Waves moving />
    </section>

    <section class="roadmap-section">
      <h2 class="heading-2 roadmap-title">
        Roadmap
      </h2>
      <Timeline />
    </section>

    <section class="more-from-mia-section">
      <h2 id="more-from-mia-heading" class="heading-2">More From MIA</h2>
      <div class="more-cards">
        <SecondaryCard href="/stage-1" class="more-card">
          <template #heading>Theory</template>
          <template #subtitle
            >In-depth descriptions of what makes MIA work and other cool
            stuff... access here :D</template
          >
        </SecondaryCard>
        <SecondaryCard href="/stage-2" class="more-card">
          <template #heading>Practice</template>
          <template #subtitle
            >Articles explaining practical methods to do the method and stuff
            like that... access here :D</template
          > </SecondaryCard
        ><SecondaryCard href="/stage-3" class="more-card">
          <template #heading>Extra</template>
          <template #subtitle
            >Anki addon guides, MIA success stories, etc... access here
            :D</template
          >
        </SecondaryCard>
      </div>
    </section>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue'
import Waves from '~/components/Waves.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import Ripple from '~/components/Ripple.vue'
import SecondaryCard from '~/components/SecondaryCard.vue'

export default {
  layout: 'default',
  components: {
    Waves,
    PrimaryButton,
    Ripple,
    Timeline,
    SecondaryCard,
  },
}
</script>

<style>
.hero-section {
  background: linear-gradient(60deg, #6a00c1 0%, rgba(0, 172, 193, 1) 100%);
  color: white;
}
.hero-container {
  min-height: 900px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.tagline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
}
#hero-subtitle {
  margin: 20px 0 50px 0;
}
.hero-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 350px;
}
.hero-image {
  animation: fade-slide-down 2s cubic-bezier(0, 0.5, 0, 1);
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
  background-image: url('../assets/blue-strokes.png');
  background-position: right;
  background-repeat: no-repeat;
}
.roadmap-section:after {
  content: '';
  position: absolute;
  top: 0;
  left: -200px;
  right: 0;
  bottom: -300px;
  background-image: url('../assets/purple-blob.png');
  background-position: left bottom;
  background-repeat: no-repeat;
  z-index: -1;
}
.roadmap-title {
  text-align: center;
  background: #f2f6ff;
  padding-bottom: 20px;
}
.more-from-mia-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}
#more-from-mia-heading {
  margin-bottom: 20px;
}
.more-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.more-card {
  margin: 0 20px 20px 20px;
}
@media (max-width: 1100px) {
  .hero-container {
    flex-direction: column-reverse;
    padding: 15px;
  }
  .tagline {
    align-items: center;
    text-align: center;
  }
}
/*Shrinking for mobile*/
@media (max-width: 800px) {
  .hero-container {
    align-items: center;
  }
  .hero-image-container {
    width: 100%;
    height: 350px;
  }
  .roadmap-section:before {
    /* right: -300px; */
    background-size: 50%;
  }
  .roadmap-section:after {
    background-size: 50%;
  }
}

/* Animations */

@keyframes fade-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: none;
  }
}
</style>
