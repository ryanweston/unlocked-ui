import components from'./components/index'

const plugin = {
  install (Vue) {
    for (const componentKey in components) {
      if (components.hasOwnProperty(componentKey)) {
        const component = components[componentKey]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin