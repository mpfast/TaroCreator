import Vue from 'vue'

// Mpfast components
const MpfastComponent = require.context(
  '@/components/mpfast/components/',
  false,
  /\.vue$/
)
MpfastComponent.keys().forEach(fileName => {
  const componentConfig = MpfastComponent(fileName)
  const componentName = fileName.slice(2, -4)
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// Taro Components
const TaroComponent = require.context(
  '@/components/taro/components/',
  false,
  /\.vue$/
)
TaroComponent.keys().forEach(fileName => {
  const componentConfig = TaroComponent(fileName)
  const componentName = 'Ot' + fileName.slice(2, -4)
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// Taro-UI Components
const TaroUIComponent = require.context(
  '@/components/taro-ui/components/',
  false,
  /\.vue$/
)
TaroUIComponent.keys().forEach(fileName => {
  const componentConfig = TaroUIComponent(fileName)
  const componentName = fileName.slice(2, -4)
  Vue.component(componentName, componentConfig.default || componentConfig)
})
