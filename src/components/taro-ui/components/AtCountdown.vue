<style lang="scss">
@import '../style/components/countdown.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-countdown__item">
      <div class="at-countdown__time-box">
        <span class="taro-text at-countdown__time">{{ hours }}</span>
      </div>
      <span class="taro-text at-countdown__separator">时</span>
    </div>
    <div class="at-countdown__item">
      <div class="at-countdown__time-box">
        <span class="taro-text at-countdown__time">{{ minutes }}</span>
      </div>
      <span class="taro-text at-countdown__separator">分</span>
    </div>
    <div class="at-countdown__item">
      <div class="at-countdown__time-box">
        <span class="taro-text at-countdown__time">{{ seconds }}</span>
      </div>
      <span class="taro-text at-countdown__separator">秒</span>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    isCard: {
      type: Boolean,
      default: false
    },
    isShowDay: {
      type: Boolean,
      default: false
    },
    isShowHour: {
      type: Boolean,
      default: true
    },
    format: {
      type: Object,
      default: () => ({
        day: '天',
        hours: '时',
        minutes: '分',
        seconds: '秒'
      })
    },
    day: {
      type: Number,
      default: 0
    },
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    },
    seconds: {
      type: Number,
      default: 0
    },
    onTimeUp: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-countdown', this.className)
    }
  }
}
</script>
