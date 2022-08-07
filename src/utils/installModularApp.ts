import type { App } from 'vue'
import type { UConfig } from '@/types'
import { ConfigKey } from '@/utils/symbols'

// Installation method for modular approaches where
// just the theme is required
const createModularPlugin = () => {
  const install = (app: App, options: UConfig) => {
    app.provide(ConfigKey, { theme: options.theme })
  }
  return { install }
}

// Export plugin installation method for modular install
export const unlockedModular = createModularPlugin()
