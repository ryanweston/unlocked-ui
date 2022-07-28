import type { App, Plugin } from 'vue'
import components from '@/components'
import type { UConfig } from '@/types'
import { ConfigKey } from '@/utils/symbols'
// import { componentThemes, createTheme, tokenMap } from '@/theme/theme'

const createGlobalPlugin = (components: Plugin[] = []) => {
  const install = (app: App, options: UConfig) => {
    // Generate theme
    // const tokens = options?.tokens ? options.tokens : tokenMap
    // const classes = options?.components ? options.components : componentThemes
    // const theme = options?.theme ? options.theme : createTheme(tokens, classes)

    // console.log(tokens)
    // console.log(theme)
    const theme = options.theme
    app.provide(ConfigKey, { theme })

    components.forEach((c) => {
      app.use(c)
    })
  }
  return { install }
}

// Export plugin installation method for global install
export const Unlocked = createGlobalPlugin([...components])
