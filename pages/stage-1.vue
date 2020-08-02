<template>
  <div class="stage-1-container">
    <section class="stage-hero-section">
      <div class="stage-hero">
        <h1 class="stage-hero-heading heading-1" style="color: white;">
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
    </section>

    <section class="stage-description-section" style="background: inherit;">
      <h2 class="heading-2 stage-overview-heading">
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

<style scoped>
.stage-hero-section {
  color: white;
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.stage-1-container:after {
  position: fixed;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/stage-1-blob.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
}
.stage-hero {
  /* Centers hero content horizontally */
  margin: 0 auto;
  /* Offsets the hero content onto the bg image */
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.stage-card-container {
  max-width: 500px;
  padding: 25px;
  margin-left: 30px;
}
.stage-hero-heading {
  max-width: 750px;
  padding: 25px 0 25px 70px;
}
.stage-overview-heading {
  text-align: center;
  color: #f2f6ff;
}
@media (max-width: 1200px) {
  .stage-hero {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .stage-hero-heading {
    text-align: center;
  }
}

/* Hero background adjustments */
@media (min-width: 800px) {
  /* Normal screens */
  .stage-1-container:after {
    top: -100px;
  }
}
@media (min-width: 1200px) {
  /* Larger screens */
  .stage-1-container:after {
    top: -300px;
  }
}
@media (min-width: 1600px) {
  /* Even larger screens */
  .stage-1-container:after {
    top: -300px;
  }
}
@media (min-width: 1600px) {
  /* Even larger screens than that */
  .stage-1-container:after {
    top: -400px;
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
