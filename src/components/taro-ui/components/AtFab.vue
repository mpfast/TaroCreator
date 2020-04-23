<style lang="scss">
@import '../style/components/fab.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :style="styles">
    <div :class="classes">
      <span :class="`taro-text at-fab__icon at-icon at-icon-${icon}`"></span>
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
    right: {
      type: Number,
      default: 46
    },
    bottom: {
      type: Number,
      default: 126
    },
    zIndex: {
      type: Number,
      default: 1100
    },
    size: {
      type: String,
      default: 'normal'
    },
    icon: {
      type: String,
      default: 'menu'
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    attrs() {
      return {
        right: {
          type: 'number',
          max: 1000
        },
        bottom: {
          type: 'number',
          max: 1000
        },
        zIndex: {
          type: 'number',
          max: 9999
        },
        size: {
          type: 'select',
          items: ['normal', 'small']
        },
        icon: {
          type: 'select',
          items: require('@/data/at-icon.json')
        }
      }
    },
    code() {
      return `
        <View style={${
          this.fixed ? 'position: fixed;' + this.customStyles : ''
        }}
        >
          <AtFab size='${this.size}'>
            <Text className='at-fab__icon at-icon at-icon-${this.icon}'></Text>
          </AtFab>
        </View>
      `
    },
    customStyles() {
      return `right: ${this.right}px;bottom: ${this.bottom}px;z-index: ${this.zIndex}`
    },
    styles() {
      let style = ''
      if (this.fixed) {
        style =
          'position: fixed;' +
          `right: ${this.right - 30}px;bottom: ${this.bottom - 60}px;z-index: ${
            this.zIndex
          }`
        style = 'position: absolute;' + this.customStyles
      }
      return style
    },
    classes() {
      return classNames('at-fab', `at-fab--${this.size}`)
    }
  }
}
</script>
