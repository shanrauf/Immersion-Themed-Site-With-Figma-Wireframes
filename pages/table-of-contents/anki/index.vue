<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/tools/">Tools</nuxt-link>
    </p>
    <h2>Anki</h2>
    <ul>
      <li>
        Low-Key Anki
        <ul>
          <li>
            <nuxt-link to="/table-of-contents/anki/low-key-anki/intro/"
              >Intro</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/the-forgetting-curve/"
              >The Forgetting Curve</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/forgetting-strategically/"
              >Forgetting Strategically</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/the-ease-factor-problem/"
              >The Ease Factor Problem</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/can-the-easy-button-save-the-day/"
              >Can the "Easy" Button Save the Day?</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/solving-the-ease-factor-problem/"
              >Solving the Ease Factor Problem</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/low-key-anki-no-penalties-or-boosting/"
              >Low-Key Anki: No Penalties or Boosting</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/low-key-anki-pass-fail/"
              >Low-Key Anki: Pass/Fail</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/low-key-anki-summary-and-installation/"
              >Low-Key Anki: Summary and Installation</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/table-of-contents/anki/low-key-anki/low-key-anki-usage-guide/"
              >Low-Key Anki: Usage Guide</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/table-of-contents/anki/low-key-anki/closing/"
              >Closing</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link to="/table-of-contents/anki/mia-japanese-addon/"
          >MIA Japanese Add-on Guide</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/table-of-contents/anki/mia-dictionary/"
          >MIA Dictionary Add-on Guide</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/morphman">Comprehensive Guide to MorphMan</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="https://pheartheceal.github.io/anki-optimizer/"
          target="_blank"
          rel="noopener noreferrer"
          >Anki Optimizer and Simulator</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default { transition: 'page' }
</script>

<style lang="scss" scoped>
.article-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
