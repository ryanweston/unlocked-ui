import type { UTokens } from '@/types'

const footer = (tokens: UTokens) => {
  return {
    footer: {
      wrapper: `w-full border-t border-${tokens.layoutBorder}`,
      absolute: 'absolute bottom-0 left-0',
      container: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 md:py-6',
    },
  }
}
export default footer
