<style lang="scss">
@import '../style/components/image-picker';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div
      v-for="(row, i) in matrix"
      :key="i + 1"
      class="at-image-picker__flex-box"
    >
      <div
        v-for="(item, j) in row"
        :key="i * length + j"
        class="at-image-picker__flex-item"
      >
        <div v-if="item.url" class="at-image-picker__item">
          <div class="at-image-picker__remove-btn"></div>
          <div class="taro-img at-image-picker__preview-img">
            <img
              :class="`taro-img__mode-${mode
                .replace(/\s/, '')
                .toLocaleLowerCase()}`"
              :src="item.url"
            />
          </div>
        </div>
        <div
          v-if="item.type === 'btn'"
          class="at-image-picker__item at-image-picker__choose-btn"
        >
          <div class="add-bar"></div>
          <div class="add-bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _chunk from 'lodash/chunk'
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  props: {
    files: {
      type: Array,
      default: () => [
        {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
        }
      ]
    },
    mode: {
      type: String,
      default: 'aspectFill'
    },
    showAddBtn: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    length: {
      type: Number,
      default: 4
    },
    count: {
      type: Number,
      default: 1
    },
    sizeType: {
      type: Array,
      default: () => []
    },
    sourceType: {
      type: Array,
      default: () => []
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    onImageClick: {
      type: Function,
      default: () => {}
    },
    onFail: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-image-picker', this.className)
    },
    attrs() {
      return {
        mode: {
          type: 'select',
          items: [
            'scaleToFill',
            'aspectFit',
            'aspectFill',
            'widthFix',
            'top',
            'bottom',
            'center',
            'left',
            'right',
            'top left',
            'top right',
            'bottom left',
            'bottom right'
          ]
        },
        length: {
          type: 'number',
          min: 1
        },
        count: {
          type: 'number',
          max: 99
        }
      }
    },
    matrix() {
      const rowLength = this.length <= 0 ? 1 : this.length
      const group = this.showAddBtn
        ? [...this.files, { type: 'btn' }]
        : [...this.files]
      return _chunk(group, rowLength)
    }
  }
}
</script>
