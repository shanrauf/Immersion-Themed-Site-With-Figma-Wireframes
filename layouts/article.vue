<template>
  <v-app>
    <BaseNav />
    <v-content>
      <div class="card-container" raised>
        <nuxt />
      </div>
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

<style lang="scss" scoped>
.card-container {
  margin: 0 auto;
  width: 50%;
  border-radius: 10px;
  border-color: #ffffff;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  display: block;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  word-wrap: break-word;
  position: relative;
  white-space: normal;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: box-shadow;
}
</style>
