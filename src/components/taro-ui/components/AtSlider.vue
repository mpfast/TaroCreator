<style lang="scss">
@import '../style/components/slider.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-slider__inner">
      <div class="weui-slider-box">
        <div class="weui-slider">
          <div
            class="weui-slider__inner"
            :style="{ backgroundColor: backgroundColor }"
          >
            <div
              class="weui-slider__track"
              :style="{ width: percent, backgroundColor: activeColor }"
            ></div>
            <div class="weui-slider__handler" :style="styles"></div>
            <input type="hidden" :value="value" />
          </div>
        </div>
      </div>
    </div>
    <div class="at-slider__text" v-if="showValue">{{ value }}</div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 50
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#6190e8'
    },
    backgroundColor: {
      type: String,
      default: '#e9e9e9'
    },
    blockSize: {
      type: Number,
      default: 28
    },
    blockColor: {
      type: String,
      default: '#ffffff'
    },
    showValue: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    onChanging: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames(
        'at-slider',
        { 'at-slider--disabled': this.disabled },
        this.className
      )
    },
    styles() {
      return {
        left: this.percent,
        width: `${this.blockSize}px`,
        height: `${this.blockSize}px`,
        marginTop: `-${this.blockSize / 2}px`,
        marginLeft: `-${this.blockSize / 2}px`,
        backgroundColor: this.blockColor
      }
    },
    attrs() {
      return {
        min: {
          type: 'number',
          max: this.max
        },
        max: {
          type: 'number',
          min: this.min,
          max: 100
        },
        step: {
          type: 'number',
          min: 1,
          max: 50
        },
        value: {
          type: 'number',
          min: this.min,
          max: this.max,
          step: this.step
        },
        activeColor: {
          type: 'color'
        },
        backgroundColor: {
          type: 'color'
        },
        blockColor: {
          type: 'color'
        }
      }
    },
    percent() {
      return `${(this.value * 100) / (this.max - this.min)}%`
    }
  }
}
</script>
