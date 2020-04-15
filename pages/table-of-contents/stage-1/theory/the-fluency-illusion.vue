<template>
  <div class="article-container">
    <div>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
    </div>
    <h1>The Fluency Illusion</h1>
    <div class="article-content">
      <YouTubeEmbed src="https://www.youtube.com/embed/vnGOrXh1dvY" />

      <h1>Video Summary</h1>
      <p>
        If you’re a beginner (or any level, really) in a foreign language, up to
        what point are you able to judge someone’s language ability? The answer
        to this question is simple: You can only judge ability up to your own
        level. Any further than that, and you can’t perceive the mistakes. You
        don’t know what you don’t know.
      </p>
      <h1>The Fluency Illusion</h1>
      <p>
        If you’ve been following so far, you already pretty much understand what
        the fluency illusion is. Basically, it’s whenever someone appears to be
        much better at a foreign language then they actually are. This is very
        likely to occur when you’re listening to a foreign language speaker who
        is much better than you.
      </p>
      <h1>When Laymen Try To Judge Language Ability</h1>
      <p>
        The most clear example of the fluency illusion happens when a layman (in
        this case, someone who doesn’t speak the language of concern) tries to
        judge another speaker’s ability. Now, for the past few years I’ve
        dabbled in Mandarin Chinese. I’m still god-awful at it—I can hardly
        understand anything. But, if I went to a Chinese restaurant with my
        family—and started speaking in Chinese with a Chinese waiter—I’d appear
        totally fluent to my family. The reason for that, of course, is that my
        family has no way to perceive mistakes in the language. They can only
        judge the atmosphere of the conversation, and my own apparent ability to
        talk with the waiter without creating any misunderstandings. All factors
        that mean very little. I would be able to hide my own discomfort, and
        the chinese waiter would also lower the difficulty of his speech to
        accomodate me.
      </p>
      <h1>Judging Language Ability At Higher Levels</h1>
      <p>
        As I said earlier, the fluency illusion can happen at any level.
        Thinking back to a few years ago, when I wasn’t as fluent in Japanese
        (but still quite fluent), there were some foreign speakers of Japanese
        that appeared perfect to me. However, now that I’ve improved, I can
        notice quite frequently when their speech—grammar, pronunciation, and
        phrasing—deviate from native speech. I can see now that they’re
        struggling at a very subtle level.
      </p>
      <h1>The Takeaway For Beginners and Intermediates</h1>
      <p>
        There are a lot of people out there who say they’re at a very high level
        in a foreign language. Maybe they have a lot of videos too. To anyone
        below their level, they will sound really good—maybe even perfect. But
        in reality, they could easily be using words wrong, making grammar and
        pronunciation mistakes left and right—and you won’t be able to tell at
        all. Never trust your instincts when it comes to how good someone is in
        a language. If you can’t perceive mistakes, it doesn’t mean there aren't
        any mistakes being made.
      </p>
    </div>
  </div>
</template>

<script>
import YouTubeEmbed from '~/components/YouTubeEmbed'
export default {
  transition: 'page',
  components: {
    YouTubeEmbed
  },
  head() {
    return {
      title: this.title,
      titleTemplate: 'The Fluency Illusion - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'If you’re a beginner (or any level, really) in a foreign language, up to what point are you able to judge someone’s language ability? The answer to this question is simple: You can only judge ability up to your own level...'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'The Fluency Illusion - %s'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'If you’re a beginner (or any level, really) in a foreign language, up to what point are you able to judge someone’s language ability? The answer to this question is simple: You can only judge ability up to your own level...'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'The Fluency Illusion - %s'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'If you’re a beginner (or any level, really) in a foreign language, up to what point are you able to judge someone’s language ability? The answer to this question is simple: You can only judge ability up to your own level...'
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
