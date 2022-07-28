import type { UTokens } from '@/types'

const body = (tokens: UTokens) => {
  return {
    body: {
      base: `text-${tokens.text}`,
    },
  }
}

export default body
