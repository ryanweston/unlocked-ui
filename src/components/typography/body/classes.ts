import type { UTokens } from '@/types'

// All breakpoints need to be covered to allow for overwritting in the class prop
const body = (tokens: UTokens) => {
  return {
    body: {
      base: `text-${tokens.textOne}`,
      size: {
        1: 'text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base',
        2: 'text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm',
      },
    },
  }
}

export default body
