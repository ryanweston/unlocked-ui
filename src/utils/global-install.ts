import type { App, Plugin } from 'vue'
import components from '@/components'

const createGlobalPlugin = (components: Plugin[] = []) => {
  const install = (app: App, options: any) => {
    components.forEach((c) => {
      app.use(c)
    })
    app.provide('themeConfig', options.theme)
  }
  return { install }
}

// Export plugin installation method for global install
export const unlockedGlobal = createGlobalPlugin([...components])
