<template>
  <img :src="dynamicImage" />
</template>

<script>
export default {
  name: 'DynamicImage',

  props: {
    src: {
      type: String,
      required: true,
    },
  },

  computed: {
    dynamicImage() {
      return require(`~/assets/${this.src}`)
    },
  },
}
</script>
