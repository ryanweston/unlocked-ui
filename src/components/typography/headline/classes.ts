import type { UTokens } from '@/types'

const headline = (tokens: UTokens) => {
  return {
    headline: {
      base: `font-bold text-${tokens.text} text-4xl lg:text-8xl`, // abstract padding to a size object
    },
  }
}

export default headline
