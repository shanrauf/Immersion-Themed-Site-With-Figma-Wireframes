<template>
  <a :href="href" :style="styles" class="card">
    <span id="card-subtitle" class="body-main-text">
      <slot name="subtitle"></slot>
    </span>
    <span id="card-title" class="heading-4">
      <h3><slot name="heading"></slot></h3>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: '#',
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

<style>
.card {
  padding: 20px;
  min-width: 500px;
  min-height: 260px;
  border-radius: 30px;
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
  /* Strange aboslute positioning and size because the bg image overflows the card... */
  content: '';
  position: absolute;
  top: 1px;
  left: 0;
  right: 9px;
  background-image: url('../assets/gradient_swirls.svg');
  bottom: 0;
  max-width: 98.5%;
}
/* Place text above background image */
#card-title,
#card-subtitle {
  z-index: 1;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
