<template>
  <div class="cards-wrapper">
    <div
      v-for="article in articles"
      :key="article.title"
      class="card-grid-space"
    >
      <nuxt-link to="/" class="card">
        <div>
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
        </div></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  data() {
    return {
      articles: [
        {
          title: 'Japanese Quickstart Guide',
          description:
            'The following guide was designed to contain everything needed to complete Stage 1 of MIA for Japanese.'
        },
        {
          title: 'MorphMan Guide',
          description:
            'MorphMan is an Anki add-on that keeps track of what words you know and uses that to reorder your new cards into an optimal order for learning.'
        },
        {
          title: 'MIA Stage 2 Guide',
          description:
            'The following guide provides the basic instructions necessary to complete MIA Stage 2 for any major language.'
        },
        {
          title: 'MIA Dictionary Addon Guide',
          description:
            'The MIA Dictionary Anki addon is designed to radically streamline the card creation process for language learning.'
        },
        {
          title: 'MIA Glossary',
          description:
            'The MIA Glossary contains entries for all technical, language learning terms that you may come across on the site.'
        },
        {
          title: 'MIA Japanese Addon Guide',
          description:
            'MIA Japanese is an Anki 2.1 add-on that provides automatic generation of native audio, kanji readings, pitch accent information, automatic pitch accent coloring, and more.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');

.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0 auto;
  max-width: 50%;
}
.mia-logo {
  width: 50%;
  max-width: 300px;
  height: auto;
  border-radius: 50px;
  margin-bottom: 20px;
}

.landing-text {
  width: 100%;
  text-align: center;
  font-size: 30px;
}

.popular-posts-title {
  font-size: 45px;
}

:root {
  --color: #3c3163;
  --transition-time: 0.5s;
}

* {
  box-sizing: border-box;
}

body {
  /* max-width: 85%; */
  margin: auto;
  min-height: 100vh;
  font-family: 'Open Sans';
  background: #edf8fe;
}

a {
  color: inherit;
}

.cards-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  padding: 4rem;
  margin: 0 auto;
  width: max-content;
}

.card {
  font-family: 'Heebo';
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(
      rgba(0, 0, 0, var(--bg-filter-opacity)),
      rgba(0, 0, 0, var(--bg-filter-opacity))
    ),
    url('../assets/manga_wall_small.png');
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  border: 10px solid #ccc;
  text-decoration: none;
}

// .card:hover {
//   transform: rotate(0);
// }

.card h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card p {
  font-size: 0.75em;
  font-family: 'Open Sans';
  margin-top: 0.5em;
  line-height: 2em;
}

.card .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: 0.8;
}

.card:before,
.card:after {
  content: '';
  transform: scale(0);
  transform-origin: top left;
  border-radius: 50%;
  position: absolute;
  left: -50%;
  top: -50%;
  z-index: -5;
  transition: all, var(--transition-time);
  transition-timing-function: ease-in-out;
}

.card:before {
  background: #ddd;
  width: 250%;
  height: 250%;
}

.card:after {
  background: white;
  width: 200%;
  height: 200%;
}

// .card:hover {
//   color: var(--color);
// }

// .card:hover:before,
// .card:hover:after {
//   transform: scale(1);
// }

.card-grid-space .num {
  font-size: 3em;
  margin-bottom: 1.2rem;
  margin-left: 1rem;
}

.info {
  font-size: 1.2em;
  display: flex;
  padding: 1em 3em;
  height: 3em;
}

.info img {
  height: 3em;
  margin-right: 0.5em;
}

.info h1 {
  font-size: 1em;
  font-weight: normal;
}

/* MEDIA QUERIES */
@media screen and (max-width: 1285px) {
  .cards-wrapper {
    grid-template-columns: 1fr 1fr;
  }
  .landing {
    max-width: 80%;
  }
}

@media screen and (max-width: 900px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
  }
  .info {
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .cards-wrapper {
    padding: 4rem 2rem;
  }
  .card {
    max-width: calc(100vw - 4rem);
  }
}

@media screen and (max-width: 450px) {
  .info {
    display: block;
    text-align: center;
  }
  .info h1 {
    margin: 0;
  }
}
</style>
