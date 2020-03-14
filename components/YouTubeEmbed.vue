<template>
  <div class="video-container">
    <iframe
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      type="text/html"
      :width="width"
      :height="height"
      :src="src"
    ></iframe>
  </div>
</template>

<script>
export default {
  transition: 'page',
  props: {
    src: {
      type: String,
      required: true,
      default: 'https://www.youtube.com/embed/_LIz-Wbt4us'
    },
    width: {
      type: String,
      required: false,
      default: '640px'
    },
    height: {
      type: String,
      required: false,
      default: '360px'
    }
  }
}
</script>

<style lang="scss" scoped>
.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: '';
}

.video-container iframe {
  /*
  With this, iframes don't appear unless content in div, but without it, some video heights get clipped on pages
  */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
// @media screen and (max-width: 600px) {

// }
</style>
