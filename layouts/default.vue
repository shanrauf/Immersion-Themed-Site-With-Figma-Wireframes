<template>
  <div>
    <nuxt />
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from '~/components/BaseFooter.vue'

export default {
  transition: 'page',
  components: {
    BaseFooter,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* Uncomment to enable CSS ghost debug mode */
  /* background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important; */
}
html,
body {
  font-family: SF Pro, Roboto;
  width: 100%;
}

@media (max-width: 800px) {
  html,
  body {
    /* Prevents horizontal scrolling due to hero ripples */
    overflow-x: hidden;
  }
}

.heading-1 {
  font-size: 60px;
  font-weight: bold;
}
.heading-2 {
  font-size: 50px;
  font-weight: bold;
}
.heading-3 {
  font-size: 40px;
  font-weight: bold;
}
.heading-4 {
  font-size: 30px;
  font-weight: bold;
}
.body-intro-text {
  font-size: 24px;
}
.body-main-text {
  font-size: 20px;
}
.medium-text {
  font-size: 17px;
}
.caption-text {
  font-size: 15px;
}
.small-text {
  font-size: 13px;
}

/* Mobile */
@media (max-width: 800px) {
  .heading-1 {
    font-size: 34px;
  }
  .heading-2 {
    font-size: 32px;
  }
  .heading-3 {
    font-size: 28px;
  }
  .heading-4 {
    font-size: 24px;
  }
  .body-intro-text {
    font-size: 20px;
  }
  .body-main-text {
    font-size: 17px;
  }
  .medium-text {
    font-size: 17px;
  }
  .caption-text {
    font-size: 15px;
  }
  .small-text {
    font-size: 13px;
  }
}
</style>
