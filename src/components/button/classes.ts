export default { 
  button: {
    base: 'px-6 py-4 rounded-lg flex flex-row items-center', // abstract padding to a size object
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    variants: {
      secondary: 'border-solid border border-black bg-transparent text-black',
      default: 'text-white bg-black',
      warning: 'text-white bg-orange',
      error: 'text-white bg-red',
    }
  },
}