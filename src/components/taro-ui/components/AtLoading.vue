<style>
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div :class="classes" :style="customStyle">
    <div
      v-for="(item, index) in 3"
      :key="index"
      :style="ringStyle"
      class="at-loading__ring"
    ></div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    size: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return classNames('at-loading', this.className)
    },
    sizeStyle() {
      return {
        width: this.size ? `${this.pxTransform(parseInt(this.size))}` : '',
        height: this.size ? `${this.pxTransform(parseInt(this.size))}` : ''
      }
    },
    ringStyle() {
      const colorStyle = {
        border: this.color ? `1px solid ${this.color}` : '',
        'border-color': this.color
          ? `${this.color} transparent transparent transparent`
          : ''
      }
      return Object.assign({}, colorStyle, this.sizeStyle)
    }
  }
}
</script>
