<template>
  <div class="wrapper">
    <button :class="classes" @click="applyRippleEffect">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    ripple: {
      type: Boolean,
      required: false,
      default: false,
    },
    hoverWave: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        hoverWave: this.hoverWave,
      }
    },
  },
  methods: {
    applyRippleEffect(e) {
      if (!this.ripple) return
      const x = e.clientX - e.target.offsetLeft
      const y = e.clientY - e.target.offsetTop
      const ripple = document.createElement('span')
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      e.target.appendChild(ripple)
      setTimeout(() => {
        ripple.remove()
      }, 600)
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=VT323');

$color: #284cff;

.wrapper {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
}

button {
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: 20px 50px;
  margin: 25px;
  border-radius: 999px;
  border: 5px solid $color;
  font-family: 'VT323', monospace;
  font-size: 25px;
  text-shadow: 0 3px 5px rgba(#000, 0.25);
  white-space: nowrap;
  color: #fff;
  background: transparent;
  background-image: url(https://web.archive.org/web/20160312084140im_/http://splatoon.nintendo.com/assets/img/nav-bg-fill-blue.png?1443460871);
  background-repeat: repeat-x;
  background-position: 0 -100%;
  transition: 1.5s ease;
}

.hoverWave:hover {
  background-position: 500% 100%;
}

/* Ripple */
.wrapper button > span {
  position: absolute;
  background: #fff;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  animation: ripples 0.6s linear infinite;
}
@keyframes ripples {
  0% {
    width: 0px;
    height: 0px;
    opacity: 0.5;
  }
  100% {
    height: 500px;
    width: 500px;
    opacity: 0;
  }
}
</style>
