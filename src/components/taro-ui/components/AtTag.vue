<style lang="scss">
@import '../style/components/tag.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    {{ slots }}
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    slots: {
      type: String,
      default: '标签'
    },
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'primary'
    },
    name: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    attrs() {
      return {
        size: {
          type: 'select',
          items: ['normal', 'small']
        },
        circle: {
          type: 'boolean'
        },
        active: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        }
      }
    },
    classes() {
      return classNames(
        'at-tag',
        `at-tag--${this.size}`,
        `at-tag--${this.type}`,
        { 'at-tag--active': this.active },
        { 'at-tag--circle': this.circle },
        { 'at-tag--disabled': this.disabled }
      )
    }
  }
}
</script>
