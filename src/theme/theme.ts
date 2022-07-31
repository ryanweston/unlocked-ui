import type { UTheme } from '@/types'

import menu from '@/components/menu/classes'
import button from '@/components/button/classes'
import link from '@/components/link/classes'
import dropdown from '@/components/dropdown/classes'
import footer from '@/components/footer/classes'
import tooltip from '@/components/tooltip/classes'
import icon from '@/components/icon/classes'
import dropdownItem from '@/components/dropdown-item/classes'
import headline from '@/components/typography/headline/classes'
import caption from '@/components/typography/caption/classes'
import subtitle from '@/components/typography/subtitle/classes'
import body from '@/components/typography/body/classes'

export const componentThemes = [menu, button, link, dropdown, footer, tooltip, icon, dropdownItem, headline, subtitle, body, caption]

export const createTheme = (tokens: any, components: Array<Function>): UTheme => {
  let theme = {}
  components.forEach((item: any) => {
    theme = { ...theme, ...item(tokens) }
  })

  return theme
}

export const tokenMap = {
  brandPrimary: 'brandPrimary',
  actionSuccess: 'actionSuccess',
  actionWarning: 'actionWarning',
  actionError: 'actionError',
  textOne: 'textOne',
  textTwo: 'textTwo',
  textInverse: 'textInverse',
  textPlaceholder: 'textPlaceholder',
  interfaceOne: 'interfaceOne',
  interfacePage: 'interfacePage',
  interfaceTwo: 'interfaceTwo',
  interfaceContrast: 'interfaceContrast',
  interactiveVariant: 'interactiveVariant',
  focusOne: 'focusOne',
  focusTwo: 'focusTwo',
  hoverInterface: 'hoverInterface',
  disabledBackground: 'disabledBackground',
  disabledContent: 'disabledContent',
  hoverPrimary: 'hoverPrimary',
  hoverPrimarytext: 'hoverPrimarytext',
  hoverSecondary: 'hoverSecondary',
  hoverVariant: 'hoverVariant',
  hoverVarianttext: 'hoverVarianttext',
  activeInterface: 'activeInterface',
  activePrimary: 'activePrimary',
  activeSecondary: 'activeSecondary',
  interactivePrimary: 'interactivePrimary',
  interactiveSecondary: 'interactiveSecondary',
  inputOne: 'inputOne',
  inputTwo: 'inputTwo',
  inputThree: 'inputThree',
  iconOne: 'iconOne',
  iconTwo: 'iconTwo',
  iconThree: 'iconThree',
  interactiveLink: 'interactiveLink',
  disabledIcon: 'disabledIcon',
}
