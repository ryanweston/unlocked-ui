import type { UTokens } from '@/types'

const dropdownItem = (tokens: UTokens) => {
  return {
    dropdownItem: {
      base: `block px-4 py-2 text-sm flex flex-row items-center text-${tokens.textOne} hover:bg-${tokens.interfaceContrast}`,
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  }
}
export default dropdownItem
