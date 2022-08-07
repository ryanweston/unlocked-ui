import type { App, Plugin } from 'vue'
import components from '@/components'
import type { UConfig } from '@/types'
import { ConfigKey } from '@/utils/symbols'

// Global installation method, provides theme and access the component
// installation methods exported as named exports with the installComponent method
const createGlobalPlugin = (components: Plugin[] = []) => {
  const install = (app: App, options: UConfig) => {
    const theme = options.theme
    app.provide(ConfigKey, { theme })

    components.forEach((c) => {
      app.use(c)
    })
  }
  return { install }
}

// Export plugin installation method for global install
export const unlocked = createGlobalPlugin([...components])
