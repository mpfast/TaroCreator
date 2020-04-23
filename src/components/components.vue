<style lang="scss">
@import '~highlight.js/styles/default.css';
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  code {
    width: 100%;
  }
}
.page {
  height: calc(100% - 88px - 70px);
  margin-top: 88px;
  min-height: auto;
  .empty-component {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #ccc;
    width: 100%;
    height: 100%;
  }
  .draggable {
    &:hover {
      cursor: move;
      border: 1px dotted rgb(221, 221, 221);
    }
  }
}
</style>

<template>
  <div class="page">
    <div v-if="isEmpty" class="empty-component">
      <v-chip color="primary" large>点击左侧的组件添加到页面</v-chip>
    </div>
    <draggable
      ref="draggable"
      @start="dragging = true"
      @end="dragging = false"
      v-model="components"
      v-bind="dragOptions"
      :style="style"
      class="components"
    >
      <template v-for="component in components">
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component
          :is="component.name"
          :key="component.guid"
          :guid="component.guid"
          @show="show"
          v-bind="component.props"
          class="draggable"
        />
      </template>
    </draggable>
    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      z-index="9999"
      absolute
      offset-y
    >
      <v-list dense>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>
            <v-btn
              @click="handleRightClick(item.title)"
              text
              color="primary"
              block
            >
              <v-icon>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="codeDialog" width="600px">
      <v-card>
        <v-card-text>
          <pre>
            <code class="language-jsx" v-html="componentCodeComputed">
            </code>
          </pre>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn @click="copyCode" color="primary"
            ><v-icon small>mdi-content-copy</v-icon>复制</v-btn
          >
          <v-btn @click="codeDialog = false" color="gray"
            ><v-icon small>mdi-close</v-icon>关闭</v-btn
          >
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const hljs = require('highlight.js')
const { clipboard } = require('electron').remote

export default {
  components: {
    draggable
  },
  data: () => ({
    dragging: false,
    showMenu: false,
    attrs: {},
    guid: null,
    codeDialog: false,
    componentCode: '',
    x: 0,
    y: 0,
    items: [
      { icon: 'mdi-pencil', title: '编辑' },
      { icon: 'mdi-code-tags', title: '代码' },
      { icon: 'mdi-delete', title: '删除' }
    ]
  }),
  computed: {
    style() {
      const fixedTop =
        (this.isSearchBarFixed ? 40 : 0) + (this.isNavBarFixed ? 45 : 0)
      return { paddingTop: `${fixedTop}px` }
    },
    componentCodeComputed() {
      return hljs.highlightAuto(this.componentCode).value
    },
    isSearchBarFixed() {
      const searchbar = this.components.find(
        (component) => component.name === 'AtSearchBar'
      )
      if (searchbar) {
        return searchbar.props.fixed
      } else {
        return false
      }
    },
    isNavBarFixed() {
      const navbar = this.components.find(
        (component) => component.name === 'AtNavBar'
      )
      if (navbar) {
        return navbar.props.fixed
      } else {
        return false
      }
    },
    children() {
      return this.$refs.draggable.$children
    },
    components: {
      get() {
        return this.$store.state.app.pages[0].components
      },
      set(value) {
        this.$store.commit('updateComponents', value)
      }
    },
    isEmpty() {
      return this.components.length === 0
    },
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    show(event, guid, attrs, code) {
      this.guid = guid
      this.attrs = attrs
      this.componentCode = code
      this.showMenu = false
      this.x = event.clientX
      this.y = event.clientY
      this.$nextTick(() => {
        this.showMenu = true
      })
    },
    handleRightClick(title) {
      switch (title) {
        case '编辑':
          this.$store.commit('setCurrentAttrs', this.attrs)
          this.$store.commit('setCurrentGuid', this.guid)
          break
        case '代码':
          this.codeDialog = true
          break
        case '删除':
          this.$store.commit('delComponent', this.guid)
          break
      }
    },
    copyCode() {
      clipboard.writeText(this.componentCode)
      this.codeDialog = false
      window.Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: '已复制',
        showConfirmButton: false,
        timer: 1200
      })
    }
  }
}
</script>
