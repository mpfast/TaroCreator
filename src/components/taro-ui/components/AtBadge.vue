<style lang="scss">
@import "../style/components/badge.scss";
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <slot> </slot>
    <div v-if="dot" class="at-badge__dot"></div>
    <div v-else-if="formatValue !== ''" class="at-badge__num">
      {{ formatValue }}
    </div>
  </div>
</template>

<script>
import isNaN from 'lodash/isNaN'
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: 'hot'
    },
    maxValue: {
      type: [Number, String],
      default: 99
    }
  },
  computed: {
    attrs() {
      return {
        dot: {
          type: 'boolean'
        }
      }
    },
    classes() {
      return classNames('at-badge', this.className)
    },
    formatValue() {
      if (this.value === '' || this.value === null) return ''
      const numValue = +this.value
      if (isNaN(numValue)) {
        return this.value
      }
      return numValue > this.maxValue ? `${this.maxValue}+` : numValue
    }
  }
}
</script>
