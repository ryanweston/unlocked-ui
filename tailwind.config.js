// const defaultTheme = require('tailwindcss/defaultTheme')
// const unlockedTailwind = require('@unlocked/foundation/tailwind.config.js')

const tokens = require('./tokens.js');

const colors = Object.fromEntries(Object
  .values(tokens.color)
  .map(({ attributes, value }) => [
    attributes.type, value
  ]));

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors,
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
