import type { UTokens } from '@/types'

const link = (tokens: UTokens) => {
  return {
    link: {
      base: `text-${tokens.interactiveLink} hover:underline`,
    },
  }
}

export default link
