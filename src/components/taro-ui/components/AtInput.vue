<style lang="scss">
@import '../style/components/input.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-input__container">
      <div class="at-input__overlay at-input__overlay--hidden"></div>
      <label class="at-input__title" for="value1">{{ title }}</label
      ><input
        :name="name"
        :placeholderstyle="placeholderStyle"
        :placeholderclass="placeholderClass"
        :cursorspacing="cursorSpacing"
        :maxlength="maxLength"
        :confirmtype="confirmType"
        :cursor="cursor"
        :adjustposition="adjustPosition"
        :placeholder="placeholder"
        :type="type"
        class="weui-input at-input__input"
      />
      <div class="at-input__children"></div>
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
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入名称'
    },
    placeholderStyle: {
      type: String,
      default: ''
    },
    placeholderClass: {
      type: String,
      default: 'placeholder'
    },
    title: {
      type: String,
      default: '名称'
    },
    confirmType: {
      type: String,
      default: '完成'
    },
    cursor: {
      type: Number,
      default: 0
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    cursorSpacing: {
      type: Number,
      default: 50
    },
    maxLength: {
      type: Number,
      default: 140
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    error: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
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
    },
    onErrorClick: {
      type: Function,
      default: () => {}
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-input', this.className)
    },
    attrs() {
      return {
        adjustPosition: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        border: {
          type: 'boolean'
        },
        editable: {
          type: 'boolean'
        },
        error: {
          type: 'boolean'
        },
        clear: {
          type: 'boolean'
        },
        autoFocus: {
          type: 'boolean'
        },
        focus: {
          type: 'boolean'
        }
      }
    }
  }
}
</script>
