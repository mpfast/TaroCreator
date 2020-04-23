<style lang="scss">
@import '../style/components/segmented-control.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-segmented-control">
      <div
        class="at-segmented-control__item at-segmented-control__item--active"
      >
        标签页1
      </div>
      <div class="at-segmented-control__item">标签页2</div>
      <div class="at-segmented-control__item">标签页3</div>
    </div>
    <div class="tab-content">标签 1 的内容</div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    current: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    values: {
      type: Array,
      default: () => []
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-segmented', this.className)
    }
  }
}
</script>
