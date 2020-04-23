<style lang="scss">
@import '../style/components/noticebar.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div v-if="close" class="at-noticebar__close">
      <span class="taro-text at-icon at-icon-close"></span>
    </div>
    <div class="at-noticebar__content">
      <div class="at-noticebar__content-icon">
        <span :class="`at-icon-${icon}`" class="taro-text at-icon"></span>
      </div>
      <div class="at-noticebar__content-text">
        <div
          class="at-noticebar__content-inner"
          style="animation-duration: 7.25109s;"
        >
          {{ slots }}
        </div>
      </div>
    </div>
    <div v-if="!marquee && single && showMore" class="at-noticebar__more">
      <span class="taro-text text">{{ moreText }}</span>
      <div class="at-noticebar__more-icon">
        <span class="taro-text at-icon at-icon-chevron-right"></span>
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
    slots: {
      type: String,
      default: '这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏'
    },
    close: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    marquee: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 100
    },
    moreText: {
      type: String,
      default: '查看详情'
    },
    showMore: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    onGotoMore: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    attrs() {
      return {
        slots: {
          type: 'string'
        },
        close: {
          type: 'boolean'
        },
        single: {
          type: 'boolean'
        },
        marquee: {
          type: 'boolean'
        },
        speed: {
          type: 'number'
        },
        showMore: {
          type: 'boolean'
        },
        icon: {
          type: 'select',
          items: require('@/data/at-icon.json')
        }
      }
    },
    classes() {
      return classNames(
        'at-noticebar',
        { 'at-noticebar--marquee': this.marquee },
        { 'at-noticebar--single': this.single && !this.marquee }
      )
    }
  }
}
</script>
