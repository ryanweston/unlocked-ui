import type { UTokens } from '@/types'

const icon = (tokens: UTokens) => {
  return {
    icon: {
      base: `text-${tokens.text}`,
      variants: {
        contrast: `text-${tokens.textContrast}`,
      },
    },
  }
}

export default icon
