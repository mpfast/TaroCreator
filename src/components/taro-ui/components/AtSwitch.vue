<style lang="scss">
@import '../style/components/switch.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-switch__title">{{ title }}</div>
    <div
      :class="['at-switch__container', disabled ? 'at-switch--disabled' : '']"
    >
      <div class="at-switch__mask"></div>
      <input
        :style="{ borderColor: color, backgroundColor: color }"
        class="weui-switch at-switch__switch"
        :checked="checked"
        :disabled="disabled"
        type="checkbox"
      />
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    title: {
      type: String,
      default: '开启中'
    },
    color: {
      type: String,
      default: '#6190e8'
    },
    checked: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-switch', this.className)
    },
    attrs() {
      return {
        color: {
          type: 'color'
        }
      }
    }
  }
}
</script>
