<style lang="scss">
@import '../style/components/rate.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div
      v-for="(item, index) in max"
      :key="index"
      :class="`${index < value ? 'at-rate__icon--on' : 'at-rate__icon--off'}`"
      class="at-rate__icon"
      style="margin-right: 0.1067rem;"
    >
      <span class="taro-text at-icon at-icon-star-2"></span>
      <div class="at-rate__left">
        <span class="taro-text at-icon at-icon-star-2"></span>
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
    size: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 3
    },
    max: {
      type: Number,
      default: 5
    },
    margin: {
      type: Number,
      default: 5
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-rate', this.className)
    },
    attrs() {
      return {
        value: {
          type: 'number',
          max: this.max
        }
      }
    }
  }
}
</script>
