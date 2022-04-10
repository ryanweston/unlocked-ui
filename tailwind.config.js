// THIS TAILWIND CONFIG IS ONLY TO WORK WITH STORYBOOK.
const tokens = require('./tokens')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    ...tokens,
    fontFamily: {
      sans: ['"Inter var"'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
