<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/anki/">Anki</nuxt-link>
    <h2>Low-Key Anki: Usage Guide</h2>
    <p>
      When using the Low-Key Anki setup, the speed at which intervals grow is
      modulated at the level of <em>deck</em> (using the Interval Modifier),
      instead of <em>individual cards</em> (using ease factors). Because all
      cards in a deck are subject to the same speed of interval growth, the more
      homogeneous the intrinsic difficulty of the different cards in a deck is,
      the more efficient the algorithm will be. Because of this, it’s a good
      idea to split your collection into multiple subdecks based on the type of
      card, as generally, cards of the same type will have similar intrinsic
      difficulties. For example, if you are learning Japanese, you may want to
      have one subdeck for kanji, one subdeck for sentence cards, and one
      subdeck for production cards.
    </p>
    <p>
      But when actually doing reviews, it's usually a good idea to mix all of
      your different types of cards together. Of course, it's <em>easier</em> to
      do all of your kanji reviews, then all of your sentence card reviews, then
      all of your production card reviews; it can be quite jarring to jump back
      and forth between different types of content. But in reality, this jarring
      sensation is precisely what you want. One common problem you often hear
      Anki users report is that, although they can successfully answer a card
      when it comes up for review, when they need to recall the same piece of
      knowledge in real life, it's not there. The reason this happens is that if
      you only practice recalling a piece of information in the specific context
      of being shown a certain flashcard, the ability to recall the piece of
      information becomes <em>dependent</em> upon that specific context, and the
      ability to recall the information in other contexts never gets developed.
      Although we can't expect to eradicate this problem completely, by making
      efforts to make our study sessions <em>less predictable</em>, we can
      reduce the frequency with which it occurs. With Anki it's always best to
      <em>practice how you play</em>: in general, the more your Anki cards/study
      sessions <em>replicate real life</em>, the better your results will be.
      Mixing different types of cards together during review is one way to do
      this.
    </p>
    <p>
      Think about it this way: if you always do your kanji reviews before you do
      your sentence card reviews, then when reviewing kanji, your brain will go
      into "kanji mode," and only access memories that were created and stored
      during other times you were in "kanji mode." Imagine a bucket in your mind
      where all your kanji-related memories are stored; your brain will only
      have to search within this limited bucket in order to answer cards.
      Conversely, if all your different types of reviews are mixed together,
      your brain will be forced to stay on its toes and create slightly less
      context-dependent memories: now that all your different types of memories
      are in a single, big bucket, your brain will be forced to sift through a
      lot more in order to arrive at the answer. In cognitive psychology, this
      is what is known as
      <nuxt-link
        to="https://www.amazon.com/Make-Stick-Science-Successful-Learning/dp/0674729013"
        target="_blank"
        rel="noopener noreferrer"
        >the interleaving effect</nuxt-link
      >; you can think of this as a form of
      <nuxt-link
        to="https://en.wikipedia.org/wiki/Desirable_difficulty"
        target="_blank"
        rel="noopener noreferrer"
        >desirable difficulty</nuxt-link
      >.
    </p>

    <img
      src="https://massimmersionapproach.com/imgs/2018/10/Filtered-Decks.png"
      alt=""
      width="500"
      height="411"
    />

    <h1>Filtered Decks (Anki 2.0 Only)</h1>
    <p>
      So, we want to have many different subdecks, but we also want to mix
      together all of our reviews. Conveniently, in Anki 2.1, as long as the
      “Experimental V2 scheduler” is turned on in Preferences, when reviewing a
      parent deck, cards from all the subdecks will be shown mixed together
      automatically. Unfortunately, this isn’t the case in Anki 2.0. In Anki
      2.0, when reviewing a parent deck, all cards from the first subdeck are
      always shown before cards in the second subdeck, and so on.
    </p>
    <p>
      In Anki 2.0, the only way to mix together reviews from different subdecks
      is to use a <em>filtered deck</em>. A filtered deck is a sort of
      make-shift ghost deck which <em>temporarily</em> gathers together
      specified subsets of cards from all of your other decks, allowing you to
      review them more conveniently. After reviewing a card in a filtered deck,
      the card automatically returns to its original deck. It's possible to use
      filtered decks to review cards that <em>aren't</em> currently due for
      review, but when using a filtered deck to review cards that
      <em>are</em> due for review, the cards are treated the same way that they
      would be if you reviewed them in their original deck. You can create a
      filtered deck by going to "Tools &gt; Create Filtered Deck…", or pressing
      "F." You will be prompted with a window to specify exactly which cards you
      want the filtered deck to gather. By inputting
      <code
        >(deck:"<em>deck name</em>" is:due -is:learn) or (deck:"<em
          >deck name</em
        >" is:new -is:learn)</code
      >, you can make a filtered deck that contains all of the
      <em>new cards</em> and <em>learned cards currently for review</em> from a
      deck of your choice. What I recommend is putting all of your subdecks into
      one parent deck, and then making a filtered deck using the input I gave
      above, replacing "<em>deck name</em>" with the name of the parent deck. I
      would set "Limit to" to 99999 and "cards selected by" to Random (the most
      context-independent option!). Then make sure to check off "Reschedule
      cards based on my answers to this deck." You can leave the "Custom steps"
      box unchecked. You only need to set up a filtered deck once; after that,
      you can "Empty" and "Rebuild" it as many times as you would like. I
      recommend "Rebuild"ing the filtered deck at the beginning of each day, and
      do all of your reviews there.
    </p>
    <img
      src="https://massimmersionapproach.com/imgs/2018/11/FilteredNEW.png"
      alt=""
      width="550"
      height="255"
    />

    <p>
      Unfortunately, in Anki 2.0, when creating a filtered deck, there is no way
      to specify how many new cards you would like to learn each day. Because of
      this, the only way to ensure that a filtered deck will grab
      <em>all</em> of the cards that are due for review is to have it grab
      <em>all</em> of the new cards in your deck as well. This means that, for
      example, if are using a pre-made deck that contains thousands of new cards
      in it, the filtered deck you create will attempt to show you all of those
      thousands of cards in a single day. In order to avoid this, you will need
      to <em>suspend</em> all of the new cards that you don't want to learn. In
      other words, suspend all of your new cards, and then
      <em>unsuspend</em> the new cards you <em>do</em> want to learn at the
      beginning of each day.
    </p>
    <p>
      You can learn more about the details of how filtered decks work, and all
      of the different inputs you can use, in the
      <nuxt-link
        to="https://apps.ankiweb.net/docs/manual20.html#filtered-decks-&amp;-cramming"
        target="_blank"
        rel="noopener noreferrer"
        >Anki manual</nuxt-link
      >. I also recommend
      <nuxt-link
        to="https://eshapard.github.io/anki/anki-and-the-hidden-dangers-of-filtered-decks.html"
        target="_blank"
        rel="noopener noreferrer"
        >this post</nuxt-link
      >
      by eshapard for a few things to be careful of when using filtered decks
      and a related useful add-on.
    </p>
    <h1 id="mobile">Low-Key Anki on Mobile</h1>
    <p>
      Because add-ons are only supported on the desktop version of Anki,
      adopting the add-on-reliant Low-Key Anki setup poses potential problems to
      users who commonly review cards on mobile devices. Luckily, we can get
      around this without too much trouble. With regards to the hard and easy
      buttons, well, we can simply not press them. But, as I explained in a
      prior section, simply having the extra buttons in sight can have adverse
      effects. If you are using the official Anki app for iOS, you can hide the
      answer buttons by going to "Settings &gt; Review &gt; Answer Buttons =
      off", and then program new "again" and "good" buttons in the form of
      "taps" by going to "Settings &gt; Review &gt; Taps &gt; WHEN ANSWER IS
      SHOWN &gt; Bottom Left = Answer Again, Bottom Right = Answer Good". Now,
      after viewing the back of a card, you can press the bottom left of the
      screen to fail a card and the bottom right of the screen to pass a card,
      without being tempted to press "hard."
    </p>
    <p>
      Similarly, in AnkiDroid, you can hide the answer buttons by going to
      "Settings &gt; Reviewing &gt; Fullscreen mode" and selecting "Hide the
      system bars and answer buttons," and then set new pass/fail answer buttons
      by going to "Settings &gt; Gestures", checking "Enable gestures," and
      setting "Touch left" to "Answer button 1" and "Touch right" to "Answer
      recommended" (because new cards only have three possible grading options,
      setting "Touch right" to "Button 3" would result in new cards being graded
      "easy" instead of "good"; "Answer recommended" will grade both reviews and
      new cards "good".)
    </p>
    <img
      src="https://massimmersionapproach.com/imgs/2018/10/mobile-576x1024.png"
      alt=""
      width="200"
      height="356"
    />

    <p>
      When using Anki with default settings, pressing "again" on a card lowers
      that card's ease factor by 20 percentage points. When using the Low-Key
      Anki setup, we don't want this to happen. On the desktop version of Anki,
      we prevent this with the No Penalties or Boosting add-on. Unfortunately,
      there is no way to prevent this ease factor reduction when reviewing on
      mobile, but we <em>can</em> retroactively negate any ease factor-damage
      that was done by running the ResetEZ add-on. For example, let's say that
      when reviewing on mobile, we pressed "again" on a card we didn't know
      well, and the ease factor got reduced from 250 to 230. The danger here is
      that after that lapsed card leaves the relearning queue, gets assigned a
      new interval, and eventually comes back up for review, if the ease factor
      has yet to be reset, when given a grade of "good," the new interval will
      become "previous interval * 230" instead of "previous interval * 250"
      (remember, when a card is graded "good," its new interval becomes
      "previous interval * ease factor). If this were to happen, the interval
      wouldn't grow as much as we want it to, and the growth of the card's
      interval would become compromised from that point onward. But as long as
      we run ResetEZ and reset the ease factor of all your cards to 250
      <em>before</em> the lapsed card comes up again for review, then it will
      have the same effect as if the ease factor was never reduced to 230. So
      basically,
      <strong
        >as long as you run ResetEZ at least once every few days, you should be
        able to review on mobile as much as you want without any negative
        consequences</strong
      >. If you really want to be safe, I recommend running ResetEZ once a day
      for people who regularly review on mobile.
    </p>
    <h1>Protocol Overview</h1>
    <ul>
      <li>
        Install the No Penalties or Boosting, Pass/Fail, and ResetEZ add-ons,
        and run ResetEZ.
      </li>
      <li>
        Split your cards into multiple subdecks based on the type of card, in
        order to maximize the homogeneity of the intrinsic difficulty of the
        cards in each subdeck. Create a unique
        <nuxt-link
          to="https://youtu.be/lz60qTP2Gx0?t=315"
          target="_blank"
          rel="noopener noreferrer"
          >Option Group</nuxt-link
        >
        for each subdeck.
      </li>
      <li>
        Set "New Interval" in the lapses tab of each of your Option Groups to
        something between 50% and 80%. I recommend 70%.
      </li>
      <li>
        Set your "Leech Threshold" in the lapses tab of each of your Option
        Groups to something low. I recommend 4.
      </li>
      <li>
        (Anki 2.0 only) Review using a filtered deck. Suspend all new cards in
        your deck, and then unsuspend the specific new cards you wish to learn
        at the beginning of each day.
      </li>
      <li>
        When reviewing, grade cards you already know as well as you would like
        "pass," and cards you would like to know better than you currently do
        "fail."
      </li>
      <li>
        After finishing your reviews for the day, go into the browser and
        properly handle any leeches you accrued that day
        <ul>
          <li>
            If you feel that the reason a card became a leech is that you just
            happened to fully blank on it one time, and didn't have an
            opportunity to fully relearn it after that, reset the interval (In
            the browser, "Edit &gt; Reschedule &gt; Place at end of new card
            queue"), remove the "leech" tag, and unsuspend the card.
          </li>
          <li>
            If you feel that the reason a card became a leech is that the card
            is actually more difficult than your other cards, then either delete
            it (recommended in most cases), <em>or</em> reformat the card in
            order to reduce the difficulty, reset the interval, remove the
            "leech" tag, and unsuspend the card.
          </li>
        </ul>
      </li>
      <li>Run ResetEZ after reviewing on mobile.</li>
      <li>
        Keeping track of the retention rate of each of your subdecks, and
        occasionally adjust the "Interval Modifier" of each to stay in range of
        your desired retention rate. Quick guide on how to do that
        <nuxt-link
          to="https://eshapard.github.io/anki/target-an-80-90-percent-success-rate-in-anki.html"
          target="_blank"
          rel="noopener noreferrer"
          >here</nuxt-link
        >.
      </li>
    </ul>
    <p>
      Previous:
      <nuxt-link
        to="/table-of-contents/anki/low-key-anki/low-key-anki-summary-and-installation/"
        >Low-Key Anki: Summary and Installation</nuxt-link
      >

      Next:
      <nuxt-link to="/table-of-contents/anki/low-key-anki/closing/"
        >Low-Key Anki: Closing</nuxt-link
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
