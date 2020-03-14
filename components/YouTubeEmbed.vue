<template>
  <iframe
    id="ytplayer"
    type="text/html"
    :width="width"
    :height="height"
    :src="src"
    frameborder="0"
  ></iframe>
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
      default: '640'
    },
    height: {
      type: String,
      required: false,
      default: '360'
    }
  }
}
</script>

<style></style>
