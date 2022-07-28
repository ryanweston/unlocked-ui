export const defaultTheme = {
  menu: {
    wrapper: 'bg-background border-b border-layoutBorder',
    screenWrapper: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8',
    screenContainer: 'relative flex items-center justify-between h-16 md:h-24',
    screenMenuWrapper: 'hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0',
    screenMenuContainer: 'flex space-x-4',
    screenMenuItem: {
      base: 'px-3 py-2 rounded-md text-sm font-medium',
      default: 'text-text hover:bg-layoutContrast',
      active: 'bg-primary text-textContrast',
    },
    mobileWrapper: 'md:hidden',
    mobileContainer: 'px-2 pt-2 pb-3 space-y-2 flex-col flex',
    mobileMenuItem: {
      base: 'block px-3 py-2 rounded-md text-base font-medium',
      default: 'text-text hover:bg-layoutHover',
      active: 'bg-primary text-textContrast',
    },
    menuButton: {
      container: 'absolute inset-y-0 left-0 flex items-center md:hidden',
      button: 'inline-flex items-center justify-center p-2 rounded-md text-text hover:text-textContrast hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
      icon: 'block h-6 w-6',
      closeIcon: 'text-text',
    },
    logo: {
      wrapper: 'flex-1 flex items-center justify-center md:items-stretch md:justify-start',
      container: 'flex-shrink-0 flex items-center',
      text: 'block w-auto font-bold text-lg',
      image: 'hidden md:block h-10 w-auto',
      mobileImage: 'block md:hidden h-6 w-auto',
    },
  },
  menuItem: {
    base: '',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
  },
  button: {
    small: 'px-3 py-2 rounded-md text-sm font-medium inline-flex items-center',
    medium: 'px-4 py-2 rounded-lg inline-flex items-center',
    large: 'px-6 py-4 rounded-lg inline-flex items-center',
    disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
    variants: {
      default: 'text-textContrast bg-primary border border-primary hover:bg-transparent hover:text-text',
      secondary: 'border-solid border border-primary bg-transparent text-text hover:text-textContrast hover:bg-primary',
      alternate: 'border-solid border border-layoutHeavyContrast bg-transparent text-layoutHeavyContrast hover:text-text hover:border-primary',
      text: 'text-text hover:bg-layoutHover hover:text-textContrast',
      warning: 'text-textContrast bg-warning border border-warning',
      error: 'text-textContrast bg-error border border-error',
    },
    buttonGroup: {
      base: 'bg-layoutBorder border border-layoutBorder text-text hover:bg-layoutHeavyContrast hover:border-layoutHeavyContrast hover:text-textContrast',
      active: 'bg-primary border border-primary text-textContrast',
      order: {
        first: 'rounded-l-lg rounded-r-none',
        middle: 'rounded-none',
        last: 'rounded-r-lg rounded-l-none',
      },
    },
  },
  link: {
    base: 'text-link hover:underline',
  },
  dropdown: {
    wrapper: 'relative inline-block text-left',
    transition: {
      enterActiveClass: 'transition ease-out duration-100',
      enterFromClass: 'transform opacity-0 scale-95',
      enterToClass: 'transform opacity-100 scale-100',
      leaveActiveClass: 'transition ease-in duration-75',
      leaveFromClass: 'transform opacity-100 scale-100',
      leaveToClass: 'transform opacity-0 scale-95',
    },
    menu: 'origin-top-right absolute right-0 border border-layoutContrast mt-2 w-56 rounded-md shadow-lg bg-layoutBackground ring-1 ring-primary ring-opacity-5 focus:outline-none py-2',
  },
  footer: {
    wrapper: 'w-full border-t border-layoutBorder',
    absolute: 'absolute bottom-0 left-0',
    container: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 md:py-6',
  },
  tooltip: {
    base: 'block px-4 py-2 text-sm flex flex-row items-center text-text',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    hover: 'bg-layoutBorder',
  },
  icon: {
    base: 'text-text',
    variants: {
      contrast: 'text-textContrast',
    },
  },
  dropdownItem: {
    base: 'block px-4 py-2 text-sm flex flex-row items-center text-text hover:bg-layoutContrast',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
  },
  headline: {
    base: 'font-bold text-text text-4xl lg:text-8xl',
  },
  title: {
    base: 'text-4xl font-bold text-text',
  },
  subtitle: {
    base: 'text-lg text-text',
  },
  body: {
    base: 'text-text',
  },
}
