<template>
  <div class="article-container">
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/anki/">Anki</nuxt-link>
    <h2>Low-Key Anki: Pass/Fail</h2>
    <p>
      What I am calling "Low-Key Anki" consists of two Anki add-ons which were
      created by ja-dark. The second of these two add-ons, "Pass/Fail,"
      physically removes the hard and easy buttons, leaving the user with a
      binary choice when grading cards: pass, or fail.
    </p>

    <img
      src="https://massimmersionapproach.com/imgs/2018/10/passfail.png"
      alt=""
      width="700"
      height="555"
    />

    <p>
      First, let's talk about why someone would want to remove the hard button.
      Grading a card "hard" does two things: increase the interval by 30%, and
      lower the ease factor by 15 percentage points. Assuming that we are using
      the No Penalties or Boosting add-on, the ease factor change does not apply
      to us, so let's think about the interval increase.
    </p>

    <p>
      If you made an Anki card in order to learn something, that probably means
      you think that something is worth knowing; you probably want that
      knowledge to be there when you need it. If you are thinking about grading
      a card "hard," that means that you
      <em>didn't</em> remember the card well enough to grade it "good." If you
      didn't remember a card well enough to grade it "good," then you don't know
      the card very well, and you probably can't rely on the knowledge contained
      in the card being there when you need it. If so, then you need to learn
      the card <em>better</em> than you currently do. The hard button
      <em>increases</em> the interval of the card. A <em>longer</em> interval
      isn't going to give you a chance to <em>improve</em> how well you know the
      card; instead, you are likely going to find the card "hard" again the next
      time it comes up. This is a nasty cycle that many Anki users fall into:
      they don't know a card very well, they continue to press "hard" instead of
      properly relearning it, and the card remains stuck in a half-learned
      limbo. Not only does this lead to a <em>large number of reviews</em>, as
      the interval is only growing by 30% each time, but because the card is
      only half-learned, the knowledge isn't there when the person needs it.
      Truly a lose-lose situation.
    </p>

    <p>
      It's much more desirable to fail a card once, properly relearn it, and
      then have its interval grow at a healthy pace from that point onward,
      reducing review load and increasing the likelihood that the knowledge will
      be there when you need it. Either you know a card well enough to grade it
      "good," or you need to learn it better, in which case you need a shorter
      interval, not a longer one. In other words, instead of indefinitely
      keeping a sick card on life support, it's much better to actually heal its
      sickness and allow it to become healthy again. The hard button is life
      support.
    </p>

    <p>
      The reason why people commonly hesitate to fail half-learned cards is
      that, with default Anki settings, failing a card has a huge penalty: 20
      percentage points off the ease factor, and the interval being reset back
      to
      <em>zero</em>, wiping out <em>all</em> progress that had been made on the
      card. By increasing the "New Interval" in the lapses tab within the deck
      options from the default setting of 0%, we can allow lapsed cards to
      retain a certain percentage of their previous interval (for example, if
      you set the "New Interval" to 70%, then when after failing a card that had
      an interval of 100 days, the new interval will become 70 days). Like I
      explained in a previous section, <em>relearning</em> is distinctly
      different from <em>initial</em> learning; once something is relearned,
      although stability will have decreased, a <em>majority</em> of the
      previous stability will still have been retained. It's not hard to
      understand this intuitively: most of the time, when you miss a card, your
      reaction after viewing the back is "OH YEAH," not "I feel like I am seeing
      this for the first time in my life." You still <em>mostly</em> know the
      card; after relearning, you will go back to knowing it <em>almost</em> as
      well as you knew it before forgetting. It's uncommon for something to get
      completely vaporized from your memory. This is why it makes absolutely
      <em>no sense</em> that in Anki, by default, the "New Interval" after lapse
      is set to 0%. I can only imagine how many people waste countless hours
      sending material they know decently well back down to an interval of
      <em>one day</em> due to not understanding this setting. I personally
      recommend setting the "New Interval" after lapse to something between 50%
      and 80%. This way, the interval is still reduced enough to give you a
      chance to properly relearn the card (heal its sickness), but you also
      aren't losing more progress than necessary. I would predict that for most
      people most of the time, a 70% "New Interval" after lapse will lead to an
      80% to 90% retention rate on once-lapsed cards. In other words, for 80-90%
      of your cards that lapse and have the new interval become 70% of the
      previous interval, the <em>next</em> time they come up, you will be able
      to grade them "good."
    </p>

    <p>
      So, by combing an over 50% "New Interval" after lapse with the No
      Penalties or Boosting add-on, the penalty of failing a card is greatly
      reduced, hopefully removing the temptation to keep your sick cards on life
      support. Reducing the consequences of lapsing cards also brings additional
      psychological benefits. When grading a card "again" means shooting the
      card in the foot and sending it back to square one, you're naturally not
      going to feel too good about lapsing a card. This can lead the user to
      experience stress and negativity towards reviewing. By combining the No
      Penalties or Boosting add-on with a high "New Interval" after lapse, this
      is mitigated; low stakes means low stress.
    </p>

    <p>
      Now, every now and again, there
      <em>will</em> be a card that somehow gets vaporized from your memory,
      leaving you with absolutely no recollection of it when it comes up for
      review. I stated above that a 70% "new interval" should be ideal for
      80-90% of lapses; these are the remaining 10-20%. In these minority of
      cases, a "new interval" of 0% <em>is</em> appropriate. This is where
      leeches come in. In the last section, I talked about how by setting a low
      leech threshold, we can weed out <em>ease factor lapses</em> that need to
      be either reformatted or deleted. We can also use this low leech threshold
      to weed out rare <em>anticipated fails</em> that deserve to have their
      intervals set back to zero, and then reset them manually. In the browser,
      by selecting a card and going to "Edit &gt; Reschedule &gt; Place at end
      of new card queue," you can manually reset the interval of a card,
      returning it to the state of a new card. Because Anki automatically gives
      leeches the "leech" tag, you can easily search for them in the browser. In
      the near future, you can expect a new add-on that will help automate the
      process of leech handling, but for now, after finishing your reviews for
      the day, you will want to go into the browser, find any leeches you
      accrued that day, and <em>reformat and reset</em> where you feel is
      necessary. If you feel that the reason a card became a leech is that you
      just happened to fully blank on it one time, and then didn't have an
      opportunity to fully relearn it after that (<em>anticipated lapse</em>),
      then simply <em>reset</em> the interval without worrying about
      reformatting.
    </p>

    <p>
      If you feel that the reason a card became a leech is the card is actually
      more difficult than your other cards (<em>ease factor lapse</em>), then
      honestly evaluate the value of the card. Unless it contains something
      <em>truly</em> important, consider simply deleting the card. If it really
      is important (which most individual cards <em>won't</em> be), then
      reformat <em>and</em> reset the card. Of course, after handling a leech,
      you will also want to remove the "leech" tag and unsuspend the card. All
      of this shouldn't be too much work, as leeches really shouldn't be popping
      up too often; from zero to one a day on average.
    </p>

    <p>
      Now let's talk about why someone would want to remove the easy button.
      Grading a card "easy" does two things: set the new interval to "previous
      interval * ease factor * easy bonus," and add 15 points to the ease
      factor. Assuming that we are using the No Penalties or Boosting add-on,
      the ease factor change does not apply to us, so let's think about the
      interval increase. Within the deck options, you will find an option called
      "Easy Bonus"; by default, it is set to 130%. What this means is that when
      a card is graded "easy," its interval will grow by 30% <em>more</em> than
      it would be if graded "good" (when a card is graded good, it's new
      interval becomes "previous interval * ease factor").
    </p>
    <p>
      Although you do often hear people advising against using the easy button,
      the main reason for this is to avoid the inverse of the ease factor
      problem: due to the probabilistic nature of the forgetting curve, just
      because a card felt easy to answer once, that doesn't necessarily reflect
      the card's intrinsic difficulty, and thus the increase in ease factor the
      easy button brings is likely to lead to lapses in the future. But when
      using the No Penalties or Boosting add-on, because the ease factor will
      not be increased, the easy button <em>is</em> a safer option; you are
      simply growing the interval more quickly in <em>that instance</em>, not
      making a permanent change to the card.
    </p>

    <p>
      The real reason that I recommend removing the easy button is that the
      benefit of turning the process of grading your cards into a
      <em>binary choice</em> is well worth sacrificing the marginal benefit of
      being able to send cards that felt easy slightly farther into the future
      (and the benefit is truly marginal at best; like I mentioned in an prior
      section, there are studies showing that subjective assessments of how well
      one knows something tend to be inaccurate, not to mention that if you
      really knew a card well enough to confidently blast it into the future,
      you probably don't need an Anki card to retain that piece of information
      in the first place). The hard button is poison for your cards; it has to
      go. But while we are at it, by also removing the easy button, we turn
      grading cards into a binary choice, which radically simplifies the
      reviewing process.
    </p>
    <p>
      From
      <nuxt-link
        to="https://en.wikipedia.org/wiki/Decision_fatigue"
        target="_blank"
        rel="noopener noreferrer"
        >Wikipedia</nuxt-link
      >:
    </p>

    <blockquote>
      "In decision making and psychology, <em>decision fatigue</em> refers to
      the deteriorating quality of decisions made by an individual after a long
      session of decision making. It is now understood as one of the causes of
      irrational trade-offs in decision making. For instance, judges in court
      have been shown to make poorer quality decisions late in the day than they
      do early in the day. Decision fatigue may also lead to consumers making
      poor choices with their purchases. There is a paradox in that "people who
      lack choices seem to want them and often will fight for them", yet at the
      same time, "people find that making many choices can be [psychologically]
      aversive." Notably, major politicians and businessmen such as former
      United States President Barack Obama, Steve Jobs, and Mark Zuckerberg have
      been known to reduce their everyday clothing down to one or two outfits in
      order to limit the number of decisions they make in a day."
    </blockquote>

    <p>
      You are already straining your mind trying to correctly answer your cards;
      you don't want to be wasting additional mental energy deciding
      <em>how well you knew something</em>. Ja-dark also cited a
      <nuxt-link
        to="https://www.researchgate.net/publication/45604645_Improving_college_students%27_evaluation_of_text_learning_using_idea-unit_standards"
        target="_blank"
        rel="noopener noreferrer"
        >study</nuxt-link
      >
      that found that self-scoring how successful you were at recalling
      something taxes working memory.
      <nuxt-link
        to="https://eshapard.github.io/anki/target-an-80-90-percent-success-rate-in-anki.html"
        target="_blank"
        rel="noopener noreferrer"
        >Eshapard</nuxt-link
      >
      summed it up perfectly when he said, "From my experience, it really slows
      you down if you're always trying to figure out whether a card you
      remembered was Good, Hard, or Easy. These are really subjective categories
      and it's a lot of work to try to use these options for all but the most
      obvious cases. […] Trying to remember the facts is mental effort enough
      for me. I don't need to split hairs over how difficult the card was."
    </p>

    <p>
      <strong
        >Either you already know the card as well as you would like to, and
        press "good," or you would like to know it better than you currently do,
        and press "again." It's that simple</strong
      >. And because the answer to this binary choice should be obvious in
      nearly all cases, not only is <em>decision fatigue</em> is minimized,
      conserving your mental energy for actually answering your cards, but
      <em>time</em> spent making decisions about how to grade cards is reduced
      as well; shaving just a few milliseconds off your average answer time can
      lead to saving large amounts of time in the long term. In this way,
      <em>low stakes</em> (no ease penalties + high "New Interval" after lapse)
      makes grading less stressful, and <em>binary choices</em> make grading
      more clear-cut, in turn preserving mental energy and allowing users to
      grade cards more quickly.
    </p>

    <p>
      Of course, even without using the Pass/Fail add-on to
      <em>physically</em> remove the hard and easy buttons, you could simply
      leave the additional two buttons there but make a decision to never use
      them. But, in my experience, simply <em>seeing</em> the hard button tells
      part of your mind that it's still an option, occasionally making it
      tempting to press. In this way, by simply having the extra buttons there,
      you aren't getting the full decision fatigue-reducing effect. To put it
      frankly, there's just something elegant and reassuring about only being
      presented two big fat buttons.
    </p>

    Previous:
    <nuxt-link
      to="/table-of-contents/anki/low-key-anki/low-key-anki-no-penalties-or-boosting/"
      >Low-Key Anki: No Penalties or Boosting</nuxt-link
    >

    Next:
    <nuxt-link
      to="/table-of-contents/anki/low-key-anki/low-key-anki-summary-and-installation/"
      >Low-Key Anki: Summary and Installation</nuxt-link
    >
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
