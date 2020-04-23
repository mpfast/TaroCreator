<style lang="scss">
@import '../style/components/radio.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div
      v-for="(option, index) in options"
      :key="index"
      :class="{ 'at-radio__option--disabled': option.disabled }"
      class="at-radio__option"
    >
      <div class="at-radio__option-wrap">
        <div class="at-radio__option-container">
          <div class="at-radio__title">{{ option.label }}</div>
          <div
            :class="{ 'at-radio__icon--checked': option.value == value }"
            class="at-radio__icon"
          >
            <span class="taro-text at-icon at-icon-check"></span>
          </div>
        </div>
        <div class="at-radio__desc">{{ option.desc }}</div>
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
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => [
        {
          label: '单选项一',
          value: 'option1',
          desc: '单选项描述1',
          disabled: false
        },
        {
          label: '单选项二',
          value: 'option2',
          desc: '单选项描述2',
          disabled: false
        },
        {
          label: '单选项三禁用',
          value: 'option3',
          desc: '单选项描述3',
          disabled: true
        }
      ]
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-radio', this.className)
    },
    attrs() {
      return {
        className: {
          type: 'string'
        }
      }
    }
  }
}
</script>
