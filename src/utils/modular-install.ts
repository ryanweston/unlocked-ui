import type { App } from 'vue'
import type { UConfig } from '@/types'
import { ConfigKey } from '@/utils/symbols'
import { componentThemes, createTheme, tokenMap } from '@/theme/theme'

const createPlugin = () => {
  const install = async(app: App, options: UConfig) => {
    // Generate theme
    const tokens = options?.tokens ? options.tokens : tokenMap
    const classes = options?.components ? options.components : componentThemes
    const theme = options?.theme ? options.theme : createTheme(tokens, classes)

    app.provide(ConfigKey, { theme })
  }
  return { install }
}

export const unlockedModular = createPlugin()
