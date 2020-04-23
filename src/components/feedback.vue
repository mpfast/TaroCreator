<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">问题反馈</span>
          <v-spacer />
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="name"
                  label="称呼*"
                  required
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="email"
                  label="邮箱*"
                  :rules="[(v) => emailRegExp.test(v) || '邮箱格式不正确']"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="age"
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="您的年龄"
                  hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="interesting"
                  :items="[
                    'Taro/Taro UI',
                    '微信小程序',
                    'uni-app',
                    'mpvue',
                    'wepy',
                    '前端开发'
                  ]"
                  label="您的兴趣"
                  multiple
                  hide-details
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="content"
                  counter
                  clearable
                  auto-grow
                  required
                  label="请输入您的问题*"
                  :rules="[(v) => (v && v.length <= 1024) || '最多1024个字符']"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*表示必填</small>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            block
            :loading="loading"
            :disabled="disabled"
            color="primary"
            @click="sendFeedback"
          >
            <v-icon>mdi-send</v-icon>
            发送
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const nodemailer = require('nodemailer')

export default {
  props: {
    dialog: {
      type: Boolean
    }
  },
  data: () => ({
    loading: false,
    name: '',
    email: '',
    emailRegExp: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    age: '',
    interesting: '',
    content: ''
  }),
  computed: {
    disabled() {
      return !this.name || !this.emailRegExp.test(this.email) || !this.content
    }
  },
  methods: {
    sendFeedback() {
      this.loading = true
      const transporter = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        secureConnection: true,
        // 我们需要登录到网页邮箱中，然后配置SMTP和POP3服务器的密码
        auth: {
          user: 'mpfast@163.com',
          pass: 'GXBZHXYLTOOWQCPR'
        }
      })
      const mailOptions = {
        // 发送邮件的地址
        from: 'mpfast@163.com',
        // 接收邮件的地址
        to: 'lerte@qq.com',
        // 邮件主题
        subject: `TaroCreator用户反馈`,
        // 以HTML的格式显示，这样可以显示图片、链接、字体颜色等信息
        html: `<table>
                <tr>
                  <td>称呼:</td>
                  <td>邮箱:</td>
                  <td>年龄:</td>
                  <td>兴趣:</td>
                  <td>内容:</td>
                </tr>
                <tr>
                  <td>${this.name}</td>
                  <td>${this.email}</td>
                  <td>${this.age}</td>
                  <td>${this.interesting}</td>                  
                  <td>${this.content}</td>
                </tr>
              </table>
              `
      }
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return console.error(error)
        }
        this.loading = false
        this.closeDialog()
        this.name = ''
        this.email = ''
        this.age = ''
        this.interesting = ''
        this.content = ''
        window.Swal.fire({
          title: '发送成功',
          icon: 'success',
          showCloseButton: true,
          confirmButtonColor: this.$root.$vuetify.theme.currentTheme.primary,
          confirmButtonText: '关闭'
        })
      })
    },
    closeDialog() {
      this.$emit('updateDialog', false)
    }
  }
}
</script>
