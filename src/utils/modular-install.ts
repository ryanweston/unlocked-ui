import { App } from 'vue'

const createPlugin = () => {
  const install = async (app: App, options: any) => {
    app.provide('themeConfig', options.theme)
  }
  return { install }
}

export const unlockedModular = createPlugin()