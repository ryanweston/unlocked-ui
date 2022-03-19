export default { 
  button: {
    base: 'px-6 py-4 rounded-lg', // abstract padding to a size object
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    variants: {
      default: 'text-white bg-black',
      warning: 'text-white bg-orange',
      error: 'text-white bg-red',
    }
  },
}