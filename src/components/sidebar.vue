<style lang="scss">
.sidebar {
  position: fixed;
  height: 100vh;
  top: 48px;
  right: 0;
  max-height: calc(100% - 108px); // 顶部48px + 底部36px + 间距24px
  width: 344px;
  .v-card {
    height: 100%;
    overflow-y: auto;
    overflow-y: overlay;
  }
}
</style>

<template>
  <div v-if="$route.path == '/'" class="sidebar">
    <v-card v-show="Object.keys(properties).length" class="mt-3 mr-3" raised>
      <properties :properties.sync="properties" />
    </v-card>
  </div>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'
import properties from '@/components/properties'

export default {
  components: {
    properties
  },
  data: () => ({
    properties: {}
  }),
  computed: {
    config: {
      get() {
        return {
          ...this.$store.state.app.window,
          ...this.$store.state.app.pages[0].config
        }
      }
    },
    components() {
      return this.$store.state.app.pages[0].components
    },
    isEmpty() {
      return this.components.length === 0
    }
  },
  watch: {
    '$store.state.currentGuid'(guid) {
      if (guid) {
        const index = this.components.findIndex(
          component => component.guid === guid
        )
        if (this.components[index]) {
          this.properties = this.components[index].props
        }
      } else {
        this.properties = {}
      }
    },
    properties: {
      deep: true,
      handler(value) {
        if (Object.keys(value).length) {
          this.$store.commit('updateProps', _cloneDeep(value))
        }
      }
    }
  }
}
</script>
