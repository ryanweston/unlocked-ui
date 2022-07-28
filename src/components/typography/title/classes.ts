import type { UTokens } from '@/types'

const title = (tokens: UTokens) => {
  return {
    title: {
      base: `text-4xl font-bold text-${tokens.text}`, // abstract padding to a size object
    },
  }
}

export default title
