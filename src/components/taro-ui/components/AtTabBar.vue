<style lang="scss">
@import '../style/components/tab-bar.scss';
@import '../style/components/badge.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="styles">
    <div
      v-for="(item, i) in tabList"
      :class="{ 'at-tab-bar__item--active': current == i }"
      :key="i"
      @click="onClick(i)"
      class="at-tab-bar__item"
    >
      <AtBadge :dot="!!item.dot" :value="item.text" :maxValue="item.max">
        <div class="at-tab-bar__icon">
          <span
            v-if="item.iconType"
            :class="`taro-text ${item.iconPrefixClass} ${item.iconPrefixClass}-${item.iconType}`"
            :style="{
              color: current == i ? selectedColor : color,
              fontSize: iconSize ? `${iconSize}px` : ''
            }"
          >
          </span>
        </div>
      </AtBadge>
      <div>
        <div class="at-badge">
          <div
            :style="{
              color: current == i ? selectedColor : color,
              fontSize: fontSize ? `${fontSize}px` : ''
            }"
            class="at-tab-bar__title"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'
import AtBadge from '@/components/taro-ui/components/AtBadge'

export default {
  name: 'AtTabBar',
  components: {
    AtBadge
  },
  mixins: [component],
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    current: {
      type: Number,
      default: 0
    },
    iconSize: {
      type: Number,
      default: 24
    },
    fontSize: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: '#333'
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    selectedColor: {
      type: String,
      default: '#6190E8'
    },
    tabList: {
      type: Array,
      default: () => [
        {
          title: '首页',
          iconPrefixClass: 'at-icon',
          iconType: 'home',
          text: '100',
          max: 99,
          dot: false
        },
        {
          title: '创作',
          iconPrefixClass: 'at-icon',
          iconType: 'add-circle',
          text: '100',
          max: 99,
          dot: true
        },
        {
          title: '我的',
          iconPrefixClass: 'at-icon',
          iconType: 'user',
          text: 'new',
          max: 99,
          dot: false
        }
      ]
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    attrs() {
      return {
        fixed: {
          type: 'boolean'
        },
        current: {
          type: 'number',
          max: this.tabList.length - 1
        },
        iconPrefixClass: {
          type: 'select',
          items: ['at-icon', 'fa', 'mdi']
        },
        iconSize: {
          type: 'number'
        },
        fontSize: {
          type: 'number'
        },
        color: {
          type: 'color'
        },
        backgroundColor: {
          type: 'color'
        },
        selectedColor: {
          type: 'color'
        },
        tabList: {
          type: 'array'
        }
      }
    },
    classes() {
      return classNames(
        'at-tab-bar',
        {
          'at-tab-bar--fixed': this.fixed
        },
        this.className
      )
    },
    styles() {
      return this.mergeStyle(
        {
          backgroundColor: this.backgroundColor || ''
        },
        this.customStyle
      )
    },
    imgStyle() {
      return {
        width: this.pxTransform(this.iconSize),
        height: this.pxTransform(this.iconSize)
      }
    }
  }
}
</script>
