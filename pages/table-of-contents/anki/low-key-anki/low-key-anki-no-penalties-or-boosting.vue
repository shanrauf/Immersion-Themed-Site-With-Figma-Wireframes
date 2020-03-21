<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>Low-Key Anki: No Penalties or Boosting</h1>
    <div class="article-content">
      <p>
        What I am calling "Low-Key Anki" consists of two Anki add-ons which were
        created by ja-dark. The first of these two add-ons, "No Penalties or
        Boosting," removes the ease factor changes that are normally applied to
        cards while reviewing. What this means is that, when using this add-on,
        no matter what grade you give a card ("again," "hard," "good," "easy"),
        the ease factor will always remain unchanged; only the interval will be
        modified.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2018/10/NO-boosting.png"
        alt=""
        width="700"
        height="357"
      />
      <a
        to="https://ankiweb.net/shared/info/494944895"
        target="_blank"
        rel="noopener"
        >Ease Factor Histogram Add-on</a
      >
      <p>
        I explained in a prior section that because aiming for 100% retention is
        inefficient and unrealistic due to the probabilistic nature of the
        forgetting curve, effective SRS use consists of strategically forgetting
        a certain portion of your cards. Let's call forgetting that occurs as a
        byproduct of <em>intentionally</em> aiming for a retention rate of less
        than 100%, "anticipated lapses." <em>Anticipated lapses</em> occur even
        when the algorithm is functioning perfectly, and have nothing to do with
        inappropriate ease factors. On the other hand, lapses can also occur due
        to an inappropriately high ease factor causing the interval of a card to
        grow too quickly. Let's call lapses that happen for this reason "ease
        factor lapses."
      </p>
      <p>
        In Anki's default algorithm, <em>anticipated lapses</em> are, by
        definition, <em>unjustly</em> penalized in the form of ease factor
        reduction, hurting efficiency and wasting the time of the user (the ease
        factor problem). The No Penalties or Boosting add-on remedies this by
        wiping out ease factor reductions altogether. The potential problem with
        this is that now <em>ease factor lapses</em> will go untreated: because
        ease factors will never be changed from their starting value, if the
        intrinsic difficulty of a card is significantly lower or higher than the
        bulk of the other cards in the deck, it is going to suffer from
        intervals growing at a rate that is faster/slower than what is optimal.
        So by alleviating the unjust damage done to <em>anticipated lapses</em>,
        we are causing new damage in the form of nonoptimal interval growth in
        cards whose intrinsic difficulty diverge from the bulk of the deck.
      </p>

      <p>
        Let's consider whether this tradeoff is worth it. Really, it comes down
        to
        <em
          >how heterogeneous is the intrinsic difficulty of the cards in the
          deck?</em
        >
        <strong
          >If the intrinsic difficulty of the cards in a deck are
          <em>largely</em> homogeneous, then we can expect the benefit of using
          the No Penalties or Boosting add-on to greatly outweigh the
          cost</strong
        >. For example, in the case of sentence mining, if all of the sentences
        you learn are i+1, then we can expect that all of the cards in your deck
        will have very similar intrinsic difficulties. This means that nearly
        all lapses that occur will be <em>anticipated lapses</em>, AKA, due to
        either poor initial learning, a random brain fart, or a simple fluke of
        memory. By using the No Penalties or Boosting add-on,
        <strong
          >instead of having this fluke permanently stunt the growth of the
          card, you will be able to see the card again once, properly relearn
          it, and then have the card's interval go back to growing at a normal
          rate</strong
        >.
      </p>
      <p>
        But what about those <em>minority</em> of cards that are significantly
        more or less intrinsically difficult than the rest of the deck? Well,
        for cards that are relatively <em>less</em> intrinsically difficult, you
        <em>will</em> end up seeing them more often than what is optimal, but
        compared to
        <strong
          >how much time you will be saving <em>not</em> seeing cards that were
          <em>anticipated lapses</em> more often than what is optimal</strong
        >, what you are losing here is negligible. Furthermore, in the context
        of language learning, if a card is so easy that you only need to see it
        half as often as all your other cards, then you probably don't really
        need that card in the first place (as immersion will retain your memory
        of the word/construction).
      </p>
      <p>
        What about cards that are relatively
        <em>more</em> intrinsically difficult? We can expect that the interval
        of these cards will grow too quickly, leading to
        <em>ease factor lapses</em>. And because the ease factor won't be
        adjusted, we can expect these cards to continue to lapse and give us
        trouble. Well, we can remedy this issue by setting a low
        <em>leech threshold</em>. In Anki, a "leech" is a card that has lapsed a
        given number of times. The idea with leeches is that if you fail the
        <em>same</em> card a significant number of times,
        <em>something</em> about that card probably needs to be changed. So,
        after a card becomes a leech, Anki will notify you of this and
        automatically tag and suspend the card, such that you can continue your
        current study session, and then properly handle the leech later on. By
        default, the leech threshold, or the number of times a card must lapse
        before it becomes a leech, is eight, but this can be changed within the
        deck options. By setting the leech threshold to something low (like
        four), we can swiftly catch these intrinsically difficult cards and
        <em>modify them to reduce the intrinsic difficulty</em>. "When you fail
        cards, it's commonly a matter of the quality of your memory encoding;
        that the interval was too long was a symptom of this, not the cause.
        <em>Difficult cards are primarily a matter of quality control</em>, not
        quantity." To go back to the example of sentence mining, if a card
        becomes a leech, you can try finding a new sentence that contains the
        target word, finding a different definition for the target word, or
        adding audio. By modifying cards to lower the intrinsic difficulty in
        this way, we allow its interval to grow at the same rate as the other
        cards in the deck. After reformatting a leech, you may want to also
        reset the interval of the card in order to give it a fresh start, but I
        will explain this more in the next section.
      </p>

      <p>
        Compare this process to what happens to a relatively intrinsically
        difficult card in Anki's default algorithm: it gets graded "again" and
        "hard" a few times, the ease factor is reduced, and interval growth is
        slowed down enough for the content of the card to be kept in memory. So,
        instead of reformatting the knowledge contained in the card in a way
        that makes it easier to remember, allowing its intervals to go more
        quickly so that
        <strong
          >you can spend less time reviewing the card from that point
          onward</strong
        >, you see the card more often indefinitely. Clearly, the first option
        is more desirable. Now, there will also be times where no amount of
        reformatting is enough, and a card simply won't stick. In cases like
        these, it's best to just delete the card. According to the
        <a
          href="https://www.supermemo.com/articles/theory.htm"
          target="_blank"
          rel="noopener"
          >SuperMemo website</a
        >, "Eliminating 10% of the most difficult items in a generic material
        may produce an increase in the speed of learning of up to 300%"; the
        time that stubborn leeches eat up simply isn't worth the time they take
        away from learning other material.
      </p>

      <p>
        So, it's clear in my eyes that the No Penalties or Boosting add-on
        constitutes a <em>significant upgrade</em> to Anki's algorithm, given
        that the intrinsic difficulty of the cards in a deck is largely
        homogeneous. But what about decks with more heterogeneous intrinsic
        difficulty? Although we can expect largely homogeneous intrinsic
        difficulty of cards when dealing with the domain of language learning,
        if you are using Anki to study a subject like math or science, perhaps
        the intrinsic difficulty of the different cards in your deck will be
        significantly heterogeneous. In cases like this, whether or not using
        the No Penalties or Boosting add-on will be beneficial is not as
        clear-cut. With significant intrinsic difficulty heterogeneity, the
        resulting amount of untreated <em>ease factor lapses</em> may lead to an
        unmanageable amount of leeches, a significant portion of which will
        simply not be re-workable in a way that lowers the intrinsic difficulty.
        In a case like this, the benefit of removing unjust penalties from
        <em>anticipated lapses</em> may not outweigh the cost of the increased
        number of <em>ease factor lapses</em>.
      </p>

      <p>
        That said, because the benefit of using the No Penalties or Boosting
        add-on when the intrinsic difficulty of the cards in your deck
        <em>is</em> largely homogeneous is so great, what I would recommend to
        people with <em>heterogeneous</em> intrinsic difficulties in a deck is
        to attempt splitting that deck into multiple <em>subdecks</em>. For
        example, let's say that we are studying Japanese and have one giant deck
        that contains a mix of kanji, sentence cards, and production cards.
        Although the intrinsic difficulty of all the <em>kanji</em> cards is
        likely to be similar to each other, the average intrinsic difficulty of
        a kanji card may be greater than the average intrinsic difficulty than a
        sentence card or production card. So if we split this one big
        heterogeneous deck into smaller subdecks (one for kanji, one for
        sentences, and one for production cards), we would end up with three
        relatively <em>homogeneous</em> decks, and become able to benefit from
        using the No Penalties or Boosting add-on, making our studies much more
        efficient.
      </p>

      <p>
        Now at this point, you may be wondering: if we have three relatively
        homogeneous subdecks, but each of those decks have
        <em>different</em> average intrinsic difficulties, then how are the
        intervals going to grow at appropriate rates for each of the different
        subdecks after the feature of ease factors has been removed? This is
        where the Interval Modifier comes in. When using the No Penalties or
        Boosting add-on, instead of calibrating interval growth to match
        intrinsic difficulty on the basis of <em>individual cards</em> using
        ease factors, you use the Interval Modifier to calibrate interval growth
        on the basis of <em>entire decks</em>. The Interval Modifier is a
        feature within the deck options that allows you to modulate the speed at
        which the intervals of all the cards in a deck grow; it's the deck
        version of ease factor.
      </p>

      <p>
        By assigning each deck its own
        <a
          jref="https://youtu.be/lz60qTP2Gx0?t=315"
          target="_blank"
          rel="noopener"
          >Option Group</a
        >, we can independently adjust the Interval Modifier for each of our
        decks. By intermittently checking our retention rate and adjusting the
        Interval Modifier accordingly (making intervals grow faster for less
        reps with a lower retention rate, or making intervals grow slower for
        more reps with a higher retention rate), we can move towards our ideal
        retention rate over time. This way, intervals will grow at a pace that
        matches the mean intrinsic difficulty of the deck. This intermittent
        Interval Modifier modulation may sound like more work, but as I
        explained earlier, effective SRS use is about strategically deciding how
        much you want to forget; if you let Anki make this decision for you, the
        result is likely to be far from optimal. Anki is calibrated such that
        most people learning most things will have forgotten 10% of the cards
        that come up for review. Not only is it plausible that you won't
        perfectly fall into the category of "most people most of the time," but
        even if you do, in many circumstances, 90% is not the optimal retention
        rate to aim for (I will be covering optimal retention rates in the near
        future). You can also expect an add-on which will automate the process
        of Interval Modifier modulation to come out soon. Until then, I
        recommend
        <a
          href="https://eshapard.github.io/anki/target-an-80-90-percent-success-rate-in-anki.html"
          target="_blank"
          rel="noopener"
          >this short article</a
        >
        by eshapard for learning how to modulate the Interval Modifier.
      </p>

      <p>
        Previous:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/solving-the-ease-factor-problem/"
          >Solving the Ease Factor Problem</nuxt-link
        >

        Next:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/low-key-anki-pass-fail/"
          >Low-Key Anki: Pass/Fail</nuxt-link
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
