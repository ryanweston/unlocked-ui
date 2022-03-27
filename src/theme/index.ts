import { inject } from 'vue'

export const withTheme = (component: string) => {
  const theme: any = inject('themeConfig')

  const { [component]: styles }: any = theme

  if (!styles) throw new Error(`${component} has no theming`)

  return styles
}
