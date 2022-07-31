
// Components
export * from './components/index'

// Theme & classes
export * from './theme/withTheme'
export * from './theme/exportClasses'
export * from './theme/createTheme'
export * from './theme/defaultTheme'

// Export types
export * from './types'

// Installers
// export * from './utils/modular-install'
export * from './utils/installApp'

// @ts-expect-error will compile into type file
declare module '@unlocked/foundation'
