<template>
  <div class="article-container">
    <div>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/stage-1/">Stage 1</nuxt-link>
    </div>
    <h1>Epistemology</h1>
    <div class="article-content">
      <h1>Part 1: Effective vs. Ineffective Methods</h1>
      <YouTubeEmbed src="https://www.youtube.com/embed/m5q6N9QHl8c" />

      <p>
        Note: what I meant to say at the end is that it's not contradictory to
        say that it <strong>MAY</strong> be the case that, while there are
        universal principals of language acquisition that are true for everyone,
        certain specific methods may be more cut out for some people than for
        others.
      </p>
      <h1>Part 2: Avoiding “Universally Ineffective” Methods</h1>
      <YouTubeEmbed src="https://www.youtube.com/embed/3dYYlPdnw3I" />

      <p>
        I forgot to clearly state that, when “testing” people who are giving out
        language learning advice, the thing to really look for is whether said
        person has<strong>
          achieved what you are specifically hoping to accomplish</strong
        >. In other words, if you want to accomplish “x”, only take advice from
        people who have successfully accomplished “x”. A corollary of this is
        that, even if someone hasn’t reached the highest possible levels of
        foreign language mastery, as long as they have reached a level you would
        be happy with, their advice may be worth listening to.
      </p>

      Something else I forgot to mention is that another reason you can’t trust
      people’s self-reports about their own language ability is the
      <a
        href="https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect"
        target="_blank"
        rel="noopener noreferrer"
        >Dunning–Kruger effect</a
      >. The Dunning–Kruger effect is a cognitive bias in which, for any given
      skill, people at relatively low levels tend to overestimate their ability,
      due to not being competent enough to recognize their own incompetence. In
      language learning, this often manifests as intermediate language learners
      believing they have reached a very high level in a language, due to
      comparing themselves to other language learners. When these intermediate
      learners begin to reach a more advanced level, they usually transition to
      comparing their ability to that of native speakers and realize that their
      level is actually quite low. For more on the Dunning–Kruger effect, I
      highly recommend
      <a
        href="https://youtu.be/pOLmD_WVY-E"
        target="_blank"
        rel="noopener noreferrer"
      >
        this short video</a
      >.

      <p>
        And lastly, I am no exception to these principles! Don’t just blindly
        assume I know what I’m talking about! Go “test” me as well as other
        popular figures in the language learning community. I want you to have
        confidence that the methods I talk about on this site are proven to
        work. You can find videos of me speaking Japanese
        <a
          href="https://youtu.be/SrHwPv7gUCE"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >
        and
        <a
          href="https://youtu.be/SF1_zmj0lLA"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >, and a video of Khatzumoto (creator of the AJATT method, which
        inspired MIA) speaking Japanese
        <a
          href="https://youtu.be/ejRkuX1RGf4"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >.
      </p>

      <p>
        I also encourage you to explore other methods in addition to MIA,
        especially if you ever run into an issue that MIA doesn’t seem to
        provide a specific solution for. Even when using the best methods, it’s
        important to take personal responsibility for your learning and results.
      </p>
      <h1>Part 3: Comparing Effective Methods</h1>
      <YouTubeEmbed src="https://www.youtube.com/embed/MhHSHgmhXgQ" />
      <h1>Part 4: Why are Inefficient Methods so Widespread?</h1>
      <YouTubeEmbed src="https://www.youtube.com/embed/S9m2rJ-2xD4" />
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
      titleTemplate: 'Epistemology - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The Dunning–Kruger effect is a cognitive bias in which, for any given skill, people at relatively low levels tend to overestimate their ability, due to not being competent enough to recognize their own incompetence. In language learning...'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Glossary - Mass Immersion Approach'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'The Dunning–Kruger effect is a cognitive bias in which, for any given skill, people at relatively low levels tend to overestimate their ability, due to not being competent enough to recognize their own incompetence. In language learning...'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Glossary - Mass Immersion Approach'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'The Dunning–Kruger effect is a cognitive bias in which, for any given skill, people at relatively low levels tend to overestimate their ability, due to not being competent enough to recognize their own incompetence. In language learning...'
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
