<style lang="scss">
@import '../style/components/float-layout.scss';
</style>

<template>
  <div
    @contextmenu="rightClick"
    v-if="isOpened"
    :class="classes"
    :style="customStyle"
  >
    <div class="at-float-layout__overlay"></div>
    <div class="at-float-layout__container">
      <div class="layout-header">
        <span class="taro-text layout-header__title">{{ title }}</span>
        <div class="layout-header__btn-close"></div>
      </div>
      <div class="layout-body">
        <div
          scrolly="true"
          class="taro-scroll taro-scroll-view__scroll-y layout-body__content"
        >
          <div class="content-wrapper">
            {{ slots }}
          </div>
        </div>
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
      default: `
              《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
              封笔的诗人与智力障碍的儿子一起生活；
              绝望的备胎照顾梦中情人与别人的孩子
              外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
              指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
              邻居当中有个永生不死的老头 …
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
              封笔的诗人与智力障碍的儿子一起生活；
              绝望的备胎照顾梦中情人与别人的孩子
              外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
              指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
              邻居当中有个永生不死的老头 …
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
              然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。`
    },
    title: {
      type: String,
      default: '这是个标题'
    },
    isOpened: {
      type: Boolean,
      default: true
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    },
    upperThreshold: {
      type: Number,
      default: 0
    },
    lowerThreshold: {
      type: Number,
      default: 0
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    onScroll: {
      type: Function,
      default: () => {}
    },
    onScrollToLower: {
      type: Function,
      default: () => {}
    },
    onScrollToUpper: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames(
        'at-float-layout',
        'at-float-layout--active',
        this.className
      )
    },
    attrs() {
      return {
        slots: {
          type: 'string'
        },
        title: {
          type: 'string'
        }
      }
    }
  }
}
</script>
