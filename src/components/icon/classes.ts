import type { UTokens } from '@/types'

const icon = (tokens: UTokens) => {
  return {
    icon: {
      disabled: `text-${tokens.disabledIcon}`,
      variants: {
        primary: `text-${tokens.iconOne}`,
        secondary: `text-${tokens.iconTwo}`,
        contrast: `text-${tokens.iconThree}`,
      },
    },
  }
}

export default icon
