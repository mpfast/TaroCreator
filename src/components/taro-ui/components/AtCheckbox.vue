<style lang="scss">
@import '../style/components/checkbox.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-checkbox">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="{
          'at-checkbox__option--disabled': option.disabled,
          'at-checkbox__option--selected': selectedList.includes(option.value)
        }"
        class="at-checkbox__option"
      >
        <div class="at-checkbox__option-wrap">
          <div class="at-checkbox__option-cnt">
            <div class="at-checkbox__icon-cnt">
              <span class="taro-text at-icon at-icon-check"></span>
            </div>
            <div class="at-checkbox__title">{{ option.label }}</div>
          </div>
          <div class="at-checkbox__desc">
            {{ option.desc }}
          </div>
        </div>
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
    options: {
      type: Array,
      default: () => [
        {
          value: 'list1',
          label: 'iPhone X',
          desc:
            '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
        },
        {
          value: 'list2',
          label: 'HUAWEI P20'
        },
        {
          value: 'list3',
          label: 'OPPO Find X',
          desc:
            '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true
        },
        {
          value: 'list4',
          label: 'vivo NEX',
          desc:
            '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true
        }
      ]
    },
    selectedList: {
      type: Array,
      default: () => ['list1', 'list2']
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('checkbox-container', this.className)
    }
  }
}
</script>
