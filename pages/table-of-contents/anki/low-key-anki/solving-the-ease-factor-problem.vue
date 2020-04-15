<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>Solving the Ease Factor Problem</h1>
    <div class="article-content">
      <p>
        I am not the first person to realize that the excessively high "learning
        rate" of Anki's algorithm leads to extremely inefficient scheduling;
        both
        <a
          href="https://forum.koohii.com/thread-14570.html"
          target="_blank"
          rel="noopener"
          >ja-dark</a
        >
        and
        <a
          href="https://eshapard.github.io/aboutme.html"
          target="_blank"
          rel="noopener"
          >eshapard</a
        >
        have written about the ease factor problem and proposed possible
        solutions to it. Eshapard initially proposed using longer learning
        steps: because Anki doesn't start changing the ease factor of cards
        until
        <em>after</em> they have graduated from the learning queue, the more
        time that cards spend in the learning queue, the longer their ease
        factors remain safe. Although this approach constitutes a big step up
        from vanilla Anki, it has many downsides which I won't go into here. If
        you would like to learn more about this approach, check out eshapard
        <a
          href="https://eshapard.github.io/anki/what-anki-learning-steps-to-use.html"
          target="_blank"
          rel="noopener"
          >original blog post</a
        >
        about it, or
        <a href="https://youtu.be/1XaJjbCSXT0" target="_blank" rel="noopener"
          >Conaanaa's video</a
        >
        summarizing eshapard's ideas.
      </p>
      <p>
        Eshapard later went on to create an add-on that completely overrides
        Anki's original algorithm, replacing it with a new one that more closely
        resembles SuperMemo's. I think it's a huge step in the right direction,
        but due to its simplicity, this new algorithm suffers from its own form
        of an excessively high "learning rate," in addition to completely
        precluding the possibility of using Anki on mobile devices (as an add-on
        is needed to use the new algorithm, and only the desktop version of Anki
        supports add-ons). You can read more about eshapard's new algorithm
        <a
          href="https://eshapard.github.io/anki/thoughts-on-a-new-algorithm-for-anki.html"
          target="_blank"
          rel="noopener"
          >here</a
        >.
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2018/10/CriteriEN-1-300x148.png"
        alt=""
        width="700"
        height="344"
      />

      <p>
        The best solution to the ease factor problem that I know of was created
        by ja-dark, a how-to-learn-Japanese blogger who since has disappeared
        from the internet. In his now-defunct post, "CriteriEN: No Card Left
        Behind," ja-dark outlined a series of changes to Anki's settings and
        algorithm that he recommended in order to optimize workflow. I don't
        agree with many of the things that he said, but a combination of two of
        the changes he made to the algorithm constitute a simple yet elegant
        remedy to the ease factor problem: removing ease factor penalties/
        boosting, and remove the hard and easy buttons. Ja-dark originally
        called Anki without ease factor penalties/ boosting "Low Stakes Anki,"
        and Anki without the hard and easy buttons "Low-Key Anki." But in order
        to simplify things, I am going to be referring to the combination of
        both as simply "Low-Key Anki."
      </p>
      <p>
        Previous:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/can-the-easy-button-save-the-day/"
          >Can the "Easy" Button Save the Day?</nuxt-link
        >

        Next:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/low-key-anki-no-penalties-or-boosting/"
          >Low-Key Anki: No Penalties or Boosting</nuxt-link
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
      titleTemplate: 'Low-Key Anki (Solving the Ease-Factor Problem) - %s',
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
          content:
            'Low-Key Anki (Solving the Ease-Factor Problem) - Mass Immersion Approach'
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
          content:
            'Low-Key Anki (Solving the Ease-Factor Problem) - Mass Immersion Approach'
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
