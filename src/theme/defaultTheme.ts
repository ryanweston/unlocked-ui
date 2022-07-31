export const defaultTheme = {
  menu: {
    wrapper: 'bg-interfacePage border-b border-interfaceContrast',
    screenWrapper: 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8',
    screenContainer: 'relative flex items-center justify-between h-16 md:h-24',
    screenMenuWrapper: 'hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0',
    screenMenuContainer: 'flex space-x-4',
    mobileWrapper: 'md:hidden',
    mobileContainer: 'px-2 pt-2 pb-3 space-y-2 flex-col flex',
    menuButton: {
      container: 'absolute inset-y-0 left-0 flex items-center md:hidden',
      button: 'inline-flex items-center justify-center p-2 rounded-md text-textOne hover:text-textInverse hover:bg-interactivePrimary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-focusOne',
      icon: 'block h-6 w-6',
      closeIcon: 'text-textOne',
    },
    logo: {
      wrapper: 'flex-1 flex items-center justify-center md:items-stretch md:justify-start',
      container: 'flex-shrink-0 flex items-center',
      text: 'block w-auto font-bold',
      image: 'hidden md:block h-10 w-auto',
      mobileImage: 'block md:hidden h-6 w-auto',
    },
  },
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
    menu: 'origin-top-right absolute right-0 border border-interfaceContrast mt-2 w-56 rounded-md shadow-lg bg-interfaceOne ring-1 ring-focusOne ring-opacity-5 focus:outline-none py-2',
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
      default: 'text-iconOne',
      secondary: 'text-iconTwo',
      contrast: 'text-iconThree',
    },
  },
  dropdownItem: {
    base: 'block px-4 py-2 text-sm flex flex-row items-center text-textOne hover:bg-interfaceContrast',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
  },
  headline: {
    base: 'text-textOne font-bold',
    size: {
      1: 'text-8xl',
      2: 'text-6xl',
      3: 'text-4xl',
      4: 'text-2xl',
      5: 'text-xl',
      6: 'text-lg',
    },
  },
  subtitle: {
    base: 'text-textOne',
    size: {
      1: 'text-lg',
      2: 'text-base',
    },
  },
  body: {
    base: 'text-textOne',
    size: {
      1: 'text-base',
      2: 'text-sm',
    },
  },
  caption: {
    base: 'text-xs text-textOne',
  },
}
