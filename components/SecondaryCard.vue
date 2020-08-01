<template>
  <a :href="href" :style="styles" class="secondary-card">
    <span id="secondary-card-title" class="heading-4">
      <h3><slot name="heading"></slot></h3>
    </span>
    <span id="secondary-card-subtitle" class="body-main-text">
      <slot name="subtitle"></slot>
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
      default:
        'linear-gradient(15deg, rgba(1,25,47,1) 0%, rgba(1,25,47,1) 20%, rgba(32,79,112,1) 100%)',
    },
    color: {
      type: String,
      required: false,
      default: 'white',
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
.secondary-card {
  padding: 20px;
  min-width: 300px;
  max-width: 400px;
  min-height: 250px;
  border-radius: 30px;
  text-decoration: none;
  position: relative;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    15deg,
    rgba(1, 25, 47, 1) 0%,
    rgba(1, 25, 47, 1) 20%,
    rgba(32, 79, 112, 1) 100%
  );
  transition: box-shadow 0.3s ease-in-out;
}
.secondary-card:hover {
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
}
@media (max-width: 800px) {
  .secondary-card {
    width: 100%;
  }
}
</style>
