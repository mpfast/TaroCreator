<style lang="scss">
@import '../style/components/list.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <AtListItem
      v-for="(item, index) in list"
      :key="index"
      :isSwitch="item.isSwitch"
      :title="item.title"
      :hasBorder="item.hasBorder"
      :note="item.note"
      :thumb="item.thumb"
      :iconInfo="item.iconInfo"
    />
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'
import AtListItem from '@/components/taro-ui/components/AtListItem'

export default {
  components: {
    AtListItem
  },
  mixins: [component],
  props: {
    hasBorder: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => [
        {
          isSwitch: false,
          title: '标题文字1',
          hasBorder: false,
          iconInfo: { size: '25', color: '#78A4FA', value: 'calendar' }
        },
        {
          isSwitch: true,
          title: '标题文字2',
          hasBorder: true,
          thumb:
            'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        }
      ]
    }
  },
  computed: {
    code() {
      const listItem = this.list.map(
        item =>
          `<AtListItem isSwitch={${item.isSwitch}} title='${
            item.title
          }' hasBorder='{${
            item.hasBorder
          }}' note='描述信息' extraText='详细信息' arrow='right' ${
            item.thumb ? `thumb='${item.thumb}'` : ''
          } ${
            item.iconInfo ? `iconInfo={${JSON.stringify(item.iconInfo)}}` : ''
          } />`
      )
      return `
      <AtList hasBorder={${this.hasBorder}}>
        ${listItem.join('')}
      </AtList>
      `
    },
    attrs() {
      return {
        hasBorder: {
          type: 'boolean'
        }
      }
    },
    classes() {
      return classNames('at-list', { 'at-list--no-border': !this.hasBorder })
    }
  }
}
</script>
