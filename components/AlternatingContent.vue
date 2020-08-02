<template>
  <div class="content-container">
    <div class="layout">
      <div class="layout__item layout__item--body">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div class="layout__item layout__item--figure">
        <img
          src="https://images.unsplash.com/photo-1516750930166-ed88ab1adb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65c8f6fcafaf68f5fa434b5f076780fd&auto=format&fit=crop&w=600&q=80"
          alt=""
        />
      </div>
    </div>
    <div class="layout">
      <div class="layout__item layout__item--body">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div class="layout__item layout__item--figure">
        <img
          src="https://images.unsplash.com/photo-1515362790300-999394721afc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a78b6877abab91c16e757ada8c55e32&auto=format&fit=crop&w=600&q=80"
          alt=""
        />
      </div>
    </div>

    <div class="layout">
      <div class="layout__item layout__item--body">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div class="layout__item layout__item--figure">
        <img
          src="https://images.unsplash.com/photo-1514747348279-46eb4082b804?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b169d9f50db7714cd7373a3c181162a&auto=format&fit=crop&w=600&q=80"
          alt=""
        />
      </div>
    </div>

    <div class="layout">
      <div class="layout__item layout__item--body">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div class="layout__item layout__item--figure">
        <img
          src="https://images.unsplash.com/photo-1513843000111-3eb82159a25c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82618557ca42a6477f6bb9390eea27bc&auto=format&fit=crop&w=600&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
$min-width: 15rem;

// 1. Add horizontal and vertical spacing between items.
// 2. Add vertical spacing between rows.
// 3. Make the order of image / text alternate.
// 4. Take all the available space.
// 5. Require at least this amount of space or wrap.
// 6. Prevent images from sticking to the right in single column mode.
// 7. (Try to) take as much space as the content needs.
.layout {
  display: flex;
  flex-wrap: wrap;
  margin-top: -1em; // 1
  margin-left: -3.5em; // 1
  align-items: center;

  &:not(:first-of-type) {
    margin-top: 3em; // 2
  }

  &:nth-child(even) {
    flex-direction: row-reverse; // 3
  }

  &__item {
    padding-top: 1em; // 1
    padding-left: 3.5em; // 1

    &--body {
      flex-grow: 9999; // 4
      flex-basis: $min-width; // 5
    }

    &--figure {
      margin-right: auto; // 6
      flex-grow: 1; // 7

      // By using `max-content` we can get a little
      // nicer responsive behavior because the image
      // automatically shrinks if not enough space is
      // available, but also the column is not getting
      // to large than the image if a lot of space
      // is available.
      @supports (max-width: max-content) {
        min-width: $min-width; // 5
        max-width: max-content;
        flex-basis: $min-width; // 5
        flex-grow: 99999;
      }
    }
  }
}

// MISC
body {
  max-width: 64em;
  margin-right: auto;
  margin-left: auto;
  padding: 3em 1em;
  line-height: 1.5em;
  font-family: sans-serif;
}

h2 {
  font-size: 2em;
  line-height: 1.2;
}

img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
}

.layout {
  &__item {
    * + * {
      margin-top: 1em;
    }
  }
}
</style>
