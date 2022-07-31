import type { UTokens } from '@/types'

const caption = (tokens: UTokens) => {
  return {
    caption: {
      base: `text-xs text-${tokens.textOne}`, // abstract padding to a size object
    },
  }
}

export default caption
