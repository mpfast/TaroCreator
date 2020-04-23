<style lang="scss">
@import '../style/components/input-number.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-input-number__btn">
      <span
        class="taro-text at-icon at-icon-subtract at-input-number__btn-subtract"
      ></span>
    </div>
    <input class="weui-input at-input-number__input" type="number" />
    <div class="at-input-number__btn">
      <span
        class="taro-text at-icon at-icon-add at-input-number__btn-add"
      ></span>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    value: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'number'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: ''
    },
    disabledInput: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    onBlur: {
      type: Function,
      default: () => {}
    },
    onErrorInput: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-input-number', this.className)
    },
    attrs() {
      return {
        type: {
          type: 'select',
          items: ['number', 'digit']
        }
      }
    }
  }
}
</script>
