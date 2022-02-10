import components from './components'
import { App } from 'vue'



// Export components for individual import
export * from './components/index'

const createPlugin = (components: any) => {
    const install = (Vue: App) => {
      components.forEach((c: any) => Vue.use(c))
    }
  
    return { install }
}

// Export plugin installation method for global install
export default createPlugin([...components])


