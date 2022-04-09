// THIS TAILWIND CONFIG IS ONLY TO WORK WITH STORYBOOK.

import { formatTokens } from './src/utils/formatTokens'
const tokens = require('./src/theme/tokens.js')

const tailwindTokens = formatTokens(tokens)

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    tailwindTokens,
    //  ...unlockedTailwind.theme,
    fontFamily: {
      sans: ['"Inter var"'],
    },
    // extend: {
    //   colors: {
    //    'black': 'red'
    //   },
    // }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
