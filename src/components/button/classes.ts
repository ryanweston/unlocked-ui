export default {
  button: {
    small: 'px-3 py-2 rounded-md text-sm font-medium inline-flex items-center', // TODO: Find better way than flex
    medium: 'px-4 py-2 rounded-lg inline-flex items-center', // abstract padding to a size object
    large: 'px-6 py-4 rounded-lg inline-flex items-center', // abstract padding to a size object
    disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
    variants: {
      default: 'text-textDark bg-primary border border-primary hover:bg-transparent hover:text-text',
      secondary: 'border-solid border border-primary bg-transparent text-primary hover:text-textDark hover:bg-primary',
      alternate: 'border-solid border border-greyHeavy bg-transparent text-greyHeavy hover:text-text hover:border-primary',
      text: 'px-3 py-2 rounded-md text-sm font-medium text-text hover:bg-greyBorder',
      warning: 'text-textDark bg-warning border border-warning',
      error: 'text-textDark bg-error border border-error',
    },
    buttonGroup: {
      base: 'bg-greyBorder border border-greyBorder text-greyHeavy hover:bg-greyHeavy hover:border-greyHeavy hover:text-textDark',
      active: 'bg-primary border-primary text-textDark',
      order: {
        first: 'rounded-l-lg rounded-r-none',
        middle: 'rounded-none',
        last: 'rounded-r-lg rounded-l-none',
      },
    },
  },
}
