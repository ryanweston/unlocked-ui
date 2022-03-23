export default { 
  button: {
    small: 'px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center',
    medium: 'px-6 py-4 rounded-lg flex flex-row items-center', // abstract padding to a size object  
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    variants: {
      secondary: 'border-solid border border-black bg-transparent text-black hover:text-white hover:bg-black',
      default: 'text-white bg-black border border-black hover:bg-transparent hover:text-black',
      text: 'px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100',
      warning: 'text-white bg-orange border border-orange',
      error: 'text-white bg-red border border-red',
    }
  },
}