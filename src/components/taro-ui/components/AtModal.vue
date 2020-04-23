<style lang="scss">
@import '../style/components/modal.scss';
</style>

<template>
  <div
    v-if="isOpened"
    @contextmenu.prevent="rightClick"
    :class="classes"
    :style="customStyle"
  >
    <div class="at-modal__overlay"></div>
    <div class="at-modal__container">
      <div class="at-modal__header">{{ title }}</div>
      <div
        scrolly="true"
        class="taro-scroll taro-scroll-view__scroll-y at-modal__content"
      >
        <div class="modal-content">
          {{ content }}
        </div>
      </div>
      <div class="at-modal__footer">
        <div class="at-modal__action">
          <button class="weui-btn_default">{{ cancelText }}</button
          ><button class="weui-btn_default">{{ confirmText }}</button>
        </div>
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
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '这里是正文内容，欢迎使用TaroCreator'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    isOpened: {
      type: Boolean,
      default: true
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return classNames('at-modal', 'at-modal--active', this.className)
    }
  }
}
</script>
