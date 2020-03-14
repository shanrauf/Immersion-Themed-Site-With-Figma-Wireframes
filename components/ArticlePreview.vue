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
      <nuxt-link :to="link" class="read-more">Read More</nuxt-link>
    </div>
  </v-card>
</template>

<script>
export default {
  transition: 'page',
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
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 70%;
  height: 270px;
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
  width: 75%;
  /* float: right; */
  float: left;
}
</style>
