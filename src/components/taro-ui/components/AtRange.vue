<style lang="scss">
@import '../style/components/range.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-range__container" :style="{ height: blockSize + 'px' }">
      <div class="at-range__rail"></div>
      <div
        class="at-range__track"
        :style="{ left: percentStart, width: percentLong }"
      ></div>
      <div
        class="at-range__slider"
        :style="{
          width: blockSize + 'px',
          height: blockSize + 'px',
          left: percentStart,
          backgroundColor: 'rgb(97, 144, 232)'
        }"
      ></div>
      <div
        class="at-range__slider"
        :style="{
          width: blockSize + 'px',
          height: blockSize + 'px',
          left: percentEnd,
          backgroundColor: 'rgb(97, 144, 232)'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    sliderStyle: {
      type: String,
      default: ''
    },
    railStyle: {
      type: String,
      default: ''
    },
    trackStyle: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: () => [
        {
          start: 20,
          end: 60
        }
      ]
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    blockSize: {
      type: Number,
      default: 28
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    onAfterChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames(
        'at-range',
        { 'at-range--disabled': this.disabled },
        this.className
      )
    },
    attrs() {
      return {
        min: {
          type: 'number',
          max: this.max
        },
        max: {
          type: 'number',
          min: this.min,
          max: 100
        },
        blockSize: {
          type: 'number',
          min: 18
        }
      }
    },
    percentStart() {
      return (this.value[0].start * 100) / (this.max - this.min) + '%'
    },
    percentEnd() {
      return (this.value[0].end * 100) / (this.max - this.min) + '%'
    },
    percentLong() {
      return (
        ((this.value[0].end - this.value[0].start) * 100) /
          (this.max - this.min) +
        '%'
      )
    }
  }
}
</script>
