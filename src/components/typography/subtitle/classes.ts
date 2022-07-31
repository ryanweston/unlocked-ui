import type { UTokens } from '@/types'

// All breakpoints need to be covered to allow for overwritting in the class prop
const subtitle = (tokens: UTokens) => {
  return {
    subtitle: {
      base: `text-${tokens.textOne}`,
      size: {
        1: 'text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg',
        2: 'text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base',
      },
    },
  }
}

export default subtitle
