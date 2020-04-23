<style lang="scss">
@import '../style/components/grid.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" class="at-grid" :style="customStyle">
    <div v-for="(item, i) in gridGroup" :key="i" class="at-grid__flex">
      <div
        v-for="(childItem, index) in item"
        :class="
          index === columnNum - 1 ? ['at-grid-item--last', ...classes] : classes
        "
        :style="{ flex: `0 0 ${100 / columnNum}%` }"
        :key="index"
      >
        <div class="at-grid-item__content">
          <div class="at-grid-item__content-inner">
            <div class="content-inner__icon">
              <AtImage :src="childItem.image" class="content-inner__img" />
            </div>
            <span class="taro-text content-inner__text">
              {{ childItem.value }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _chunk from 'lodash/chunk'
import classNames from 'classnames'
import AtImage from '@/components/taro/components/Image'
import component from '@/components/mixins/component'

export default {
  components: {
    AtImage
  },
  mixins: [component],
  props: {
    mode: {
      type: String,
      default: 'square'
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    columnNum: {
      type: Number,
      default: 3
    },
    data: {
      type: Array,
      default: () => [
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '领取中心'
        },
        {
          image:
            'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '找折扣'
        },
        {
          image:
            'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          value: '领会员'
        },
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '新品首发'
        },
        {
          image:
            'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '领京豆'
        },
        {
          image:
            'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          value: '手机馆'
        }
      ]
    }
  },
  computed: {
    attrs() {
      return {
        mode: {
          type: 'select',
          items: ['square', 'rect']
        }
      }
    },
    gridGroup() {
      return _chunk(this.data, this.columnNum)
    },
    classes() {
      return classNames(
        'at-grid-item at-grid__flex-item',
        { 'at-grid-item--no-border': !this.hasBorder },
        `at-grid-item--${this.mode}`
      )
    }
  }
}
</script>
