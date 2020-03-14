<template>
  <div>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/extra/success-stories/"
      >Success Stories</nuxt-link
    >
    <h2>Chris</h2>
    <p>
      Chris speaking after 1.5 years of MIA:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/Svs8Pu_zdAs" />

    <p>
      Interview with Chris:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/8fVk8_mmoNY" />

    <h1>Update Videos</h1>
    <p>
      1 month update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/HHH7avGhbic" />

    <p>
      6 month update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/QVGUi06cOwk" />

    9 month update:
    <YouTubeEmbed src="https://youtube.com/embed/W4zH6A4L3fc" />

    1 year update:
    <YouTubeEmbed src="https://youtube.com/embed/X0-BaJPhENo" />

    <p>
      15 month update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/MDdyKJTgdAs" />

    <p>
      16 month update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/OF65LBVci00" />

    <p>
      18 month update:
    </p>
    <YouTubeEmbed src="https://youtube.com/embed/qd6tOH-efVg" />
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

<style></style>
