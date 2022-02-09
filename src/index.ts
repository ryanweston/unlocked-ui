import components from 'components'
import { App } from 'vue'
// import componentsList from'./components'

// interface Components {
//   [key: string]: Component
// }

const installer = ([...components]) => {
    (Vue: App) => {
      components.forEach((c) => Vue.use(c))
    }
    // const components: Components =  componentsList
    // for (const componentKey in components) {
    //   console.log(componentKey)
    //   console.log(components)
    //   if (components.hasOwnProperty(componentKey)) {
    //     const component = components[componentKey]
    //     Vue.component(component.name as string, component)
    //   }
    // }
  }
export * from './components/'
export default installer