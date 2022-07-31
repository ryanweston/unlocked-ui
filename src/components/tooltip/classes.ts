import type { UTokens } from '@/types'

const tooltip = (tokens: UTokens) => {
  return {
    tooltip: {
      wrapper: 'relative flex flex-col items-center',
      popover: {
        base: 'absolute z-10',
        positions: {
          bottom: 'top-full mt-2',
          left: 'right-full mr-2',
          top: 'bottom-full mb-2',
          right: 'left-full ml-2',
        },
        tooltip: `px-4 py-2 bg-${tokens.interactivePrimary} text-${tokens.textInverse} rounded-full`,
      },
    },
  }
}

export default tooltip
