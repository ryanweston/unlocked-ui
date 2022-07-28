import type { UTokens } from '@/types'

const button = (tokens: UTokens) => {
  return {
    button: {
      small: 'px-3 py-2 rounded-md text-sm font-medium inline-flex items-center', // TODO: Find better way than flex
      medium: 'px-4 py-2 rounded-lg inline-flex items-center', // abstract padding to a size object
      large: 'px-6 py-4 rounded-lg inline-flex items-center', // abstract padding to a size object
      disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
      variants: {
        default: `text-${tokens.textContrast} bg-${tokens.primary} border border-${tokens.primary} hover:bg-transparent hover:text-${tokens.text}`,
        secondary: `border-solid border border-${tokens.primary} bg-transparent text-${tokens.text} hover:text-${tokens.textContrast} hover:bg-${tokens.primary}`,
        alternate: `border-solid border border-${tokens.layoutHeavyContrast} bg-transparent text-${tokens.layoutHeavyContrast} hover:text-${tokens.text} hover:border-${tokens.primary}`,
        text: `text-${tokens.text} hover:bg-${tokens.layoutHover} hover:text-${tokens.textContrast}`,
        warning: `text-${tokens.textContrast} bg-${tokens.warning} border border-${tokens.warning}`,
        error: `text-${tokens.textContrast} bg-${tokens.error} border border-${tokens.error}`,
      },
      buttonGroup: {
        base: `bg-${tokens.layoutBorder} border border-${tokens.layoutBorder} text-${tokens.text} hover:bg-${tokens.layoutHeavyContrast} hover:border-${tokens.layoutHeavyContrast} hover:text-${tokens.textContrast}`,
        active: `bg-${tokens.primary} border border-${tokens.primary} text-${tokens.textContrast}`,
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
