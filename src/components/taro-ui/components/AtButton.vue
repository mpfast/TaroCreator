<style lang="scss">
@import '../style/components/button.scss';
@import '../style/components/loading.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-button__icon">
      <AtLoading
        v-if="loading"
        :color="type === 'primary' ? '#fff' : ''"
        :size="size === 'small' ? 30 : 0"
      />
    </div>
    <div class="at-button__text">
      <slot>{{ loading ? 'Loading' : slots }}</slot>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'
import AtLoading from '@/components/taro-ui/components/AtLoading'

export default {
  components: {
    AtLoading
  },
  mixins: [component],
  props: {
    slots: {
      type: String,
      default: '按钮'
    },
    circle: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'primary'
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    formType: {
      type: String,
      default: ''
    },
    openType: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: 'en'
    },
    sessionFrom: {
      type: String,
      default: ''
    },
    sendMessageTitle: {
      type: String,
      default: ''
    },
    sendMessagePath: {
      type: String,
      default: ''
    },
    sendMessageImg: {
      type: String,
      default: ''
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ''
    },
    onGetUserInfo: {
      type: Function,
      default: () => {}
    },
    onContact: {
      type: Function,
      default: () => {}
    },
    onGetPhoneNumber: {
      type: Function,
      default: () => {}
    },
    onError: {
      type: Function,
      default: () => {}
    },
    onOpenSetting: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    attrs() {
      return {
        size: {
          type: 'select',
          items: ['normal', 'small']
        },
        type: {
          type: 'select',
          items: ['primary', 'secondary']
        },
        circle: {
          type: 'boolean'
        },
        full: {
          type: 'boolean'
        },
        loading: {
          type: 'boolean'
        },
        disabled: {
          type: 'boolean'
        },
        formType: {
          type: 'select',
          items: ['submit', 'reset']
        },
        openType: {
          type: 'select',
          items: [
            'contact',
            'share',
            'getUserInfo',
            'getPhoneNumber',
            'launchApp',
            'openSetting',
            'feedback',
            'getRealnameAuthInfo'
          ]
        },
        lang: {
          type: 'select',
          items: ['en', 'zh_CN', 'zh_TW']
        },
        sessionFrom: {
          type: 'string'
        },
        sendMessageTitle: {
          type: 'string'
        },
        sendMessagePath: {
          type: 'string'
        },
        sendMessageImg: {
          type: 'string'
        },
        showMessageCard: {
          type: 'boolean'
        },
        appParameter: {
          type: 'string'
        }
      }
    },
    classes() {
      return classNames(
        'at-button',
        `at-button--${this.size}`,
        `at-button--${this.type}`,
        { 'at-button--disabled': this.disabled },
        { 'at-button--circle': this.circle },
        { 'at-button--full': this.full },
        this.className
      )
    }
  }
}
</script>
