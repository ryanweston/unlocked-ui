import { App } from 'vue'
import components from '../components'

const createGlobalPlugin = (components: any) => {
  const install = async (app: App, options: any) => {
    if (!options.modular) { 
      components.forEach((c: any) => app.use(c));
    }

    app.provide('themeConfig', options.theme)
  }
  return { install }
}

// Export plugin installation method for global install
export const unlockedGlobal = createGlobalPlugin([...components])