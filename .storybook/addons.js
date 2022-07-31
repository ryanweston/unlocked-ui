import { addons } from '@storybook/addons';
import { create } from "@storybook/theming";

const theme = create({ 
  base: 'dark',
  brandTitle: 'Unlocked UI'
})

addons.setConfig({
  theme: theme
});