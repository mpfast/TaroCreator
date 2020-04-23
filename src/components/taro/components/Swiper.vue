<style lang="scss">
.swiper {
  &-container {
    width: 100%;
    height: 180px;
  }
  &-slide {
    .slide-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="styleObject">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
        <AtImage :src="slide.img" class="slide-image" />
      </div>
    </div>
    <div
      v-if="indicatorDots"
      class="swiper-pagination swiper-pagination-bullets"
    >
      <span
        :style="{ background: indicatorColor }"
        class="swiper-pagination-bullet"
      ></span>
      <span class="swiper-pagination-bullet"></span>
      <span class="swiper-pagination-bullet"></span>
    </div>
    <span
      class="swiper-notification"
      aria-live="assertive"
      aria-atomic="true"
    ></span>
  </div>
</template>

<script>
import Swiper from 'swiper'
import classNames from 'classnames'
import AtImage from '@/components/taro/components/Image'
import standard from '@/components/mixins/standard'

export default {
  components: {
    AtImage
  },
  mixins: [standard],
  props: {
    slides: {
      type: Array,
      default: () => [
        {
          img: 'https://jdc.jd.com/img/700x360'
        },
        {
          img: 'https://jdc.jd.com/img/700x360'
        },
        {
          img: 'https://jdc.jd.com/img/700x360'
        }
      ]
    },
    indicatorDots: {
      type: Boolean,
      default: true
    },
    indicatorColor: {
      type: String,
      default: 'rgba(0, 0, 0, .3)'
    },
    indicatorActiveColor: {
      type: String,
      default: '#000'
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    },
    duration: {
      type: Number,
      default: 500
    },
    current: {
      type: Number,
      default: 0
    },
    circular: {
      type: Boolean,
      default: false
    },
    skipHiddenItemLayout: {
      type: Boolean,
      default: false
    },
    displayMultipleItems: {
      type: Number,
      default: 1
    },
    vertical: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    onAnimationfinish: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    mySwiper: null,
    currentIndex: null
  }),
  computed: {
    attrs() {
      return {
        indicatorDots: {
          type: 'boolean'
        },
        autoplay: {
          type: 'boolean'
        },
        circular: {
          type: 'boolean'
        },
        skipHiddenItemLayout: {
          type: 'boolean'
        },
        vertical: {
          type: 'boolean'
        }
      }
    },
    code() {
      let SwiperItems = ''
      this.slides.forEach((slide) => {
        SwiperItems += `
          <SwiperItem>
            <Image src="${slide.img}" class="slide-image" />
          </SwiperItem>
          `
      })
      return `
        <Swiper
          className='${this.className}'
          indicatorColor='${this.indicatorColor}'
          indicatorActiveColor='${this.indicatorActiveColor}'
          vertical={${this.vertical}}
          circular={${this.circular}}
          indicatorDots={${this.indicatorDots}}
          autoplay={${this.autoplay}}>
          ${SwiperItems}
        </Swiper>  
      `
    },
    classes() {
      return classNames(
        'swiper-container',
        this.vertical
          ? 'swiper-container-vertical'
          : 'swiper-container-horizontal',
        this.className
      )
    }
  },
  mounted() {
    const _this = this
    const opt = {
      // 指示器
      pagination: { el: '.swiper-container .swiper-pagination' },
      direction: this.vertical ? 'vertical' : 'horizontal',
      loop: this.circular,
      slidesPerView: parseInt(this.displayMultipleItems, 10),
      initialSlide: parseInt(this.current, 10),
      speed: parseInt(this.duration, 10),
      observer: true,
      on: {
        slideChange() {
          const e = _this.createEvent('touchend')
          try {
            Object.defineProperty(e, 'detail', {
              enumerable: true,
              value: {
                current: this.realIndex
              }
            })
          } catch (err) {
            console.error(err)
          }
          _this.currentIndex = this.realIndex
          this.onChange && this.onChange(e)
        },
        transitionEnd() {
          const e = _this.createEvent('touchend')
          try {
            Object.defineProperty(e, 'detail', {
              enumerable: true,
              value: {
                current: this.realIndex
              }
            })
          } catch (err) {
            console.error(err)
          }
          this.onAnimationfinish && this.onAnimationfinish(e)
        }
      }
    }

    // 自动播放
    if (this.autoplay) {
      opt.autoplay = {
        delay: parseInt(this.interval, 10),
        stopOnLastSlide: true,
        disableOnInteraction: false
      }
    }
    this.mySwiper = new Swiper(this.$el, opt)
  },
  methods: {
    createEvent(type) {
      let event
      try {
        event = new TouchEvent(type)
      } catch (err) {
        event = document.createEvent('Event')
        event.initEvent(type, true, true)
      }
      return event
    }
  }
}
</script>
