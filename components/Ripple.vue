<template>
  <div class="ripple-container">
    <template v-if="delayOver">
      <div class="ripple r1"></div>
      <div class="ripple r2"></div>
      <div class="ripple r3"></div>
      <div class="ripple r4"></div>
      <div class="ripple r5"></div>
      <div class="ripple r6"></div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    /* seconds */
    delay: {
      type: String,
      required: false,
      default: '0',
    },
  },
  data() {
    return {
      delayOver: false,
    }
  },
  created() {
    const delay = parseInt(this.delay) * 1000
    setTimeout(() => {
      this.delayOver = true
    }, delay)
  },
}
</script>

<style>
.ripple-container {
  position: relative;
  height: 240px;
  width: 500px;
  top: -150px;
}

@media (max-width: 800px) {
  .ripple-container {
    width: 300px;
    right: 100px;
  }
}

.ripple {
  position: absolute;
  margin: auto;
  top: 100px;
  left: 200px;
  width: 100px;
  height: 40px;
  border-radius: 50%;
  animation: ripple 4s linear infinite;
}

.r2 {
  animation-delay: 0.8s;
}
.r3 {
  animation-delay: 1.6s;
}
.r4 {
  animation-delay: 2.4s;
}
.r5 {
  animation-delay: 3.2s;
}
.r6 {
  animation-delay: 4s;
}

/* Animations */

@keyframes ripple {
  from {
    border: 4px solid rgb(175, 175, 175);
    background: lightgray;
    opacity: 0.7;
  }
  to {
    top: 20px;
    left: 0px;
    border: 0px solid rgb(175, 175, 175);
    background: lightgray;
    width: 500px;
    height: 200px;
    opacity: 0;
  }
}
</style>
