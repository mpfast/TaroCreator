<template>
  <v-app>
    <v-app-bar
      app
      dark
      dense
      clipped-left
      color="primary"
      style="-webkit-app-region: drag"
    >
      <v-btn
        icon
        @click.native="drawerLeft = !drawerLeft"
        v-if="$route.path == '/'"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn icon router to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon router to="/about">
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-spacer />
      <v-select
        v-if="$route.path == '/'"
        v-model="currentPage"
        :items="pages"
        style="-webkit-app-region: no-drag"
        prepend-inner-icon="mdi-home"
        hide-details
        rounded
        light
        dense
        solo
        item-text="config.navigationBarTitleText"
        item-value="path"
        return-object
      ></v-select>
      <v-spacer />
      <template v-if="authUser.user">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              {{ authUser.name }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(item, index) in [
                {
                  name: '我的',
                  icon: 'mdi-account'
                },
                {
                  name: '退出',
                  icon: 'mdi-logout'
                }
              ]"
              @click="handleClickMenu(item)"
              :key="index"
            >
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-btn v-else icon router to="/login">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>
            <v-icon>
              mdi-palette
            </v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item
            v-for="(color, index) in [
              '#f44336',
              '#ff5722',
              '#00bcd4',
              '#607d8b',
              '#ffc107',
              '#cddc39',
              '#4caf50'
            ]"
            @click="changePrimaryColor(color)"
            :key="index"
          >
            <v-list-item-title>
              <div class="v-color-picker__color">
                <div :style="{ background: color }"></div>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon @click.native="appMinimize">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn icon @click.native="appMaximize">
        <v-icon>{{
          isMaximized ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'
        }}</v-icon>
      </v-btn>
      <v-btn icon @click.native="appClose">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <drawer :drawer="drawerLeft" />
    <v-slide-y-transition mode="out-in">
      <router-view></router-view>
    </v-slide-y-transition>
    <v-scroll-x-reverse-transition mode="out-in">
      <sidebar />
    </v-scroll-x-reverse-transition>
    <v-footer color="primary" app>
      <v-layout row>
        <v-flex xs2 style="align-self:center;">
          <span v-if="$route.path == '/'" class="white--text">{{
            currentPage.path
          }}</span>
        </v-flex>
        <v-flex xs8 text-center>
          <span class="white--text"
            >{{ require('./../package.json').productName }} v{{
              require('./../package.json').version
            }}</span
          >
        </v-flex>
        <v-flex xs2 style="align-self:center;" pr-5 text-right>
          <v-btn icon small @click.stop="feedbackDialog = true">
            <v-icon color="white">
              mdi-comment-account
            </v-icon>
          </v-btn>
          <feedback
            :dialog="feedbackDialog"
            @updateDialog="feedbackDialog = $event"
          />
        </v-flex>
        <div style="width:24px;height:24px;position:absolute;right:0;bottom:0;">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              fill="#ffffff"
              d="M859.136 164.864c-10.24-10.24-26.112-10.24-36.352 0L164.864 822.784c-10.24 10.24-10.24 26.112 0 36.352 5.12 5.12 11.776 7.68 17.92 7.68s13.312-2.56 17.92-7.68L859.136 201.216c9.728-9.728 9.728-26.112 0-36.352zM822.784 411.136l-411.648 411.648c-10.24 10.24-10.24 26.112 0 36.352 5.12 5.12 11.776 7.68 17.92 7.68s13.312-2.56 17.92-7.68l411.648-411.648c10.24-10.24 10.24-26.112 0-36.352-9.728-10.24-26.112-10.24-35.84 0zM822.784 656.896l-165.888 165.888c-10.24 10.24-10.24 26.112 0 36.352 5.12 5.12 11.776 7.68 17.92 7.68s13.312-2.56 17.92-7.68l165.888-165.888c10.24-10.24 10.24-26.112 0-36.352-9.728-10.24-26.112-10.24-35.84 0z"
            ></path>
          </svg>
        </div>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
.v-btn {
  -webkit-app-region: no-drag;
}
.v-text-field > .v-input__control > .v-input {
  &__slot {
    border: 1px solid #ccc;
  }
}
</style>

<script>
const { remote } = require('electron')
import _cloneDeep from 'lodash/cloneDeep'
import drawer from '@/components/drawer'
import sidebar from '@/components/sidebar'
import feedback from '@/components/feedback'

export default {
  name: 'App',
  components: {
    drawer,
    sidebar,
    feedback
  },
  data: () => ({
    feedbackDialog: false,
    drawerLeft: true,
    isMaximized: false,
    projectFolder: null
  }),
  computed: {
    pages() {
      return this.$store.state.app.pages
    },
    authUser() {
      return this.$store.state.authUser
    },
    currentPage: {
      get() {
        return {
          path: this.pages[0].path,
          title: this.pages[0].config.navigationBarTitleText
        }
      },
      set(value) {
        const index = this.pages.findIndex(page => page.path === value.path)
        const pages = _cloneDeep(this.pages)
        pages.unshift(pages.splice(index, 1)[0])
        this.$store.commit('updatePages', pages)
        this.$store.commit('delCurrentGuid')
      }
    }
  },
  methods: {
    changePrimaryColor(color) {
      this.$root.$vuetify.theme.currentTheme.primary = color
    },
    handleClickMenu(item) {
      if (item.icon === 'mdi-logout') {
        this.$store.commit('setAuthUser', {})
      } else if (item.icon === 'mdi-account') {
        this.$router.push({
          path: '/profile'
        })
      }
    },
    appMinimize() {
      remote.BrowserWindow.getFocusedWindow().minimize()
    },
    appMaximize() {
      if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
        remote.BrowserWindow.getFocusedWindow().restore()
        this.isMaximized = false
      } else {
        remote.BrowserWindow.getFocusedWindow().maximize()
        this.isMaximized = true
      }
    },
    appClose() {
      remote.BrowserWindow.getFocusedWindow().close()
    }
  }
}
</script>
