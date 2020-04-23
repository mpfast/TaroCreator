<style lang="scss">
.taro-text {
  user-select: none;
  &__selectable {
    user-select: text;
  }
}
</style>

<template>
  <span @contextmenu.prevent="rightClick" :class="classes" :style="styleObject">
    {{ slots }}
  </span>
</template>

<script>
import classNames from 'classnames'
import standard from '@/components/mixins/standard'

export default {
  mixins: [standard],
  props: {
    slots: {
      type: String,
      default: '文本'
    },
    selectable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    attrs() {
      return {
        slots: {
          type: 'string'
        }
      }
    },
    classes() {
      return classNames(
        'taro-text',
        {
          'taro-text__selectable': this.selectable
        },
        this.className
      )
    }
  }
}
</script>
