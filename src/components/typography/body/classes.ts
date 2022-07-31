import type { UTokens } from '@/types'

const body = (tokens: UTokens) => {
  return {
    body: {
      base: `text-${tokens.textOne}`,
      size: {
        1: 'text-base',
        2: 'text-sm',
      },
    },
  }
}

export default body
