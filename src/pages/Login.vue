<template>
  <v-content>
    <v-container fill-height>
      <v-layout align-center justify-center wrap class="login-wrapper">
        <v-flex xs12 hidden-sm-and-down md6 xl4 elevation-5>
          <v-img
            class="grey lighten-2"
            height="450"
            @click="getTime"
            :src="`https://picsum.photos/800/600?t=${timestamp}`"
          >
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-layout>
          </v-img>
        </v-flex>
        <v-flex xs12 sm12 md6 xl4 elevation-5>
          <v-layout align-content-center justify-center wrap pa-5>
            <v-flex xs12 pb-5>
              <v-img
                src="./../../appicon/icon.png"
                width="128px"
                style="margin: 0 auto;"
              ></v-img>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="账号"
                v-model="username"
                prepend-inner-icon="mdi-account"
                solo
                flat
                clearable
                @keyup.enter.native="login"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="密码"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="
                  showPassword
                    ? 'mdi-card-bulleted-settings'
                    : 'mdi-card-bulleted-off'
                "
                prepend-inner-icon="mdi-lock"
                solo
                flat
                @keyup.enter.native="login"
                @click:append="showPassword = !showPassword"
              />
            </v-flex>
            <v-flex xs12>
              <v-btn
                :loading="loading"
                :disabled="disabled"
                large
                block
                color="primary"
                @click.native="login"
                >登录</v-btn
              >
              <v-alert
                class="mt-3"
                :value="Boolean(message)"
                type="info"
                transition="scale-transition"
                v-text="message"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style lang="scss">
#login-page {
  background: #eee;
}
.login-wrapper {
  > .flex {
    height: 450px;
    background: #fff;
  }
}
</style>

<script>
export default {
  data: () => ({
    timestamp: 0,
    message: null,
    loading: false,
    username: null,
    password: null,
    showPassword: false
  }),
  computed: {
    disabled() {
      return !this.username || !this.password
    }
  },
  watch: {
    username() {
      this.message = null
    },
    password() {
      this.message = null
    }
  },
  methods: {
    getTime() {
      this.timestamp = Date.now()
    },
    async login() {
      this.loading = true
      try {
        const body = await fetch('https://api.mpfast.cn/api/cockpit/authUser', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 26f895347839f790de46a33eef312f'
          },
          body: JSON.stringify({
            user: this.username,
            password: this.password
          })
        })
        const result = await body.json()
        if (result.error) {
          this.loading = false
          this.message = result.error
        } else {
          this.$store.commit('setAuthUser', result)
          this.loading = false
          this.$router.push({
            path: '/'
          })
        }
      } catch (error) {
        this.loading = false
        this.message = error
      }
    }
  }
}
</script>
