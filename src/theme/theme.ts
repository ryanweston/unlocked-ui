import type { UTheme } from '@/types'

import menu from '@/components/menu/classes'
import menuItem from '@/components/menu-item/classes'
import button from '@/components/button/classes'
import link from '@/components/link/classes'
import dropdown from '@/components/dropdown/classes'
import footer from '@/components/footer/classes'
import tooltip from '@/components/tooltip/classes'
import icon from '@/components/icon/classes'
import dropdownItem from '@/components/dropdown-item/classes'
import headline from '@/components/typography/headline/classes'
import title from '@/components/typography/title/classes'
import subtitle from '@/components/typography/subtitle/classes'
import body from '@/components/typography/body/classes'

export const componentThemes = [menu, menuItem, button, link, dropdown, footer, tooltip, icon, dropdownItem, headline, title, subtitle, body]

export const createTheme = (tokens: any, components: Array<Function>): UTheme => {
  let theme = {}
  components.forEach((item: any) => {
    theme = { ...theme, ...item(tokens) }
  })

  return theme
}

export const tokenMap = {
  text: 'text',
  primary: 'primary',
  layoutBackground: 'layoutBackground',
  error: 'error',
  warning: 'warning',
  success: 'success',
  textContrast: 'textContrast',
  background: 'background',
  layoutHover: 'layoutHover',
  layoutBorder: 'layoutBorder',
  layoutContrast: 'layoutContrast',
  layoutHeavyContrast: 'layoutHeavyContrast',
  link: 'link',
}
