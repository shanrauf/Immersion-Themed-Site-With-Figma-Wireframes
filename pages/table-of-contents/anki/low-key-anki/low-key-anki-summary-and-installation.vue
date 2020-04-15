<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>Low-Key Anki: Summary and Installation</h1>
    <div class="article-content">
      <p>
        Although some lapses are due to inappropriate ease factors (<em
          >ease factor lapses</em
        >), in most cases, a majority of lapses are due to the proper
        functioning of the forgetting curve (<em>anticipated lapses</em>). In
        default Anki, <em>anticipated lapses</em> are unjustly penalized in the
        form of ease factor reduction, harming efficiency and wasting time.
      </p>
      <p>
        If the intrinsic difficulty of the different cards in a deck is
        <em>largely</em> homogeneous, then removing the feature of ease factors
        altogether with the No Penalties or Boosting add-on will lead to a large
        increase in efficiency, as <em>anticipated lapsed</em> will no longer be
        unjustly penalized.
      </p>
      <p>
        If the intrinsic difficulty of the different cards in a deck is
        <em>not</em> largely homogeneous, then it may be possible to create
        homogeneity artificially by splitting the deck into multiple subdecks
        based on the type of card. For language learning, this should be
        possible in nearly all cases.
      </p>
      <p>
        When using the No Penalties or Boosting add-on, instead of controlling
        interval growth on the basis of <em>individual cards</em> with ease
        factors, we control interval growth on the basis of
        <em>entire decks</em> with the Interval Modifier.
      </p>
      <p>
        When reviewing, if you don't know a card well enough to grade it "good,"
        then you need to <em>decrease</em> the interval so that you have an
        opportunity to learn it better. The hard button doesn't make sense,
        because it actually <em>increases</em> the interval. So instead, we set
        a high "New Interval" after lapse, such that the "again" button does
        what the hard button <em>should</em> do: decrease the interval just
        enough to allow for memory optimization. <em>Most</em> of the time, when
        we "forget" something, we only <em>partially</em> forget, not
        <em>fully</em> forget, so we don't need to reset the interval back to
        zero.
      </p>
      <p>
        A low leech threshold then allows us to swiftly weed out relatively
        intrinsically difficult cards that are subject to becoming
        <em>ease factor lapses</em>, as well as the minority of
        <em>anticipated lapses</em> that truly deserve to get sent back to
        square one, such that we can reformat/reset/delete them and kept them
        from harming efficiency. In this way, the "again" button becomes our new
        "hard" button, and leeches become our new "again" button.
      </p>
      <p>
        By removing the easy button along with the hard button with the
        Pass/Fail add-on, we can minimize decision fatigue by reducing grading
        to an obvious binary: either you already know the card as well as you
        would like, and press "good" (pass), or you would like to know it better
        than you currently do, and press "again" (fail).
      </p>

      <p>
        In conclusion, using the Low-Key Anki setup has two benefits. First, by
        removing unjust penalties from <em>anticipated lapses</em>, and
        replacing the "hard" button with an "again" button armed with a high
        "New Interval" at lapse, the algorithm becomes optimized, allowing one
        to learn more in less time, and remember what they learn better. Second,
        by making grading binary, and reducing the consequences of forgetting by
        removing ease factor penalties and setting a high "New Interval" after
        lapse, decision fatigue is minimized, and reviewing becomes less
        stressful.
      </p>

      <h1>Installation (Anki 2.0)</h1>
      <p>
        <a
          href="https://www.mediafire.com/file/0kr8qzf06kybc3f/Low-Key+Anki+2.0.zip"
          target="_blank"
          rel="noopener noreferrer"
          >Here</a
        >
        you will find a link to a zip file with three files in it. Each of these
        files is an Anki add-on. To install them, in Anki, go to "Tools &gt;
        Add-ons &gt; Open Add-ons Folder…", and drag the three files into the
        folder that opens. When you install an add-on the traditional way, by
        copying the download code from the Anki website and pasting it into
        "Tools &gt; Add-ons &gt; Browse &amp; Install...", all that really
        happens is that the add-on file is downloaded and placed into this
        folder.
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2018/10/addons-1024x573.png"
        alt=""
        width="700"
        height="391"
      />

      <p>
        <strong>No_Penalties_or_Boosting.py</strong> is a modified version of
        the original "Low Stakes Anki: No Penalties or Boosting" add-on created
        by ja-dark. In ja-dark's original version, the "New Interval" setting in
        the deck options is overwritten, automatically making the new interval
        of lapsed cards 100% of the previous interval. This modified version
        will <em>not</em> override the "New Interval" setting in the deck
        options, so whatever is in the deck options will be used. Credit goes to
        <a
          href="https://www.youtube.com/channel/UCQFe3x4WAgm7joN5daMm5Ew"
          target="_blank"
          rel="noopener noreferrer"
          >Yoga</a
        >
        for the modification.
      </p>

      <p>
        <strong>PassFail.py</strong> is a copy of the "Low Key Anki: Pass/Fail"
        add-on created by ja-dark. It will replace the standard four answer
        buttons with simply "pass" and "fail." When the add-on is installed, "2"
        (on the keyboard) will function as a hotkey for "pass," and "1" will
        function as a hotkey for "fail" (the add-on accounts for the fact that
        the original hotkey for “pass” changes depending on whether a card is in
        the review or learning queue: “3” for review and “2” for learning.) If
        you are studying Japanese and would like to replace the words "pass" and
        "fail" with their Japanese translation, "当たり" and "外れ,"
        <a
          href="https://www.mediafire.com/file/c2i0rrynqbak2et/PassFail+2.0+%28JP%29.zip"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >
        is a modified version of the add-on.
      </p>
      <p>
        <strong>ResetEZ.py</strong> is an add-on that was created by Yoga, and
        modified by omgUnicorns. ResetEZ resets the ease factor of all the cards
        in your collection to the default value of 250%. You can run the add-on
        by going to "Tools &gt; Reset Ease + Force Sync After". Make sure all
        your devices are already synced before running the add-on, as the add-on
        will automatically initiate a "force changes in one direction" sync (a
        "full" sync where a window pops-up asking whether you would like to
        "Upload to AnkiWeb" or "Download from AnkiWeb"). The reason for this is
        that Anki won't upload the ease factor changes made by the add-on with a
        normal sync. There are two uses for this add-on. The first is to undo
        damage that was caused by overusing the "hard" button prior to adopting
        the Low-Key Anki setup. In other words, to swiftly escape from "ease
        hell." The other use concerns using Anki on mobile devices, which I will
        address in the next section.
      </p>
      <h1 id="2.1">Installation (Anki 2.1)</h1>
      <p>
        <a
          href="https://www.mediafire.com/file/lzm3qli6bdh2ubw/Low-Key+Anki+2.1.zip"
          target="_blank"
          rel="noopener noreferrer"
          >Here</a
        >
        you will find a link to a zip file with three folders in it. Each of
        these folders is an Anki add-on. To install them, place the three
        folders in the following directory:
        <code>C:Users[<em>user</em>]AppDataRoamingAnki2addons21</code>. When you
        install an add-on the traditional way, by copying the download code from
        the Anki website and pasting it into "Tools &gt; Add-ons &gt; Get
        Add-ons...", all that really happens is that the add-on folder is
        downloaded and placed in this directory.
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2019/02/addons2.1.png"
        alt=""
        width="700"
        height="509"
      />

      <p>
        <strong>No Penalties or Boosting</strong> is an add-on for Anki 2.1
        which was created to mimic the effects of the Anki 2.0 add-on
        “No_Penalties_or_Boosting.py.” When this add-on is installed, whenever
        the backside of a card is shown while reviewing, the ease factor of that
        card will be reset to 250.
      </p>

      <p>
        <strong>PassFail</strong> is an Anki 2.1 recreation of the Anki 2.0
        add-on "Low Key Anki: Pass/Fail" by ja-dark. It will replace the
        standard four answer buttons with simply "pass" and "fail." When the
        add-on is installed, "2" (on the keyboard) will function as a hotkey for
        "pass," and "1" will function as a hotkey for "fail" (the add-on
        accounts for the fact that the original hotkey for “pass” changes
        depending on whether a card is in the review or learning queue: “3” for
        review and “2” for learning.) If you are studying Japanese and would
        like to replace the words "pass" and "fail" with their Japanese
        translation, "当たり" and "外れ,"
        <a
          href="https://www.mediafire.com/file/l4d63dqsw75urw9/PassFail+2.1+%28JP%29.zip"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >
        is a modified version of the add-on.
      </p>

      <p>
        <strong>ResetEZ</strong> is an add-on that was created by Yoga, and
        modified by omgUnicorns. ResetEZ resets the ease factor of all the cards
        in your collection to the default value of 250%. You can run the add-on
        by going to "Tools &gt; Reset Ease + Force Sync After". Make sure all
        your devices are already synced before running the add-on, as the add-on
        will automatically initiate a "force changes in one direction" sync (a
        "full" sync where a window pops-up asking whether you would like to
        "Upload to AnkiWeb" or "Download from AnkiWeb"). The reason for this is
        that Anki won't upload the ease factor changes made by the add-on with a
        normal sync. There are two uses for this add-on. The first is to undo
        damage that was caused by overusing the "hard" button prior to adopting
        the Low-Key Anki setup. In other words, to swiftly escape from "ease
        hell." The other use concerns using Anki on mobile devices, which I will
        address in the next section.
      </p>
      <p>
        Previous:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/low-key-anki-pass-fail/"
          >Low-Key Anki: Pass/Fail</nuxt-link
        >

        Next:
        <nuxt-link
          to="/table-of-contents/anki/low-key-anki/low-key-anki-usage-guide/"
          >Low-Key Anki: Usage Guide</nuxt-link
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
      titleTemplate: 'Low-Key Anki (Summary/Installation) - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The following is a description of the Low-Key Anki addon and how to install it.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            'Low-Key Anki (Summary/Installation) - Mass Immersion Approach'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'ThThe following is a description of the Low-Key Anki addon and how to install it.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'Low-Key Anki (Summary/Installation) - Mass Immersion Approach'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'ThThe following is a description of the Low-Key Anki addon and how to install it.'
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
