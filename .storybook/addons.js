import { addons } from '@storybook/addons';
import { create } from "@storybook/theming";

const theme = create({ 
  base: 'light',
  brandTitle: 'Unlocked UI'
})

addons.setConfig({
  theme: theme
});