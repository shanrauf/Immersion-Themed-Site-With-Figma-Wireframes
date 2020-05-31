<template>
  <div>
    <Logo />
    <article>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData({ $content }) {
    const page = await $content('test').fetch()

    return {
      page
    }
  }
}
</script>
