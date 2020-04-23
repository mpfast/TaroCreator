export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    customStyle: {
      type: String,
      default: ''
    }
  },
  watch: {
    $props: {
      deep: true,
      handler() {
        this.$store.commit('setCurrentAttrs', this.attrs)
      }
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
          } else if (Array.isArray(this.$props[key])) {
            props += ` ${key} = {${JSON.stringify(this.$props[key])}}`
          } else if (typeof this.$props[key] === 'string') {
            props += ` ${key} = '${this.$props[key]}'`
          } else {
            props += ` ${key} = {${this.$props[key]}}`
          }
        }
      }
      return `<${componentTag}${props}>
        ${slots}${this.children ? this.children : ''}
      </${componentTag}>`
    }
  },
  methods: {
    objectToString(style) {
      if (style && typeof style === 'object') {
        let styleStr = ''
        Object.keys(style).forEach((key) => {
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
    pxTransform(size) {
      const designWidth = 750
      return (
        Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 10000) /
          10000 +
        'rem'
      )
    },
    rightClick(event) {
      this.$emit('show', event, this.$attrs.guid, this.attrs, this.code)
    }
  }
}
