export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    styleObject: {
      type: String,
      default: ''
    }
  },
  computed: {
    code() {
      let props = ''
      let slots = ''
      const componentTag = this.$options._componentTag
      for (const key in this.$props) {
        if (this.$props[key]) {
          if (key === 'slots') {
            slots = this.$props[key]
          } else if (key === 'styleObject') {
            props += ` style = '${this.$props[key]}'`
          } else if (Array.isArray(this.$props[key])) {
            props += ` ${key} = {${JSON.stringify(this.$props[key])}}`
          } else if (typeof this.$props[key] === 'string') {
            props += ` ${key} = '${this.$props[key]}'`
          } else {
            props += ` ${key} = {${this.$props[key]}}`
          }
        }
      }
      return `
        <${componentTag.slice(2)}${props}>${slots}</${componentTag.slice(2)}>
      `
    }
  },
  methods: {
    objectToString(style) {
      if (style && typeof style === 'object') {
        let styleStr = ''
        Object.keys(style).forEach(key => {
          const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          styleStr += `${lowerCaseKey}:${style[key]};`
        })
        return styleStr
      } else if (style && typeof style === 'string') {
        return style
      }
      return ''
    },
    mergeStyle(style1, style2) {
      if (
        style1 &&
        typeof style1 === 'object' &&
        style2 &&
        typeof style2 === 'object'
      ) {
        return Object.assign({}, style1, style2)
      }
      return this.objectToString(style1) + this.objectToString(style2)
    },
    rightClick(event) {
      this.$emit('show', event, this.$attrs.guid, this.attrs, this.code)
    }
  }
}
