import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#f44336',
        secondary: '#ff5722',
        accent: '#00bcd4',
        error: '#607d8b',
        warning: '#ffc107',
        info: '#cddc39',
        success: '#4caf50'
      },
      light: {
        primary: '#f44336',
        secondary: '#ff5722',
        accent: '#00bcd4',
        error: '#607d8b',
        warning: '#ffc107',
        info: '#cddc39',
        success: '#4caf50'
      }
    }
  }
})
