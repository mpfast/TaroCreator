<style lang="scss">
@import '../style/components/curtain.scss';
</style>

<template>
  <div
    @contextmenu.prevent="rightClick"
    v-if="isOpened"
    :class="classes"
    :style="customStyle"
  >
    <div class="at-curtain__container">
      <div class="at-curtain__body">
        <div class="taro-img taro-img__widthfix">
          <img
            class="taro-img__mode-widthfix"
            src="https://taro-ui.jd.com/h5/static/images/curtain.png"
          />
        </div>
        <div
          :class="`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`"
        ></div>
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
    isOpened: {
      type: Boolean,
      default: true
    },
    closeBtnPosition: {
      type: String,
      default: 'bottom'
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    children: `<Image style='width:100%;height:250px' src='https://taro-ui.jd.com/h5/static/images/curtain.png' />`
  }),
  computed: {
    classes() {
      return classNames('at-curtain', this.className)
    },
    attrs() {
      return {
        closeBtnPosition: {
          type: 'select',
          items: [
            'top',
            'top-left',
            'top-right',
            'bottom',
            'bottom-left',
            'bottom-right'
          ]
        }
      }
    }
  }
}
</script>
