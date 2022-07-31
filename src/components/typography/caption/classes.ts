import type { UTokens } from '@/types'

// All breakpoints need to be covered to allow for overwritting in the class prop
const caption = (tokens: UTokens) => {
  return {
    caption: {
      base: `text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-${tokens.textOne}`, // abstract padding to a size object
    },
  }
}

export default caption
