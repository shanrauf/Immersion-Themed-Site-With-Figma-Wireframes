<template>
  <div class="article-container">
    <p>
      <strong>UPDATE 8/15/2019:</strong> We have decided to change the term Lazy
      Kanji to Recognition RTK, as it is more straightforward and objectively
      accurate. We have also decided to change the term Traditional RTK to
      Production RTK for the same reason. Recognition RTK / RTH = Learning to
      recognize the characters and their rough meaning through making flashcards
      with characters on the front, meaning on the back Production RTK / RTH =
      Learning to write out the characters from memory through making flashcards
      with meaning/example word on the front, and the character on the back.
      Watch this video:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/TgRte6oSoF8" />

    <p>
      Then, read
      <nuxt-link
        to="http://www.alljapaneseallthetime.com/blog/lazy-kanji-cards-a-new-srs-card-format/"
        >this article.</nuxt-link
      >
    </p>

    <p>
      Then, watch from 9:33 until 38:49 of this video:
    </p>
    <YouTubeEmbed src="https://www.youtube.com/embed/EaCYzV2S3LU" />

    <p>
      In the two videos above I am talking about Japanese kanji and the book
      Remembering the Kanji, but all of the same principles apply to Chinese
      hanzi and the books Remembering Simplified Hanzi and Remembering
      Traditional Hanzi (from here on RTH) respectively.
    </p>
    <p>
      Once you meet someone even once, you are extremely unlikely to ever forget
      their face. You may forget their name, or even who they are and how you
      know them, but their face will continue to feel familiar. The goal of the
      initial Recognition RTK/RTH round is to reach this point with kanji/hanzi.
      It doesn’t matter if you can’t remember what a character means; what
      really matters is that characters look like something to you; not a glob
      of scribbles. Once you reach this point, you can easily learn to read
      words through immersion and sentence cards.
    </p>

    <h2>Anki Decks</h2>
    <p>Downloads:</p>
    <ul>
      <li>
        <nuxt-link
          to="http://www.mediafire.com/file/1svvsr7f9cnpwka/Recognition_RTK.apkg/"
          >Recognition RTK Anki Deck</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="http://www.mediafire.com/file/e7t66vuelbipln8/Recognition_RTH_%2528Simplified%2529.apkg/"
          >Recognition RTH (Simplified) Anki Deck</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="http://www.mediafire.com/file/faiab4flxsrwmc6/Recognition_RTH_%2528Traditional%2529.apkg/"
          >Recognition RTH (Traditional) Anki Deck</nuxt-link
        >
      </li>
    </ul>
    <h2>How To Use</h2>

    <p>
      Get your hands on a copy of the actual Remembering the Kanji Vol
      1/Remembering Simplified Hanzi Vol 1/Remembering Traditional Hanzi Vol 1
      book. Volume 1 is all you will need for now. Read the entire introduction.
      I know it’s long, but just do it.
    </p>
    <p>
      As you work your way through the Anki deck, read through the corresponding
      sections of the book. You don’t have to read the entries for characters
      that aren’t in the deck, but do read the interludes as there is useful
      information in them.
    </p>
    <p>
      If you are learning Japanese, you don’t need to worry about making your
      own stories; the stories that come on the cards should be good enough.
      Unfortunately, the Recognition RTH decks don’t come with stories, so it
      may be a good idea to put some effort into making your own. That said,
      don’t worry about making the stories high quality. Don’t worry if your
      recall is bad; simply delete any cards that are giving you trouble. Also,
      don’t worry about writing the characters. Remember, the goal is
      recognition. Quick and dirty is the motto. You are going to be doing it
      “properly” later. This is just to give you some momentum to help you get
      started.
    </p>
    <h2>Chinese: Simplified or Traditional</h2>
    <p>
      Whether the variety of Chinese you’re learning mainly uses simplified or
      traditional characters, in the long run, you may want to be able to use
      both sets. When setting out to learn how to write both sets of characters,
      it makes most sense to start with traditional, and then learn simplified
      after. The reason for this is that, although there is a systematic
      relationship between the two sets, certain distinctions are lost when
      going from traditional to simplified. For example, take the characters
      “涼” and “冷”. As you can see, the components on the left are different
      (“氵” and “冫”). But this distinction is lost in the simplified versions:
      “凉” vs “冷”. Thus, when going from traditional to simplified, all you
      have to remember is that both “氵” and “冫” simplify into “冫”. But when
      going from simplified to traditional, you have to go through each
      character with the “冫” component one-by-one and memorize which of the two
      possibilities the traditional is.
    </p>
    <p>
      That said, because the goal of the initial Recognition RTH round is simply
      to give your mind a basic ability to recognize characters, the logic I
      explained above isn’t relevant. You will gain most of your actual hanzi
      ability through immersion and sentence cards, and then develop the ability
      to write the characters from memory in a later Stage. You will have the
      opportunity to study both sets of characters then.
    </p>
    <p>
      For now, if the variety of Chinese you plan on focusing on mainly uses
      simplified characters, get Remembering the Simplified Hanzi and use the
      simplified deck. If the variety of Chinese you plan on focusing on mainly
      uses traditional characters, get Remembering the Traditional Hanzi and use
      the traditional deck.
    </p>
  </div>
</template>

<script>
import YouTubeEmbed from '~/components/YouTubeEmbed'
export default {
  transition: 'page',
  components: {
    YouTubeEmbed
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
