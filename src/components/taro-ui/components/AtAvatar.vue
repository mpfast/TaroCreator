<style lang="scss">
@import '../style/components/avatar.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <AtImage v-if="image" :src="image" class="at-avatar__img" />
    <AtText v-else :slots="text.slice(0, 1).toUpperCase()" />
  </div>
</template>

<script>
import classNames from 'classnames'
import AtText from '@/components/taro/components/Text'
import AtImage from '@/components/taro/components/Image'
import component from '@/components/mixins/component'

export default {
  components: {
    AtText,
    AtImage
  },
  mixins: [component],
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    circle: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: 'http://jdc.jd.com/img/400'
    },
    openData: {
      type: String,
      default: ''
    }
  },
  computed: {
    code() {
      return `
        <AtAvatar size='${this.size}' ${
        this.image ? `image='${this.image}'` : ''
      } ${this.text ? `text='${this.text}'` : ''} ${
        this.openData ? `openDate=${this.openData}` : ''
      } ${this.className ? `className='${this.className}'` : ''} ${
        this.customStyle ? `customStyle='${this.customStyle}'` : ''
      }>
        </AtAvatar>
        `
    },
    attrs() {
      return {
        size: {
          type: 'select',
          items: ['large', 'normal', 'small']
        },
        circle: {
          type: 'boolean'
        },
        openData: {
          type: 'select',
          items: ['', '{"type":"userAvatarUrl"}']
        }
      }
    },
    classes() {
      return classNames(
        'at-avatar',
        `at-avatar--${this.size}`,
        { 'at-avatar--circle': this.circle },
        this.className
      )
    }
  }
}
</script>
