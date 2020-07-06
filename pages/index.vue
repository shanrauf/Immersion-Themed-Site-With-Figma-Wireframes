<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        massimmersionapproach.com
      </h1>
      <h2 class="subtitle">
        Mass Immersion Approach Website
      </h2>
      <article>
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </article>
      <div class="card">
        <h1>Overview</h1>
      </div>
      <br />
      <br />

      <div
        class="card"
        style="display: flex; flex-direction: column; align-items: flex-start;"
      >
        <h2>Stage 1</h2>
        <h2>Stage 2</h2>
        <h2>Stage 3</h2>
      </div>
      <br />
      <br />

      <div class="card">
        <h2>Theory</h2>
        <h3>article 1</h3>
        <h3>article 2</h3>
      </div>
      <br />

      <div class="card">
        <h2>Other</h2>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  async asyncData({ $content }) {
    const page = await $content('test').fetch()

    return {
      page,
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.card {
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
