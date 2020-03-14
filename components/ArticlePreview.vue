<template>
  <v-card class="post" raised>
    <!-- <img src="~/assets/mia.png" alt="MIA Logo" class="post-image" /> -->
    <div class="post-preview">
      <h2>
        <nuxt-link :to="link">{{ title }}</nuxt-link>
      </h2>
      <!-- <i class="far calendar"> Mar 11, 2019</i> -->
      <!-- <font-awesome-icon :icon="['far', 'calendar']" /> -->
      <p class="preview-text">
        {{ description }}
      </p>
      <BaseButton
        background-color="#436c8a"
        rounded
        padding="8px 40px"
        class="read-more"
        @click="goTo(link)"
        >Read More</BaseButton
      >
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
  width: 80%;
  height: 250px;
  margin: 20px auto;
  border-radius: 5px;
  background: white;
  position: relative;
}

// .post .post-image {
//   width: 40%;
//   height: 100%;
//   float: left;
// }
.post .post-preview {
  padding: 20px;
  width: 80%;
  /* float: right; */
  float: left;
}
</style>
