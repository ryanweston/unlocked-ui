
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Mock setup
import { app } from '@storybook/vue3';
import { defaultTheme } from '../src/theme/defaultTheme'
import { unlockedGlobal } from '../src'
import './tailwind.css'

app.use(unlockedGlobal, { 
  theme: defaultTheme
})

