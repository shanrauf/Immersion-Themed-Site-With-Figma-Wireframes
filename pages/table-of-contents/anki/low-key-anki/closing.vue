<template>
  <div>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/anki/">Anki</nuxt-link>
    <h2>Low-Key Anki: Closing</h2>
    <p>
      Here are just a few more things I wanted to touch on that didn't really
      fit in anywhere else.
    </p>

    <hr />

    <p>
      Around late 2017, my friend
      <nuxt-link
        to="https://vladsperspective.wordpress.com/2017/03/14/optimize-your-anki-youre-overtesting-yourself-on-too-few-cards-make-huge-gains/"
        target="_blank"
        rel="noopener noreferrer"
        >Vlad</nuxt-link
      >
      tried to sell me on ja-dark's version of the Low-Key Anki setup, but I
      rejected it before taking the time to fully understand ja-darks arguments.
      I fell into the trap of assuming that Anki's default settings are the most
      optimal; "If changing Anki in this way actually led to better results,
      then surely Anki would be set up that way by default." Later, around the
      middle of 2018, eshapard's blog helped me begin to understand how Anki's
      algorithm actually works, and soon after that, I naturally began to become
      aware of the <em>ease factor problem</em>. It was at this point that I
      remembered what Vlad had told me about Low-Key Anki and realized that I
      had been foolish for not taking him seriously. I called up Vlad, and over
      the course of a few hours of discussion, we formulated the basic logic for
      the Low-Key Anki setup which I presented in this series of posts. At the
      time, I assumed that the logic behind the No Penalties and Pass/Fail
      add-ons that Vlad and I had arrived at was along the same lines as
      ja-dark's, but I didn't take the time to actually read ja-dark's writing
      and confirm (his writing can be a bit verbose and cryptic).
    </p>
    <p>
      It was only recently that I finally got around to reading ja-dark's
      writing. It turns out that the paradigm of spaced repetition that he was
      operating under is radically different than the one I introduced in this
      series of posts. I won't go into detail here, but basically, ja-dark
      <em>didn't believe in spaced repetition algorithms</em>. After becoming
      interested in Anki optimization a few months ago, I spent a decent amount
      of time refining my understanding of how Low-Key Anki functions through
      learning about the forgetting curve and the underlying logic behind spaced
      repetition, via the SuperMemo website. And coming from a perspective
      grounded in SuperMemo philosophy, ja-dark's logic seems a little backwards
      to me. Overall, you could say that the formulation of Low-Key Anki that I
      have presented here is ja-dark's modifications interpreted through a
      SuperMemo-based lens.
    </p>
    <hr />

    <p>
      Although the purpose of this website is to help people learn languages,
      considering the possibility that Low-Key Anki has the potential to benefit
      people using Anki for other things as well, I tried not to limit the scope
      of this series of posts to the context of language learning. That said, I
      will note here that the Low-Key Anki setup is <em>especially</em> suited
      for language learning for two reasons. First, as I mentioned in a previous
      section, if you are learning in an i+1 fashion, all the cards in each of
      your decks should naturally have very similar intrinsic difficulties, and
      with the Low-Key Anki setup, the more homogeneous the intrinsic difficulty
      of the cards in a deck is, the more efficient the algorithm becomes.
      Second, in the context of using Anki for things like increasing
      vocabulary, each card is completely independent from one another. This
      means that if a particular card is giving you trouble, you can simply
      delete it with no negative consequences. If it's a word you really need to
      know, you will have plenty of other opportunities to learn it in the
      future, as it will continue to show up in your immersion. On the other
      hand, if you are using Anki for something like math or science, certain
      concepts might build upon other concepts, so deleting a card that is
      giving you trouble might have the potential to cause a chain reaction in
      which you end up not being able to answer a whole cluster of other cards
      that build upon the original concept.
    </p>
    <hr />

    <p>
      As of this writing, it's been nearly five months since I initially
      presented Low-Key Anki to my
      <nuxt-link
        to="https://www.patreon.com/mattvsjapan"
        target="_blank"
        rel="noopener noreferrer"
        >patrons</nuxt-link
      >. When I asked the early adopters what their experience has been, I
      received consistent reports of reduced amount of daily reviews, reduced
      time spent on each card, and massive reductions in stress associated with
      reviewing.
    </p>
    <p>
      Previous:
      <nuxt-link
        to="/table-of-contents/anki/low-key-anki/low-key-anki-usage-guide/"
        >Low-Key Anki: Usage Guide</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
