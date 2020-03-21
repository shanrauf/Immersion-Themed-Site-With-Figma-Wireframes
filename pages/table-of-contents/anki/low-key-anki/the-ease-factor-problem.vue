<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>The Ease Factor Problem</h1>
    <div class="article-content">
      <p>
        Anki makes the (realistic) assumption that
        <em
          >the intrinsic difficulty of the cards in a given deck are
          heterogeneous</em
        >
        (or in other words, that some cards in your deck will be more or less
        intrinsically difficult than others), and accounts for this by using the
        grades you give your cards as feedback to constantly adjust the ease
        factor of individual cards (remember, ease factor accounts for the
        intrinsic difficulty of cards, and controls the <em>speed</em> at which
        intervals grow). When you grade a card "again" or "hard," the ease
        factor is decreased; when you grade a card "easy," the ease factor is
        increased. Only when you grade a card "good" does the ease factor remain
        unchanged. The idea is that, over time, each card will slowly move
        towards its hypothetical "ideal ease factor." It sounds nice in theory,
        but in reality, this system is highly flawed.
      </p>
      <p>
        I explained above that because the equation for the forgetting curve
        only tells us the <em>probability</em> of how long we will be able to
        remember something, we have to decide how low are we going to let that
        probability drop before we review; by default, Anki aims to let it drop
        to 90%. Let's imagine that, hypothetically, we have an Anki deck in
        which every card has an <em>identical</em> intrinsic difficulty, and the
        ease factor of each card is <em>perfectly</em> matched to that intrinsic
        difficulty. Assuming that we are waiting for retrievability to drop to
        90% before reviewing, on average, we would miss 10% of the cards that
        come up for review. In Anki, each time you hit "fail" on a card, the
        card's ease factor is reduced by 20 percentage points, making the card's
        interval grow slower (in turn making you review it more often),
        <em>indefinitely</em> from that point onward. Hopefully you see the
        problem here. This means that, in this hypothetical scenario where
        <em>every card in the deck already has the perfect ease factor</em>,
        Anki is outright <em>messing up</em> the ease factor of 10% of the cards
        you review each day, forcing you to waste time reviewing them more often
        than necessary in the future.
      </p>
      <p>
        The SRS isn't about <em>not forgetting</em>, it's about
        <em>forgetting strategically</em>; because the price of retention is
        time, aiming for 99% retention is inefficient and unrealistic. Thus,
        Anki is calibrated so that you strategically forget 10% of your cards.
        Although some of that forgetting will be due to inappropriately high
        ease factors, we can expect a large portion of it to simply be a
        function of the forgetting curve, completely unrelated to ease factor.
        This is why the more recent SuperMemo algorithms take the
        <em>entire history</em> of the card into account when deciding whether
        or not to update the A-Factor (SuperMemo equivalent of ease factor); if
        a card was graded "good" 10 times, and then "again" once, chances are
        that the ease factor doesn't need to be changed. On the other hand,
        <strong
          >Anki lowers the ease factor of every card that is failed, regardless
          of the card's history</strong
        >.
      </p>
      <p>
        Another way to think about what is going here is to borrow the concept
        of "learning rate" from machine learning. The following is a quote from
        <a
          href="http://slatestarcodex.com/2018/10/22/cognitive-enhancers-mechanisms-and-tradeoffs/"
          target="_blank"
          rel="noopener"
          >a Slate Star Codex article</a
        >:
      </p>
      <blockquote>
        "Suppose that you have a neural net trying to classify cats vs. dogs.
        It's already pretty well-trained, but it still makes some mistakes.
        Maybe it's never seen a Chihuahua before and doesn't know dogs can get
        that small, so it thinks "cat". A good neural network will learn from
        that mistake, but the amount it learns will depend on a parameter called
        learning rate: If learning rate is 0, it will learn nothing. The weights
        won't change, and the next time it sees a Chihuahua it will make the
        exact same mistake. If learning rate is very high, it will overfit. It
        will change everything to maximize the likelihood of getting that one
        picture of a Chihuahua right the next time, even if this requires
        erasing everything it has learned before, or dropping all "common sense"
        notions of dog and cat. It is now a "that one picture of a Chihuahua vs.
        everything else" classifier. If learning rate is a little on the low
        side, the model will be very slow to learn, though it will eventually
        converge on a good understanding of its topic. If learning rate is a
        little on the high side, the model will learn very quickly, but "jump
        around" between different understandings heavily weighted toward what
        best fits the last case it has worked on."
      </blockquote>

      <p>
        Going with this metaphor, we could say that the
        <em>learning rate</em> of SuperMemo's algorithm with regards to ease
        factor is relatively low. A disproportionate amount of weight is not
        placed on the most recent data point; <em>all</em> data that has been
        collected up to date is taken into account when deciding whether or not
        to alter the ease factor, allowing the ease factor of cards to be
        efficiently optimized in the long run. On the other hand, we could say
        that the <em>learning rate</em> of Anki's algorithm is extremely high.
        Each time you give a card a grade other than "good," Anki makes a
        short-sighted shift to the ease factor in order to honor that most
        recent grade, ignoring all of the other data that has been gathered up
        to that point. By ignoring the possibility of the grade being accounted
        for by <em>proper functioning of the forgetting curve</em>, and always
        aligning the ease factor to the single newest piece of data, the
        algorithm increases the possibility of short-term success with the card,
        in turn majorly sacrificing efficiency in the long run.
      </p>
      <p>
        This is what I call the "ease factor problem": most of the time, when
        you forget a card, it is either due to poor initial learning, a random
        brain fart, or a simple fluke of memory, <em>not</em> because the card
        is inherently harder than the other cards in your deck. As
        <a
          href="https://forum.koohii.com/thread-14570.html"
          target="_blank"
          rel="noopener"
          >ja-dark</a
        >
        put it, "When you fail cards, it's commonly a matter of the quality of
        your memory encoding; that the interval was too long was a symptom of
        this, not the cause." So what you really want is to see the card again
        <em>once</em>, properly relearn it, and then have the card's interval
        grow at a normal rate. Because the lapse was a fluke, the measure taken
        should be temporary, not permanent. But in reality, that fluke is going
        to cost you 20 percentage points off your ease factor, causing you to
        waste time needlessly seeing the card more often for
        <em>the rest of time</em>.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2018/10/ease-hell-1024x576.png"
        alt=""
        width="700"
        height="394"
      />

      <p>
        In the worst cases, the ease factor problem can lead to what Conaanaa
        refers to as "ease hell," where due to successively grading a card
        "again" and "hard," the ease factor is reduced to the point where you
        are stuck seeing the card every few days, indefinitely. The following
        image, taken from
        <a href="https://youtu.be/1XaJjbCSXT0" target="_blank" rel="noopener"
          >Conaanaa's video on the topic</a
        >, demonstrates the radical difference in interval growth between a card
        with a healthy ease factor of 250%, and a card with the minimum ease
        factor of 130%. Starting with an interval of five days, after four
        repetitions, a healthy card's interval will have grown to 75 days,
        whereas an unhealthy card's interval will have only grown to 10.
      </p>

      <p>
        Previous:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/forgetting-strategically/"
          >Forgetting Strategically</nuxt-link
        >
        Next:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/can-the-easy-button-save-the-day/"
          >Can the "Easy" Button Save the Day?</nuxt-link
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
