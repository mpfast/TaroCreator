<style lang="scss">
@import '../style/components/steps.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="`at-steps__item at-steps__item--${
        current == index ? 'active' : 'inactive'
      }`"
    >
      <div class="at-steps__circular-wrap">
        <div class="at-steps__circular">
          <span
            v-if="item.icon"
            :class="`taro-text at-steps__circle-icon at-icon at-icon-${item.icon.value}`"
          >
          </span>
          <span v-else class="taro-text at-steps__num">{{ index + 1 }}</span>
        </div>
        <div class="at-steps__right-line"></div>
      </div>
      <div class="at-steps__title">{{ item.title }}</div>
      <div class="at-steps__desc">{{ item.desc }}</div>
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
      default: 0
    },
    items: {
      type: Array,
      default: () => [
        {
          title: '步骤一',
          desc: '这里是额外的信息，最多两行',
          icon: {
            value: 'sound',
            activeColor: '#fff',
            inactiveColor: '#78A4FA',
            size: '14'
          }
        },
        {
          title: '步骤二',
          desc: '这里是额外的信息，最多两行',
          icon: {
            value: 'shopping-cart',
            activeColor: '#fff',
            inactiveColor: '#78A4FA',
            size: '14'
          }
        },
        {
          title: '步骤三',
          desc: '这里是额外的信息，最多两行',
          icon: {
            value: 'camera',
            activeColor: '#fff',
            inactiveColor: '#78A4FA',
            size: '14'
          }
        }
      ]
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-steps', this.className)
    },
    attrs() {
      return {
        current: {
          type: 'number',
          max: this.items.length - 1
        }
      }
    }
  }
}
</script>
