<template>
  <nuxt-link :to="to" :style="styles" class="card">
    <span id="card-subtitle" class="body-main-text">
      <slot name="subtitle"></slot>
    </span>
    <span id="card-title" class="heading-4">
      <h3><slot name="heading"></slot></h3>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: '/',
    },
    background: {
      type: String,
      required: false,
      default: 'linear-gradient(126.53deg, #844eff 0.04%, #88f8ff 100%)',
    },
    color: {
      type: String,
      required: false,
      default: 'black',
    },
  },
  data() {
    return {
      styles: {
        color: this.color,
        background: this.background,
      },
    }
  },
}
</script>

<style scoped>
.card {
  box-sizing: border-box;
  padding: 25px;
  width: 450px;
  height: 250px;
  border-radius: 10px;
  /* border-radius: 30px; */
  text-decoration: none;
  position: relative;
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.25);
  background: linear-gradient(126.53deg, #844eff 0.04%, #88f8ff 100%);
  transition: box-shadow 0.3s ease-in-out;
}
.card:hover {
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
}
.card:before {
  content: '';
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  background-image: url('../assets/gradient_swirls.svg');
  bottom: 0;
  max-width: 100%;
}
/* Place text above background image */
#card-title,
#card-subtitle {
  z-index: 1;
}
@media (max-width: 800px) {
  .card {
    width: 100%;
    height: 200px;
  }
}
@media (max-width: 360px) {
  .card {
    width: 95%;
    height: 200px;
  }
}
</style>
