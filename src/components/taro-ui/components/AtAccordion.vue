<style lang="scss">
@import '../style/components/accordion.scss';
@import '../style/components/icon.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-accordion__header">
      <span
        class="taro-text at-icon at-icon-tags at-accordion__icon"
        style="color: rgb(119, 161, 253);"
      ></span>
      <div class="at-accordion__title">{{ title }}</div>
      <div class="at-accordion__arrow">
        <span class="taro-text at-icon at-icon-chevron-down"></span>
      </div>
    </div>
    <div
      :class="`at-accordion__content at-accordion__content--${
        open ? 'active' : 'inactive'
      }`"
    >
      <div class="at-accordion__body">
        <div class="at-list at-list--no-border">
          <div class="at-list__item at-list__item--thumb">
            <div class="at-list__item-container">
              <div class="at-list__item-thumb item-thumb">
                <div class="taro-img item-thumb__info">
                  <img
                    class="taro-img__mode-scaletofill"
                    src="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                  />
                </div>
              </div>
              <div class="at-list__item-content item-content">
                <div class="item-content__info">
                  <div class="item-content__info-title">标题文字</div>
                </div>
              </div>
              <div class="at-list__item-extra item-extra"></div>
            </div>
          </div>
          <div
            class="at-list__item at-list__item--thumb at-list__item--multiple"
          >
            <div class="at-list__item-container">
              <div class="at-list__item-thumb item-thumb">
                <div class="taro-img item-thumb__info">
                  <img
                    class="taro-img__mode-scaletofill"
                    src="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                  />
                </div>
              </div>
              <div class="at-list__item-content item-content">
                <div class="item-content__info">
                  <div class="item-content__info-title">标题文字</div>
                  <div class="item-content__info-note">描述信息</div>
                </div>
              </div>
              <div class="at-list__item-extra item-extra"></div>
            </div>
          </div>
          <div
            class="at-list__item at-list__item--thumb at-list__item--multiple"
          >
            <div class="at-list__item-container">
              <div class="at-list__item-thumb item-thumb">
                <div class="taro-img item-thumb__info">
                  <img
                    class="taro-img__mode-scaletofill"
                    src="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                  />
                </div>
              </div>
              <div class="at-list__item-content item-content">
                <div class="item-content__info">
                  <div class="item-content__info-title">标题文字</div>
                  <div class="item-content__info-note">描述信息</div>
                </div>
              </div>
              <div class="at-list__item-extra item-extra"></div>
            </div>
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
    title: {
      type: String,
      default: '标题'
    },
    open: {
      type: Boolean,
      default: false
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    isAnimation: {
      type: Boolean,
      default: true
    },
    note: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return classNames('at-accordion', this.className)
    }
  }
}
</script>
