import type { UTokens } from '@/types'

const subtitle = (tokens: UTokens) => {
  return {
    subtitle: {
      base: `text-${tokens.textOne}`,
      size: {
        1: 'text-lg',
        2: 'text-base',
      },
    },
  }
}

export default subtitle
