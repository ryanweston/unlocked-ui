export default {
  button: {
    small: 'px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center',
    medium: 'px-6 py-4 rounded-lg flex flex-row items-center', // abstract padding to a size object
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    variants: {
      secondary: 'border-solid border border-primary bg-transparent text-primary hover:text-textDark hover:bg-primary',
      default: 'text-textDark bg-primary border border-primary hover:bg-transparent hover:text-text',
      text: 'px-3 py-2 rounded-md text-sm font-medium text-text hover:bg-greyBorder',
      warning: 'text-textDark bg-warning border border-warning',
      error: 'text-textDark bg-error border border-error',
    },
  },
}
