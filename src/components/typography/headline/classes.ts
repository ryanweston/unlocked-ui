import type { UTokens } from '@/types'

const headline = (tokens: UTokens) => {
  return {
    headline: {
      base: `text-${tokens.textOne} font-bold`,
      size: {
        1: 'text-8xl',
        2: 'text-6xl',
        3: 'text-4xl',
        4: 'text-2xl',
        5: 'text-xl',
        6: 'text-lg',
      },
    },
  }
}

export default headline
