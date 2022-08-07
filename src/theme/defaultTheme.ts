export const defaultTheme = {
  button: {
    small: 'px-3 py-2 rounded-md text-sm font-medium inline-flex items-center',
    medium: 'px-4 py-2 rounded-lg inline-flex items-center',
    large: 'px-6 py-4 rounded-lg inline-flex items-center',
    disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
    variants: {
      primary: 'text-textInverse bg-interactivePrimary border border-interactivePrimary hover:bg-transparent hover:text-hoverPrimary',
      secondary: 'border-solid border border-interactiveSecondary bg-transparent text-interactiveSecondary hover:text-textInverse hover:bg-hoverSecondary',
      variant: 'border-solid border border-interactiveVariant bg-transparent text-interactiveVariant hover:text-interactivePrimary hover:border-interactivePrimary',
      text: 'text-textOne hover:bg-hoverInterface hover:text-textOne',
      success: 'text-textInverse bg-actionSuccess border border-actionSuccess hover:opacity-70',
      error: 'text-textInverse bg-actionError border border-actionError hover:opacity-70',
    },
    buttonGroup: {
      base: 'bg-interfaceOne text-textOne hover:bg-interfaceTwo',
      active: 'bg-interactivePrimary text-textInverse',
      order: {
        first: 'rounded-l-lg rounded-r-none',
        middle: 'rounded-none',
        last: 'rounded-r-lg rounded-l-none',
      },
    },
  },
  link: {
    base: 'text-interactiveLink hover:underline',
  },
  footer: {
    wrapper: 'w-full border-t border-interfaceContrast',
    absolute: 'absolute bottom-0 left-0',
    container: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 md:py-6',
  },
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
      tooltip: 'px-4 py-2 bg-interactivePrimary text-textInverse rounded-full',
    },
  },
  icon: {
    disabled: 'text-disabledIcon',
    variants: {
      primary: 'text-iconOne',
      secondary: 'text-iconTwo',
      contrast: 'text-iconThree',
    },
  },
  headline: {
    base: 'text-textOne',
    size: {
      1: 'text-8xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-bold',
      2: 'text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-semibold',
      3: 'text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-medium',
      4: 'text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-medium',
      5: 'text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-medium',
      6: 'text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-semibold',
    },
  },
  subtitle: {
    base: 'text-textOne',
    size: {
      1: 'text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg',
      2: 'text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base',
    },
  },
  body: {
    base: 'text-textOne',
    size: {
      1: 'text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base',
      2: 'text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm',
    },
  },
  caption: {
    base: 'text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs text-textOne',
  },
}
