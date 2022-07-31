// THIS TAILWIND CONFIG IS ONLY TO WORK WITH STORYBOOK.
const tokens = require('./.storybook/imports/tokens')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Inter var"'],
    },
    extend: {
      colors: { ...tokens },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
