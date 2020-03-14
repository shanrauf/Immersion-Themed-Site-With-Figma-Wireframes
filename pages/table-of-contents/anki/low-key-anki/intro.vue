<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>Low-Key Anki: Intro</h1>
    <div class="article-content">
      <p>
        When used with default settings, Anki's algorithm is horribly
        inefficient. Although we can never expect Anki's algorithm to approach
        the same levels of efficiency as more advanced algorithms such as
        SuperMemo's, by modifying Anki's settings in the right way, we can make
        significant strides in that direction. Making Anki's algorithm more
        efficient means becoming able to learn
        <em>more things in less time</em>, and in certain situations,
        <em>remembering what we learn better</em>. Sounds nice, doesn't it?
      </p>

      <p>
        The following is an in-depth guide that aims to provide a deep
        understanding of a specific aspect of Anki optimization: what I call the
        <em>ease factor problem</em>, and its solution, the
        <em>Low-Key Anki</em> setup. The Low-Key Anki setup is a series of
        counterintuitive simplifications one can make to Anki's algorithm that
        result in a significant boost in efficiency, as well as a considerable
        reduction in the stress associated with reviewing cards. The first two
        sections cover broader aspects of the mechanisms behind spaced
        repetition, which will provide a foundation for understanding not only
        the <em>ease factor problem</em> and <em>Low-Key Anki</em> but other
        aspects of Anki optimization that I will be covering in the future as
        well, such as optimal retention rate. I recommend watching
        <a
          href="https://www.youtube.com/watch?v=lz60qTP2Gx0"
          target="_blank"
          rel="noopener"
          >my guide on the basics of Anki's algorithm</a
        >
        before tackling this guide, as I will be assuming a basic understanding
        of how Anki's algorithm works.
      </p>

      <p>
        If you are not interested in investing the time and effort to fully
        understand Anki's algorithm, its problems, and the solutions to those
        problems, and wish to blindly implement my advice because you trust that
        I know what I'm talking about, then you can skip to the
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/low-key-anki-summary-and-installation/"
          >Summary and Installation</nuxt-link
        >
        section for a TL;DR explanation of the Low-Key Anki setup and
        instructions for how to implement it.
      </p>
      <p>
        That said, I highly encourage you to
        <em>empower yourself</em> by learning how this program you plan on
        investing so many hours into actually works. To quote
        <a
          href="https://www.lesswrong.com/posts/fg9fXrHpeaDD6pEPL/truly-part-of-you"
          target="_blank"
          rel="noopener"
          >Eliezer Yudkowsky</a
        >:
      </p>
      <blockquote>
        "A shepherd builds a counting system that works by throwing a pebble
        into a bucket whenever a sheep leaves the fold, and taking a pebble out
        whenever a sheep returns. If you, the apprentice, do not understand this
        system - if it is magic that works for no apparent reason - then you
        will not know what to do if you accidentally drop an extra pebble into
        the bucket. That which you cannot make yourself, you cannot remake when
        the situation calls for it. You cannot go back to the source, tweak one
        of the parameter settings, and regenerate the output, without the
        source."
      </blockquote>

      <p>
        All information I don't specifically cite either comes from the
        <a
          href="https://www.supermemo.com/english/contents.htm"
          target="_blank"
          rel="noopener"
          >SuperMemo website</a
        >
        or the
        <nuxt-link
          to="https://apps.ankiweb.net/docs/manual20.html"
          target="_blank"
          rel="noopener"
          >Anki manual</nuxt-link
        >. Next:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/the-forgetting-curve/"
          >The Forgetting Curve</nuxt-link
        >
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
