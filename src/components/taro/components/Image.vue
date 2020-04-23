<style lang="scss">
img[src=''] {
  opacity: 0;
}
.taro-img {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 0;
  width: 320px;
  height: 240px;
  &.taro-img__widthfix {
    height: 100%;
  }
  &__mode {
    &-scaletofill {
      width: 100%;
      height: 100%;
    }
    &-aspectfit {
      max-width: 100%;
      max-height: 100%;
    }
    &-aspectfill {
      min-width: 100%;
      height: 100%;
    }
    &-widthfix {
      width: 100%;
    }
    &-top {
      width: 100%;
    }
    &-bottom {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
    &-left {
      height: 100%;
    }
    &-right {
      position: absolute;
      height: 100%;
      right: 0;
    }
    &-topright {
      position: absolute;
      right: 0;
    }
    &-bottomleft {
      position: absolute;
      bottom: 0;
    }
    &-bottomright {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="styleObject">
    <img :src="src" :class="imageClasses" />
  </div>
</template>

<script>
import classNames from 'classnames'
import standard from '@/components/mixins/standard'

export default {
  mixins: [standard],
  props: {
    src: {
      type: String,
      default: 'https://jdc.jd.com/img/400'
    },
    mode: {
      type: String,
      default: 'scaleToFill'
    }
  },
  computed: {
    attrs() {
      return {
        boxed: {
          type: 'boolean'
        },
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
        }
      }
    },
    classes() {
      return classNames(
        'taro-img',
        {
          'taro-img__widthfix': this.mode === 'widthFix'
        },
        this.className
      )
    },
    imageClasses() {
      return classNames(
        'taro-img__mode-' +
          (this.mode || 'scaleToFill').toLowerCase().replace(/\s/g, '')
      )
    }
  }
}
</script>
