<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>Can the "Easy" Button Save the Day?</h1>
    <div class="article-content">
      <p>
        Because Anki implicitly assumes that <em>all</em> lapses are caused by
        an inappropriate ease factor, when in reality a large portion of lapses
        are caused by the normal functioning of the forgetting curve, a certain
        number of cards will have their ease factor <em>unjustly</em> reduced
        after a lapse. This means that the lapsed card's interval will grow
        <em>more slowly than necessary</em> from that point onward, needlessly
        increasing the frequency of review, and in turn wasting the time of the
        user (the ease factor problem).
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2018/10/easy-button-300x155.png"
        alt=""
        width="300"
        height="155"
      />

      <p>
        Now, one could argue that a corrective mechanism to mitigate this issue
        is already built into Anki: the "easy" button. Theoretically, if the
        ease factor of a card was <em>unjustly</em> reduced due to a fluke lapse
        in memory, then the <em>next</em> time that card comes up, you should
        find it easy to answer, and therefore grade the card "easy" and restore
        the ease factor to its correct value. The logic here is that an unjust
        low ease factor will cause the algorithm to underestimate the
        appropriate growth in stability (interval), in turn causing the card to
        show up <em>before</em> retrievability has dropped to the standard
        amount. Notice the implicit assumption here that retrievability (<em
          >probability</em
        >
        of successful recall) directly correlates to the
        <em>subjective difficulty of recalling a memory</em>. But this is simply
        not the case. Retrievability, which is what Anki's algorithm is actually
        predicting, may indeed be <em>indirectly</em> correlated to subjective
        difficulty of recall, but it's definitely not a one to one relationship;
        subjective difficulty of recall will also be highly influenced by things
        like the time of day, how tired you are, and your general mood. Not to
        mention the ever-present possibility that the only reason you found a
        card easy to answer in a specific moment was due to the same sort of
        memory fluke that I talked about in the previous section. In fact,
        ja-dark actually
        <nuxt-link
          to="http://science.sciencemag.org/content/319/5865/966"
          target="_blank"
          rel="noopener"
          >cited</nuxt-link
        >
        <nuxt-link
          to="http://castel.psych.ucla.edu/papers/Logan%20JOL%20Spacing%20ML.pdf"
          >studies</nuxt-link
        >
        that found that people's subjective judgments of how well they know
        something are highly inaccurate. So, just because a card
        <em>felt</em> easy to answer at the specific moment you reviewed it,
        that doesn't necessarily mean that it is less
        <em>intrinsically difficult</em> than Anki had previously thought, and
        thus can safely have its interval grow at an expedited pace. If you
        mistakenly grade a card "easy," it's extremely likely that its interval
        will grow too quickly, leading you to lapse it in the future. So, by
        attempting to utilize the "easy" button in order to counteract the
        damage done by Anki's excessive "learning rate," you are risking causing
        more damage than you are mitigating.
      </p>
      Previous:
      <nuxt-link
        to="/table-of-contents/anki/low-key-anki/the-ease-factor-problem/"
        >The Ease Factor Problem</nuxt-link
      >Next:
      <nuxt-link
        to="/table-of-contents/anki/low-key-anki/solving-the-ease-factor-problem/"
        >Solving the Ease Factor Problem</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default { transition: 'page' }
</script>

<style lang="scss" scoped>
.article-container {
  margin: 25px auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
img {
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  clear: both;
}
@media screen and (max-width: 600px) {
  .article-container {
    width: 80%;
  }
}
</style>
