<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/anki/">Anki</nuxt-link>
    <h2>Solving the Ease Factor Problem</h2>
    <p>
      I am not the first person to realize that the excessively high "learning
      rate" of Anki's algorithm leads to extremely inefficient scheduling; both
      <nuxt-link
        to="https://forum.koohii.com/thread-14570.html"
        target="_blank"
        rel="noopener"
        >ja-dark</nuxt-link
      >
      and
      <nuxt-link
        to="https://eshapard.github.io/aboutme.html"
        target="_blank"
        rel="noopener"
        >eshapard</nuxt-link
      >
      have written about the ease factor problem and proposed possible solutions
      to it. Eshapard initially proposed using longer learning steps: because
      Anki doesn't start changing the ease factor of cards until
      <em>after</em> they have graduated from the learning queue, the more time
      that cards spend in the learning queue, the longer their ease factors
      remain safe. Although this approach constitutes a big step up from vanilla
      Anki, it has many downsides which I won't go into here. If you would like
      to learn more about this approach, check out eshapard
      <nuxt-link
        to="https://eshapard.github.io/anki/what-anki-learning-steps-to-use.html"
        target="_blank"
        rel="noopener"
        >original blog post</nuxt-link
      >
      about it, or
      <nuxt-link
        to="https://youtu.be/1XaJjbCSXT0"
        target="_blank"
        rel="noopener"
        >Conaanaa's video</nuxt-link
      >
      summarizing eshapard's ideas.
    </p>
    <p>
      Eshapard later went on to create an add-on that completely overrides
      Anki's original algorithm, replacing it with a new one that more closely
      resembles SuperMemo's. I think it's a huge step in the right direction,
      but due to its simplicity, this new algorithm suffers from its own form of
      an excessively high "learning rate," in addition to completely precluding
      the possibility of using Anki on mobile devices (as an add-on is needed to
      use the new algorithm, and only the desktop version of Anki supports
      add-ons). You can read more about eshapard's new algorithm
      <nuxt-link
        to="https://eshapard.github.io/anki/thoughts-on-a-new-algorithm-for-anki.html"
        target="_blank"
        rel="noopener"
        >here</nuxt-link
      >.
    </p>

    <img
      src="https://massimmersionapproach.com/imgs/2018/10/CriteriEN-1-300x148.png"
      alt=""
      width="700"
      height="344"
    />

    <p>
      The best solution to the ease factor problem that I know of was created by
      ja-dark, a how-to-learn-Japanese blogger who since has disappeared from
      the internet. In his now-defunct post, "CriteriEN: No Card Left Behind,"
      ja-dark outlined a series of changes to Anki's settings and algorithm that
      he recommended in order to optimize workflow. I don't agree with many of
      the things that he said, but a combination of two of the changes he made
      to the algorithm constitute a simple yet elegant remedy to the ease factor
      problem: removing ease factor penalties/ boosting, and remove the hard and
      easy buttons. Ja-dark originally called Anki without ease factor
      penalties/ boosting "Low Stakes Anki," and Anki without the hard and easy
      buttons "Low-Key Anki." But in order to simplify things, I am going to be
      referring to the combination of both as simply "Low-Key Anki."
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
</style>
