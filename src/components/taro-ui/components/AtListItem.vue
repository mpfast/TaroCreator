<template>
  <div :class="classes">
    <div class="at-list__item-container">
      <div v-if="thumb" class="at-list__item-thumb item-thumb">
        <OtImage
          class="taro-img item-thumb__info"
          mode="scaleToFill"
          :src="thumb"
        />
      </div>
      <div v-if="iconInfo && iconInfo.value">
        <div class="at-list__item-icon item-icon">
          <span :class="iconClass" :style="iconStyle"></span>
        </div>
      </div>
      <div class="at-list__item-content item-content">
        <div class="item-content__info">
          <div class="item-content__info-title">{{ title }}</div>
        </div>
      </div>
      <div v-if="isSwitch" class="at-list__item-extra item-extra">
        <div class="item-extra__switch">
          <input color="#6190E8" class="weui-switch" type="checkbox" style="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OtImage from '@/components/taro/components/Image'
import classNames from 'classnames'
import standard from '@/components/mixins/standard'

export default {
  components: {
    OtImage
  },
  mixins: [standard],
  props: {
    note: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    title: {
      type: String,
      default: '标题文字'
    },
    thumb: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    isSwitch: {
      type: Boolean,
      default: false
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    switchColor: {
      type: String,
      default: '#6190E8'
    },
    switchIsCheck: {
      type: Boolean,
      default: false
    },
    extraText: {
      type: String,
      default: ''
    },
    extraThumb: {
      type: String,
      default: ''
    },
    onSwitchChange: {
      type: Function,
      default: () => {}
    },
    arrow: {
      type: String,
      default: 'right'
    },
    iconInfo: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    iconClass() {
      const icon = (this.iconInfo && this.iconInfo.prefixClass) || 'at-icon'
      return classNames(
        icon,
        {
          [`${icon}-${this.iconInfo && this.iconInfo.value}`]:
            this.iconInfo && this.iconInfo.value
        },
        this.iconInfo && this.iconInfo.className
      )
    },
    iconStyle() {
      return this.mergeStyle(
        {
          color: (this.iconInfo && this.iconInfo.color) || '',
          fontSize: `${(this.iconInfo && this.iconInfo.size) || 24}px`
        },
        this.iconInfo && this.iconInfo.customStyle
      )
    },
    classes() {
      return classNames(
        'at-list__item',
        {
          'at-list__item--thumb': this.thumb,
          'at-list__item--multiple': this.note,
          'at-list__item--disabled': this.disabled,
          'at-list__item--no-border': !this.hasBorder
        },
        this.className
      )
    }
  }
}
</script>
