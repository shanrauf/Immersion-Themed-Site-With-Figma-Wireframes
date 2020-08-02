<template>
  <div class="stage-1-container">
    <section class="stage-hero-section">
      <div class="stage-hero">
        <div class="stage-hero-content">
          <h1 class="hero-heading heading-1" style="color: white;">
            Learn the phonetic system, basic grammar, and basic vocabulary
          </h1>
          <div class="stage-card-container">
            <StageCard
              color="white"
              background="linear-gradient(126.53deg, #844eff 0.04%, #88f8ff 100%)"
              to="/stage-1"
            >
              <template #heading>Laying the Groundwork</template>
              <template #subtitle>Stage 1</template></StageCard
            >
          </div>
        </div>
      </div>
    </section>

    <section class="stage-description-section">
      <h2 class="heading-2 stage-description-title">
        Overview
      </h2>
      <AlternatingContent :content="content" />
    </section>

    <section class="relevant-articles-section">
      <h2 id="relevant-articles-heading" class="heading-2">
        Relevant Articles
      </h2>
      <div class="article-cards">
        <SecondaryCard href="/stage-1" class="article-card">
          <template #heading>Theory</template>
          <template #subtitle
            >In-depth descriptions of what makes MIA work and other cool
            stuff... access here :D</template
          >
        </SecondaryCard>
        <SecondaryCard href="/stage-2" class="article-card">
          <template #heading>Practice</template>
          <template #subtitle
            >Articles explaining practical methods to do the method and stuff
            like that... access here :D</template
          > </SecondaryCard
        ><SecondaryCard href="/stage-3" class="article-card">
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
import SecondaryCard from '~/components/SecondaryCard.vue'
import StageCard from '~/components/StageCard.vue'
import AlternatingContent from '~/components/AlternatingContent.vue'

export default {
  layout: 'default',
  components: {
    SecondaryCard,
    StageCard,
    AlternatingContent,
  },
  data() {
    return {
      content: [
        {
          heading: 'Phonetic System',
          description:
            "Learn how the langauge sounds so that you can actually learn the language... duhhhhhhh. Good luck! That is all the guidance we're giving you!",
        },
        {
          heading: 'Writing System',
          description:
            "Learn how to read the language so that you can learn the language by reading the language... duhhhhhhh. Good luck! That is all the guidance we're giving you!",
        },
        {
          heading: 'Basic Vocabulary',
          description:
            "Learn the most common vocabulary in the langauge so that you suck less when you embark on your language learning journey... duhhhhhhh. Good luck! That is all the guidance we're giving you!",
        },
      ],
    }
  },
}
</script>

<style>
.stage-hero-section {
  color: white;
  position: relative;
}
.stage-hero-section:before {
  content: '';
  position: absolute;
  top: -800px;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/stage-1-blob.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
@media (min-width: 1700px) {
  .stage-hero-section:before {
    top: -300px;
  }
}
@media (min-width: 2100px) {
  .stage-hero-section:before {
    top: -500px;
  }
}
.stage-description-section {
  margin: 0 25px;
}
.stage-description-title {
  text-align: center;
  background: #f2f6ff;
  padding-bottom: 50px;
}
.stage-card-container {
  max-width: 500px;
}
.hero-heading {
  max-width: 700px;
}
.stage-hero {
  min-height: 1500px;
  padding: 30px;
}
.stage-hero-content {
  margin: 0 auto;
  width: 70%;
  height: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 1700px) {
  .stage-hero-content {
    width: 100%;
  }
}
.relevant-articles-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding: 0 20px;
}
#relevant-articles-heading {
  margin-bottom: 20px;
}
.article-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.article-card {
  margin: 0 20px 20px 20px;
}
@media (max-width: 1100px) {
  .stage-hero {
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
  .stage-hero {
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
