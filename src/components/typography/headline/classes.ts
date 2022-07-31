import type { UTokens } from '@/types'

// All breakpoints need to be covered to allow for overwritting in the class prop
const headline = (tokens: UTokens) => {
  return {
    headline: {
      base: `text-${tokens.textOne}`,
      size: {
        1: 'text-8xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-bold',
        2: 'text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-semibold',
        3: 'text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-medium',
        4: 'text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-medium',
        5: 'text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-medium',
        6: 'text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-semibold',
      },
    },
  }
}

export default headline
