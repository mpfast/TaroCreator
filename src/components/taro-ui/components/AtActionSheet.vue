<style lang="scss">
@import '../style/components/action-sheet.scss';
</style>

<template>
  <div
    v-if="isOpened"
    @contextmenu.prevent="rightClick"
    :class="classes"
    :style="customStyle"
  >
    <div class="at-action-sheet__overlay"></div>
    <div class="at-action-sheet__container">
      <div class="at-action-sheet__header">
        {{ title }}
      </div>
      <div class="at-action-sheet__body">
        <div class="at-action-sheet__item">按钮一</div>
        <div class="at-action-sheet__item">按钮二</div>
      </div>
      <div class="at-action-sheet__footer">{{ cancelText }}</div>
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
      default: '标题'
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    isOpened: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data: () => ({
    children: `<AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>`
  }),
  computed: {
    classes() {
      return classNames(
        'at-action-sheet',
        'at-action-sheet--active',
        this.className
      )
    }
  }
}
</script>
