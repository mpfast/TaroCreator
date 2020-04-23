<template>
  <v-content>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title class="headline">
                系统信息
              </v-card-title>
              <v-divider></v-divider>
              <v-col class="item">
                <div class="name">Name:</div>
                <div class="value">{{ name }}</div>
              </v-col>
              <v-col class="item">
                <div class="name">Version:</div>
                <div class="value">{{ version }}</div>
              </v-col>
              <v-col class="item">
                <div class="name">Platform:</div>
                <div class="value">{{ platform }}</div>
              </v-col>
              <v-col class="item">
                <div class="name">Electron:</div>
                <div class="value">{{ electron }}</div>
              </v-col>
              <v-col class="item">
                <div class="name">Node:</div>
                <div class="value">{{ node }}</div>
              </v-col>
              <v-col class="item">
                <div class="name">Vue:</div>
                <div class="value">{{ vue }}</div>
              </v-col>
              <v-col class="item">
                <div class="name">Vuetify:</div>
                <div class="value">{{ vuetify }}</div>
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-title class="headline">
                欢迎赞助
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>
                  😀该程序是有我一人开发，如果有帮到你的地方，欢迎打赏，请我喝杯咖啡☕。
                </p>
                <p>
                  开发仓促，精力有限，我深知有很多问题。有任何问题和建议，都可以点击右下角图标，向我反馈，谢谢🙏。
                </p>
                <v-img width="600" src="@/assets/images/donate.jpg"> </v-img>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      electron: require('electron/package.json').version,
      name: require('../../package.json').productName,
      version: require('../../package.json').version,
      node: process.versions.node,
      platform: require('os').platform(),
      vue: require('vue/package.json').version,
      vuetify: require('vuetify/package.json').version
    }
  }
}
</script>

<style>
.name {
  display: inline;
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
}

.value {
  display: inline;
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
  padding-left: 5px;
}
</style>
