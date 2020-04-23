<style lang="scss">
@import '../style/components/progress.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-progress__outer">
      <div class="at-progress__outer-inner">
        <div
          :style="`width: ${percent}%;background-color: ${color};height: ${strokeWidth}px`"
          class="at-progress__outer-inner-background"
        ></div>
      </div>
    </div>
    <div class="at-progress__content">
      <span
        v-if="status == 'success'"
        class="taro-text at-icon at-icon-check-circle"
      ></span>
      <span
        v-else-if="status == 'error'"
        class="taro-text at-icon at-icon-close-circle"
      ></span>
      <template v-else-if="!isHidePercent"> {{ percent }}% </template>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    color: {
      type: String,
      default: '#78a4f4'
    },
    status: {
      type: String,
      default: 'progress'
    },
    percent: {
      type: Number,
      default: 50
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    isHidePercent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return classNames(
        'at-progress',
        `at-progress--${this.status}`,
        this.className
      )
    },
    attrs() {
      return {
        color: {
          type: 'color'
        },
        status: {
          type: 'select',
          items: ['progress', 'success', 'error']
        },
        percent: {
          type: 'number'
        },
        strokeWidth: {
          type: 'number'
        }
      }
    }
  }
}
</script>
