<template>
  <v-navigation-drawer
    v-if="drawer && $route.path == '/'"
    app
    fixed
    clipped
    permanent
    width="auto"
  >
    <v-treeview
      v-model="tree"
      :open="open"
      :items="items"
      :search="search"
      dense
      hoverable
      transition
      activatable
      item-key="name"
      open-on-click
    >
      <template v-slot:label="{ item }">
        <div v-if="item.icon" class="group">
          <v-icon>
            {{ item.icon }}
          </v-icon>
          {{ item.name }}
          <span class="overline">{{ item.subname }}</span>
        </div>
        <v-tooltip v-else max-width="375" z-index="999" right>
          <template v-slot:activator="{ on }">
            <div @click="addTo(item)" :id="item.name" v-on="on">
              {{ item.name.slice(2) }}
              <span class="overline">{{ item.subname }}</span>
            </div>
          </template>
          <template>
            <!-- eslint-disable-next-line vue/require-component-is -->
            <component :is="item.name" :ref="item.name" />
          </template>
        </v-tooltip>
      </template>
    </v-treeview>
    <template v-slot:append>
      <v-text-field
        v-model="search"
        dense
        class="ma-2"
        rounded
        clearable
        solo
        hide-details
        append-icon="mdi-magnify"
      />
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    search: null,
    open: ['快速组件'],
    tree: [],
    items: [
      {
        name: '快速组件',
        icon: 'mdi-rhombus-split',
        children: [
          {
            name: 'MfList',
            subname: '自定义列表'
          }
        ]
      },
      {
        name: '基础组件',
        icon: 'mdi-text-short',
        children: [
          {
            name: 'OtImage',
            subname: '图片'
          },
          {
            name: 'OtLabel',
            subname: '标签'
          },
          {
            name: 'OtText',
            subname: '文本'
          },
          {
            name: 'AtIcon',
            subname: '图标'
          },
          {
            name: 'AtButton',
            subname: '按钮'
          },
          {
            name: 'AtFab',
            subname: '浮动按钮'
          }
        ]
      },
      {
        name: '容器组件',
        icon: 'mdi-grid',
        children: [
          {
            name: 'AtGrid',
            subname: '栅格布局'
          },
          {
            name: 'AtList',
            subname: '列表'
          },
          {
            name: 'AtCard',
            subname: '卡片'
          },
          {
            name: 'AtFloatLayout',
            subname: '浮动弹层'
          },
          {
            name: 'AtAccordion',
            subname: '手风琴'
          }
        ]
      },
      {
        name: '导航组件',
        icon: 'mdi-navigation',
        children: [
          {
            name: 'AtNavBar',
            subname: '导航栏'
          },
          {
            name: 'AtTabBar',
            subname: '标签栏'
          },
          {
            name: 'AtTabs',
            subname: '标签页'
          },
          {
            name: 'AtSegmentedControl',
            subname: '分段器'
          },
          {
            name: 'AtPagination',
            subname: '分页器'
          },
          {
            name: 'AtIndexes',
            subname: '索引选择器'
          }
        ]
      },
      {
        name: '视图组件',
        icon: 'mdi-buffer',
        children: [
          {
            name: 'AtAvatar',
            subname: '头像'
          },
          {
            name: 'AtBadge',
            subname: '徽标'
          },
          {
            name: 'AtCountdown',
            subname: '倒计时'
          },
          {
            name: 'AtCurtain',
            subname: '窗帘'
          },
          {
            name: 'AtNoticebar',
            subname: '通告栏'
          },
          {
            name: 'AtTag',
            subname: '标签'
          },
          {
            name: 'AtTimeline',
            subname: '时间轴'
          },
          {
            name: 'OtSwiper',
            subname: '滑动视图容器'
          },
          {
            name: 'AtDivider',
            subname: '分隔符'
          },
          {
            name: 'AtSteps',
            subname: '步骤条'
          }
        ]
      },
      {
        name: '操作反馈',
        icon: 'mdi-cursor-pointer',
        children: [
          {
            name: 'AtActionSheet',
            subname: '动作面板'
          },
          {
            name: 'AtActivityIndicator',
            subname: '活动指示器'
          },
          {
            name: 'AtModal',
            subname: '模态框'
          },
          {
            name: 'AtProgress',
            subname: '进度条'
          },
          {
            name: 'AtToast',
            subname: '轻提示'
          },
          {
            name: 'AtSwipeAction',
            subname: '滑动操作'
          },
          {
            name: 'AtMessage',
            subname: '消息通知'
          }
        ]
      },
      {
        name: '表单组件',
        icon: 'mdi-file-document-outline',
        children: [
          {
            name: 'AtInput',
            subname: '输入框'
          },
          {
            name: 'AtInputNumber',
            subname: '数字输入框'
          },
          {
            name: 'AtRadio',
            subname: '单选按钮'
          },
          {
            name: 'AtCheckbox',
            subname: '多选框'
          },
          {
            name: 'AtRate',
            subname: '评分'
          },
          {
            name: 'AtSwitch',
            subname: '开关'
          },
          {
            name: 'AtTextarea',
            subname: '多行文本框'
          },
          {
            name: 'AtSearchBar',
            subname: '搜索框'
          },
          {
            name: 'AtSlider',
            subname: '滑动条'
          },
          {
            name: 'AtImagePicker',
            subname: '图标选择器'
          },
          {
            name: 'AtRange',
            subname: '范围选择器'
          }
        ]
      }
      // {
      //   name: '高阶组件',
      //   icon: 'mdi-widgets',
      //   children: [
      //     {
      //       name: 'AtCalendar',
      //       subname: '日历'
      //     }
      //   ]
      // }
    ]
  }),
  computed: {
    components() {
      return this.$store.state.app.pages[0].components
    }
  },
  methods: {
    guid() {
      // 获取随机ID，组件拖到预览视图后就会被设置个ID
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
      }
      return s4() + s4() + '-' + s4()
    },
    addTo({ name }) {
      const guid = this.guid()
      const props = { ...this.$refs[name].$props }
      this.addComponent({ guid, name, props })
    },
    addComponent(component) {
      if (
        component.name === 'AtTabBar' &&
        this.components.filter(item => item.name === 'AtTabBar').length
      ) {
        window.Swal.fire({
          title: '只能添加一个TabBar 标签栏',
          icon: 'info',
          showCloseButton: true,
          confirmButtonColor: this.$root.$vuetify.theme.currentTheme.primary,
          confirmButtonText: '确定'
        })
      } else if (
        component.name === 'AtNavBar' &&
        this.components.filter(item => item.name === 'AtNavBar').length
      ) {
        window.Swal.fire({
          title: '只能添加一个NavBar 标签栏',
          icon: 'info',
          showCloseButton: true,
          confirmButtonColor: this.$root.$vuetify.theme.currentTheme.primary,
          confirmButtonText: '确定'
        })
      } else {
        this.$store.commit('addComponent', component)
      }
    }
  }
}
</script>
