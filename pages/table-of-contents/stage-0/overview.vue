<template>
  <div class="article-container">
    <div>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-0/">Stage 0</nuxt-link>
    </div>
    <h1 class="article-title">Overview</h1>
    <div class="article-content">
      <h2>Stage 1 – Getting Started</h2>
      <ul>
        <li>Read all Stage 1 articles</li>
        <li>
          Re-read Stage 1 articles at the pace of one article a day, and after
          finishing, read Stage 2 articles at the same pace (<em>ongoing</em>)
        </li>
        <li>
          Acquire immersion content and begin immersing (<em>ongoing</em>)
        </li>
        <li>Obtain an SRS and learn how to use its basic features</li>
        <li>
          Learn the basics of the phonetic and writing systems (Japanese:
          Hiragana and Katakana. Chinese: Pinyin)
        </li>
        <li>
          (Japanese/Chinese only) Go through Recognition RTK / RTH (1K cards)
        </li>
        <li>
          Learn and SRS (bilingual sentence cards) basic grammar and vocab (1K
          cards)
        </li>
        <li>Through sentence mining, make ~2K bilingual sentence cards</li>
        <li>
          (Optional) Continue to learn grammar and vocab from a pre-made deck
          alongside sentence mining. This can count towards the ~2K bilingual
          sentence cards.
        </li>
      </ul>
      <h2>Stage 2 – Survival Level</h2>
      <ul>
        <li>
          Re-read Stage 2 articles at the pace of one article a day, and after
          finishing, read Stage 3 articles at the same pace (<em>ongoing</em>)
        </li>
        <li>Continue to immerse (<em>ongoing</em>)</li>
        <li>Make the Monolingual Transition</li>
        <li>
          Through sentence mining, make ~3K monolingual sentence cards. This
          should bring you to ~6K sentence cards total
        </li>
      </ul>
      <h2>Stage 3 – Functional</h2>
      <ul>
        <li>
          Re-read Stage 3 articles at the pace of one article a day, and after
          finishing, read Stage 4 articles at the same pace (<em>ongoing</em>)
        </li>
        <li>Continue to immerse (<em>ongoing</em>)</li>
        <li>
          Continue to sentence mine, and make an additional ~4K monolingual
          sentence cards. This should bring you to ~10K sentence cards total
          (<em>ongoing</em>)
        </li>
        <li>
          (For those seeking <em>fluency</em> or above) Adopt a parent, and
          start shadowing (<em>ongoing</em>)
        </li>
        <li>
          (Japanese only; for those seeking <em>fluency</em> or above) Learn
          pitch accent theory
        </li>
        <li>
          (For those not seeking <em>fluency</em> and above) Begin to output
        </li>
      </ul>
      <h2>Stage 4 – Fluent</h2>
      <ul>
        <li>
          Re-read Stage 4 articles at the pace of one article a day, and after
          finishing, read Stage 5 articles at the same pace (<em>ongoing</em>)
        </li>
        <li>Continue to immerse (<em>ongoing</em>)</li>
        <li>
          Continue to make monolingual sentence cards through sentence mining,
          but at a reduced rate (<em>ongoing</em>)
        </li>
        <li>Begin to output (<em>ongoing</em>)</li>
        <li>(Japanese/Chinese only) Go through Production RTK1+3 / RTH 1+2</li>
      </ul>
      <h2>Stage 5 – Professionally Competent to Native Level</h2>
      <ul>
        <li>
          Re-read Stage 5 articles at the pace of one article a day
          (<em>ongoing</em>)
        </li>
        <li>Continue to immerse (<em>ongoing</em>)</li>
        <li>
          Continue to make monolingual sentence cards through sentence mining,
          but at a further reduced rate (<em>ongoing</em>)
        </li>
        <li>
          Begin to make clozed/production cards to learn specific cultural
          knowledge (<em>ongoing</em>)
        </li>
        <li>Continue to output, and get corrected (<em>ongoing</em>)</li>
        <li>
          Study the history of the culture your target language is associated
          with
        </li>
        <li>
          Study the grammar of your target language using resources meant for
          natives
        </li>
        <li>(Japanese only) Study Keigo</li>
        <li>(Japanese/Chinese only) Study classical Japanese/Chinese</li>
      </ul>
      <h1>Notes</h1>
      <p>
        With the exception of Stage 5, which has no tangible end, each stage is
        estimated to take the majority of people between 6 months and 1 year to
        complete. The amount of time it will take to complete each stage will
        vary significantly depending on the daily amount of time dedicated to
        the target language, the inherent difficulty of the target language in
        relation to the languages the learner has already acquired, and the
        specific disposition of the learner. Expectations related to time
        investment and results will be covered in-depth in a later article.
      </p>

      <p>
        The overview is designed to be adaptable to fit a range of goals and
        target languages; steps beginning with a gray highlight only apply to a
        subset of learners. "<em>Ongoing</em>" means that the step is meant to
        be practiced alongside the other steps in the stage, rather than
        completed before moving on. Steps that are not marked as "ongoing" are
        meant to be completed one at a time, in the order that they are
        presented in (with the exception of Stage 5, where the order of the
        non-ongoing steps should be chosen in accordance with the priorities and
        interests of the learner). Steps which appear in multiple stages, such
        as "continue to immerse" or "continue to make sentence cards," may
        differ in specific instruction depending on the stage. Whenever this is
        the case, specific instructions will be given in the
        <em>Practice</em> section of each the Stage.
      </p>

      <p>
        The answers to any questions you may have about the overview, practical
        or theoretical, are likely to be found in later articles.
      </p>
    </div>
  </div>
</template>

<script>
export default { transition: 'page' }
</script>

<style lang="scss" scoped>
.article-container {
  margin: 25px auto;
  width: 50%;
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
  .article-content img {
    max-width: 400px;
  }
}
</style>
