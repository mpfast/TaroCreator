<style lang="scss">
@import '../style/components/tabs.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div :class="headerClasses">
      <div
        v-for="(item, index) in tabList"
        :key="index"
        :id="`tab${index}`"
        :class="{ 'at-tabs__item--active': current == index }"
        class="at-tabs__item"
      >
        {{ item.title }}
        <div class="at-tabs__item-underline"></div>
      </div>
    </div>
    <div class="at-tabs__body" :style="transformStyles">
      <div class="at-tabs__underline" :style="sizeStyles"></div>
      <div
        v-for="(item, index) in tabList"
        :key="index"
        :class="[
          current == index ? 'at-tabs-pane--active' : 'at-tabs-pane--inactive',
          `at-tabs-pane--${tabDirection}`
        ]"
        class="at-tabs-pane"
      >
        <div class="tab-content">{{ item.title }}的内容</div>
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
    isTest: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 200
    },
    tabDirection: {
      type: String,
      default: 'horizontal'
    },
    current: {
      type: Number,
      default: 0
    },
    swipeable: {
      type: Boolean,
      default: true
    },
    scroll: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    },
    tabList: {
      type: Array,
      default: () => [
        { title: '标签页1' },
        { title: '标签页2' },
        { title: '标签页3' }
      ]
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames(
        'at-tabs',
        { 'at-tabs--scroll': this.scroll },
        `at-tabs--${this.tabDirection}`,
        'at-tabs--WEB',
        this.className
      )
    },
    headerClasses() {
      let direction = 'x'
      if (this.tabDirection == 'horizontal') {
        direction = 'x'
      } else {
        direction = 'y'
      }
      return classNames(
        'at-tabs__header',
        { 'taro-scroll': this.scroll },
        `taro-scroll-view__scroll-${direction}`
      )
    },
    transformStyles() {
      let styles = ''
      switch (this.tabDirection) {
        case 'horizontal':
          styles = `transform: translate3d(${-this.current * 100}%, 0px, 0px);`
          break
        case 'vertical':
          styles = `transform: translate3d(0px, ${
            -this.current * 100
          }%, 0px);height: ${this.height}px`
          break
        default:
          break
      }
      return styles
    },
    sizeStyles() {
      let styles = ''
      switch (this.tabDirection) {
        case 'horizontal':
          styles = `width: ${this.tabList.length * 100}%;`
          break
        case 'vertical':
          styles = `height: ${this.tabList.length * 100}%;`
          break
        default:
          break
      }
      return styles
    },
    attrs() {
      return {
        tabDirection: {
          type: 'select',
          items: ['horizontal', 'vertical']
        },
        current: {
          type: 'number',
          max: this.tabList.length - 1
        },
        height: {
          type: 'number',
          max: 800
        }
      }
    }
  }
}
</script>
