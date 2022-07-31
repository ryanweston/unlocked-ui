import type { UTokens } from '@/types'

const button = (tokens: UTokens) => {
  return {
    button: {
      small: 'px-3 py-2 rounded-md text-sm font-medium inline-flex items-center',
      medium: 'px-4 py-2 rounded-lg inline-flex items-center',
      large: 'px-6 py-4 rounded-lg inline-flex items-center',
      disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
      variants: {
        primary: `text-${tokens.textInverse} bg-${tokens.interactivePrimary} border border-${tokens.interactivePrimary} hover:bg-transparent hover:text-${tokens.hoverPrimary}`,
        secondary: `border-solid border border-${tokens.interactiveSecondary} bg-transparent text-${tokens.interactiveSecondary} hover:text-${tokens.textInverse} hover:bg-${tokens.hoverSecondary}`,
        variant: `border-solid border border-${tokens.interactiveVariant} bg-transparent text-${tokens.interactiveVariant} hover:text-${tokens.interactivePrimary} hover:border-${tokens.interactivePrimary}`,
        text: `text-${tokens.textOne} hover:bg-${tokens.hoverInterface} hover:text-${tokens.textOne}`,
        success: `text-${tokens.textInverse} bg-${tokens.actionSuccess} border border-${tokens.actionSuccess} hover:opacity-70`,
        error: `text-${tokens.textInverse} bg-${tokens.actionError} border border-${tokens.actionError} hover:opacity-70`,
      },
      buttonGroup: {
        base: `bg-${tokens.interfaceOne} text-${tokens.textOne} hover:bg-${tokens.interfaceTwo}`,
        active: `bg-${tokens.interactivePrimary} text-${tokens.textInverse}`,
        order: {
          first: 'rounded-l-lg rounded-r-none',
          middle: 'rounded-none',
          last: 'rounded-r-lg rounded-l-none',
        },
      },
    },
  }
}

export default button
