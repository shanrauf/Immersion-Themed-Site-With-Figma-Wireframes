<template>
  <v-app>
    <BaseNav />
    <v-content>
      <nuxt />
    </v-content>
    <BaseFooter />
  </v-app>
</template>

<script>
import BaseNav from '~/components/BaseNav'
import BaseFooter from '~/components/BaseFooter'

export default {
  transition: 'page',
  components: {
    BaseNav,
    BaseFooter
  }
}
</script>
