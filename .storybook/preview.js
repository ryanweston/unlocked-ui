
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,  
    },
  },
  backgrounds: {
    default: 'Default',
    values: [
      {
        name: 'Default',
        value: '#000000',
      },
    ],  
  }
}

// Mock setup
import { app } from '@storybook/vue3'
import { unlocked } from '../src'
import './imports/tailwind.css'
import './imports/inter.css'

import { createTheme, tokenMap, componentThemes, defaultTheme } from '../src/index'

console.log(createTheme(tokenMap, componentThemes))
app.use(unlocked, { theme: defaultTheme })

