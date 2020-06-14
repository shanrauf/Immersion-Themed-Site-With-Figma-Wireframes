<template>
  <v-app style="margin: 0px; padding: 0px; width: 100%">
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

<style>
.v-application--wrap {
  max-width: 150% !important;
}
</style>
