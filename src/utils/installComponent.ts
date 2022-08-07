import type { App } from 'vue'
import type { SFCWithInstall } from '@/types'

// Registers the component passed to it to the global vue instance
export const installComponent = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    // structure as array in case any extras need adding to parameters
    for (const component of [main, ...Object.values(extra ?? {})])
      app.component(`U${component.name}` as string, component)
  }

  if (extra) {
    for (const [key, component] of Object.entries(extra))
      (main as any)[key] = component
  }
  return main as SFCWithInstall<T> & E
}
