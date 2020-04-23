<style lang="scss">
@import '../style/components/pagination.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-pagination__btn-prev">
      <div class="at-button at-button--small at-button--disabled">
        <div class="at-button__text">上一页</div>
      </div>
    </div>
    <div class="at-pagination__number">
      <span class="taro-text at-pagination__number-current">1</span>/2
    </div>
    <div class="at-pagination__btn-next">
      <div class="at-button at-button--small">
        <div class="at-button__text">下一页</div>
      </div>
    </div>
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
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    icon: {
      type: Boolean,
      default: false
    },
    pickerSelect: {
      type: Boolean,
      default: false
    },
    onPageChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-pagination', this.className)
    }
  }
}
</script>
