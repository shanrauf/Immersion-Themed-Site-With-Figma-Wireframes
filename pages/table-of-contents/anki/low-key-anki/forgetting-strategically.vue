<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>Forgetting Strategically</h1>
    <div class="article-content">
      <p>
        In the previous section, I explained that the equation for the
        forgetting curve allows one to find the retrievability of a given
        memory. Also recall that retrievability is the probability of being able
        to successfully recall a memory at a specific point in time. The key
        word here is “probability.” Because the human brain is a biological
        organ, not a digital computer, it’s impossible to know exactly when you
        are going to forget something. We can make quite educated guesses, but
        there is always going to be a certain amount of randomness that has to
        be accounted for: sometimes you just randomly forget something, even
        though you previously knew it extremely well; other times you randomly
        remember something, despite only hearing it once several years ago.
      </p>
      <p>
        As time passes without reviewing a memory, the probability that you
        still remember it (retrievability) decreases. The basic idea with spaced
        repetition is that if you always review memories before you are likely
        to have forgotten them, then you will almost never forget. The idea is
        simple yet immensely powerful. The problem is that because we only know
        the probability of how long we will be able to remember something, not
        the exact amount of time, we have to decide how low are we going to let
        that probability drop before we review.
      </p>

      <p>
        Theoretically, immediately after reviewing a piece of information, the
        probability that you would be able to recall it if quizzed is 100%. But
        from that point onwards, the percentage begins to drop with each second
        that passes. If you decided to review memories each time retrievability
        dropped to 99%, then on average, at the time of review, you would
        remember 99% of your memories, and forget 1%. If you decided to review
        memories each time retrievability dropped to 85%, then on average, at
        the time of review, you would remember 85% of your memories, and forget
        15%. At first glance, the first scenario might sound more desirable than
        the second, but this isn’t necessarily the case. Assuming that all other
        factors are the same, it’s going to take longer for retrievability to
        drop from 100% to 85% than to drop from 100% to 99%. This means that the
        person who remembers 99% of their material must review much more often
        than the person who is remembering 85%. In this way, we can see that how
        much you remember, and how often you review, are correlated.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2018/10/acquisition-rate-768x577.gif"
        alt="Forgetting Index Curve"
      />

      <p>
        The more often you’re reviewing, the more time you’re spending on
        reviews. So really, the cost of remembering is time. This leaves us with
        the question of what balance of time and retention is best? By default,
        Anki is calibrated in such a way that “for moderately difficult
        material, the average user should find they remember approximately 90%
        of mature cards that come up for review” (from the Anki manual). I
        assume that 90% was chosen as well-balanced middle ground, providing
        relatively high retention with a manageable amount of reviews. I will
        talk about whether I think this number is ideal or not in a different
        post.
      </p>
      <br />
      <p>
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/the-ease-factor-problem/"
        >
          Next: The Ease Factor Problem</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  head() {
    return {
      title: this.title,
      titleTemplate: 'Low-Key Anki (Forgetting Strategically) - %s',
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
          content: 'Low-Key Anki (Forgetting Strategically) - %s'
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
          content: 'Low-Key Anki (Forgetting Strategically) - %s'
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
