<template>
  <a :href="href" class="primary-button">
    <slot></slot>
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
  },
}
</script>

<style scoped>
.primary-button {
  color: black;
  text-decoration: none;
  background: white;
  width: 300px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;
}
</style>
