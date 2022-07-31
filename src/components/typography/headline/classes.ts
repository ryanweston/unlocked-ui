import type { UTokens } from '@/types'

const headline = (tokens: UTokens) => {
  return {
    headline: {
      base: `text-${tokens.textOne}`,
      size: {
        1: 'text-8xl font-bold',
        2: 'text-6xl font-semibold',
        3: 'text-4xl font-medium',
        4: 'text-2xl font-medium',
        5: 'text-xl font-medium',
        6: 'text-lg font-semibold',
      },
    },
  }
}

export default headline
