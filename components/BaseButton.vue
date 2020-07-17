<template>
  <button
    type="button"
    :class="{ rounded, disabled }"
    :style="styles"
    :disabled="disabled"
    v-on="listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  transition: 'page',
  props: {
    rounded: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: '#fafafa',
    },
    backgroundColor: {
      type: String,
      required: false,
      default: undefined,
    },
    padding: {
      type: String,
      required: false,
      default: '12px 45px',
    },
    border: {
      type: String,
      required: false,
      default: undefined,
    },
    margin: {
      type: String,
      required: false,
      default: undefined,
    },
    width: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      }
    },
    colorStyle() {
      return this.color || '#ffffff'
    },
    backgroundColorStyle() {
      return this.backgroundColor || undefined
    },
    paddingStyle() {
      return this.padding
    },
    borderStyle() {
      return this.border
    },
    marginStyle() {
      return this.margin
    },
    widthStyle() {
      return this.width
    },
    styles() {
      return {
        color: this.colorStyle,
        'background-color': this.backgroundColorStyle,
        padding: this.paddingStyle,
        border: this.border,
        width: this.widthStyle,
        margin: this.marginStyle,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:focus {
  outline: none;
}

button:active {
  transform: scale(0.95);
}

.rounded {
  border-radius: 20px;
}

.disabled {
  background-color: gray;
}
</style>
