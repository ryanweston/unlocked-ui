module.exports = {
  colors: {
    brand: {
      primary: '#27272A',
    },
    interface: {
      page: '#F4F4F5', // Default page background -- zinc-100
      one: '#FAFAFA', // Container background on interface-background -- white
      two: '#EDEEF0', //  Container background on interface-primary -- zinc-50
      contrast: '#E4E4E7', // Tertiary background
    },
    interactive: {
      primary: '#27272A', // Primary interactive elements -- primary-500/brand.primary
      secondary: '#71717a', // Secondary interactive elements -- white
      variant: '#f4f4f5', // Variant interactive element
      link: '#38BDF8',
    },
    input: {
      one: '', // Disabled element background
      two: '', // Disabled element content
    },
    text: {
      one: '#18181b', // Default text -- black
      two: '#69696A', // Secondary text
      three: '#B7B7B8', // Context, help and second to secondary text
      placeholder: '#ffffff', // Placeholder text --
      inverse: '#F4F4F5', // Inverted text colour for primary backgrounds -- white
    },
    icon: {
      one: '#18181b', // Disabled element background
      two: '#C3C3C4', // Disabled element content
      three: '#FFFFFF', // Inverse icon for interactive contrast & non-ui colours
    },
    action: {
      warning: '#eab308', // Warning colour variant
      error: '#da1e28', // Error colour variant -- red-600
      success: '#da1e28', // Error colour variant -- red-600
    },
    focus: {
      one: '#38BDF8', // Focus for border & underline -- primary-500/interactive.primary
      two: '#27272A', // Focus for high contrast elements
    },
    // hover interactive elements & interface
    hover: {
      interface: '#E1E1E3', // Hover on interface elements -- zinc-100
      primary: '#27272a', // Hover on primary colour elements -- primary-600
      secondary: '#6b7280', // Text colour for secondary backgrounds
      variant: '#18181b', // Hover on primary colour elements -- primary-600
      link: '#38B3EA',
    },
    active: {
      primary: '#27272A', // Active primary interactive colour elements -- primary-500
      secondary: '', // Active secondary interactive colour elements
      interface: '', // Active interface elements
    },
    disabled: {
      one: '', // Disabled element background
      two: '', // Disabled element content
      three: '',
    },
  },
}
