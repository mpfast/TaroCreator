<style>
body,
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
}
</style>

<template>
  <div
    @contextmenu.prevent="rightClick"
    :class="className"
    :style="styleObject"
  >
    <slot></slot>
  </div>
</template>

<script>
import standard from '@/components/mixins/standard'

export default {
  mixins: [standard]
}
</script>
