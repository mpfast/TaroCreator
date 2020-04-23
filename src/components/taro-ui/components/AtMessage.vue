<style lang="scss">
@import '../style/components/message.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    {{ message }}
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    message: {
      type: String,
      default: '消息内容'
    },
    type: {
      type: String,
      default: 'info'
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data: () => ({
    isOpened: true
  }),
  computed: {
    classes() {
      return classNames(
        'at-message',
        `at-message--${this.type}`,
        this.isOpened ? 'at-message--show' : 'at-message--hidden',
        this.className
      )
    },
    attrs() {
      return {
        type: {
          type: 'select',
          items: ['info', 'success', 'error', 'warning']
        },
        duration: {
          type: 'number',
          max: 5000
        }
      }
    }
  },
  mounted() {
    this.bindMessageListener()
  },
  methods: {
    bindMessageListener() {
      this.isOpened = true
      this.$nextTick(() => {
        setTimeout(() => {
          this.isOpened = false
        }, this.duration)
      })
    }
  }
}
</script>
