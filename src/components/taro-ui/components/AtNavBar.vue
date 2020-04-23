<style lang="scss">
@import '../style/components/nav-bar.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div @click="onClickLeftIcon" class="at-nav-bar__left-view">
      <span
        class="taro-text at-icon at-icon-chevron-left"
        style="font-size: 1.024rem;"
      ></span
      ><span class="taro-text at-nav-bar__text">{{ leftText }}</span>
    </div>
    <div class="at-nav-bar__title">{{ title }}</div>
    <div class="at-nav-bar__right-view">
      <div
        @click="onClickRgIconNd"
        class="at-nav-bar__container at-nav-bar__container--hide"
      ></div>
      <div
        @click="onClickRgIconSt"
        class="at-nav-bar__container at-nav-bar__container"
      >
        <span
          class="taro-text at-icon at-icon-bullet-list"
          style="font-size: 1.024rem;"
        ></span>
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
    fixed: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    leftIconType: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: '返回'
    },
    title: {
      type: String,
      default: 'NavBar 导航栏'
    },
    rightFirstIconType: {
      type: String,
      default: ''
    },
    rightSecondIconType: {
      type: String,
      default: ''
    }
  },
  computed: {
    attrs() {
      return {
        fixed: {
          type: 'boolean'
        },
        border: {
          type: 'boolean'
        }
      }
    },
    classes() {
      return classNames(
        'at-nav-bar',
        {
          'at-nav-bar--fixed': this.fixed
        },
        this.className
      )
    }
  },
  methods: {
    onClickLeftIcon() {
      // 左边第一个图标类型点击事件
    },
    onClickRgIconSt() {
      // 从右到左第一个图标类型点击事件
    },
    onClickRgIconNd() {
      // 从右到左第二个图标类型点击事件
    }
  }
}
</script>
