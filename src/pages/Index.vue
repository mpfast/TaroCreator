<style lang="scss">
@import '~highlight.js/styles/default.css';
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  code {
    width: 100%;
  }
}
.preview {
  position: relative;
  width: 435px;
  height: 872px;
  border-radius: 60px;
  box-shadow: 0 0 20px -4px currentColor;
  .at-search-bar {
    &--fixed {
      position: absolute;
      margin: 0 auto;
      top: 118px;
      z-index: 88;
      width: calc(100% - 60px);
    }
  }
  .at-nav-bar {
    &--fixed {
      position: absolute;
      margin: 0 auto;
      top: 118px;
      z-index: 88;
      width: calc(100% - 60px);
    }
  }
  .at-curtain {
    position: absolute;
    width: calc(100% - 60px);
    margin: 30px auto;
    border-radius: 30px;
  }
  .at-tab-bar {
    padding: 0 16px 34px;
    &--fixed {
      position: absolute;
      margin: 0 auto;
      bottom: 30px;
      z-index: 6;
      width: calc(100% - 60px);
    }
  }
  .at-float-layout {
    position: absolute;
    width: calc(100% - 60px);
    left: 30px;
  }
  .at-toast {
    .toast-body {
      position: absolute;
      z-index: 99;
    }
  }
  .at-action-sheet {
    position: absolute;
    border-radius: 30px;
    overflow: hidden;
    height: calc(100% - 60px);
    width: calc(100% - 60px);
    left: 30px;
    top: 30px;
  }
  .at-indexes__menu {
    position: absolute;
    right: 30px;
  }
  .at-modal {
    position: absolute;
    border-radius: 55px;
    overflow: hidden;
    &__container {
      width: calc(100% - 120px);
    }
  }
  .at-message {
    position: absolute;
    margin: 0 auto;
    top: 118px;
    z-index: 999;
    width: calc(100% - 60px);
  }
}
.iPhoneXR {
  background: #f8f8f8;
  color: #333;
  margin: 30px auto;
  width: 375px;
  height: 812px;
  overflow-y: scroll;
  overflow-y: overlay;
  .actions {
    position: absolute;
    z-index: 7;
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-left {
      left: -8px;
    }
    &-right {
      right: -8px;
    }
  }
  .status-bar {
    position: absolute;
    width: inherit;
    z-index: 6;
    background: #fff;
    height: 88px;
    padding-top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<template>
  <v-content style="padding-right: 344px;">
    <v-container fill-height>
      <v-layout align-center justify-center v-resize="onResize">
        <div :style="styles" class="preview">
          <div class="iPhoneXR">
            <iPhoneXR />
            <div class="actions actions-left">
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn @click="setPage" v-on="on" color="white" icon large>
                    <v-icon>mdi-cog</v-icon>
                  </v-btn>
                </template>
                <span>设置页面</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn @click="addPage" v-on="on" color="white" icon large>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>添加页面</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn @click="delPage" v-on="on" color="white" icon large>
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </template>
                <span>删除页面</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    @click="clearPage"
                    :disabled="isEmpty"
                    v-on="on"
                    color="white"
                    icon
                    large
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>清空页面</span>
              </v-tooltip>
            </div>
            <div class="actions actions-right">
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    @click="viewCode"
                    :disabled="isEmpty"
                    v-on="on"
                    color="white"
                    icon
                    large
                  >
                    <v-icon>mdi-code-tags</v-icon>
                  </v-btn>
                </template>
                <span>页面代码</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    :disabled="!$store.state.projectId"
                    color="white"
                    icon
                    large
                  >
                    <v-icon>mdi-qrcode</v-icon>
                  </v-btn>
                </template>
                <span>
                  <qrcode-vue
                    :value="
                      `https://mpfast.cn/template/${$store.state.projectId}`
                    "
                    size="200"
                    level="H"
                  ></qrcode-vue>
                </span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    @click="uploadProject"
                    :disabled="isEmpty"
                    v-on="on"
                    :loading="uploading"
                    color="white"
                    icon
                    large
                  >
                    <v-icon>mdi-cloud-upload</v-icon>
                  </v-btn>
                </template>
                <span>上传页面</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    @click="downloadProject"
                    :disabled="isEmpty"
                    v-on="on"
                    color="white"
                    icon
                    large
                  >
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </template>
                <span>下载项目</span>
              </v-tooltip>
            </div>
            <div
              :style="{
                color: config.navigationBarTextStyle,
                background: config.navigationBarBackgroundColor
              }"
              class="status-bar"
            >
              {{ config.navigationBarTitleText }}
            </div>
            <components ref="components" />
          </div>
        </div>
        <v-dialog v-model="codeDialog" width="600px">
          <v-card>
            <v-card-text>
              <pre>
                <code class="language-jsx" v-html="pageCodeComputed">
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
        <v-dialog v-model="setPageDialog" width="320px">
          <v-card>
            <v-toolbar color="primary" dark flat dense>
              <v-toolbar-title>
                {{ action === 'setPage' ? '设置页面' : '添加页面' }}
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="page.title"
                label="标题"
                prepend-inner-icon="mdi-format-title"
                type="text"
                class="mt-5"
                dense
                outlined
                clearable
                hide-details
              />
              <v-text-field
                v-model="page.path"
                label="路径"
                prepend-inner-icon="mdi-slash-forward"
                type="text"
                class="mt-5"
                hint="例如: pages/index/test"
                dense
                outlined
                clearable
              />
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-btn
                @click="updatePage"
                :disabled="
                  !Boolean(page.title) ||
                    !/^pages(\/?[A-Za-z0-9]+)+$/.test(page.path)
                "
                color="primary"
                width="45%"
              >
                {{ action === 'setPage' ? '保存' : '添加' }}
              </v-btn>
              <v-spacer />
              <v-btn @click="setPageDialog = false" color="primary" width="45%"
                >取消</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import _uniq from 'lodash/uniq'
import _cloneDeep from 'lodash/cloneDeep'
import _capitalize from 'lodash/capitalize'
import QrcodeVue from 'qrcode.vue'
import iPhoneXR from '@/components/iPhoneXR'
import components from '@/components/components'
const { clipboard, dialog } = require('electron').remote
const path = require('path')
const AdmZip = require('adm-zip')
const hljs = require('highlight.js')

export default {
  components: {
    iPhoneXR,
    QrcodeVue,
    components
  },
  data: () => ({
    styles: {},
    uploading: false,
    page: {
      title: '',
      path: ''
    },
    action: '',
    codeDialog: false,
    setPageDialog: false,
    pageCode: ''
  }),
  computed: {
    config: {
      get() {
        return {
          ...this.$store.state.app.window,
          ...this.pages[0].config
        }
      }
    },
    pages() {
      return this.$store.state.app.pages
    },
    authUser() {
      return this.$store.state.authUser
    },
    pageCodeComputed() {
      return hljs.highlightAuto(this.pageCode).value
    },
    components() {
      return this.pages[0].components
    },
    isEmpty() {
      return this.components.length === 0
    }
  },
  methods: {
    onResize() {
      this.styles = {
        zoom: `calc((${window.innerHeight} - 112)/872)`
      }
    },
    setPage() {
      this.action = 'setPage'
      this.page.title = this.pages[0].config.navigationBarTitleText
      this.page.path = this.pages[0].path
      this.setPageDialog = true
    },
    addPage() {
      this.action = 'addPage'
      this.page.title = `页面${this.pages.length}`
      this.page.path = `pages/index/page${this.pages.length}`
      this.setPageDialog = true
    },
    delPage() {
      window.Swal.fire({
        title: '确定删除当前页面',
        icon: 'warning',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: this.$root.$vuetify.theme.currentTheme.primary,
        cancelButtonColor: '#333',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(result => {
        if (result.value) {
          this.$store.commit('delPage')
        }
      })
    },
    clearPage() {
      this.$store.commit('updateComponents', [])
    },
    updatePage() {
      if (this.action === 'setPage') {
        this.$store.commit('updatePageConfig', {
          ...this.page
        })
      } else if (this.action === 'addPage') {
        this.$store.commit('addPage', {
          ...this.page
        })
      }
      this.setPageDialog = false
    },
    copyCode() {
      clipboard.writeText(this.pageCode)
      this.codeDialog = false
      window.Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: '已复制',
        showConfirmButton: false,
        timer: 1200
      })
    },
    async viewCode() {
      const componentsCode = await this.getComponentsCode()
      this.getPageCode(componentsCode)
      this.codeDialog = true
    },
    async getComponentsCode() {
      let componentsCode = ''
      await this.$nextTick(() => {
        const comps = this.$refs.components.children
        comps.sort((a, b) => {
          return (
            this.components.findIndex(item => item.guid === a.$attrs.guid) -
            this.components.findIndex(item => item.guid === b.$attrs.guid)
          )
        })
        comps.forEach(comp => {
          componentsCode += comp.code
        })
      })
      return componentsCode
    },
    getPageCode(componentsCode) {
      const taroComponentNames = ['View']
      const taroUIComponentNames = []
      const names = _uniq(this.components.map(component => component.name))
      names.forEach(name => {
        if (name.slice(0, 2) === 'Ot') {
          taroComponentNames.push(name.slice(2))
        } else if (name.slice(0, 2) === 'At') {
          taroUIComponentNames.push(name)
        }
      })
      const className = this.pages[0].path.split('/').pop()
      this.pageCode = `
        import Taro, { Component, Config } from '@tarojs/taro'
        import { ${_uniq(taroComponentNames)} } from '@tarojs/components'
        ${
          taroUIComponentNames.length
            ? `import { ${taroUIComponentNames} } from 'taro-ui'`
            : ''
        }
        export default class ${_capitalize(className)} extends Component {
          config: Config = ${JSON.stringify(this.config)}
          render() {
            return (
              <View className='container'>
                ${componentsCode}
              </View>
            )
          }
        }
      `
      return this.pageCode
    },
    async getPagesCode() {
      const componentsCode = await this.getComponentsCode()
      return this.getPageCode(componentsCode)
    },
    async uploadProject() {
      if (!this.authUser.user) {
        window.Swal.fire({
          title: '您需要登录',
          icon: 'info',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonColor: this.$root.$vuetify.theme.currentTheme.primary,
          cancelButtonColor: '#333',
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(result => {
          if (result.value) {
            this.$router.push({
              path: '/login'
            })
          }
        })
      } else {
        this.uploading = true
        if (this.$store.state.projectId) {
          const body = await fetch(
            'https://api.mpfast.cn/api/collections/save/TaroCreatorProject',
            {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer 26f895347839f790de46a33eef312f'
              },
              body: JSON.stringify({
                data: {
                  _id: this.$store.state.projectId,
                  name: `${this.authUser.name}-上传的项目${Date.now()}`,
                  content: this.$store.state.app
                }
              })
            }
          )
          if (body.status === 200) {
            const result = await body.json()
            this.$store.commit('updateProjectId', result._id)
          } else {
            this.$store.commit('updateProjectId', null)
          }
        } else {
          const body = await fetch(
            'https://api.mpfast.cn/api/collections/save/TaroCreatorProject',
            {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer 26f895347839f790de46a33eef312f'
              },
              body: JSON.stringify({
                data: {
                  name: `${this.authUser.name}-上传的项目${Date.now()}`,
                  content: this.$store.state.app
                }
              })
            }
          )
          const result = await body.json()
          this.$store.commit('updateProjectId', result._id)
        }
        this.uploading = false
      }
    },
    async downloadProject() {
      const config = {
        pages: this.pages.map(page => page.path),
        window: { ...this.$store.state.app.window }
      }
      const appTsx = `
        import Taro, { Component, Config } from '@tarojs/taro'
        import Index from './${this.pages[0].path}'

        import './app.scss'

        class App extends Component {
          config: Config = ${JSON.stringify(config)}

          // 在 App 类中的 render() 函数没有实际作用
          // 请勿修改此函数
          render() {
            return <Index />
          }
        }

        Taro.render(<App />, document.getElementById('app'))
      `
      let templatePath = ''
      if (process.env.NODE_ENV !== 'production') {
        templatePath = path.resolve('./public/data/template.zip')
      } else {
        templatePath = path.join(__dirname, '/data/template.zip')
      }
      const zip = new AdmZip(templatePath)
      // add file directly
      zip.addFile('/src/app.tsx', Buffer.from(appTsx))
      for (let i = 0; i < this.pages.length; i++) {
        const index = this.pages.findIndex(page => page == this.pages[i])
        const pages = _cloneDeep(this.pages)
        pages.unshift(pages.splice(index, 1)[0])
        this.$store.commit('updatePages', pages)
        this.$store.commit('delCurrentGuid')
        const code = await this.getPagesCode()
        zip.addFile(`/src/${this.pages[0].path}.tsx`, Buffer.from(code))
        console.log('writePage: ' + this.pages[0].config.navigationBarTitleText)
      }
      const { filePath, canceled } = await dialog.showSaveDialog({
        title: '保存项目',
        buttonLable: '保存',
        defaultPath: 'TaroProject.zip'
      })
      if (!canceled) {
        zip.writeZip(filePath)
      }
    }
  }
}
</script>
