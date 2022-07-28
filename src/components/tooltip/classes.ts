import type { UTokens } from '@/types'

const tooltip = (tokens: UTokens) => {
  return {
    tooltip: {
      base: `block px-4 py-2 text-sm flex flex-row items-center text-${tokens.text}`,
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
      hover: `bg-${tokens.layoutBorder}`,
    },
  }
}

export default tooltip
