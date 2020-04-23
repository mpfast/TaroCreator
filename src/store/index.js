import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      pages: [
        {
          path: 'pages/index/index',
          components: [],
          config: { navigationBarTitleText: '首页' }
        },
        {
          path: 'pages/index/about',
          components: [],
          config: { navigationBarTitleText: '我的' }
        }
      ]
    },
    projectId: null,
    currentGuid: null,
    currentAttrs: {},
    authUser: {}
  },
  mutations: {
    setApp(state, payload) {
      state.projectId = payload.id
      state.app = payload.app
    },
    updateComponents(state, components) {
      state.app.pages[0].components = components
    },
    updateProps(state, props) {
      const index = state.app.pages[0].components.findIndex(
        component => component.guid === state.currentGuid
      )
      state.app.pages[0].components[index].props = props
    },
    updatePages(state, pages) {
      state.app.pages = pages
    },
    updatePageConfig(state, config) {
      state.app.pages[0].path = config.path
      state.app.pages[0].config.navigationBarTitleText = config.title
    },
    addPage(state, page) {
      state.app.pages.push({
        path: page.path,
        components: [],
        config: {
          navigationBarTitleText: page.title
        }
      })
    },
    delPage(state) {
      if (state.app.pages.length > 1) {
        state.app.pages.shift()
      }
    },
    addComponent(state, component) {
      state.app.pages[0].components.push(component)
    },
    delComponent(state, guid) {
      const index = state.app.pages[0].components.findIndex(
        component => component.guid === guid
      )
      state.app.pages[0].components.splice(index, 1)
      state.currentGuid = null
    },
    setCurrentGuid(state, guid) {
      state.currentGuid = guid
    },
    delCurrentGuid(state) {
      state.currentGuid = null
    },
    updateProjectId(state, id) {
      state.projectId = id
    },
    setCurrentAttrs(state, attrs) {
      state.currentAttrs = attrs
    },
    setAuthUser(state, user) {
      state.authUser = user
    }
  }
})
