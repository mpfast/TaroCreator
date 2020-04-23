<style lang="scss">
@import '../style/components/activity-indicator.scss';
@import '../style/components/loading.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-activity-indicator__body">
      <div class="at-loading">
        <div
          v-for="(item, index) in 3"
          :key="index"
          :style="ringStyle"
          class="at-loading__ring"
        ></div>
      </div>
    </div>
    <span class="taro-text at-activity-indicator__content">{{ content }}</span>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    size: {
      type: Number,
      default: 24
    },
    mode: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: '#6190E8'
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return classNames(
        'at-activity-indicator',
        { 'at-activity-indicator--center': this.mode == 'center' },
        this.className
      )
    },
    attrs() {
      return {
        size: {
          type: 'number',
          max: 200
        },
        mode: {
          type: 'select',
          items: ['center', 'normal']
        },
        color: {
          type: 'color'
        }
      }
    },
    sizeStyle() {
      return {
        width: this.size ? `${this.pxTransform(parseInt(this.size))}` : '',
        height: this.size ? `${this.pxTransform(parseInt(this.size))}` : ''
      }
    },
    ringStyle() {
      const colorStyle = {
        border: this.color ? `1px solid ${this.color}` : '',
        'border-color': this.color
          ? `${this.color} transparent transparent transparent`
          : ''
      }
      return Object.assign({}, colorStyle, this.sizeStyle)
    }
  }
}
</script>
