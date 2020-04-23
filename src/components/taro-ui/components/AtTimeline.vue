<style lang="scss">
@import '../style/components/timeline.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="`at-timeline-item--${item.color}`"
      class="at-timeline-item"
    >
      <div class="at-timeline-item__tail"></div>
      <div class="at-timeline-item__dot"></div>
      <div class="at-timeline-item__content">
        <div class="at-timeline-item__content-item">{{ item.title }}</div>
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
    pending: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => [
        { title: '刷牙洗脸' },
        { title: '吃早餐', color: 'green' },
        { title: '上班', color: 'red' },
        { title: '睡觉', color: 'yellow' }
      ]
    }
  },
  computed: {
    classes() {
      return classNames('at-timeline', this.className)
    }
  }
}
</script>
