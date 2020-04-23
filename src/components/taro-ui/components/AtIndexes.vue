<style lang="scss">
@import '../style/components/toast.scss';
@import '../style/components/indexes.scss';
@import '../style/components/list.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-indexes__menu">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="at-indexes__menu-item"
      >
        {{ item.title }}
      </div>
    </div>
    <div
      scrolly="true"
      class="taro-scroll taro-scroll-view__scroll-y at-indexes__body"
    >
      <div id="at-indexes__top" class="at-indexes__content">
        <div class="custom-area">选择城市</div>
      </div>
      <div
        v-for="(item, index) in list"
        :key="index"
        :id="`at-indexes__list-${item.title}`"
        class="at-indexes__list"
      >
        <div class="at-indexes__list-title">{{ item.title }}</div>
        <AtList
          :list="
            item.items.map((list) => {
              return { title: list.name }
            })
          "
        >
        </AtList>
      </div>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'
import AtList from '@/components/taro-ui/components/AtList'

export default {
  mixins: [component],
  components: {
    AtList
  },
  props: {
    animation: {
      type: Boolean,
      default: false
    },
    isVibrate: {
      type: Boolean,
      default: true
    },
    isShowToast: {
      type: Boolean,
      default: true
    },
    topKey: {
      type: String,
      default: 'top'
    },
    list: {
      type: Array,
      default: () => [
        {
          title: 'A',
          key: 'A',
          items: [
            {
              name: '阿坝'
              // 此处可加其他业务字段
            },
            {
              name: '阿拉善'
            }
          ]
        },
        {
          title: 'B',
          key: 'B',
          items: [
            {
              name: '北京'
            },
            {
              name: '保定'
            }
          ]
        }
      ]
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    onScrollIntoView: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    classes() {
      return classNames('at-indexes', this.className)
    }
  }
}
</script>
