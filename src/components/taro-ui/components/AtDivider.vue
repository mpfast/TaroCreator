<style lang="scss">
@import '../style/components/divider.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="styles">
    <div :style="styles" class="at-divider__content">
      {{ content }}
    </div>
    <div :style="{ backgroundColor: lineColor }" class="at-divider__line"></div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    content: {
      type: String,
      default: '分割线'
    },
    height: {
      type: Number,
      default: 112
    },
    fontSize: {
      type: Number,
      default: 32
    },
    fontColor: {
      type: String,
      default: '#6190E8'
    },
    lineColor: {
      type: String,
      default: '#ccc'
    }
  },
  computed: {
    attrs() {
      return {
        content: {
          type: 'string'
        },
        height: {
          type: 'number',
          max: 200
        },
        fontSize: {
          type: 'number'
        },
        fontColor: {
          type: 'color'
        },
        lineColor: {
          type: 'color'
        }
      }
    },
    classes() {
      return classNames('at-divider', this.className)
    },
    styles() {
      return {
        color: this.fontColor,
        height: this.pxTransform(this.height),
        fontSize: this.pxTransform(this.fontSize),
        ...this.getCustomStyle()
      }
    }
  },
  methods: {
    getCustomStyle() {
      let styles = {}
      let style = this.customStyle.split(';').map((style) => style.split(':'))
      style.map((item) => (styles[item[0]] = item[1]))
      return styles
    }
  }
}
</script>
