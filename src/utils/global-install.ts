import type { App } from 'vue'
import components from '@/components'

const createGlobalPlugin = (components: any) => {
  const install = async (app: App, options: any) => {
    components.forEach((c: any) => app.use(c));
    app.provide('themeConfig', options.theme)
  }
  return { install }
}

// Export plugin installation method for global install
export const unlockedGlobal = createGlobalPlugin([...components])