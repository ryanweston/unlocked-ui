import { injectStrict } from '@/utils/index'
import { ConfigKey } from '@/utils/symbols'

// Injects theme and returns given components classes
export const withTheme = (component: string) => {
  const { theme } = injectStrict(ConfigKey)

  // @ts-expect-error needs a type
  const { [component]: styles } = theme

  if (!styles) throw new Error(`${component} has no theming`)

  return styles
}
