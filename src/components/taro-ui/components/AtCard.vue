<style lang="scss">
@import '../style/components/card.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-card__header">
      <div class="at-card__header-thumb">
        <div v-if="thumb" class="taro-img at-card__header-thumb-info">
          <img class="taro-img__mode-scaletofill" :src="thumb" />
        </div>
      </div>
      <span class="taro-text at-card__header-title">{{ title }}</span>
      <span v-if="extra" class="taro-text at-card__header-title">{{
        extra
      }}</span>
    </div>
    <div class="at-card__content">
      <div class="at-card__content-info">{{ slots }}</div>
      <div v-if="note" class="at-card__content-note">{{ note }}</div>
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
      default: '这也是内容区 可以随意定义功能'
    },
    note: {
      type: String,
      default: '小Tips'
    },
    isFull: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      default:
        'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
    },
    title: {
      type: String,
      default: '这是个标题'
    },
    extra: {
      type: String,
      default: '额外信息'
    },
    icon: {
      type: Object,
      default: () => new Object()
    },
    renderIcon: {
      type: String,
      default: ''
    },
    extraStyle: {
      type: Object,
      default: () => new Object()
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-card', this.className)
    }
  }
}
</script>
