import type { UTheme } from '@/types'

import button from '@/components/button/classes'
import link from '@/components/link/classes'
import footer from '@/components/footer/classes'
import tooltip from '@/components/tooltip/classes'
import icon from '@/components/icon/classes'
import headline from '@/components/typography/headline/classes'
import caption from '@/components/typography/caption/classes'
import subtitle from '@/components/typography/subtitle/classes'
import body from '@/components/typography/body/classes'

export const componentThemes = [button, link, footer, tooltip, icon, headline, subtitle, body, caption]

// Generates a theme object
export const createTheme = (tokens: any, components: Array<Function | Object>): UTheme => {
  let theme = {}
  components.forEach((item: any) => {
    if (typeof item === 'function')
      theme = { ...theme, ...item(tokens) }
    else
      theme = { ...theme, ...item }
  })

  return theme
}

// Binds/maps token names
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
