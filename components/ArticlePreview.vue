<template>
  <v-card class="post" raised>
    <div class="post-preview">
      <h1>
        <nuxt-link :to="link">{{ title }}</nuxt-link>
      </h1>
      <v-card-text>
        {{ description }}
      </v-card-text>
      <v-card-actions>
        <BaseButton
          background-color="#436c8a"
          rounded
          padding="8px 35px"
          @click="goTo(link)"
          >Read More</BaseButton
        >
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import BaseButton from '~/components/BaseButton'
export default {
  transition: 'page',
  components: {
    BaseButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 750px;
  height: 100%;
  min-height: 225px;
  margin: 25px auto;
  border-radius: 8px;
  background: white;
  position: relative;
}
.post .post-preview {
  padding: 20px;
}
</style>
