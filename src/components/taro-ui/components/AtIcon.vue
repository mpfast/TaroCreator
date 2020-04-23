<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css');
@import '../style/components/icon.scss';
</style>

<template>
  <span
    @contextmenu.prevent="rightClick"
    :style="{ fontSize: `${size}px`, color }"
    :class="classes"
  ></span>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    prefixClass: {
      type: String,
      default: 'at-icon'
    },
    value: {
      type: String,
      default: 'sketch'
    },
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: '#6190e8'
    }
  },
  data: () => ({
    isLoading: false,
    model: null,
    search: null,
    items: []
  }),
  computed: {
    code() {
      return `
        <AtIcon prefixClass='${this.prefixClass}' value='${this.value}' size={${this.size}} color='${this.color}'>
        </AtIcon>
        `
    },
    attrs() {
      return {
        prefixClass: {
          type: 'select',
          items: ['at-icon', 'fa', 'mdi']
        },
        value: {
          type: 'select',
          items: this.items
        },
        size: {
          type: 'number',
          max: 800
        },
        color: {
          type: 'color'
        }
      }
    },
    classes() {
      return classNames(
        'taro-text',
        this.prefixClass,
        `${this.prefixClass}-${this.value}`,
        this.className
      )
    }
  },
  watch: {
    prefixClass: {
      handler(val) {
        this.items = require(`@/data/${val}.json`)
      },
      immediate: true
    }
  }
}
</script>
