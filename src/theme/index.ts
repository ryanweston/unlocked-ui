import { inject } from "vue"

export const withTheme = (component: string) => {
  const theme: any = inject('themeConfig')
  console.log('injectedTheme', theme)

  let { [component]: styles }: any = theme
  console.log('stylesLoader', styles)

  if (!styles) throw Error(`${component} has no theming`)

  return styles
}