<style lang="scss">
@import '../style/components/search-bar.scss';
@import '../style/components/button.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-search-bar__input-cnt">
      <div class="at-search-bar__placeholder-wrap" style="flex-grow: 1;">
        <span class="taro-text at-icon at-icon-search"></span
        ><span
          class="taro-text at-search-bar__placeholder"
          style="visibility: visible;"
          >{{ placeholder }}</span
        >
      </div>
      <input
        :maxlength="maxLength"
        confirmtype="search"
        class="weui-input at-search-bar__input"
        type="search"
      />
      <div class="at-search-bar__clear" style="display: none;">
        <span class="taro-text at-icon at-icon-close-circle"></span>
      </div>
    </div>
    <div
      :style="
        showActionButton
          ? 'opacity: 1; margin-right: 0;'
          : 'opacity: 0; margin-right: -49px;'
      "
      class="at-search-bar__action"
    >
      {{ actionName }}
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
    placeholder: {
      type: String,
      default: '搜索'
    },
    maxLength: {
      type: Number,
      default: 140
    },
    fixed: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showActionButton: {
      type: Boolean,
      default: false
    },
    actionName: {
      type: String,
      default: '搜索'
    },
    inputType: {
      type: String,
      default: 'text'
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
    onActionClick: {
      type: Function,
      default: () => {}
    },
    onClear: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-search-bar', {
        'at-search-bar--fixed': this.fixed
      })
    },
    attrs() {
      return {
        maxLength: {
          type: 'number',
          max: 200
        },
        fixed: {
          type: 'boolean'
        },
        focus: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        showActionButton: {
          type: 'boolean'
        },
        inputType: {
          type: 'select',
          items: ['text', 'number', 'idcard', 'digit']
        }
      }
    }
  }
}
</script>
