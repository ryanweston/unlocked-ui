export default {
  appBar: {
    wrapper: 'bg-white border-b border-greyBorder',
    screenWrapper: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8',
    screenContainer: 'relative flex items-center justify-between h-16 md:h-24',
    screenMenuWrapper: 'hidden lg:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0',
    screenMenuContainer: 'flex space-x-4',
    screenMenuItem: {
      base: 'px-3 py-2 rounded-md text-sm font-medium',
      default: 'text-text hover:bg-greyLight',
      active: 'bg-black text-textDark',
    },
    mobileWrapper: 'sm:hidden',
    mobileContainer: 'px-2 pt-2 pb-3 space-y-1',
    mobileMenuItem: {
      base: 'block px-3 py-2 rounded-md text-base font-medium',
      default: 'text-text hover:bg-gray-700 hover:text-textDark',
      active: 'bg-gray-900 text-textDark',
    },
    menuButton: {
      container: 'absolute inset-y-0 left-0 flex items-center sm:hidden',
      button: 'inline-flex items-center justify-center p-2 rounded-md text-text hover:text-textDark hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
      icon: 'block h-6 w-6',
      closeIcon: 'text-text',
    },
    logo: {
      wrapper: 'flex-1 flex items-center justify-center sm:items-stretch sm:justify-start',
      container: 'flex-shrink-0 flex items-center',
      text: 'hidden lg:block w-auto font-bold text-lg',
      image: 'hidden lg:block h-10 w-auto',
      mobileImage: 'block lg:hidden h-6 w-auto',
    },
  },
}
