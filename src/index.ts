import { App, Component } from 'vue'
import componentsList from'./components'

interface Components {
  [key: string]: Component
}

const plugin = {
  install (Vue: App) {
    const components: Components =  componentsList
    for (const componentKey in components) {
      console.log(componentKey)
      console.log(components)
      if (components.hasOwnProperty(componentKey)) {
        const component = components[componentKey]
        Vue.component(component.name as string, component)
      }
    }
  }
}

export default plugin