<template>
  <label
    @contextmenu.prevent="rightClick"
    :class="className"
    :style="styleObject"
  >
    {{ slots }}
  </label>
</template>

<script>
import standard from '@/components/mixins/standard'

export default {
  mixins: [standard],
  props: {
    slots: {
      type: String,
      default: '标签'
    }
  },
  computed: {
    attrs() {
      return {
        slots: {
          type: 'string'
        }
      }
    }
  }
}
</script>
