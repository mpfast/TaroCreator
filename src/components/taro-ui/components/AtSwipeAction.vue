<style lang="scss">
@import '../style/components/swipe-action.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" class="at-swipe-action">
    <div class="at-swipe-action__content animtion">
      <div class="normal">AtSwipeAction 一般使用场景</div>
    </div>
    <div class="at-swipe-action__options">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="at-swipe-action__option"
        :style="`color: rgb(255, 255, 255); background-color: ${option.style.backgroundColor};`"
      >
        <span class="taro-text option__text">{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => [
        {
          text: '取消',
          style: {
            backgroundColor: '#6190E8'
          }
        },
        {
          text: '确认',
          style: {
            backgroundColor: '#FF4949'
          }
        }
      ]
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    onOpened: {
      type: Function,
      default: () => {}
    },
    onClosed: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
