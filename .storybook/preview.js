
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
    default: 'Theme',
    values: [
      {
        name: 'Theme',
        value: '#000000',
      },
      {
        name: 'Light',
        value: '#3b5998',
      },
    ],  
  }
}

// Mock setup
import { app } from '@storybook/vue3';
import { defaultTheme } from '../src/theme/defaultTheme'
import { Unlocked } from '../src'
import './tailwind.css'
import './inter.css'

app.use(Unlocked, { theme: defaultTheme})

