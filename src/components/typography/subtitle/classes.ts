import type { UTokens } from '@/types'

const subtitle = (tokens: UTokens) => {
  return {
    subtitle: {
      base: `text-lg text-${tokens.text}`,
    },
  }
}

export default subtitle
