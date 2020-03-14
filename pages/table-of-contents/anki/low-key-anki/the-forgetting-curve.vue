<template>
  <div>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/anki/">Anki</nuxt-link>
    <h2>Low-Key Anki: Intro</h2>
    <h2>The Forgetting Curve</h2>

    <p>
      Your brain is programmed to throw away useless memories in order to
      optimize the availability of useful ones. You can think of the equation
      for the forgetting curve as an attempt to mathematically replicate the
      algorithm that the brain uses in order to determine what memories should
      get thrown away at what times. The equation for the forgetting curve says
      that there are three main factors that determine when a memory will be
      forgotten: retrievability, stability, and time. Time is pretty
      straightforward, so let’s talk about the other two.
    </p>
    <p>
      The retrievability of a memory is the probability that you will be able to
      successfully recall that memory at a specific point in time1. If I asked
      you what your name is, we can assume that there is a 99.99% chance that
      you will be able to successfully recall your name and tell me what it is.
      Therefore, for you, the retrievability of your name is 99.99%. If I told
      you that my middle name is Lawrence, and then just 30 seconds later, asked
      you to tell me what my middle name is, we can assume that you would be
      able to tell me. So, 30 seconds after initially learning my middle name,
      the retrievability is also around 99%. If the retrievability of your own
      name, which you know extremely well, and the retrievability of my middle
      name, which you just learned and are likely to soon forget, are both
      around 99%, then clearly we need some other sort of metric in order to
      talk about how deeply/strongly a memory is lodged into our brain. This is
      stability.
    </p>
    <p>
      The stability of a memory is the rate at which retrievability drops over
      time. Because you know your own name so well (or in other words, because
      the memory is so stable), hypothetically, you might be able to go years
      without recalling it and still have the retrievability stay above 99%. On
      the other hand, after a week, the retrievability of my middle name will
      likely drop to around 20% (there will only be a 20% probability that you
      would be able to successfully recall it).
    </p>
    <img
      src="https://massimmersionapproach.com/imgs/2018/10/the-forgetting-curve.png"
      alt="Forgetting Curve Illustration"
    />

    <p>
      If a memory is successfully recalled before it is forgotten, AKA reviewed,
      the retrievability of the memory will be reset to 100%, and the stability
      of the memory will increase. The amount that stability increases with each
      review depends on how low retrievability is at the time of recall: the
      lower the retrievability at the time of recall, the larger the increase in
      stability. This is what is known as the spacing effect: the best time to
      review something is right before you forget it. So less review can
      actually create stronger memories. But you have to be careful, because if
      you wait too long and a memory is actually forgotten, it will have to be
      relearned, and the stability will actually decrease. I will also note here
      that relearning is distinctly different from initial learning; once
      relearned, although stability will have decreased, a majority of the
      previous stability will still have been retained.
    </p>
    <p>
      The standard formulation of the equation for the forgetting curve is set
      up to allow one to find the retrievability of a memory at a specific point
      in time, given the stability. But if we want to be able to track how the
      stability of memories grow as we continue to review them over time, there
      is actually a third factor that we need to take into account: the
      difficulty of the information. Different kinds of information can be
      inherently harder or easier to remember. For example, remembering a new
      word in a language you are fluent in is easy, while remembering a new word
      in a language you just started to learn is more difficult. This is what
      SuperMemo calls the “absolute factor” of memories, and what I like to call
      the intrinsic difficulty. The more intrinsically difficult a piece of
      information is, the more often it will have to be reviewed in order to
      keep it in your memory (the slower that stability will increase over
      time).
    </p>
    <p>
      In Anki, retention rate accounts for retrievability, intervals account for
      stability, and ease factors account for intrinsic difficulty. I will talk
      more about retention rate later, but for now, let’s focus on interval and
      ease factor. The interval of a card is simply how often you review it; if
      you review a card once a month, it has an interval of one month. The ease
      factor of a card represents how quickly the interval of that card will
      grow; the larger the ease factor, the more quickly that card’s interval
      will grow.
    </p>
    <br />

    <p>
      Next:
      <nuxt-link
        to="/table-of-contents/anki/low-key-anki/forgetting-strategically/"
        >Forgetting Strategically</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default { transition: 'page' }
</script>

<style></style>
