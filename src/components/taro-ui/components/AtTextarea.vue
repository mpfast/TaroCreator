<style lang="scss">
@import '../style/components/textarea.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <textarea
      :value="value"
      :cursorspacing="cursorSpacing"
      confirmtype="完成"
      :maxlength="maxLength"
      class="at-textarea__textarea"
      :placeholder="placeholder"
      :class="placeholderClass"
      :style="placeholderStyles"
      @change="(e) => (value = e.target.value)"
    ></textarea>
    <div class="at-textarea__counter" v-if="count">
      {{ value.length }}/{{ maxLength }}
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    value: {
      type: String,
      default: ''
    },
    cursorSpacing: {
      type: Number,
      default: 100
    },
    maxLength: {
      type: Number,
      default: 200
    },
    placeholderClass: {
      type: String,
      default: ''
    },
    placeholderStyle: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '你的问题是...'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    showConfirmBar: {
      type: Boolean,
      default: false
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    count: {
      type: Boolean,
      default: true
    },
    textOverflowForbidden: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 100
    },
    onLinechange: {
      type: Function,
      default: () => {}
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    onFocus: {
      type: Function,
      default: () => {}
    },
    onBlur: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-textarea', 'at-textarea--WEB', this.className)
    },
    placeholderStyles() {
      return {
        height: this.pxTransform(this.height),
        ...this.getCustomStyle()
      }
    },
    attrs() {
      return {
        height: {
          type: 'number',
          max: 1000
        },
        maxLength: {
          type: 'number',
          max: 1000
        }
      }
    }
  },
  methods: {
    getCustomStyle() {
      let styles = {}
      let style = this.placeholderStyle
        .split(';')
        .map((style) => style.split(':'))
      style.map((item) => (styles[item[0]] = item[1]))
      return styles
    }
  }
}
</script>
